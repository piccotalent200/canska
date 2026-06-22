import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement';
import { studentVisa } from '@/utilities/constants';

const StudentVisa = () => {
    return (
        <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">

            {/* 1. Header Hero Banner Scroll Animation */}
            <ScrollAnimatedElement direction="up" delay={0.1}>
                {/* Top Banner Image with Rounded Corners and Gradient Overlay */}
                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                    <Image
                        src="/img/student-visa.svg"
                        alt="Graduating students throwing caps against city skyline"
                        fill
                        priority
                        className="object-cover object-center absolute w-full h-full"
                    />
                    <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Student Visa</h1>
                    {/* Deep Violet Overlay Layer matching the aesthetic */}
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                </div>

                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[80px] max-w-[896px]'>
                    Navigating student visas requires meticulous attention to detail. Even minor oversights can derail an admission. Canska offers comprehensive support to manage every aspect confidently.
                </p>
            </ScrollAnimatedElement>

            {/* Outer Wrapper with exact desktop constraints */}
            <div className="relative mb-[60px]">

                {/* Continuous Timeline Vertical Line Indicator */}
                <div className="absolute left-[18px] top-0 h-full bottom-4 w-[2px] bg-[#5E17EB1A] z-0 hidden md:block" />

                {/* Steps Stack */}
                <div className="flex flex-col gap-10 relative z-10">
                    {studentVisa.map((step, index) => (
                        <ScrollAnimatedElement
                            key={step.id}
                            direction="up"
                            delay={0.1 + (index % 2) * 0.1}
                        >
                            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-11 w-full">

                                {/* Left Column: Number Badges */}
                                <div className="flex items-center justify-center md:sticky md:top-10 shrink-0">
                                    <div className="w-9 h-9 bg-white border-[1.6px] border-[#5E17EB80] rounded-full flex items-center justify-center">
                                        <span className="text-[13px] leading-[19px] font-extrabold text-[#5E17EB] tracking-tighter">
                                            {step.id}
                                        </span>
                                    </div>
                                </div>

                                {/* Right Column: Outer Content Frame Container */}
                                <div className="w-full border border-[#5E17EB66] rounded-2xl bg-white p-7 sm:p-8 hover:border-[#5E17EB]/80 transition-colors duration-300">
                                    <div className="flex flex-col">

                                        {/* Step Title */}
                                        <h3 className="text-xl font-extrabold text-[#0A0A0A] leading-tight mb-[12px]">
                                            {step.title}
                                        </h3>

                                        {/* Step Subtitle Banner */}
                                        <p className="text-base font-medium text-[#0A0A0A] leading-[24px] mb-[16px]">
                                            {step.subtitle}
                                        </p>

                                        {/* Step Inner Descriptive Copy Body */}
                                        <p className="text-sm font-medium text-[#0A0A0A] leading-[25px] pt-[20px] border-t border-solid border-[#5E17EB]">
                                            {step.content}
                                        </p>

                                    </div>
                                </div>

                            </div>
                        </ScrollAnimatedElement>
                    ))}
                </div>

            </div>

            {/* 3. Next Up CTA Target Block Scroll Animation */}
            <ScrollAnimatedElement direction="up" delay={0.15}>
                <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[56px] flex items-center bg-[#5E17EB] text-white rounded-[24px] relative overflow-hidden">
                    {/* Decorative Blur Object (Top Right) */}
                    <div className="absolute w-[400px] h-[400px] -top-[12px] -left-[200px] bg-[#FFFFFF1A] blur-[64px] rounded-full z-30 pointer-events-none" />
                    <div className="w-full flex flex-col lg:flex-row justify-between items-start md:items-center gap-8 lg:gap-12">

                        {/* Left Column: Context Texts */}
                        <div className="flex flex-col lg:max-w-[880px] gap-[12px]">

                            {/* Section Marker */}
                            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[16px]">
                                Next Up
                            </span>

                            {/* Heading with styled dynamic context highlight */}
                            <h2 className="lg:max-w-[926px] text-4xl sm:text-5xl md:text-[36px] font-bold leading-normal md:leading-[40px] tracking-[-1.92px]">
                                Continue to  <span className=" text-[#FFB433]">For Parents</span>
                            </h2>

                            {/* Context Body */}
                            <p className="lg:max-w-[576px] text-white/80 text-[15px] font-normal leading-[22px]">
                                Parenting is the ultimate long-term investment. This is your map — the strategic value, the real ROI, the admissions insights, the commitments expected, and the workload philosophy that protects childhood while building greatness.
                            </p>
                        </div>

                        {/* Right Column: CTA Pill Action Component */}
                        <div className="flex-shrink-0 flex max-sm:flex-col gap-[12px] self-start md:self-auto pt-4 md:pt-0 max-lg:w-full max-lg:justify-start">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group"
                            >
                                <span className="flex-1 text-left">Read For Parents</span>
                                <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                                    <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#2D0B70" />
                                    </svg>
                                </span>
                            </Link>
                            <Link
                                href="/create-account"
                                className="inline-flex items-center gap-2.5 bg-[#00000000] text-[#FFFFFF] px-[25.8px] py-[13.8px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#FFFFFF4D] transition-all duration-200 group border border-solid border-[#FFFFFF4D]"
                            >
                                <span className="flex-1 text-left">Create Account</span>
                                <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_885_2853)">
                                            <path d="M4.66602 4.66675H11.3327V11.3334" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.66602 11.3334L11.3327 4.66675" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_885_2853">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </span>
                            </Link>
                        </div>

                    </div>
                </section>
            </ScrollAnimatedElement>

        </section>
    );
};

export default StudentVisa;
