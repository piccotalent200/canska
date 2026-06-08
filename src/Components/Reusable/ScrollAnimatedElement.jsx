'use client'
import React, { useEffect, useRef, useState } from 'react'
import { animate, inView } from 'motion'

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