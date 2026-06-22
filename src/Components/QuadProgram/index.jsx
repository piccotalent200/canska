import React from 'react'
import Image from 'next/image';
import Breadcrumb from '../Reusable/Breadcrumb';
import Link from 'next/link';
import ScrollAnimatedElement from '../Reusable/ScrollAnimatedElement';
import { featureBlocks } from '@/utilities/constants';

const breadcrumbLinks = [
  { label: 'Home', href: '/' },
  { label: 'The Quad Program', href: '/quad-program' },
];


const QuadProgram = () => {
  return (

   <div className='font-dm'>
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full flex items-center overflow-hidden bg-[url('/img/quad-program-hero-bg.svg')] bg-cover bg-center p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[90px_61px]">
        {/* Gradient Overlay 1: Left-to-Right Depth */}
        <div
          className="absolute inset-0 w-full h-full top-0 left-0 z-10"
          style={{
            background: 'linear-gradient(90deg, rgba(45, 11, 112, 0.85) 0%, rgba(45, 11, 112, 0.6) 50%, rgba(45, 11, 112, 0.3) 100%)'
          }}
        />

        {/* Gradient Overlay 2: Vertical Ambient Glow */}
        <div
          className="absolute inset-0 w-full h-full top-0 left-0 z-20"
          style={{
            background: 'linear-gradient(0deg, #5E17EB 0%, rgba(130, 94, 214, 0.5) 50%, rgba(212, 175, 55, 0) 100%)'
          }}
        />

        {/* Decorative Blur Object (Top Right) */}
        <div className="absolute w-full h-full -top-[30px] left-[1146px] bg-[rgba(94,44,212,0.1)] blur-[32px] rounded-full z-20 pointer-events-none" />

        {/* Main Content Container */}
        <div className="relative z-30 w-full flex flex-col gap-[34px]">
          <Breadcrumb items={breadcrumbLinks} />

          {/* Grouped Info Block Entry */}
          <ScrollAnimatedElement 
            className="max-w-[852px] flex flex-col gap-[20px]" 
            duration={0.6} 
            yOffset={25}
          >
            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-4">
              — The 12-Year Scholarship Incubator
            </span>
            <h1 className="text-white text-5xl md:text-[64px] font-extrabold leading-[64px] tracking-[-1.6px]">
              The Quad <span className="text-[#FFB433]">Program</span>
            </h1>
            <p className="text-white text-base font-normal leading-6 text-left">
              Canska presents the world's first 12-year scholarship incubation program specifically architected for
              students aged eight and above. By replacing high-pressure last-minute university admission applications
              with a decade of planned growth, the Quad Program secures admission to the global Top 50 universities.
              Through its four distinct phases — <span className="font-semibold">Seekers, Makers, Risers, and Flyers</span> —
              the program fosters a unique "Spike" of mastery, transforming childhood curiosity into a verifiable
              digital portfolio and securing scholarships worth between <span className="font-semibold">US$60,000 and US$400,000</span>.
            </p>
          </ScrollAnimatedElement>
        </div>
      </section>

      {/* ================= CONTENT MAIN SECTION ================= */}
      <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_66px] bg-[#FAFAFC]">
        
        {/* Top Banner Entry */}
        <ScrollAnimatedElement duration={0.5} yOffset={20} className="w-full">
          <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[64px]">
            <Image
              src="/img/graduation-banner.svg"
              alt="Graduating students throwing caps against city skyline"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
          </div>
        </ScrollAnimatedElement>

        {/* Feature Blocks Staggered Stack */}
        <div className="flex flex-col gap-[20px]">
          {featureBlocks.map((block, index) => (
            <ScrollAnimatedElement 
              key={block.id} 
              duration={0.5} 
              delay={index * 0.08} 
              yOffset={30}
            >
              <div className="bg-white border border-[#EBEAED] rounded-3xl p-6 md:p-[40px_40px_24px_40px] flex flex-col md:flex-row gap-6 md:gap-10 items-start transition-all duration-300 hover:shadow-md shadow-[0px_20px_60px_0px_rgba(94,23,235,0.04)]">
                
                {/* Number Indicator Component */}
                <div className="flex flex-col items-start flex-shrink-0 lg:min-w-[186px]">
                  <span className="text-[72px] font-[900] text-[#FFB433] leading-[72px] tracking-tight">
                    {block.id}
                  </span>
                  <div className="w-[48px] h-[3px] bg-[#5E17EB] mt-3" />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col">
                  <h2 className="text-xl md:text-2xl leading-[32px] font-[800] text-[#0A0A0A] mb-4">
                    {block.title}
                  </h2>
                  <h3 className="text-sm md:text-base leading-[25px] font-medium text-[#0A0A0ACC] mb-4">
                    {block.subtitle}
                  </h3>
                  <div className="w-full h-[1px] bg-[#5E17EB] mb-5" />
                  <p className="text-sm md:text-[14px] text-[#0A0A0A] leading-[25px] text-justify md:text-left font-medium">
                    {block.description}
                  </p>
                </div>

              </div>
            </ScrollAnimatedElement>
          ))}
        </div>
      </section>

      {/* ================= FOOTER CTA SECTION ================= */}
      <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[77px_61px] bg-[linear-gradient(135deg,_#5E17EB_0%,_#3B0B9D_100%)] text-white overflow-hidden relative">
        <ScrollAnimatedElement 
          className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12"
          duration={0.6}
          yOffset={25}
        >
          {/* Left Column: Context Texts */}
          <div className="flex flex-col max-w-[880px] gap-[15px]">
            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[17px]">
              — Next
            </span>
            <h2 className="max-w-[926px] text-4xl sm:text-5xl md:text-[64px] font-semibold leading-[1.05] tracking-[-1.92px]">
              Continue to <span className="italic text-[#FFB433] font-medium">The Quad Lesson Verticals</span>
            </h2>
            <p className="max-w-[856px] text-white/80 text-base font-normal leading-[26px]">
              Across <span className="text-[#FFB433] font-bold">Seekers</span>,{' '}
              <span className="text-[#FFB433] font-bold">Makers</span>,{' '}
              <span className="text-[#FFB433] font-bold">Risers</span> and{' '}
              <span className="text-[#FFB433] font-bold">Flyers</span>, students master 12 major and
              minor verticals each year — a curriculum that moves from foundational discovery to advanced
              application and adult readiness.
            </p>
          </div>

          {/* Right Column: CTA Button */}
          <div className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0">
            <Link
              href="/quad-lesson"
              className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#1F232E] px-[25.8px] py-[13.8px] min-w-[258px] h-[50.6px] rounded-full font-semibold text-sm tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group shadow-sm"
            >
              <span className="flex-1 text-left">Read Quad Lesson Verticals</span>
              <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#1F232E" />
                </svg>
              </span>
            </Link>
          </div>
        </ScrollAnimatedElement>
      </section>

    </div>
  )
}

export default QuadProgram
