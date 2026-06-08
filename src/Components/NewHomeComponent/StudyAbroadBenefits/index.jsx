"use client";

import React from 'react'
import Image from 'next/image'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import { problemMetricLabels } from '@/utilities/constants';

const StudyAbroadBenefits = () => {

  return (
    <div className="min-h-screen bg-[#FAF8F3] font-dmsans text-[#191b22] flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-[64px_61px] selection:bg-[#6366f1] selection:text-white">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
        
        {/* Left Column: Visual Image Container with Animated Badge */}
        <ScrollAnimatedElement 
          className="relative lg:col-span-6 order-2 lg:order-1"
          delay={0.1}
          yOffset={60}
        >
          {/* Animated Badge */}
          <ScrollAnimatedElement 
            className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 md:left-auto md:translate-x-0 md:-right-6 z-10 animate-bounce [animation-duration:3s]"
            delay={0.3}
            yOffset={40}
          >
            <div className="bg-[#ffffff] border border-solid border-[#E8E3D8] text-white rounded-2xl lg:rounded-[16px] p-4 lg:p-[20px] w-64 sm:w-72 lg:w-[280px] hover:shadow-2xl rotate-0 hover:rotate-3 transition-all duration-500 ease-out transform group  hover:scale-105">
              <div className="text-[10px] lg:text-[11px] font-bold text-[#5E17EB] uppercase leading-4 lg:leading-[16px]  transition-colors duration-300 tracking-[2.42px]">Major Highlight</div>
              <div className="text-lg lg:text-[20px] leading-tight lg:leading-[25px] text-[#1F232E] font-normal mt-2 lg:mt-[8px] transition-colors duration-300">
               Scholarships can exceed <span className='text-[#5E17EB]  '>US$400K+</span> across four years.
              </div>
            </div>
          </ScrollAnimatedElement>

          {/* Main Visual Frame */}
          <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gray-900 hover:shadow-2xl group  transition-all duration-500 ease-out hover:scale-[1.02]">
            <img 
              src="/img/gobal-future.svg" 
              alt="Classroom setting" 
              className="w-full h-full object-cover opacity-85 hover:opacity-95 filter contrast-110 hover:contrast-125 object-left transition-all duration-700 group-hover:scale-105"
            />
          </div>
        </ScrollAnimatedElement>

        {/* Right Column: Problem Breakdown & Messaging */}
        <ScrollAnimatedElement 
          className="lg:col-span-6 space-y-6 lg:space-y-8 order-1 lg:order-2"
          delay={0.2}
          yOffset={80}
        >
          <ScrollAnimatedElement delay={0.4} yOffset={40}>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center space-x-2 text-[10px] lg:text-[11px] leading-4 lg:leading-[16px] font-bold tracking-widest text-[#5E17EB] hover:text-[#4A0FC7] uppercase transition-colors duration-300  group">
                <span className="w-4 h-[2px] bg-[#5E17EB] group-hover:bg-[#4A0FC7] group-hover:w-6 transition-all duration-300"></span>
                <span>Why Study Abroad</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-normal tracking-tight text-[#1F232E] leading-tight lg:leading-16 transition-colors duration-500  max-w-full lg:max-w-[642px] group">
                Open the door to a  <span className="text-[#5E17EB] transition-colors duration-300">global future.</span> 
              </h1>
             
            </div>
          </ScrollAnimatedElement>

          {/* Metrics Data List */}
          <ScrollAnimatedElement delay={0.6} yOffset={50}>
            <div className="divide-y divide-[#D6C5FA] border-b border-[#D6C5FA]">
              {problemMetricLabels.map((metric, index) => (
                <ScrollAnimatedElement 
                  key={index}
                  delay={0.7 + (index * 0.1)}
                  yOffset={30}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 py-3 lg:py-[12.5px] gap-1 sm:gap-4 items-baseline group hover:bg-[#5E17EB]/5 px-2 rounded-lg transition-all duration-300 ease-out  hover:scale-[1.01] hover:shadow-sm">
                    <span className="sm:col-span-1 text-sm lg:text-[14px] leading-relaxed lg:leading-[18px] font-normal tracking-widest text-[#1F232E] group-hover:text-[#4A0FC7] font-mono transition-colors duration-300 font-inter opacity-50">
                      {metric.label}
                    </span>
                    <span className="sm:col-span-11 text-sm lg:text-[15px] leading-relaxed lg:leading-[22px] text-[#1F232E] font-normal group-hover:text-[#1F232E] group-hover:font-normal transition-all duration-300">
                      {metric.value}
                    </span>
                  </div>
                </ScrollAnimatedElement>
              ))}
            </div>
          </ScrollAnimatedElement>

        
        </ScrollAnimatedElement>

      </div>
    </div>
  )
}

export default StudyAbroadBenefits