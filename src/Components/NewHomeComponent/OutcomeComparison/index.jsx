import React from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import { tableData } from '@/utilities/constants'

const OutcomeComparison = () => {

  return (
    <section className="min-h-screen bg-[#FAF8F3] text-[#1E2229] antialiased p-4 sm:p-6 md:p-8 lg:p-16 font-dm">
      <ScrollAnimatedElement className="w-full mx-auto space-y-8 lg:space-y-12">

        {/* Top Header Grid */}
        <ScrollAnimatedElement delay={0.1}>
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-6 lg:mb-12">
            <div className="lg:col-span-7 space-y-3 max-w-full lg:max-w-[780px]">
              <ScrollAnimatedElement delay={0.2}>
                <div className="flex items-center space-x-2 text-[11px] leading-4 font-bold tracking-widest text-[#5E17EB] hover:text-[#5E17EB] uppercase transition-colors duration-300 group mb-4 lg:mb-6">
                  <span className="w-4 h-0.5 bg-[#5E17EB] group-hover:bg-[#4A0FC7] group-hover:w-6 transition-all duration-300"></span>
                  <h4 className="text-[11px] leading-4 font-bold text-[#5E17EB] uppercase tracking-[2.42px]">Why Canska is Different</h4>
                </div>
              </ScrollAnimatedElement>

              <ScrollAnimatedElement delay={0.3}>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight lg:leading-16 font-normal  text-[#1F232E] group transition-colors duration-300">
                  Some aim for acceptance. We <span className="text-[#5E17EB]  transition-colors duration-300">engineer outcomes.</span>
                </h3>
              </ScrollAnimatedElement>
            </div>

            <ScrollAnimatedElement delay={0.4} className="lg:col-span-5 ms-auto max-w-full lg:max-w-[469px]">
              <p className="text-sm sm:text-base leading-5.5 sm:leading-6.5 font-normal text-[#1F232EB2] border-s-[3px] border-solid border-[#5E17EB] ps-3 lg:ps-3">
                Over a decade of structured &ldquo;Quad&rdquo; mentorship and portfolio
                building, Canska doesn&apos;t prepare students for admission — we
                ensure they win.
              </p>
            </ScrollAnimatedElement>
          </header>
        </ScrollAnimatedElement>

        {/* Comparison Table Container */}
        <ScrollAnimatedElement delay={0.5} className="bg-white border border-solid border-[#E8E3D8] rounded-3xl overflow-auto [scrollbar-width:none]">
          {/* Table Header Row */}
          <ScrollAnimatedElement delay={0.6}>
            <div className="bg-[#1F232E] text-white grid grid-cols-12 items-center font-bold tracking-wide text-sm sm:text-sm min-w-3xl">
              <div className="col-span-3 lg:col-span-3 uppercase text-[11px] leading-4 tracking-widest text-[#FFFFFF99] font-bold p-4 sm:p-6">
                Dimension
              </div>
              <div className="col-span-4 lg:col-span-2 text-[#FFB433] text-center md:text-left text-sm sm:text-[22px] leading-8.25 font-bold p-4">
                CANSKA
              </div>
              <div className='col-span-1 lg:col-span-2 text-[#FFB433] text-center md:text-left text-sm sm:text-[22px] leading-8.25 font-bold p-4'>
              </div>
              <div className="col-span-4 lg:col-span-5 text-[#FFFFFF99] text-center md:text-left text-sm sm:text-[22px] leading-8.25 font-bold p-4 sm:p-6">
                Others
              </div>
            </div>
          </ScrollAnimatedElement>

          {/* Table Rows */}
          <div>
            {tableData.map((row, index) => (
              <ScrollAnimatedElement 
                key={row.dimension}
                delay={0.7 + (index * 0.05)}
                className={`grid grid-cols-12 items-center group transition-colors duration-150 ease-in-out min-w-3xl hover:bg-[#A47DF4]/15 ${
                  index % 2 === 0 ? "bg-[#FAF8F380]" : "bg-white"
                }`}
              >
                {/* Dimension Name Column */}
                <div className="col-span-3 lg:col-span-3 uppercase text-[14px] leading-4.5 tracking-[1.2px] font-bold text-[#1F232E99] transition-colors duration-200 p-4 sm:p-6 h-full">
                  {row.dimension}
                </div>

                {/* Canska Data Column */}
                <div className={`col-span-4 lg:col-span-2 text-center md:text-left text-sm sm:text-sm font-semibold text-[#5822E3] transition-colors duration-200 p-4 h-full ${
                  index % 2 === 0 ? "bg-[#A47DF4]/10" : "bg-[#A47DF4]/15"
                }`}>
                  {row.canska}
                </div>

                <div className='col-span-1 lg:col-span-2 text-center md:text-left text-sm sm:text-sm font-normal leading-5.25 text-[#1F232EA6] transition-colors duration-200 p-4 sm:p-6 h-full'>
                </div>

                {/* Others Data Column */}
                <div className="col-span-4 lg:col-span-5 text-center md:text-left text-sm sm:text-sm font-normal leading-5.25 text-[#1F232EA6] transition-colors duration-200 p-4 sm:p-6 h-full">
                  {row.others}
                </div>
              </ScrollAnimatedElement>
            ))}
          </div>
        </ScrollAnimatedElement>

      </ScrollAnimatedElement>
    </section>
  )
}

export default OutcomeComparison