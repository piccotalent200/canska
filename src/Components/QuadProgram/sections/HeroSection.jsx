'use client'
import React from 'react'
import Breadcrumb from '../../Reusable/Breadcrumb'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import { phasesQuad } from '@/utilities/constants'

const HeroSection = () => {
    const breadcrumbLinks = [
        { label: 'Home', href: '/' },
        { label: 'The Quad Program', href: '/quad-program' },
        { label: 'The Quad Lesson Verticals', href: '/programs/quad/verticals' }
    ]

    return (
        <>
            {/* Background Mosaic Images Layer */}
            <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none z-0 hidden md:grid grid-cols-2 grid-rows-2 gap-1 p-2">
                <div></div>
                <div>
                    <img src="/img/quad-lesson.svg" alt="" className="w-full" />
                </div>
            </div>

            {/* Main Container Content */}
            <div className="relative z-20 w-full flex flex-col gap-[24px] h-full justify-between p-[20px_16px_20px_16px] sm:p-[40px_32px_40px_32px] lg:p-[77px_48px_56px]">
                {/* Primary Brand Color Gradient Bleed Overlay */}
                <div
                    className="absolute inset-y-0 left-0 w-full h-full top-0 z-1 pointer-events-none mix-blend-multiply md:mix-blend-normal"
                    style={{
                        background: 'linear-gradient(90deg, #5E17EB 0%, rgba(68, 18, 167, 0.8) 50%, rgba(94, 23, 235, 0.2) 100%)'
                    }}
                />

                {/* Navigation Layer */}
                <div className="w-full relative z-[1]">
                    <Breadcrumb items={breadcrumbLinks} />
                </div>

                {/* Hero Context Blocks */}
                <div className="w-full flex flex-col lg:flex-row justify-between lg:items-end gap-4 md:gap-8 lg:gap-10 xl:gap-16 relative z-[1]">
                    <ScrollAnimatedElement
                        className="flex flex-col gap-5 max-w-[760px]"
                        duration={0.6}
                        yOffset={40}
                    >
                        <span className="text-[#FFB433] text-[11px] font-semibold tracking-[2.42px] uppercase leading-4">
                            — The 12-Year Scholarship Incubator
                        </span>
                        <h1 className="text-white text-5xl sm:text-7xl lg:text-[88px] font-semibold leading-[normal] lg:leading-[86px] tracking-[-2.64px]">
                            The Quad Program <br />
                            <span className="text-[#FFB433]">Sample Lesson Verticals.</span>
                        </h1>
                    </ScrollAnimatedElement>

                    <ScrollAnimatedElement
                        className="max-w-[460px]"
                        duration={0.6}
                        delay={0.15}
                        yOffset={40}
                    >
                        <p className="text-white/80 text-base font-normal leading-[26px]">
                            Across <span className="text-[#FFB433] font-bold">Seekers</span>,{' '}
                            <span className="text-[#FFB433] font-bold">Makers</span>,{' '}
                            <span className="text-[#FFB433] font-bold">Risers</span> and{' '}
                            <span className="text-[#FFB433] font-bold">Flyers</span>, students master 12 major and
                            minor verticals each year — a curriculum that moves from foundational discovery to advanced
                            application and adult readiness.
                        </p>
                    </ScrollAnimatedElement>
                </div>
            </div>
        </>
    )
}

export default HeroSection
