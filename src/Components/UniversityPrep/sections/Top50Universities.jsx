import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement';
import { universityData } from '@/utilities/constants';

const Top50Universities = () => {
    return (
        <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">

            {/* 1. Header & Intro Banner Animation */}
            <ScrollAnimatedElement direction="up" delay={0.1}>
                {/* Top Banner Image with Rounded Corners and Gradient Overlay */}
                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                    <Image
                        src="/img/whycanska-banner.svg"
                        alt="Graduating students throwing caps against city skyline"
                        fill
                        priority
                        className="object-cover object-center absolute w-full h-full"
                    />
                    <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>TOP 50 Universities</h1>
                    {/* Deep Violet Overlay Layer matching the aesthetic */}
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                </div>

                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[54px] max-w-[896px]'>
                    Discover the unique value propositions, scholarship opportunities, and portfolio attributes of the world's top 50 universities and colleges — each one with its own personality, priorities, and pathway to a full-ride scholarship.
                </p>
            </ScrollAnimatedElement>

            {/* 2. Feature Blocks Stack (University Cards) */}
            <div className="flex flex-col gap-[20px] mb-[40px] xl:mb-[69px]">
                {universityData.map((uni, index) => (
                    <ScrollAnimatedElement
                        key={uni.id}
                        direction="up"
                        delay={0.1 + (index % 3) * 0.1}
                    >
                        <article className="rounded-2xl border border-[#5E17EB66] bg-white p-[24px_24px_34px_24px] text-[#0A0A0A]">
                            {/* Header Container */}
                            <div className="flex flex-col gap-4 md:flex-row md:items-center">

                                {/* Dynamic Rank Badge */}
                                <div className="flex h-12 w-12 flex-col self-start items-center justify-center rounded-xl border border-[#D4AF3780] bg-[#D4AF3726] shadow-[2px_2px_2px_rgba(0,0,0,0.1)]">
                                    <span className="text-[9px] font-extrabold leading-none tracking-[1.35px] text-[#D4AF37]">
                                        RANK
                                    </span>
                                    <span className="text-base font-bold leading-6 text-[#D4AF37]">
                                        {uni.rank}
                                    </span>
                                </div>

                                {/* Dynamic Logo Card */}
                                <div className="flex h-[69px] w-[220px] items-center justify-center rounded-xl border border-[#EAE2FC] bg-white px-4">
                                    <div className="relative h-13 w-full flex items-center justify-center">
                                        <Image
                                            src={uni.logoSrc}
                                            alt={`${uni.name} Logo`}
                                            width={200}
                                            height={52}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                </div>

                                {/* Dynamic Title and Website Link */}
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-2xl font-medium leading-5 text-[#0A0A0A]">
                                        {uni.name}
                                    </h2>
                                    <Link
                                        href={uni.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center gap-[10px] text-sm font-normal leading-5 text-[#5E17EB] hover:underline"
                                    >
                                        Official site
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.75 0.75H2.41667C1.97464 0.75 1.55072 0.925595 1.23816 1.23816C0.925595 1.55072 0.75 1.97464 0.75 2.41667V12.4167C0.75 12.8587 0.925595 13.2826 1.23816 13.5952C1.55072 13.9077 1.97464 14.0833 2.41667 14.0833H12.4167C12.8587 14.0833 13.2826 13.9077 13.5952 13.5952C13.9077 13.2826 14.0833 12.8587 14.0833 12.4167V9.08333M7.41667 7.41667L14.0833 0.75M9.91667 0.75H14.0833V4.91667" stroke="#5E17EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Dynamic Highlighted Banner Paragraph */}
                            <div className="mt-[26px] rounded-xl bg-[#5E17EB1A] px-[13px] py-2.5">
                                <p className="text-sm font-bold leading-[23px]">
                                    {uni.highlight}
                                </p>
                            </div>

                            {/* Dynamic Main Body Paragraph */}
                            <div className="mt-[17px] pt-[23px] border-t border-solid border-[#EDE7FB]">
                                <p className="text-sm font-medium leading-[22px] text-[#0A0A0A]">
                                    {uni.description}
                                </p>
                            </div>
                        </article>
                    </ScrollAnimatedElement>
                ))}
            </div>

            {/* 3. Next Up / CTA Section Animation */}
            <ScrollAnimatedElement direction="up" delay={0.15}>
                <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[56px] flex items-center bg-[#5E17EB] text-white rounded-[24px] relative overflow-hidden">
                    {/* Decorative Blur Object (Top Right) */}
                    <div className="absolute w-[400px] h-[400px] -top-[12px] -left-[200px] bg-[#FFFFFF1A] blur-[64px] rounded-full z-30 pointer-events-none" />
                    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">

                        {/* Left Column: Context Texts */}
                        <div className="flex flex-col max-w-[880px] gap-[12px]">
                            {/* Section Marker */}
                            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[16px]">
                                Next Up
                            </span>

                            {/* Heading with styled dynamic context highlight */}
                            <h2 className="max-w-[926px] text-4xl sm:text-5xl md:text-[36px] font-bold leading-normal tracking-[-1.92px]">
                                Continue to <span className=" text-[#FFB433]">For Parents</span>
                            </h2>

                            {/* Context Body */}
                            <p className="max-w-[576px] text-white/80 text-base font-normal leading-[26px]">
                                Parenting is the ultimate long-term investment. This is your map — the strategic value, the real ROI, the admissions insights, the commitments expected, and the workload philosophy that protects childhood while building greatness.
                            </p>
                        </div>

                        {/* Right Column: CTA Pill Action Component */}
                        <div className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0">
                            <Link
                                href="/quad-lesson"
                                className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] min-w-[232px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group"
                            >
                                <span className="flex-1 text-left">Read For Parents</span>
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

        </section>
    );
};

export default Top50Universities;
