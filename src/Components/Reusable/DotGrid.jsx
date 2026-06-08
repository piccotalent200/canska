'use client'
import React, { useRef, useEffect, useState } from 'react'

const DotGrid = ({
    dotSize = 5,
    gap = 15,
    baseColor = "#2F293A",
    activeColor = "#5227FF",
    proximity = 120,
    shockRadius = 250,
    shockStrength = 5,
    resistance = 750,
    returnDuration = 1.5
}) => {
    const canvasRef = useRef(null)
    const dotsRef = useRef([])
    const animationRef = useRef()
    const mouseRef = useRef({ x: 0, y: 0 })
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        const updateDimensions = () => {
            const rect = canvas.getBoundingClientRect()
            canvas.width = rect.width * window.devicePixelRatio
            canvas.height = rect.height * window.devicePixelRatio
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
            setDimensions({ width: rect.width, height: rect.height })
        }

        updateDimensions()
        window.addEventListener('resize', updateDimensions)

        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    useEffect(() => {
        if (dimensions.width === 0 || dimensions.height === 0) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        
        // Initialize dots
        const dots = []
        const cols = Math.floor(dimensions.width / gap)
        const rows = Math.floor(dimensions.height / gap)
        
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                dots.push({
                    x: i * gap + gap / 2,
                    y: j * gap + gap / 2,
                    originalX: i * gap + gap / 2,
                    originalY: j * gap + gap / 2,
                    size: dotSize,
                    color: baseColor,
                    offsetX: 0,
                    offsetY: 0,
                    velocity: { x: 0, y: 0 },
                    returning: false
                })
            }
        }
        
        dotsRef.current = dots

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect()
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            }
        }

        canvas.addEventListener('mousemove', handleMouseMove)

        const animate = () => {
            ctx.clearRect(0, 0, dimensions.width, dimensions.height)
            
            dotsRef.current.forEach(dot => {
                const distanceToMouse = Math.sqrt(
                    Math.pow(mouseRef.current.x - dot.originalX, 2) + 
                    Math.pow(mouseRef.current.y - dot.originalY, 2)
                )

                if (distanceToMouse < proximity) {
                    // Mouse proximity effect
                    const force = (proximity - distanceToMouse) / proximity
                    const angle = Math.atan2(
                        mouseRef.current.y - dot.originalY,
                        mouseRef.current.x - dot.originalX
                    )
                    
                    dot.offsetX += Math.cos(angle) * force * shockStrength
                    dot.offsetY += Math.sin(angle) * force * shockStrength
                    dot.color = activeColor
                    dot.returning = false
                } else if (distanceToMouse < shockRadius) {
                    // Shock wave effect
                    const shockForce = (shockRadius - distanceToMouse) / shockRadius * 0.5
                    const angle = Math.atan2(
                        dot.originalY - mouseRef.current.y,
                        dot.originalX - mouseRef.current.x
                    )
                    
                    dot.offsetX += Math.cos(angle) * shockForce * shockStrength
                    dot.offsetY += Math.sin(angle) * shockForce * shockStrength
                    
                    // Interpolate color based on distance
                    const colorIntensity = shockForce
                    dot.color = interpolateColor(baseColor, activeColor, colorIntensity)
                } else {
                    // Return to original position
                    if (!dot.returning && (Math.abs(dot.offsetX) > 0.1 || Math.abs(dot.offsetY) > 0.1)) {
                        dot.returning = true
                    }
                    
                    if (dot.returning) {
                        dot.offsetX *= 1 - (1 / resistance) * returnDuration * 10
                        dot.offsetY *= 1 - (1 / resistance) * returnDuration * 10
                        
                        if (Math.abs(dot.offsetX) < 0.1 && Math.abs(dot.offsetY) < 0.1) {
                            dot.offsetX = 0
                            dot.offsetY = 0
                            dot.returning = false
                        }
                    }
                    
                    dot.color = baseColor
                }

                // Draw dot
                ctx.fillStyle = dot.color
                ctx.beginPath()
                ctx.arc(
                    dot.originalX + dot.offsetX,
                    dot.originalY + dot.offsetY,
                    dot.size / 2,
                    0,
                    Math.PI * 2
                )
                ctx.fill()
            })

            animationRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [dimensions, dotSize, gap, baseColor, activeColor, proximity, shockRadius, shockStrength, resistance, returnDuration])

    const interpolateColor = (color1, color2, factor) => {
        const hex1 = color1.replace('#', '')
        const hex2 = color2.replace('#', '')
        
        const r1 = parseInt(hex1.substr(0, 2), 16)
        const g1 = parseInt(hex1.substr(2, 2), 16)
        const b1 = parseInt(hex1.substr(4, 2), 16)
        
        const r2 = parseInt(hex2.substr(0, 2), 16)
        const g2 = parseInt(hex2.substr(2, 2), 16)
        const b2 = parseInt(hex2.substr(4, 2), 16)
        
        const r = Math.round(r1 + (r2 - r1) * factor)
        const g = Math.round(g1 + (g2 - g1) * factor)
        const b = Math.round(b1 + (b2 - b1) * factor)
        
        return `rgb(${r}, ${g}, ${b})`
    }

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none'
            }}
        />
    )
}

export default DotGrid