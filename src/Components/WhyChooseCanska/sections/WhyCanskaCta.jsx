import React from 'react';
import Link from 'next/link';
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement';

const WhyCanskaCta = () => {
    return (
        <ScrollAnimatedElement duration={0.6} yOffset={25}>
            <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[56px] flex items-center bg-[#5E17EB] text-white rounded-[24px] relative overflow-hidden">
                <div className="absolute w-[400px] h-[400px] -top-[12px] -left-[200px] bg-[#FFFFFF1A] blur-[64px] rounded-full z-30 pointer-events-none" />
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">

                    <div className="flex flex-col max-w-[880px] gap-[12px]">
                        <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[16px]">
                            Next Up
                        </span>
                        <h2 className="max-w-[926px] text-4xl sm:text-5xl md:text-[36px] font-bold leading-normal md:leading-[40px] tracking-[-1.92px]">
                            Continue to <span className="text-[#FFB433]">University Prep</span>
                        </h2>
                        <p className="max-w-[576px] text-white/80 text-base font-normal leading-[26px]">
                            From the world's top 50 universities to scholarship architecture and visa precision
                            — a complete preparation system that turns ambition into acceptance letters and full-ride awards.
                        </p>
                    </div>

                    <div className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0">
                        <Link
                            href="/university-prep?activeTab=0"
                            className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] min-w-[232px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group"
                        >
                            <span className="flex-1 text-left">Read University Prep</span>
                            <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                                <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#2D0B70" />
                                </svg>
                            </span>
                        </Link>
                    </div>

                </div>
            </section>
        </ScrollAnimatedElement>
    );
};

export default WhyCanskaCta;
