import React from 'react'
import ScrollAnimatedElement from '@/Components/Reusable/ScrollAnimatedElement'
import ScrollWordAnimation from '@/Components/Reusable/ScrollWordAnimation'

const TreeGrowthCalculator = () => {
  return (
    <section className='p-[40px_16px] md:p-[40px_32px] lg:p-[64px_61px] bg-[#FAF8F3] grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 lg:gap-[80px]'>
      <div className='max-w-full  order-2 lg:order-1'>
        <ScrollAnimatedElement delay={0.1}>
          <p className='text-[10px] sm:text-[11px] leading-[14px] sm:leading-[16px] font-semibold text-[#5E17EB] uppercase mb-4 md:mb-[24px]'>— A Parent's Question</p>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement delay={0.2}>
          <ScrollWordAnimation
            className='text-[40px] sm:text-[44px] leading-[48px] sm:leading-[56px] xl:text-[48px] xl:leading-[62px] font-medium mb-[40px] max-w-[1328px] mx-auto'
          >
            They say it takes 12 years for a tree to grow.
            Do you know which ages are …
            the most important in a child's development?
          </ScrollWordAnimation>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement delay={0.3}>
          <p className='text-sm sm:text-base leading-[22px] sm:leading-[26px] font-normal text-[#1F232ECC] mb-4 md:mb-6 lg:mb-[24px]'>Take your best guess — then discover the science
            behind the Quad's 12-year mentorship.
          </p>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement delay={0.4}>
          <div>
            <label htmlFor="" className='text-[10px] sm:text-[11px] leading-[14px] sm:leading-[16px] font-semibold text-[#1F232E]/60 mb-2 lg:mb-[8px] block uppercase'>Your guess</label>
            <div className='relative flex items-center max-w-full lg:max-w-[520px] w-full'>
              <input
                type="text"
                placeholder='Type an age range (e.g. 3 to 6)'
                className='placeholder:text-[#1F232E66] border border-solid border-[#E8E3D8] rounded-[12px] sm:rounded-[16px] bg-[#FFFFFF] shadow-[0px_1px_2px_0px_#0000000D] block w-full h-12 sm:h-14 lg:h-[64px] p-[16px_100px_16px_16px] sm:p-[18px_110px_18px_18px] lg:p-[22px_125px_22px_22px] outline-none text-sm sm:text-base'
              />
              <button className='hover:bg-[#4d0fca] transition-all duration-200 absolute right-[4px] sm:right-[6px] text-sm sm:text-sm leading-[18px] sm:leading-[21px] font-semibold text-[#FFFFFF] bg-[#5E17EB] p-[10px_16px] sm:p-[12px_20px] lg:p-[14px_26px] h-[40px] sm:h-[44px] lg:h-[50px] rounded-[999px] cursor-pointer'>
                Guess
              </button>
            </div>

            <div className="border border-[#CFC9BC] rounded-xl p-5 text-[15px] font-normal text-[#1F232E] my-5 lg:max-w-[520px] w-full">
              <span className='font-bolf'>Hint:</span> Think about when children form habits and talents on their own
            </div>

            <div className='flex gap-2 sm:gap-[7px] items-center flex-wrap mt-6 lg:mt-[32px]'>
              <span className='text-[10px] sm:text-sm leading-[16px] sm:leading-[18px] font-semibold text-[#1F232E] uppercase p-[8px_12px] sm:p-[9px_16px] lg:p-[11px_20px] border border-solid border-[#5819EB] rounded-[999px] h-[32px] sm:h-[36px] lg:h-[41px] flex items-center'>
                8–10 SEEKErs
              </span>
              <span className='text-[10px] sm:text-sm leading-[16px] sm:leading-[18px] font-semibold text-[#1F232E] uppercase p-[8px_12px] sm:p-[9px_16px] lg:p-[11px_20px] border border-solid border-[#10B981] rounded-[999px] h-[32px] sm:h-[36px] lg:h-[41px] flex items-center'>
                11–13 Makers
              </span>
              <span className='text-[10px] sm:text-sm leading-[16px] sm:leading-[18px] font-semibold text-[#1F232E] uppercase p-[8px_12px] sm:p-[9px_16px] lg:p-[11px_20px] border border-solid border-[#F97316] rounded-[999px] h-[32px] sm:h-[36px] lg:h-[41px] flex items-center'>
                14–16 Risers
              </span>
              <span className='text-[10px] sm:text-sm leading-[16px] sm:leading-[18px] font-semibold text-[#1F232E] uppercase p-[8px_12px] sm:p-[9px_16px] lg:p-[11px_20px] border border-solid border-[#5E17EB] rounded-[999px] h-[32px] sm:h-[36px] lg:h-[41px] flex items-center'>
                17–19 Flyers
              </span>
            </div>
          </div>
        </ScrollAnimatedElement>
      </div>

      <ScrollAnimatedElement delay={0.2} yOffset={40} className='order-1 lg:order-2'>
        <div className='max-w-full lg:max-w-[645px] w-full mx-auto lg:ms-auto relative group'>
          <span className='text-sm sm:text-sm leading-[14px] sm:leading-[16px] font-bold text-[#FFFFFF] uppercase bg-[#5E17EB] rounded-[999px] p-[8px_12px] sm:p-[10px_14px] lg:p-[11px_16px] absolute -top-3 sm:-top-4 lg:-top-[16px] -right-4 sm:-right-6 lg:-right-[36px] rotate-[6deg] z-10 animate-bounce [animation-duration:3s]'>
            <span className="hidden sm:inline">12 Years · 04 Phases</span>
            <span className="sm:hidden">12Y · 4P</span>
          </span>
          <div className='rounded-[12px] overflow-hidden hover:shadow-xl hover:shadow-black/10 transition-shadow duration-500'>
            <img src="/img/scholarship-banner.svg" alt="Scholarship mentorship program phases" className="w-full h-full object-cover transition-transform duration-500 " />
          </div>
        </div>
      </ScrollAnimatedElement>
    </section>
  )
}

export default TreeGrowthCalculator