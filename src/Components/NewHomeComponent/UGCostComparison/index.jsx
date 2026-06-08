import React from 'react'
import Image from 'next/image'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import { costEstimations } from '@/utilities/constants';

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const UGCostComparison = () => {

  return (
    <main className="min-h-screen bg-[linear-gradient(0deg,#5E17EB,#5E17EB),linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),radial-gradient(50%_50%_at_20%_30%,rgba(255,180,51,0.1665)_0%,rgba(0,0,0,0)_40%)] text-white font-sans antialiased flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-[64px_61px_192px]">
      <div className="w-full mx-auto">

        {/* Header Section */}
        <ScrollAnimatedElement delay={0.1}>
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-16 lg:mb-[100px]">
            <ScrollAnimatedElement delay={0.2} className="lg:col-span-8">
              <div className="flex items-center space-x-2 text-[11px] leading-[16px] font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer group mb-8 lg:mb-[45px]">
                <span className="w-4 h-[2px] bg-[#FFFFFF] group-hover:bg-[#FFFFFF] group-hover:w-6 transition-all duration-300"></span>
                <span className="text-[11px] leading-[16px] font-bold uppercase tracking-widest text-[#FFFFFF] block">
                  Why Scholarships Matter
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal tracking-tight leading-tight lg:leading-[64px] text-[#FFFFFF]">
                A 4-year UG abroad <br className="hidden sm:block" />
                can cost <span className="text-[#FFB433]">US$425,000+</span>
              </h1>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement delay={0.4} className="lg:col-span-4 max-w-full lg:max-w-[465px] lg:border-l-[3px] lg:border-[#FFFFFF] lg:pl-3">
              <p className="text-sm sm:text-base leading-relaxed lg:leading-[26px] text-[#FFFFFFD9] font-normal">
                The estimate includes visa fees, flights, tuition, accommodation, health insurance,
                a laptop, a tech package, grocery expenses, and personal costs — accounting for
                8–16% cost inflation and worst-case scenarios in high-cost cities.
              </p>
            </ScrollAnimatedElement>
          </header>
        </ScrollAnimatedElement>

        {/* Cost Table Section */}
        <ScrollAnimatedElement delay={0.6}>
          <section className="border border-[#FFFFFF26] rounded-2xl lg:rounded-[24px] overflow-hidden backdrop-blur-sm mb-8 lg:mb-[40px]">
            {/* Table Header Row (Hidden on small screens) */}
            <div className="hidden sm:grid grid-cols-12 gap-4 p-4 lg:p-[16px_24px] border-b border-white/10 text-[10px] tracking-wider uppercase font-semibold text-neutral-300">
              <div className="col-span-6 uppercase text-[11px] leading-[16px] font-normal text-[#FFFFFFCC]">Country</div>
              <div className="col-span-6 text-right sm:text-left uppercase text-[11px] leading-[16px] font-normal text-[#FFFFFFCC]">4-Year UG Cost Estimation</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/10">
              {costEstimations.map((item, index) => (
                <ScrollAnimatedElement key={index} delay={0.8 + (index * 0.1)}>
                  <div className="group flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 items-center justify-between sm:justify-start hover:bg-white/[0.03] transition-colors cursor-pointer">
                    {/* Left side: Country & Flag */}
                    <div className="col-span-6 flex items-center gap-3 w-full sm:w-auto">
                      <span className="text-xl sm:text-2xl shrink-0" role="img" aria-label={item.country}>
                        <img src={item.flag} alt="" className='min-w-[25px] w-6 h-6 sm:w-8 sm:h-8' />
                      </span>
                      <span className="text-sm sm:text-base lg:text-[20px] leading-relaxed lg:leading-[30px] font-normal text-[#FFFFFF]">
                        {item.country}
                      </span>
                    </div>

                    {/* Right side: Range & Action Arrow */}
                    <div className="col-span-6 flex items-center justify-between w-full sm:w-auto sm:ml-auto md:w-full">
                      <span className="text-base sm:text-lg lg:text-[20px] leading-tight lg:leading-[20px] font-normal text-[#FFFFFFE5] tracking-wide">
                        {item.range}
                      </span>
                      <div className="text-white/60 group-hover:text-white transition-colors pl-4">
                        <ArrowIcon />
                      </div>
                    </div>
                  </div>
                </ScrollAnimatedElement>
              ))}
            </div>
          </section>
        </ScrollAnimatedElement>

        {/* Comparison Bottom Cards */}
        <ScrollAnimatedElement delay={1.2}>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-[24px]">
            {/* Left Card: Without Scholarship */}
            <ScrollAnimatedElement delay={1.4}>
              <div className="hover:bg-[#1F232E]/95 hover:border-[#FFB433] hover:shadow-2xl hover:-translate-y-2 lg:hover:-translate-y-[10px] transition-all duration-500 bg-[#1F232E] rounded-2xl lg:rounded-[16px] p-5 lg:p-[25px] flex flex-col justify-between border border-solid border-[#FFFFFF1A]">
                <div>
                  <span className="text-[10px] sm:text-[11px] leading-[16px] tracking-[2.42px] uppercase font-bold text-[#FFB433] block mb-2">
                    Without a Scholarship
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-[42px] leading-tight lg:leading-[42px] font-normal mb-3 lg:mb-[12px] text-[#FFFFFF]">
                    US$330,000
                  </h2>
                </div>
                <p className="text-sm sm:text-[13px] leading-relaxed lg:leading-[19px] font-normal text-[#FFFFFFB2]">
                  The financial burden on parents.
                </p>
              </div>
            </ScrollAnimatedElement>

            {/* Right Card: With Canska Portfolio */}
            <ScrollAnimatedElement delay={1.6}>
              <div className="hover:bg-[#FFB433]/95 hover:border-[#1F232E] hover:shadow-2xl hover:-translate-y-2 lg:hover:-translate-y-[10px] transition-all duration-500 border border-solid border-transparent bg-[#FFB433] rounded-2xl lg:rounded-[16px] p-5 lg:p-[25px] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] sm:text-[11px] leading-[16px] tracking-[2.42px] uppercase font-bold text-[#1F232E] block mb-2">
                    With a Canska Portfolio
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-[42px] leading-tight lg:leading-[42px] font-normal mb-3 lg:mb-[12px] text-[#1F232E]">
                    US$0 debt
                  </h2>
                </div>
                <p className="text-sm sm:text-[13px] leading-relaxed lg:leading-[19px] font-normal text-[#1F232ECC]">
                  A standout portfolio can totally eliminate education cost.
                </p>
              </div>
            </ScrollAnimatedElement>
          </section>
        </ScrollAnimatedElement>

      </div>
    </main>
  )
}

export default UGCostComparison