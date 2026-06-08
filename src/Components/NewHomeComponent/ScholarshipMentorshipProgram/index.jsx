"use client";

import React from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import { outcomes } from '@/utilities/constants';

const ScholarshipMentorshipProgram = () => {

  return (
    <div className="min-h-screen text-[#191b22] font-dmsans flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-[64px_61px] selection:bg-[#6366f1] selection:text-white">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
        
        {/* Left Column: Text Content & Stats */}
        <ScrollAnimatedElement 
          className="lg:col-span-5 space-y-6 lg:space-y-8"
          delay={0.1}
          yOffset={60}
        >
          {/* Section Subtitle */}
          <ScrollAnimatedElement delay={0.2} yOffset={40}>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center space-x-2 text-sm lg:text-sm font-bold tracking-widest text-[#5E17EB] uppercase">
                <span className="w-4 h-0.5 bg-[#5E17EB]"></span>
                <span>What does Canska do</span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-normal tracking-tight text-[#1F232E] leading-tight lg:leading-16 max-w-54xl">
                The world's first <span className="text-[#5E17EB]">scholarship mentoring</span> program. 
              </h1>
              
              {/* Description Paragraph */}
              <p className="text-[#1F232E]/70 text-sm md:text-base leading-relaxed font-light">
                Canska empowers students to build a truly exceptional portfolio over 12
                years, supporting them gain admission to the world's top-50 universities
                and receive high-value scholarships. Unlike traditional approaches that
                begin university admissions preparation at age 17, the "Quad" program
                follows a long-term, step-by-step approach — guiding students from
                age 8 to develop their academic strengths, extracurricular achievements,
                and leadership skills.
              </p>
            </div>
          </ScrollAnimatedElement>

          {/* Stats Badges Row */}
          <ScrollAnimatedElement delay={0.4} yOffset={50}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8 lg:space-x-12 pt-2 max-w-xl">
              <div className="border-l-2 border-[#5E17EB] pl-4 space-y-1 w-full sm:w-auto">
                <div className="text-3xl md:text-[44px] font-normal text-[#1F232E] tracking-tight">5×</div>
                <div className="text-sm font-regular tracking-widest text-[#1F232E] uppercase">
                  Financial ROI
                </div>
              </div>
              <div className="border-l-2 border-[#FFB433] pl-4 space-y-1 w-full sm:w-auto">
                <div className="text-3xl md:text-[44px] font-normal text-[#1F232E] tracking-tight">12</div>
                <div className="text-sm font-regular tracking-widest text-[#1F232E] uppercase">
                  Years of Mentorship
                </div>
              </div>
            </div>
          </ScrollAnimatedElement>

          {/* Disclaimer Footer Text */}
          <ScrollAnimatedElement delay={0.6} yOffset={30}>
            <div className="pt-4">
              <p className="text-sm text-[#1F232E80] font-light leading-relaxed border-l border-[#E8E3D8] pl-4 max-w-xl">
                Disclaimer: Outcomes vary depending on each student's starting phase, level of 
                engagement and consistent effort. Canska provides a world-class track, 
                mentoring, resources and support — but the student still has to run the marathon 
                to win.
              </p>
            </div>
          </ScrollAnimatedElement>
        </ScrollAnimatedElement>

        {/* Right Column: Dynamic Photo Grid & Outcomes */}
        <ScrollAnimatedElement 
          className="lg:col-span-7 space-y-4 lg:space-y-6"
          delay={0.3}
          yOffset={80}
        >
          {/* Grid Layout containing alternating-size images */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 lg:gap-4">
            
            {/* Nested Stacked Panel (Left Images) */}
            <div className="sm:col-span-6 flex flex-col gap-3 lg:gap-4">
              <ScrollAnimatedElement delay={0.5} yOffset={60}>
                <div className="overflow-hidden rounded-2xl aspect-4/3 bg-gray-100 group">
                  <img 
                    src="/img/program1.png" 
                    alt="Writing close up" 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
              </ScrollAnimatedElement>
              <ScrollAnimatedElement delay={0.7} yOffset={60}>
                <div className="overflow-hidden rounded-2xl aspect-[1.15/1] bg-gray-100 group">
                  <img 
                    src="/img/program2.png" 
                    alt="Lab research glassware" 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
              </ScrollAnimatedElement>
            </div>

            {/* Nested Stacked Panel (Right Images) */}
            <div className="sm:col-span-6 flex flex-col gap-3 lg:gap-4 sm:pt-6 lg:pt-8">
              <ScrollAnimatedElement delay={0.6} yOffset={60}>
                <div className="overflow-hidden rounded-2xl aspect-[1.15/1] bg-gray-100 group">
                  <img 
                    src="/img/program3.png" 
                    alt="Team collaboration brainstorming" 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
              </ScrollAnimatedElement>
              <ScrollAnimatedElement delay={0.8} yOffset={60}>
                <div className="overflow-hidden rounded-2xl aspect-square bg-gray-100 group grow">
                  <img 
                    src="/img/program4.png" 
                    alt="Group of students smiling" 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
              </ScrollAnimatedElement>
            </div>

          </div>

          {/* Outcomes Cards Grid underneath the images */}
          <ScrollAnimatedElement delay={0.9} yOffset={50}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {outcomes.map((item, index) => (
                <ScrollAnimatedElement 
                  key={index}
                  delay={1.0 + (index * 0.1)}
                  yOffset={40}
                >
                  <div className="bg-[#FAF8F3] border border-[#E8E3D8] rounded-xl p-4 transition-all duration-300 hover:shadow-md hover:border-gray-300/80 cursor-default hover:scale-[1.02]">
                    <span className="text-[11px] font-bold tracking-widest text-[#5E17EB] block">
                      {item.label}
                    </span>
                    <p className="text-base lg:text-lg font-regular text-[#191b22] mt-1">
                      {item.text}
                    </p>
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

export default ScholarshipMentorshipProgram