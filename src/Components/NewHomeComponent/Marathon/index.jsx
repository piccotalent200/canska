import ScrollAnimatedElement from '@/Components/Reusable/ScrollAnimatedElement'
import React from 'react'

const Marathon = () => {
  return (
    <section className='bg-[#1F232E] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:p-[64px_61px]'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mb-8 md:mb-12 lg:mb-[62px]'>
        <ScrollAnimatedElement delay={0.1}>
          <div className='max-w-full lg:max-w-[647px]'>
            <p className='text-[10px] sm:text-[11px] leading-[14px] sm:leading-[16px] font-bold text-[#FFB433] mb-3 md:mb-4 lg:mb-[16px]'>— The Quad Program</p>
            <h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[1.1] sm:leading-[1.05] md:leading-[1] lg:leading-[64px] font-normal text-[#FFFFFF]'>
              A 12-year <span className='text-[#FFB433]'>marathon</span>, not a 12-month sprint.
            </h3>
          </div>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement delay={0.3}>
          <div className='max-w-full lg:max-w-[420px] lg:ms-auto lg:self-end'>
            <p className='text-sm sm:text-base leading-[22px] sm:leading-[26px] font-normal text-[#FFFFFFCC] border-s-[3px] border-solid border-[#5E17EB] ps-3 lg:ps-[12px]'>
              Prepare for 12 years, or scramble for 12 months. The earlier you start, the further you'll go. Each phase builds on the last — by age 19, your portfolio is irrefutable.
            </p>
          </div>
        </ScrollAnimatedElement>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-[32px] mb-6 md:mb-8 lg:mb-[32px] pb-8 md:pb-12 lg:pb-[64px] border-b border-solid border-[#FFFFFF1A]'>
        <ScrollAnimatedElement delay={0.2} yOffset={60}>
          <div className='group rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#2A2F3D]'>
            <div className='h-[280px] sm:h-[320px] md:h-[360px] lg:h-[398px] overflow-hidden relative before:absolute before:bg-[linear-gradient(0deg,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0.1)_50%,_rgba(0,0,0,0)_100%)] before:w-full before:h-full before:z-[1]'>
              <div className='flex gap-[6px] md:gap-[8px] items-center absolute top-3 md:top-4 lg:top-[20px] left-3 md:left-4 lg:left-[20px] z-[1]'>
                <span className='text-2xl sm:text-3xl lg:text-[35px] leading-[28px] sm:leading-[30px] lg:leading-[32px] font-normal text-[#FFFFFF]'>01</span>
                <span className='text-[10px] sm:text-sm leading-[14px] sm:leading-[16px] font-bold text-[#FFFFFF] p-[5px_5px_5px_10px] sm:p-[6px_6px_6px_12px] lg:p-[7px_7px_7px_14px] border border-solid border-[#FFFFFF33] bg-[#FFFFFF1A] rounded-[999px]'>
                  8–10 YRS
                </span>
              </div>
              <img src="/img/seeker.svg" alt="seekers" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0 relative' />
              <h4 className='text-xl sm:text-2xl lg:text-[30px] leading-[24px] sm:leading-[28px] lg:leading-[36px] font-normal text-[#FFFFFF] absolute left-3 md:left-[12px] bottom-3 md:bottom-4 lg:bottom-[16px] font-poppins z-[1]'>Seekers</h4>
            </div>
            <div className='p-3 md:p-4 lg:p-[14px_24px_24px_24px]'>
              <h3 className='text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-semibold text-[#FFFFFFE5] mb-3 md:mb-4 lg:mb-[16px]'>Curiosity & Discovery</h3>
              <ul>
                <li className='flex gap-[6px] md:gap-[8px] items-start text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#FFFFFFBF] mb-2 md:mb-[8px] last:mb-0 font-outfit'>
                  <img src="/img/marker.svg" alt="" className='mt-[1px] md:mt-[2px] w-3 h-3 md:w-auto md:h-auto flex-shrink-0' /> Arts & Craft Projects
                </li>
                <li className='flex gap-[6px] md:gap-[8px] items-start text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#FFFFFFBF] mb-2 md:mb-[8px] last:mb-0 font-outfit'>
                  <img src="/img/marker.svg" alt="" className='mt-[1px] md:mt-[2px] w-3 h-3 md:w-auto md:h-auto flex-shrink-0' /> Language Development
                </li>
                <li className='flex gap-[6px] md:gap-[8px] items-start text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#FFFFFFBF] mb-2 md:mb-[8px] last:mb-0 font-outfit'>
                  <img src="/img/marker.svg" alt="" className='mt-[1px] md:mt-[2px] w-3 h-3 md:w-auto md:h-auto flex-shrink-0' /> Analytical & Computing Skills
                </li>
              </ul>
            </div>
          </div>
        </ScrollAnimatedElement>
        
        <ScrollAnimatedElement delay={0.4} yOffset={60}>
          <div className='group rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#2A2F3D]'>
            <div className='h-[280px] sm:h-[320px] md:h-[360px] lg:h-[398px] overflow-hidden relative before:absolute before:bg-[linear-gradient(0deg,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0.1)_50%,_rgba(0,0,0,0)_100%)] before:w-full before:h-full before:z-[1]'>
              <div className='flex gap-[6px] md:gap-[8px] items-center absolute top-3 md:top-4 lg:top-[20px] left-3 md:left-4 lg:left-[20px] z-[1]'>
                <span className='text-2xl sm:text-3xl lg:text-[35px] leading-[28px] sm:leading-[30px] lg:leading-[32px] font-normal text-[#FFFFFF]'>02</span>
                <span className='text-[10px] sm:text-sm leading-[14px] sm:leading-[16px] font-bold text-[#FFFFFF] p-[5px_5px_5px_10px] sm:p-[6px_6px_6px_12px] lg:p-[7px_7px_7px_14px] border border-solid border-[#FFFFFF33] bg-[#FFFFFF1A] rounded-[999px]'>
                  11–13 YRS
                </span>
              </div>
              <img src="/img/maker.svg" alt="makers" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0 relative' />
              <h4 className='text-xl sm:text-2xl lg:text-[30px] leading-[24px] sm:leading-[28px] lg:leading-[36px] font-normal text-[#FFFFFF] absolute left-3 md:left-[12px] bottom-3 md:bottom-4 lg:bottom-[16px] font-poppins z-[1]'>Makers</h4>
            </div>
            <div className='p-3 md:p-4 lg:p-[14px_24px_24px_24px]'>
              <h3 className='text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-semibold text-[#FFFFFFE5] mb-3 md:mb-4 lg:mb-[16px]'>"Spike" Mastery & Projects</h3>
              <ul>
                <li className='flex gap-[6px] md:gap-[8px] items-start text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#FFFFFFBF] mb-2 md:mb-[8px] last:mb-0 font-outfit'>
                  <img src="/img/makers-marker.svg" alt="" className='mt-[1px] md:mt-[2px] w-3 h-3 md:w-auto md:h-auto flex-shrink-0' /> Competitions and Olympiads
                </li>
                <li className='flex gap-[6px] md:gap-[8px] items-start text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#FFFFFFBF] mb-2 md:mb-[8px] last:mb-0 font-outfit'>
                  <img src="/img/makers-marker.svg" alt="" className='mt-[1px] md:mt-[2px] w-3 h-3 md:w-auto md:h-auto flex-shrink-0' /> Computing Fundamentals
                </li>
                <li className='flex gap-[6px] md:gap-[8px] items-start text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#FFFFFFBF] mb-2 md:mb-[8px] last:mb-0 font-outfit'>
                  <img src="/img/makers-marker.svg" alt="" className='mt-[1px] md:mt-[2px] w-3 h-3 md:w-auto md:h-auto flex-shrink-0' /> Short Courses & Certifications
                </li>
              </ul>
            </div>
          </div>
        </ScrollAnimatedElement>
        
        <ScrollAnimatedElement delay={0.6} yOffset={60}>
          <div className='group rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#2A2F3D]'>
            <div className='h-[280px] sm:h-[320px] md:h-[360px] lg:h-[398px] overflow-hidden relative before:absolute before:bg-[linear-gradient(0deg,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0.1)_50%,_rgba(0,0,0,0)_100%)] before:w-full before:h-full before:z-[1]'>
              <div className='flex gap-[6px] md:gap-[8px] items-center absolute top-3 md:top-4 lg:top-[20px] left-3 md:left-4 lg:left-[20px] z-[1]'>
                <span className='text-2xl sm:text-3xl lg:text-[35px] leading-[28px] sm:leading-[30px] lg:leading-[32px] font-normal text-[#FFFFFF]'>03</span>
                <span className='text-[10px] sm:text-sm leading-[14px] sm:leading-[16px] font-bold text-[#FFFFFF] p-[5px_5px_5px_10px] sm:p-[6px_6px_6px_12px] lg:p-[7px_7px_7px_14px] border border-solid border-[#FFFFFF33] bg-[#FFFFFF1A] rounded-[999px]'>
                  14–16 YRS
                </span>
              </div>
              <img src="/img/riser.svg" alt="Risers" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0 relative' />
              <h4 className='text-xl sm:text-2xl lg:text-[30px] leading-[24px] sm:leading-[28px] lg:leading-[36px] font-normal text-[#FFFFFF] absolute left-3 md:left-[12px] bottom-3 md:bottom-4 lg:bottom-[16px] font-poppins z-[1]'>Risers</h4>
            </div>
            <div className='p-3 md:p-4 lg:p-[14px_24px_24px_24px]'>
              <h3 className='text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-semibold text-[#FFFFFFE5] mb-3 md:mb-4 lg:mb-[16px]'>Competitions & Validations</h3>
              <ul>
                <li className='flex gap-[6px] md:gap-[8px] items-start text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#FFFFFFBF] mb-2 md:mb-[8px] last:mb-0 font-outfit'>
                  <img src="/img/riser-marker.svg" alt="" className='mt-[1px] md:mt-[2px] w-3 h-3 md:w-auto md:h-auto flex-shrink-0' /> National & International Comps
                </li>
                <li className='flex gap-[6px] md:gap-[8px] items-start text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#FFFFFFBF] mb-2 md:mb-[8px] last:mb-0 font-outfit'>
                  <img src="/img/riser-marker.svg" alt="" className='mt-[1px] md:mt-[2px] w-3 h-3 md:w-auto md:h-auto flex-shrink-0' /> Awareness & Social Campaigns
                </li>
                <li className='flex gap-[6px] md:gap-[8px] items-start text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#FFFFFFBF] mb-2 md:mb-[8px] last:mb-0 font-outfit'>
                  <img src="/img/riser-marker.svg" alt="" className='mt-[1px] md:mt-[2px] w-3 h-3 md:w-auto md:h-auto flex-shrink-0' /> Language Certifications
                </li>
              </ul>
            </div>
          </div>
        </ScrollAnimatedElement>
        
        <ScrollAnimatedElement delay={0.8} yOffset={60}>
          <div className='group rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#2A2F3D]'>
            <div className='h-[280px] sm:h-[320px] md:h-[360px] lg:h-[398px] overflow-hidden relative before:absolute before:bg-[linear-gradient(0deg,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0.1)_50%,_rgba(0,0,0,0)_100%)] before:w-full before:h-full before:z-[1]'>
              <div className='flex gap-[6px] md:gap-[8px] items-center absolute top-3 md:top-4 lg:top-[20px] left-3 md:left-4 lg:left-[20px] z-[1]'>
                <span className='text-2xl sm:text-3xl lg:text-[35px] leading-[28px] sm:leading-[30px] lg:leading-[32px] font-normal text-[#FFFFFF]'>04</span>
                <span className='text-[10px] sm:text-sm leading-[14px] sm:leading-[16px] font-bold text-[#FFFFFF] p-[5px_5px_5px_10px] sm:p-[6px_6px_6px_12px] lg:p-[7px_7px_7px_14px] border border-solid border-[#FFFFFF33] bg-[#FFFFFF1A] rounded-[999px]'>
                  17–19 YRS
                </span>
              </div>
              <img src="/img/flyer.svg" alt="flyers" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0 relative' />
              <h4 className='text-xl sm:text-2xl lg:text-[30px] leading-[24px] sm:leading-[28px] lg:leading-[36px] font-normal text-[#FFFFFF] absolute left-3 md:left-[12px] bottom-3 md:bottom-4 lg:bottom-[16px] font-poppins z-[1]'>Flyers</h4>
            </div>
            <div className='p-3 md:p-4 lg:p-[14px_24px_24px_24px]'>
              <h3 className='text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-semibold text-[#FFFFFFE5] mb-3 md:mb-4 lg:mb-[16px]'>Admissions & Scholarships</h3>
              <ul>
                <li className='flex gap-[6px] md:gap-[8px] items-start text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#FFFFFFBF] mb-2 md:mb-[8px] last:mb-0 font-outfit'>
                  <img src="/img/flyers-markers.svg" alt="" className='mt-[1px] md:mt-[2px] w-3 h-3 md:w-auto md:h-auto flex-shrink-0' /> International Olympiads
                </li>
                <li className='flex gap-[6px] md:gap-[8px] items-start text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#FFFFFFBF] mb-2 md:mb-[8px] last:mb-0 font-outfit'>
                  <img src="/img/flyers-markers.svg" alt="" className='mt-[1px] md:mt-[2px] w-3 h-3 md:w-auto md:h-auto flex-shrink-0' /> National Awards & Prizes
                </li>
                <li className='flex gap-[6px] md:gap-[8px] items-start text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#FFFFFFBF] mb-2 md:mb-[8px] last:mb-0 font-outfit'>
                  <img src="/img/flyers-markers.svg" alt="" className='mt-[1px] md:mt-[2px] w-3 h-3 md:w-auto md:h-auto flex-shrink-0' /> External Scholarships
                </li>
              </ul>
            </div>
          </div>
        </ScrollAnimatedElement>
      </div>

      <ScrollAnimatedElement delay={0.5}>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-[16px] justify-between items-start sm:items-center'>
          <p className='text-sm sm:text-sm leading-[16px] sm:leading-[19px] font-bold text-[#FFFFFFCC]'>
            Prepare for 12 Years <span className='text-[#FFB433]'>·</span> or Scramble for 12 Months
          </p>
          <a href="" className='flex gap-[4px] sm:gap-[6px] items-center text-sm sm:text-sm leading-[18px] sm:leading-[21px] font-bold text-[#FFFFFF] border-b border-solid border-[#FFFFFF] hover:border-[#FFB433]  transition-colors duration-200'>
            Explore each phase
            <img src="/img/explore-arrow.svg" alt="" className='w-3 h-3 sm:w-auto sm:h-auto' />
          </a>
        </div>
      </ScrollAnimatedElement>

    </section>
  )
}

export default Marathon