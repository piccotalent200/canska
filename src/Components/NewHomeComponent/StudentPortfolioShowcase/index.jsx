"use client";

import React from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import { highlights, subCategories } from '@/utilities/constants';

const StudentPortfolioShowcase = () => {

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#191b22] font-dmsans flex items-center justify-center p-[40px_16px] md:p-[40px_32px] lg:p-20 selection:bg-[#6366f1] selection:text-white">
      <div className="w-full space-y-12">
        
        {/* Top Header Section */}
        <ScrollAnimatedElement 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          delay={0.1}
          yOffset={60}
        >
          {/* Main Title Intro */}
          <ScrollAnimatedElement 
            className="lg:col-span-8 space-y-4"
            delay={0.2}
            yOffset={40}
          >
            <div className="flex items-center space-x-2 text-sm font-bold tracking-widest text-[#5E17EB] hover:text-[#4A0FC7] uppercase transition-colors duration-300  group">
              <span className="w-4 h-[2px] bg-[#5E17EB] group-hover:bg-[#4A0FC7] group-hover:w-6 transition-all duration-300"></span>
              <span>What a portfolio looks like</span>
            </div>
            <h1 className="text-2xl sm:text-[64px] font-normal tracking-tight text-[#1F232E]  leading-16 max-w-54xl transition-colors duration-500 ">
              Meet <span className="text-[#5E17EB] transition-colors duration-300">Viya Parker.</span>
            </h1>
            <p className="text-[#1F232E]/70 hover:text-[#1F232E]/90 text-sm md:text-base leading-relaxed font-light max-w-xl transition-colors duration-300 ">
              Built over a 12-year mentorship program (Ages 8–19). This is what a structured "Quad" journey produces.
            </p>
          </ScrollAnimatedElement>

          {/* Outcome Badge Card */}
          <ScrollAnimatedElement 
            className="lg:col-span-4 ms-auto w-full max-w-[440px]"
            delay={0.4}
            yOffset={50}
          >
            <div className="bg-[#1F232E] rounded-2xl p-6 text-white flex flex-col justify-between min-h-[140px] relative overflow-hidden group  transition-all duration-500 hover:scale-[1.01] hover:shadow-xl hover:shadow-[#5E17EB]/20">
              <div className="space-y-1">
                <span className="text-[11px] font-bold tracking-widest text-[#FFB433] uppercase transition-colors duration-300">
                  The Outcome
                </span>
                <p className="text-2xl font-normal tracking-tight text-white  leading-snug transition-colors duration-300">
                  Top 3% of all applicants <span className='text-[#FFB433]  transition-colors duration-300'> · </span> <br />
                  Admission to Caltech, USA
                </p>
              </div>
              <div className="flex items-baseline justify-between pt-2 border-t border-white/15 group-hover:border-white/25 mt-4 transition-colors duration-300">
                <span className="text-[14px] font-regular tracking-widest text-white/80  uppercase transition-colors duration-300">
                  Scholarship
                </span>
                <span className="text-[34px] font-regular text-[#FFB433]  tracking-tight transition-colors duration-300">
                  US$325K
                </span>
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5E17EB]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </ScrollAnimatedElement>
        </ScrollAnimatedElement>

        {/* Main Content Layout Block */}
        <ScrollAnimatedElement 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          delay={0.3}
          yOffset={80}
        >
          {/* Profile Picture Panel */}
          <ScrollAnimatedElement 
            className="lg:col-span-4 relative group"
            delay={0.5}
            yOffset={60}
          >
            <div className="overflow-hidden rounded-3xl aspect-[3/4] hover:shadow-xl hover:shadow-black/10 transition-shadow duration-500">
              <img 
                src="/img/portfolio-img1.png" 
                alt="Viya Parker Portrait" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Animated Badge */}
            <ScrollAnimatedElement 
              className="absolute -bottom-6 -right-2 md:left-auto md:translate-x-0 md:-right-6 z-10 animate-bounce [animation-duration:3s]"
              delay={0.7}
              yOffset={30}
            >
              <div className="bg-[#FFB433] text-white rounded-2xl p-4 w-35 shadow-xl hover:shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 transform group  hover:scale-105">
                <div className="text-[20px] font-medium leading-tight text-[#1F232E]  transition-colors duration-300">Viya Parker</div>
                <div className="text-sm opacity-80 group-hover:opacity-100 tracking-wider mt-0.5 text-[#1F232E] transition-all duration-300">AGES 8 → 19</div>
              </div>
            </ScrollAnimatedElement>
          </ScrollAnimatedElement>

          {/* Highlights & Extras Sheet */}
          <ScrollAnimatedElement 
            className="lg:col-span-8"
            delay={0.6}
            yOffset={70}
          >
            <div className="bg-white border border-[#E8E3D8] hover:border-[#5E17EB]/30 rounded-3xl p-6 md:p-8 space-y-8 hover:shadow-lg hover:shadow-[#5E17EB]/5 transition-all duration-500 group">
              <ScrollAnimatedElement delay={0.8} yOffset={30}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 gap-2 text-sm font-bold tracking-widest text-[#5E17EB] group-hover:text-[#4A0FC7] uppercase transition-colors duration-300">
                    <span className="w-4 h-[2px] bg-[#5E17EB] group-hover:bg-[#4A0FC7] group-hover:w-6 transition-all duration-300"></span>
                    Portfolio Highlights
                  </div>
                  
                  {/* Responsive Ordered Achievements Checklist */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 pb-8">
                    {highlights.map((item, index) => (
                      <ScrollAnimatedElement
                        key={item.id}
                        delay={0.9 + (index * 0.03)}
                        yOffset={20}
                      >
                        <div className="flex items-start space-x-3 group py-1 border-b border-[#E8E3D899] hover:border-[#5E17EB]/30 transition-all duration-300  hover:bg-[#5E17EB]/5 rounded px-2 -mx-2">
                          <span className="text-[#1F232E]/50 text-[10px] pt-0.5 transition-colors duration-300 group-hover:text-[#5E17EB] group-hover:font-semibold">
                            {item.id}
                          </span>
                          <span className="text-[#1F232E] text-sm font-light leading-relaxed transition-all duration-300 group-hover:text-[#1F232E] group-hover:font-normal">
                            {item.text}
                          </span>
                        </div>
                      </ScrollAnimatedElement>
                    ))}
                  </div>
                </div>
              </ScrollAnimatedElement>

              {/* Sub-categories Grid (Languages, Instruments, etc.) */}
              <ScrollAnimatedElement delay={1.3} yOffset={40}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {subCategories.map((cat, idx) => (
                    <ScrollAnimatedElement
                      key={idx}
                      delay={1.4 + (idx * 0.1)}
                      yOffset={25}
                    >
                      <div className="bg-[#FAF8F3] hover:bg-[#5E17EB]/5 rounded-xl p-4 transition-all duration-300 hover:border-[#5E17EB]/20 border border-transparent  group hover:scale-[1.02]">
                        <span className="text-sm font-bold tracking-widest text-[#5E17EB] group-hover:text-[#4A0FC7] block mb-1 transition-colors duration-300">
                          {cat.title}
                        </span>
                        <p className="text-sm text-[#1F232E] group-hover:text-[#1F232E]/90 font-light leading-relaxed transition-colors duration-300">
                          {cat.items}
                        </p>
                      </div>
                    </ScrollAnimatedElement>
                  ))}
                </div>
              </ScrollAnimatedElement>

              {/* Quote Block Footer */}
              <ScrollAnimatedElement delay={1.8} yOffset={30}>
                <div className="border-l-[3px] border-[#FFB433] hover:border-[#FFD700] pl-5 py-1 transition-all duration-300  rounded-r-lg">
                  <p className="text-[#1F232E]/80 font-light group-hover:font-normal text-2xl leading-relaxed transition-all duration-300">
                    "This is what a 12-year 'Quad' mentorship will achieve."
                  </p>
                </div>
              </ScrollAnimatedElement>
            </div>
          </ScrollAnimatedElement>

        </ScrollAnimatedElement>

      </div>
    </div>
  )
}

export default StudentPortfolioShowcase