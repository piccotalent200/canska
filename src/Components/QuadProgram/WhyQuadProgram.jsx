import React from 'react'
import Image from 'next/image';
import Breadcrumb from '../Reusable/Breadcrumb';
import Link from 'next/link';
import ScrollAnimatedElement from '../Reusable/ScrollAnimatedElement';
import { featureBlocksWhyQuad } from '@/utilities/constants';

const breadcrumbLinks = [
  { label: 'Home', href: '/' },
  { label: 'The Quad Program', href: '/quad-program' },
  { label: 'Why Quad Program', href: '/why-quad-program' }
];

const WhyQuadProgram = () => {
  return (

    <div className='font-dm'>
      <section className="relative w-full flex items-center overflow-hidden bg-[url('/img/why-quad-program-hero-bg.svg')] bg-cover bg-center  p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[90px_61px_140px]">

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

          {/* Info Block */}
          <div className="max-w-[852px] flex flex-col gap-[20px]">

            {/* Subtitle / Tagline */}
            <ScrollAnimatedElement delay={0.1}>
              <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-4">
               — The 12-Year Scholarship Incubator
              </span>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement delay={0.2}>
              <h1 className="text-white text-5xl md:text-[64px] font-extrabold leading-[64px] tracking-[-1.6px]">
                Why <span className="text-[#FFB433]">“Quad”</span> Program
              </h1>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement delay={0.3}>
              <p className="text-white text-base font-normal leading-6 text-left">
               The <span className="font-bold">"Quad"</span> program offers a long-term, holistic approach to child development, moving beyond traditional education to prepare children for future success at top universities and in life. It aims to reduce stress and financial burdens for families while preserving the joy of childhood.
              </p>
            </ScrollAnimatedElement>

          </div>
        </div>
      </section>

      <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_66px] bg-[#FAFAFC]">

        {/* Top Banner Image with Rounded Corners and Gradient Overlay */}
        <ScrollAnimatedElement delay={0.2}>
          <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[64px]">
            <Image
              src="/img/why-quad-program.svg"
              alt="Graduating students throwing caps against city skyline"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Deep Violet Overlay Layer matching the aesthetic */}
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
          </div>
        </ScrollAnimatedElement>

        {/* Feature Blocks Stack */}
        <div className="flex flex-col gap-[20px]">
          {featureBlocksWhyQuad.map((block, index) => (
            <ScrollAnimatedElement key={block.id} delay={0.1 + index * 0.12}>
              <div
                className="bg-white border border-[#EBEAED] rounded-3xl p-6 md:p-[40px_40px_24px_40px] flex flex-col md:flex-row gap-6 md:gap-10 items-start transition-all duration-300 hover:shadow-md"
              >
              {/* Number Indicator Component */}
              <div className="flex flex-col items-start flex-shrink-0 lg:min-w-[186px] ">
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

                <h3 className="text-sm md:text-base leading-[25px] font-medium text-[#0A0A0A] mb-4">
                  {block.subtitle}
                </h3>

                {/* Dividing Rule Line */}
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

      
    </div>
  )
}

export default WhyQuadProgram
