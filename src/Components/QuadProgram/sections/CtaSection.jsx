'use client'
import React from 'react'
import Link from 'next/link'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'

const CtaSection = () => {
    return (
        <section
            className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[84px_48px] flex items-center bg-[linear-gradient(135deg,_#5E17EB_0%,_#3B0B9D_100%)] text-white"
            id="flyers-cta"
        >
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
                <ScrollAnimatedElement
                    className="flex flex-col gap-[15px] max-w-[880px]"
                    duration={0.6}
                    yOffset={20}
                >
                    <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[17px]">
                        — Next
                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-[64px] font-semibold leading-[1.05] tracking-[-1.92px]">
                        Continue to <span className="italic text-[#FFB433] font-medium">Why Quad Program?</span>
                    </h2>

                    <p className="text-white/80 text-base font-normal leading-[26px]">
                        The Quad Program aims to redefine education as a continuous expedition of capability building instead of
                        simple subject completion. Its microlessons position learning as a process of character formation and
                        functional readiness for life, marking a significant departure from traditional education systems and
                        encouraging students to develop key practical skills, adaptability, resilience, collaboration, and a
                        lifelong growth mindset.
                    </p>
                </ScrollAnimatedElement>

                <ScrollAnimatedElement
                    className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0"
                    duration={0.5}
                    delay={0.15}
                    yOffset={15}
                >
                    <Link
                        href="/quad-program"
                        className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#1F232E] px-[25.8px] py-[13.8px] min-w-[258px] h-[50.6px] rounded-full font-semibold text-sm tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group shadow-sm"
                    >
                        <span className="flex-1 text-left">Read Why Quad Program</span>
                        <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                            <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#1F232E" />
                            </svg>
                        </span>
                    </Link>
                </ScrollAnimatedElement>
            </div>
        </section>
    )
}

export default CtaSection
