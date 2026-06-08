"use client";

import React from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import { phases } from '@/utilities/constants';

const QuadProgramRoadmap = () => {

  return (
    <div className="min-h-screen bg-white font-dmsans text-[#191b22] p-[40px_16px] md:p-[40px_32px] lg:p-[64px_61px] selection:bg-[#7c3aed] selection:text-white">
      <div className="w-full">

        {/* Header Section */}
        <ScrollAnimatedElement
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16"
          delay={0.1}
          yOffset={60}
        >
          <ScrollAnimatedElement
            className="lg:col-span-8 space-y-4"
            delay={0.2}
            yOffset={40}
          >
            <div className="flex items-center space-x-2 text-sm font-bold tracking-widest text-[#5E17EB] hover:text-[#4A0FC7] uppercase transition-colors duration-300  group">
              <span className="w-4 h-[2px] bg-[#5E17EB] group-hover:bg-[#4A0FC7] group-hover:w-6 transition-all duration-300"></span>
              <span>What's the solution</span>
            </div>
            <h1 className="text-2xl sm:text-[64px] font-normal tracking-tight text-[#1F232E] leading-16 max-w-54xl transition-colors duration-500 ">
              The <span className="text-[#5E17EB] transition-colors duration-300">"Quad"</span> Program. <br />
              Phase by phase. Year by year.
            </h1>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement
            className="lg:col-span-4 lg:pt-8"
            delay={0.4}
            yOffset={50}
          >
            <p className="text-[#1F232E]/70 hover:text-[#1F232E]/90 text-sm md:text-base border-l-2 border-[#5E17EB] hover:border-[#4A0FC7] pl-4 leading-relaxed font-light transition-all duration-300 ">
              A long-term mentorship program designed to help students gradually build an amazing academic profile, indispensable skills, real-world projects and leadership experience — so admissions officers are awestruck.
            </p>
          </ScrollAnimatedElement>
        </ScrollAnimatedElement>

        {/* Sticky Phases Container */}
        <div className="space-y-6">
          {phases.map((phase, idx) => (
            <ScrollAnimatedElement
              key={phase.id}
              delay={0.6 + (idx * 0.2)}
              yOffset={80}
              style={{ top: `${80 + idx * 32}px` }}
              className='sticky'
            >
              <div
                className="sticky bg-white border border-[#D9CFBC] hover:border-[#C4842A] rounded-2xl p-6 transition-all duration-500 group hover:shadow-lg hover:shadow-[#5E17EB]/10 hover:scale-[1.01]"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-6">

                  {/* Left Column: Visual & Identity */}
                  <ScrollAnimatedElement
                    className="md:col-span-4 space-y-4 md:border-r pr-6 md:border-gray-100 group-hover:border-[#5E17EB]/20"
                    delay={0.7 + (idx * 0.2)}
                    yOffset={40}
                  >
                    <div className="overflow-hidden rounded-xl aspect-[1.5/1] bg-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <img
                        src={phase.image}
                        alt={phase.name}
                        className="w-full h-full object-cover filter  contrast-125 hover:contrast-100 mix-blend-multiply opacity-90 hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center space-x-3 pt-1">
                      <span className="text-3xl md:text-5xl font-regular text-[#0E1B2C]  tracking-tight transition-colors duration-300">{phase.id}</span>
                      <div>
                        <h2 className="text-xl md:text-3xl font-regular text-[#0E1B2C]  transition-colors duration-300">{phase.name}</h2>
                        <p className="text-sm tracking-wider text-[#6B6457]  mt-0.5 transition-colors duration-300">{phase.years}</p>
                      </div>
                    </div>
                  </ScrollAnimatedElement>

                  {/* Middle Column: Objective Specs */}
                  <ScrollAnimatedElement
                    className="md:col-span-4 space-y-6 md:border-r md:border-gray-100 group-hover:border-[#5E17EB]/20 md:pr-4"
                    delay={0.8 + (idx * 0.2)}
                    yOffset={50}
                  >
                    <div>
                      <span className="text-[10px] font-regular tracking-widest text-[#C4842A]  uppercase transition-colors duration-300">{phase.phaseNumber}</span>
                      <h3 className="text-xl md:text-2xl font-regular text-[#0E1B2C]  mt-1 leading-snug transition-colors duration-300">{phase.title}</h3>
                    </div>

                    <div>
                      <span className="text-sm font-regular tracking-wider text-[#6B6457]  uppercase block mb-2 transition-colors duration-300">Primary Goal</span>
                      <p className="text-base font-medium text-[#0E1B2C]  transition-colors duration-300">{phase.primaryGoal}</p>
                    </div>

                    <div>
                      <span className="text-sm font-regular tracking-wider text-[#6B6457]  uppercase block mb-2 transition-colors duration-300">Core Focus</span>
                      <ul className="space-y-1.5 text-sm text-[#0E1B2C] font-regular">
                        {phase.coreFocus.map((focus, i) => (
                          <ScrollAnimatedElement
                            key={i}
                            delay={0.9 + (idx * 0.2) + (i * 0.05)}
                            yOffset={20}
                          >
                            <li className="flex items-center space-x-2  transition-colors duration-300">
                              <span className="w-1 h-1 rounded-full bg-[#E8A23A] group-hover:bg-[#FFB433] flex-shrink-0 transition-colors duration-300"></span>
                              <span>{focus}</span>
                            </li>
                          </ScrollAnimatedElement>
                        ))}
                      </ul>
                    </div>
                  </ScrollAnimatedElement>

                  {/* Right Column: Student Tags */}
                  <ScrollAnimatedElement
                    className="md:col-span-4 space-y-4"
                    delay={1.0 + (idx * 0.2)}
                    yOffset={60}
                  >
                    <span className="text-sm font-regular tracking-wider text-[#6B6457] group-hover:text-[#C4842A] uppercase block mb-2 transition-colors duration-300">Students Begin</span>
                    <div className="flex flex-wrap gap-2">
                      {phase.tags.map((tag, i) => (
                        <ScrollAnimatedElement
                          key={i}
                          delay={1.1 + (idx * 0.2) + (i * 0.03)}
                          yOffset={15}
                        >
                          <span className="text-sm px-3 py-1.5 bg-[#E3D5FF] hover:bg-[#c0a3f9] text-[#0E1B2C] hover:text-[#5E17EB] font-medium rounded-full transition-all duration-300  hover:scale-105 hover:shadow-sm">
                            {tag}
                          </span>
                        </ScrollAnimatedElement>
                      ))}
                    </div>
                  </ScrollAnimatedElement>

                </div>
              </div>
            </ScrollAnimatedElement>
          ))}
        </div>

        <ScrollAnimatedElement
          className="text-center mt-8"
          delay={2.6}
          yOffset={50}
        >
          <h3 className="text-[#1F232ECC] hover:text-[#1F232E] text-[32px] font-regular mb-3 flex justify-center items-center flex-wrap gap-x-6 transition-colors duration-300 ">
            Prepare for 12 Years
            <span className="flex bg-[#5E17EB] hover:bg-[#FFB433] w-[30px] hover:w-[40px] h-[2px] transition-all duration-300"></span>
            or Scramble for 12 Months.
          </h3>
          <h5 className="text-[#5E17EB] text-lg font-extrabold transition-colors duration-300 ">Choose Wisely.</h5>
        </ScrollAnimatedElement>

      </div>
    </div>
  )
}

export default QuadProgramRoadmap