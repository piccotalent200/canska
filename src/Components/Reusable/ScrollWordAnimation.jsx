'use client'
import React, { useRef, useEffect, useState } from 'react'

const ScrollWordAnimation = ({ 
  children, 
  className = '', 
  targetColor = 'text-[#1F242E]',
  defaultColor = 'text-[#5819EB]'
}) => {
  const containerRef = useRef(null)
  const [htmlContent, setHtmlContent] = useState('')

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Get the text content - handle both string and JSX children
    let textContent = ''
    if (typeof children === 'string') {
      textContent = children
    } else {
      textContent = container.textContent || container.innerText || ''
    }

    if (!textContent.trim()) return

    // Split into words while preserving spaces
    const parts = textContent.split(/(\s+)/)
    
    // Create HTML with spans for each word
    const html = parts.map((part, index) => {
      if (part.trim()) {
        // This is a word
        const wordIndex = parts.slice(0, index).filter(w => w.trim()).length
        return `<span class="word-span inline-block transition-colors duration-150 ease-out" data-word-index="${wordIndex}" style="color: #1F242E;">${part}</span>`
      } else {
        // This is whitespace - preserve it but convert newlines to <br>
        return part.replace(/\n/g, '<br />')
      }
    }).join('')

    setHtmlContent(html)

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate visibility
      const elementTop = rect.top
      const elementBottom = rect.bottom
      const elementHeight = rect.height
      
      // Animation triggers when element is 70% visible from bottom
      const triggerPoint = windowHeight * 0.9
      const endPoint = -elementHeight * 0.3
      
      if (elementTop <= triggerPoint && elementBottom >= endPoint) {
        // Calculate how far we've scrolled through the animation zone
        const totalAnimationDistance = triggerPoint - endPoint
        const currentProgress = Math.max(0, Math.min(1, 
          (triggerPoint - elementTop) / totalAnimationDistance
        ))
        
        const wordSpans = container.querySelectorAll('.word-span')
        const totalWords = wordSpans.length
        
        // Animate words sequentially with sharp color transitions
        wordSpans.forEach((span, index) => {
          // Each word starts animating at a different point
          const wordStartProgress = (index / totalWords) * 0.5 // 50% of scroll for all words
          const wordEndProgress = wordStartProgress + 0.1 // Each word takes 10% of scroll to complete (faster transition)
          
          if (currentProgress >= wordEndProgress) {
            // Word is fully animated - purple
            span.style.color = '#1F242E'
          } else if (currentProgress >= wordStartProgress) {
            // Word is currently animating - sharp transition to white
            span.style.color = '#f3a827'
          } else {
            // Word hasn't started animating yet - purple
            span.style.color = '#5819EB'
          }
        })
      } else if (elementTop > triggerPoint) {
        // Reset all words to default color when above trigger
        const wordSpans = container.querySelectorAll('.word-span')
        wordSpans.forEach(span => {
          span.style.color = '#5819EB'
        })
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [children, targetColor, defaultColor])

  return (
    <h3 
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}

export default ScrollWordAnimation