import React from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import { highlightsStudent } from '@/utilities/constants'

const StudentSuccessStory = () => {

  return (
    <section className="min-h-screen bg-[#FFFFFF] text-[#1E2229] antialiased p-4 sm:p-6 md:p-8 lg:p-16 flex items-center justify-center">
      <ScrollAnimatedElement className="w-full mx-auto space-y-8 lg:space-y-12">

        {/* Header Section */}
        <ScrollAnimatedElement delay={0.1}>
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            <div className="lg:col-span-8 space-y-4">
              <ScrollAnimatedElement delay={0.2}>
                <div className="flex items-center space-x-2 text-[11px] leading-4 font-bold tracking-widest text-[#5E17EB] hover:text-[#5E17EB] uppercase transition-colors duration-300 group mb-4 lg:mb-6">
                  <span className="w-4 h-0.5 bg-[#5E17EB] group-hover:bg-[#4A0FC7] group-hover:w-6 transition-all duration-300"></span>
                  <h4 className="text-[11px] leading-4 font-bold text-[#5E17EB] uppercase tracking-[2.42px]">Success Story</h4>
                </div>
              </ScrollAnimatedElement>
              
              <ScrollAnimatedElement delay={0.3}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal text-[#1F232E] leading-tight lg:leading-15.5">
                  Meet <span className="text-[#5822E3] font-medium">Vinisha Umashankar.</span>
                </h1>
              </ScrollAnimatedElement>
            </div>

            <ScrollAnimatedElement delay={0.4} className="lg:col-span-4">
              <p className="text-sm sm:text-base leading-6.5 font-medium text-[#1F232EB2]">
                A 12-year mentorship journey of strategy and execution — proof that long-term, strategic mentorship works.
              </p>
            </ScrollAnimatedElement>
          </header>
        </ScrollAnimatedElement>

        {/* Main Content Grid */}
        <ScrollAnimatedElement delay={0.5}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

            {/* Left Column: Interactive Feature Card */}
            <ScrollAnimatedElement delay={0.6} className="lg:col-span-5 group relative rounded-[28px] overflow-hidden shadow-lg flex flex-col justify-between min-h-[400px] sm:min-h-[500px] lg:min-h-full transition-all duration-500 hover:shadow-2xl">
              {/* Background Image Layer & Zoom Transition */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/img/vinisha.svg"
                  alt="Vinisha Umashankar"
                  className="w-full h-full object-cover object-center opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Dark Gradient Overlay for Typography Legibility */}
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(0deg,rgba(31,35,46,0.85)_0%,rgba(31,35,46,0)_50%,rgba(31,35,46,0)_100%)] group-hover:via-black/30 transition-all duration-300" />
              </div>

              {/* Top Tag */}
              <ScrollAnimatedElement delay={0.7} className="relative z-10 p-4 sm:p-6">
                <span className="inline-block bg-[#FFB433] text-[#1F232E] font-bold text-[11px] leading-4 tracking-widest uppercase p-[6px_12px] rounded-full shadow-sm">
                  12-Year Journey
                </span>
              </ScrollAnimatedElement>

              {/* Bottom Info Details */}
              <ScrollAnimatedElement delay={0.8} className="relative z-10 p-4 sm:p-6 space-y-4 text-white mt-auto">
                <div className="space-y-2">
                  <span className="text-[11px] leading-4 tracking-widest uppercase font-bold text-[#FFB433]">
                    The Outcome
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-[26px] font-normal leading-8 text-[#FFFFFF]">
                    Top 1% of all applicants <br /> B.E. (Hons) at a Top–25 university
                  </h3>
                </div>

                {/* Sub-metrics Border Separator */}
                <div className="pt-3 border-t border-solid border-[#FFFFFF33] grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[11px] leading-4 uppercase tracking-wider text-[#FFFFFF99] font-normal">Scholarship</span>
                    <span className="text-lg sm:text-xl lg:text-[28px] leading-6.25 font-normal text-[#FFB433]">US$325K</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[11px] leading-4 uppercase tracking-wider text-[#FFFFFF99] font-normal">Cash Prizes</span>
                    <span className="text-lg sm:text-xl lg:text-[28px] leading-6.25 font-normal text-[#FFB433]">US$40K</span>
                  </div>
                </div>
              </ScrollAnimatedElement>
            </ScrollAnimatedElement>

            {/* Right Column: Highlights & Narrative */}
            <ScrollAnimatedElement delay={0.9} className="lg:col-span-7 bg-[#FAF8F3] border border-[#E8E3D8] rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between">

              <div className="mb-6">
                {/* Header Label */}
                <ScrollAnimatedElement delay={1.0}>
                  <span className="text-[14px] leading-4 font-bold tracking-widest text-[#5E17EB] uppercase block mb-6">
                    — Portfolio Highlights
                  </span>
                </ScrollAnimatedElement>

                {/* Grid Lists of Accomplishments */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-1.5 [&>*:last-child]:mb-0 [&>*:nth-last-child(2)]:mb-0">
                  {highlightsStudent.map((item, index) => (
                    <ScrollAnimatedElement
                      key={item.id}
                      delay={1.1 + (index * 0.05)}
                      className="flex items-start gap-3 pb-3 border-b border-solid border-[#E8E3D899] mb-3 transition-all duration-200 hover:bg-neutral-50 group/item cursor-default"
                    >
                      <span className="text-[10px] leading-3.75 font-normal text-[#1F232E] mt-1 shrink-0 group-hover/item:text-[#5822E3] transition-colors opacity-50">
                        {item.id}
                      </span>
                      <p className="text-[14px] text-[#1F232E] font-normal leading-5.25 group-hover/item:text-neutral-900 transition-colors">
                        {item.text}
                      </p>
                    </ScrollAnimatedElement>
                  ))}
                </div>
              </div>

              {/* Narrative Context Block */}
              <ScrollAnimatedElement delay={1.5} className="relative pl-4 border-l-[3px] border-[#5E17EB]">
                <p className="text-[13px] sm:text-base leading-5.5 text-[#1F232E] font-normal">
                  From the age of eight, Vinisha followed a structured mentorship pathway — cautiously
                  building her portfolio, refining her skills and preparing strategically for top-university
                  admissions, all while keeping her family debt-free. Today she studies at a top–25
                  engineering university, supported by a US$325,000 scholarship — reflecting not only her
                  talent, but the system, discipline and environment in which she prospered.
                </p>
              </ScrollAnimatedElement>

            </ScrollAnimatedElement>

          </div>
        </ScrollAnimatedElement>

      </ScrollAnimatedElement>
    </section>
  )
}

export default StudentSuccessStory