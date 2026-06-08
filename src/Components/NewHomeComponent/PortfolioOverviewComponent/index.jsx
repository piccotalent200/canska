"use client";
import React from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import { portfolioCategories } from '@/utilities/constants';

const PortfolioOverviewComponent = () => {

  return (
    <div className="bg-[#1F232E] text-white flex items-center font-dmsans justify-center p-[40px_16px] md:p-[40px_32px] lg:p-[64px_61px] selection:bg-[#f3a827] selection:text-black">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Heading, Main Text & CTA */}
        <ScrollAnimatedElement 
          className="lg:col-span-5 space-y-6"
          delay={0.1}
          yOffset={60}
        >
          <ScrollAnimatedElement delay={0.2} yOffset={30}>
            <div className="flex items-center space-x-2 text-sm font-bold tracking-widest text-[#FFB433] hover:text-[#FFD700] uppercase transition-colors duration-300  group">
              <span className="w-4 h-[2px] bg-[#f3a827] group-hover:bg-[#FFD700] group-hover:w-6 transition-all duration-300"></span>
              <span>What is a Canska Portfolio</span>
            </div>
          </ScrollAnimatedElement>
          
          <ScrollAnimatedElement delay={0.3} yOffset={40}>
            <h1 className="text-2xl sm:text-[64px] font-normal leading-[1.1] tracking-tight hover:text-gray-200 transition-colors duration-500 ">
              Grades are the baseline. 
              <span className="text-[#f3a827]  transition-colors duration-300"> The portfolio</span> seals the deal.
            </h1>
          </ScrollAnimatedElement>
          
          <ScrollAnimatedElement delay={0.4} yOffset={35}>
            <p className="text-white/70 hover:text-white/90 text-base leading-relaxed max-w-xl transition-colors duration-300 ">
              A Canska portfolio combines academic rigour, creative work, social
              impact, leadership and real-world projects — a compelling story that top
              universities cannot ignore.
            </p>
          </ScrollAnimatedElement>
          
          <ScrollAnimatedElement delay={0.5} yOffset={40}>
            <div className="pt-4">
              <a href="#student-portfolio" className="inline-flex items-center space-x-2 bg-[#f3a827] hover:bg-[#d9921e] text-black font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300 group shadow-lg shadow-[#f3a827]/10 hover:shadow-[#f3a827]/20 hover:scale-105">
                <span>See a sample portfolio</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.54065e-05 6.02009V4.34009H7.15403L3.65403 1.19009L4.84403 8.58307e-05L9.80003 4.62009V5.72609L4.84403 10.3601L3.65403 9.17009L7.15403 6.02009H2.54065e-05Z" fill="currentColor"/>
                  </svg>
                </span>
              </a>
            </div>
          </ScrollAnimatedElement>
        </ScrollAnimatedElement>

        {/* Right Column: Interactive Grid with Hover Effects */}
        <ScrollAnimatedElement 
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          delay={0.3}
          yOffset={80}
        >
          {portfolioCategories.map((item, index) => (
            <ScrollAnimatedElement
              key={item.id}
              delay={0.6 + (index * 0.05)}
              yOffset={50}
            >
              <div className="relative bg-[linear-gradient(135deg,_#2A2F3D_0%,_#1F232E_100%)] hover:bg-[linear-gradient(135deg,_#1F232E_0%,_#2A2F3D_100%)] border border-white/10 hover:border-[#FFB433] rounded-xl p-4 min-h-[180px] flex flex-col justify-between  group transition-all duration-500 ease-out">
                {/* Card Badge / Number */}
                <span className="text-sm tracking-wider text-white/60 group-hover:text-[#FFB433] group-hover:font-semibold transition-all duration-300">
                  {item.id}
                </span>
                
                {/* Card Title */}
                <h3 className="text-sm font-regular leading-snug tracking-wide text-gray-300 group-hover:text-white group-hover:font-medium transition-all duration-300">
                  {item.title}
                </h3>
                
                {/* Decorative underline that expands outward on hover */}
                {/* <div className="absolute bottom-4 left-4 right-4 h-[2px] bg-[#f3a827] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" /> */}
                
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FFB433]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </ScrollAnimatedElement>
          ))}
        </ScrollAnimatedElement>

      </div>
    </div>
  )
}

export default PortfolioOverviewComponent