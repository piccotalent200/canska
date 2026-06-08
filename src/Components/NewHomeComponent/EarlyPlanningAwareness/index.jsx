"use client";

import React from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import { problemMetrics } from '@/utilities/constants';

const EarlyPlanningAwareness = () => {

  return (
    <div className="min-h-screen bg-[#FAF8F3] font-dmsans text-[#191b22] flex items-center justify-center p-[40px_16px] md:p-[40px_32px] lg:p-[64px_61px]  selection:bg-[#6366f1] selection:text-white">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Visual Image Container with Animated Badge */}
        <ScrollAnimatedElement 
          className="relative lg:col-span-6"
          delay={0.1}
          yOffset={60}
        >
          {/* Animated 17 Badge */}
          <ScrollAnimatedElement 
            className="absolute -top-6 -right-2  md:left-auto md:translate-x-0 md:-right-6 z-10 animate-bounce [animation-duration:3s]"
            delay={0.3}
            yOffset={40}
          >
            <div className="bg-[#5E17EB] hover:bg-[#4A0FC7] text-white rounded-2xl p-4 w-45 shadow-xl hover:shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 ease-out transform group hover:scale-105">
              <div className="text-[58px] font-medium tracking-tighter leading-15 group-hover:text-[#FFB433] transition-colors duration-300">17</div>
              <div className="text-[11px] font-medium tracking-widest uppercase mt-0 leading-tight group-hover:text-gray-200 transition-colors duration-300">
                Too late to start
              </div>
            </div>
          </ScrollAnimatedElement>

          {/* Main Visual Frame */}
          <div className="relative overflow-hidden rounded-3xl aspect-[4/4] md:aspect-[3/4] lg:aspect-[4/5] bg-gray-900 shadow-xl hover:shadow-2xl group  transition-all duration-500 ease-out hover:scale-[1.02]">
            <img 
              src="/img/too-late.png" 
              alt="Classroom setting" 
              className="w-full h-full object-cover opacity-85 hover:opacity-95 filter contrast-110 hover:contrast-125 object-left transition-all duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlay for bottom text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/15 transition-all duration-500"></div>
            
            {/* Image Bottom Text */}
            <ScrollAnimatedElement 
              className="absolute bottom-0 left-0 p-6 md:p-8 space-y-2 transform group-hover:translate-y-[-4px] transition-transform duration-300"
              delay={0.5}
              yOffset={30}
            >
              <div className="text-[11px] font-bold tracking-widest text-[#FFB433] hover:text-[#FFD700] uppercase transition-colors duration-300">
                Age 17 • Too Late
              </div>
              <p className="text-[28px] font-normal text-white hover:text-gray-100 tracking-tight leading-snug transition-colors duration-300">
                12 months can't replace 12 years of growth.
              </p>
            </ScrollAnimatedElement>
          </div>
        </ScrollAnimatedElement>

        {/* Right Column: Problem Breakdown & Messaging */}
        <ScrollAnimatedElement 
          className="lg:col-span-6 space-y-8"
          delay={0.2}
          yOffset={80}
        >
          <ScrollAnimatedElement delay={0.4} yOffset={40}>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm font-bold tracking-widest text-[#5E17EB] hover:text-[#4A0FC7] uppercase transition-colors duration-300  group">
                <span className="w-4 h-[2px] bg-[#5E17EB] group-hover:bg-[#4A0FC7] group-hover:w-6 transition-all duration-300"></span>
                <span>What's the problem</span>
              </div>
              <h1 className="text-2xl sm:text-[64px] font-normal tracking-tight text-[#1F232E]  leading-16 max-w-54xl transition-colors duration-500 ">
                Most families start <span className="text-[#5E17EB]  transition-colors duration-300">too late.</span> 
              </h1>
              <p className="text-[#1F232E]/70 hover:text-[#1F232E]/90 text-sm md:text-base leading-relaxed font-light transition-colors duration-300 ">
                By age 17, there's no time to build an outstanding portfolio. Students depend only on grades and test scores. Admissions and scholarships become highly competitive.
              </p>
            </div>
          </ScrollAnimatedElement>

          {/* Metrics Data List */}
          <ScrollAnimatedElement delay={0.6} yOffset={50}>
            <div className="divide-y divide-gray-200/60 border-b border-[#E8E3D8]">
              {problemMetrics.map((metric, index) => (
                <ScrollAnimatedElement 
                  key={index}
                  delay={0.7 + (index * 0.1)}
                  yOffset={30}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-1 sm:gap-4 items-baseline group hover:bg-gray-50/50 hover:bg-[#5E17EB]/5 px-2 rounded-lg transition-all duration-300 ease-out  hover:scale-[1.01] hover:shadow-sm">
                    <span className="sm:col-span-4 text-[14px] font-bold tracking-widest text-[#5E17EB] group-hover:text-[#4A0FC7] font-mono transition-colors duration-300">
                      {metric.label}
                    </span>
                    <span className="sm:col-span-8 text-sm lg:text-base text-[#1F232ECC] font-light group-hover:text-[#1F232E] group-hover:font-normal transition-all duration-300">
                      {metric.value}
                    </span>
                  </div>
                </ScrollAnimatedElement>
              ))}
            </div>
          </ScrollAnimatedElement>

          {/* Blockquote Quote Callout */}
          <ScrollAnimatedElement delay={1.1} yOffset={40}>
            <div className="border-l-[3px] border-[#FFB433] hover:border-[#FFD700] pl-5 py-1 transition-all duration-300  rounded-r-lg">
              <p className="text-[#1F232E]/80 font-light group-hover:font-normal text-2xl leading-relaxed max-w-xl transition-all duration-300 ">
                "The skills needed for a scholarship can't be mastered in 12 months."
              </p>
            </div>
          </ScrollAnimatedElement>
        </ScrollAnimatedElement>

      </div>
    </div>
  )
}

export default EarlyPlanningAwareness