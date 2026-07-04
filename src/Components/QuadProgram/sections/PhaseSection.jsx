'use client'
import Image from 'next/image'
import React from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import VerticalCard from './VerticalCard'

const metrics = [
    { value: '12', label: 'Verticals' },
    { value: '3', label: 'Years' },
    { value: '365', label: 'Days / Year' }
]

const PhaseSection = ({
    sectionRef,
    id,
    bgColor,
    accentColor,
    phaseNumber,
    totalPhases,
    image,
    imageAlt,
    ages,
    phaseName,
    majorFocus,
    subheading,
    headline,
    description,
    verticalsData,
    showFloatingBadge = true
}) => {
    return (
        <section
            ref={sectionRef}
            className="w-full p-[20px_16px_20px_16px] sm:p-[40px_32px_40px_32px] lg:p-[56px_48px] scroll-mt-[148px]"
            id={id}
            style={{ backgroundColor: bgColor }}
        >
            {/* Top Layout Split */}
            <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-10 xl:gap-16 mb-[56px]">

                {/* Left Image Canvas */}
                <ScrollAnimatedElement
                    className="flex-1 w-full relative min-h-[500px] lg:min-h-[762px] rounded-[24px] overflow-visible z-10 group max-sm:mb-[100px]"
                    duration={0.7}
                    yOffset={30}
                >
                    <div className="absolute inset-0 rounded-[24px] overflow-hidden">
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            priority
                            className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1F232E]/85 via-[#1F232E]/25 to-transparent z-10" />
                    </div>

                    {/* Phase Indicator Tag */}
                    <div className="absolute top-6 left-6 z-20 flex items-center gap-3 rounded-full">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }} />
                        <span className="text-white text-xs md:text-sm font-bold tracking-[1.1px] uppercase leading-[17px]">
                            Phase {phaseNumber} of {totalPhases}
                        </span>
                    </div>

                    {/* Bottom Phase Label */}
                    <div className="absolute bottom-[24px] left-[24px] right-[24px] z-20 flex flex-col gap-2">
                        <span className="text-sm font-bold tracking-[1.2px] uppercase leading-none" style={{ color: accentColor }}>
                            {ages}
                        </span>
                        <h3 className="text-white text-5xl sm:text-7xl lg:text-[88px] font-semibold tracking-[-2.64px] leading-[0.9]">
                            {phaseName}
                        </h3>
                    </div>

                    {/* Floating Focus Badge */}
                    {showFloatingBadge && (
                        <div className="absolute max-sm:top-full max-sm:mt-[16px] max-sm:w-full max-sm:max-w-full sm:-bottom-[22px] sm:right-4 lg:right-[-64px] z-30 bg-white border border-[#E8E3D8] rounded-[16px] p-[15.8px] w-full max-w-[232.6px] min-h-[77.1px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] flex flex-col justify-center gap-[3.5px]">
                            <span className="text-[11px] font-semibold tracking-[1.1px] uppercase leading-[17px]" style={{ color: accentColor }}>
                                Major Focus
                            </span>
                            <span className="text-[#1F232E] text-[18px] font-semibold tracking-[-0.36px] leading-[22px]">
                                {majorFocus}
                            </span>
                        </div>
                    )}
                </ScrollAnimatedElement>

                {/* Right Copy Panel */}
                <div className="flex-1 w-full flex flex-col justify-center">
                    <ScrollAnimatedElement duration={0.6} delay={0.15} yOffset={25}>
                        <span className="text-sm font-medium leading-[16px] tracking-[1.1px] uppercase mb-3 block" style={{ color: accentColor }}>
                            — Phase Overview
                        </span>

                        <h2
                            className="text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-[-1.62px] leading-[55px] text-[#1F232E] mb-6"
                            dangerouslySetInnerHTML={{ __html: headline }}
                        />

                        <p className="text-[#0A0A0A] text-base font-medium leading-[26px] text-left mb-[32px]">
                            {description}
                        </p>

                        <div className="w-full h-[1px] bg-[#E8E3D8] mb-6" />
                    </ScrollAnimatedElement>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-4">
                        {metrics.map((metric, idx) => (
                            <ScrollAnimatedElement
                                key={idx}
                                className="flex flex-col gap-1"
                                duration={0.5}
                                delay={0.3 + idx * 0.05}
                                yOffset={15}
                            >
                                <span className="text-3xl sm:text-4xl lg:text-[34px] font-semibold tracking-[-0.68px] leading-[51px]" style={{ color: accentColor }}>
                                    {metric.value}
                                </span>
                                <span className="text-[11px] leading-[16px] font-normal tracking-[1.1px] uppercase text-[#1F232E8C]">
                                    {metric.label}
                                </span>
                            </ScrollAnimatedElement>
                        ))}
                    </div>
                </div>
            </div>

            {/* Verticals Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 min-[992px]:!grid-cols-3 min-[1200px]:!grid-cols-4 gap-y-6 gap-x-5 isolation-isolate">
                {verticalsData.map((vertical, index) => (
                    <VerticalCard
                        key={index}
                        vertical={vertical}
                        index={index}
                        accentColor={accentColor}
                    />
                ))}
            </div>
        </section>
    )
}

export default PhaseSection
