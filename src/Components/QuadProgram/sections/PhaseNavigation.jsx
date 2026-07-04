'use client'
import React, { useState, useEffect, useRef } from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import { phasesQuad } from '@/utilities/constants'

const PhaseNavigation = ({ sectionRefs }) => {
    const [showMini, setShowMini] = useState(false)
    const mainContainerRef = useRef(null)

    useEffect(() => {
        const currentContainer = mainContainerRef.current
        if (!currentContainer) return

        const observer = new IntersectionObserver(
            ([entry]) => setShowMini(!entry.isIntersecting),
            { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
        )

        observer.observe(currentContainer)
        return () => observer.unobserve(currentContainer)
    }, [])

    const handlePhaseClick = (phase, idx) => {
        const target = sectionRefs?.[idx]?.current
        if (!target) return

        target.scrollIntoView({ behavior: 'smooth', block: 'start' })

        if (window.location.hash !== phase.link) {
            window.history.pushState(null, '', phase.link)
        }
    }
    

    return (
        <div className="relative w-full">
            {/* Condensed Mini Nav Bar */}
            <div
                className={`fixed top-20 left-0 w-full z-50 bg-[#1F232E]/95 backdrop-blur-md border-b border-white/10 p-[12px_16px] sm:p-[16px_32px] lg:p-[16px_48px] overflow-auto scrollbar-none transition-all duration-300 ease-in-out ${
                    showMini
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
            >
                <div className="flex gap-2 sm:gap-3 flex-nowrap">
                    {phasesQuad.map((phase, idx) => (
                        <button
                            type="button"
                            key={idx}
                            onClick={() => handlePhaseClick(phase, idx)}
                            className="cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/6 border border-white/10 hover:bg-white/12 transition-colors whitespace-nowrap group"
                        >
                            <div
                                className="w-2 h-2 rounded-full transform group-hover:scale-125 transition-transform"
                                style={{ backgroundColor: phase.color }}
                            />
                            <span className="text-white text-xs sm:text-sm font-medium tracking-tight">
                                {phase.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Primary Sticky Cards Row */}
            <div
                ref={mainContainerRef}
                className="top-20 sticky w-full p-[20px_16px_20px_16px] sm:p-[40px_32px_40px_32px] lg:p-[60px_48px_50px] overflow-auto scrollbar-none z-40"
            >
                <div className="flex gap-3 flex-nowrap">
                    {phasesQuad.map((phase, idx) => (
                        <ScrollAnimatedElement
                            key={idx}
                            duration={0.5}
                            delay={0.3 + idx * 0.08}
                            yOffset={30}
                            className="min-w-81.75 group relative flex flex-col justify-between p-[19.8px] min-h-40 bg-white/5 border border-white/15 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/8 hover:border-white/30 hover:-translate-y-1 cursor-pointer grow"
                        >
                            <button
                                type="button"
                                onClick={() => handlePhaseClick(phase, idx)}
                                className="relative z-10 flex flex-col gap-1 w-full h-full cursor-pointer"
                            >
                                <div className="flex justify-between items-center w-full">
                                    <h3
                                        className="text-[26px] font-semibold tracking-[-0.52px] leading-10"
                                        style={{ color: phase.color }}
                                    >
                                        {phase.name}
                                    </h3>
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: phase.color }} />
                                </div>

                                <span className="block text-start text-white text-sm leading-4.5 font-medium tracking-[1.2px] uppercase pt-3">
                                    {phase.ages}
                                </span>

                                <span className="block text-start text-white/80 text-sm leading-4 italic font-normal pt-1">
                                    {phase.tagline}
                                </span>
                            </button>
                        </ScrollAnimatedElement>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PhaseNavigation
