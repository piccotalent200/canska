'use client'
import React, { useEffect, useRef, useState } from 'react'

// Fallback animation for cases where motion library might have issues
const fallbackAnimate = (element, keyframes, options = {}) => {
  if (!element) return
  
  const { duration = 0.5, delay = 0 } = options
  
  setTimeout(() => {
    element.style.transition = `all ${duration}s ease-out`
    element.style.opacity = '1'
    element.style.transform = 'translateY(0px)'
  }, delay * 1000)
}

const fallbackInView = (element, callback, options = {}) => {
  if (!element || typeof IntersectionObserver === 'undefined') {
    // Fallback for server-side rendering
    setTimeout(callback, 100)
    return () => {}
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback()
        observer.unobserve(element)
      }
    })
  }, options)
  
  observer.observe(element)
  
  return () => {
    observer.disconnect()
  }
}

const ScrollAnimatedElement = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.5,
  yOffset = 50,
  ...props 
}) => {
  const elementRef = useRef(null)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Ensure we're hydrated before applying animations
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!isHydrated) return
    
    const element = elementRef.current
    
    if (!element) return

    // Set initial state only after hydration
    element.style.opacity = '0'
    element.style.transform = `translateY(${yOffset}px)`

    let animate, inView
    
    // Try to import motion library, fallback to native implementation
    try {
      const motionModule = require('motion')
      animate = motionModule.animate
      inView = motionModule.inView
    } catch (error) {
      console.warn('Motion library not available, using fallback animation')
      animate = fallbackAnimate
      inView = fallbackInView
    }

    // Create animation when element comes into view
    const cleanup = inView(element, () => {
      animate(
        element,
        {
          opacity: [0, 1],
          transform: [`translateY(${yOffset}px)`, 'translateY(0px)']
        },
        {
          duration,
          delay,
          easing: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth animation
        }
      )
    }, {
      margin: '0px 0px -50px 0px' // Reduced margin for better Lenis compatibility
    })

    return cleanup
  }, [delay, duration, yOffset, isHydrated])

  return (
    <div ref={elementRef} className={className} {...props}>
      {children}
    </div>
  )
}

export default ScrollAnimatedElement