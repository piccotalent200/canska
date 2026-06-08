import React from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import { scholarshipJourneyItems } from '@/utilities/constants'


const ScholarshipJourney = () => {
  return (
    <section className='bg-white p-4 sm:p-6 md:p-8 lg:p-[64px_61px]'>

      <div className='grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-x-[40px]'>

        <ScrollAnimatedElement delay={0.1}>
          <div>
            <div className="flex items-center space-x-2 text-[11px] leading-[16px] font-bold tracking-widest text-[#5E17EB] hover:text-[#4A0FC7] uppercase transition-colors duration-300 group mb-6 lg:mb-[24px]">
              <span className="w-4 h-[2px] bg-[#5E17EB] group-hover:bg-[#4A0FC7] group-hover:w-6 transition-all duration-300"></span>
              <h4 className='text-[11px] leading-[16px] font-bold text-[#5E17EB] uppercase tracking-[2.42px]'>What Does Canska Help You With</h4>
            </div>
            <h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight lg:leading-[64px] font-normal  text-[#1F232E] mb-8 lg:mb-[56px] group transition-colors duration-300'>Your complete journey to a <span className='text-[#5E17EB]  transition-colors duration-300'>top-50 university</span> with scholarships.</h3>
          </div>
        </ScrollAnimatedElement>

        <div className='hidden lg:block'>
          {/* Empty space for desktop layout */}
        </div>

        <ScrollAnimatedElement delay={0.3}>
          <div className='grid gap-3 lg:gap-[12px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(295px,1fr))]'>
            {scholarshipJourneyItems.map((item, index) => (
              <ScrollAnimatedElement key={item.id} delay={0.4 + (index * 0.05)}>
                <div className={`hover:border-[#EFD9AA] hover:bg-[#000000] [&:hover>p]:text-[#FFB433] [&:hover>p]:opacity-100 [&>p]:opacity-50 [&:hover>h3]:text-[#F8F5FF] text-[#1F232E] border border-solid border-[#E8E3D8] rounded-2xl lg:rounded-[16px] bg-[#FAF8F3] p-4 lg:p-[20px] transition-all duration-300 hover:scale-[1.02]`}>
                  <p className={`text-[11px] leading-[16px] font-normal mb-2 lg:mb-[8px] transition-all duration-300`}>
                    {item.id}
                  </p>
                  <h3 className={`text-base lg:text-[18px] leading-tight lg:leading-[22px] font-normal transition-all duration-300`}>
                    {item.title}
                  </h3>
                </div>
              </ScrollAnimatedElement>
            ))}
          </div>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement delay={0.8}>
          <div className='bg-[#1F232E] rounded-2xl lg:rounded-[24px] p-6 lg:p-[28px] group hover:shadow-xl transition-all duration-500'>

            <div className='flex items-center gap-4 lg:gap-[16px] justify-between mb-5 lg:mb-[20px]'>
              <p className='bg-[#FFB433] rounded-full text-[10px] lg:text-[11px] leading-[16px] font-bold text-[#1F232E] px-3 py-1.5 lg:p-[6px_12px] tracking-[1.7px] uppercase min-h-[29px] flex items-center'>Added Bonuses</p>

              <p className='text-3xl lg:text-[44px] leading-tight lg:leading-[40px] font-normal text-[#FFB433] group-hover:rotate-90 transition-all duration-500'>+</p>
            </div>

            <ul className='space-y-3 lg:space-y-0'>
              {[
                'Cash prizes and grants from competitions',
                'Sponsored world travel opportunities', 
                'Networking events and social meetups',
                'Internships and summer programs',
                'International and national media recognition'
              ].map((item, index) => (
                <ScrollAnimatedElement key={index} delay={1.0 + (index * 0.1)}>
                  <li className='last:mb-6 lg:last:mb-[24px] last:border-none pb-3 lg:pb-[13px] mb-3 lg:mb-[13px] border-b border-solid border-[#FFFFFF1A] text-sm leading-relaxed lg:leading-[21px] font-normal text-[#FFFFFF] before:w-1.5 lg:before:w-[6px] before:h-1.5 lg:before:h-[6px] before:bg-[#FFB433] before:rounded-full before:mt-2 lg:before:mt-[8px] flex gap-3 lg:gap-[12px]'>
                    {item}
                  </li>
                </ScrollAnimatedElement>
              ))}
            </ul>

            <ScrollAnimatedElement delay={1.6}>
              <div className='rounded-2xl lg:rounded-[18px] overflow-hidden'>
                <img src="/img/bouns-image.svg" alt="" className='w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-[1.05]' />
              </div>
            </ScrollAnimatedElement>
          </div>
        </ScrollAnimatedElement>
      </div>
    </section>
  )
}

export default ScholarshipJourney