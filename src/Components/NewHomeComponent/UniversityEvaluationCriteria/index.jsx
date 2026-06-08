import React from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'

const UniversityEvaluationCriteria = () => {
  return (
    <section className='bg-[#FFFFFF] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:p-[64px_61px]'>
      <ScrollAnimatedElement delay={0.1}>
        <div className='grid items-end grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-0 mb-8 md:mb-12 '>
          <ScrollAnimatedElement delay={0.1}>
            <div className='max-w-full lg:max-w-[850px]'>
              <div className="flex items-center mb-5 space-x-2 text-sm font-bold tracking-widest text-[#5E17EB] hover:text-[#4A0FC7] uppercase transition-colors duration-300  group">
                <span className="w-4 h-[2px] bg-[#5E17EB] group-hover:bg-[#4A0FC7] group-hover:w-6 transition-all duration-300"></span>
                <span>Why Universities Prefer Portfolios</span>
              </div>
              <h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[1.1] sm:leading-[1.05] md:leading-[1] lg:leading-[64px] font-normal text-[#1F232E]'>
                Top-50 universities evaluate  <span className='text-[#5E17EB]'>beyond grades.</span>
              </h3>
            </div>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement delay={0.3}>
            <div className='max-w-full lg:max-w-[368px] lg:ms-auto lg:self-end'>
              <p className='text-sm sm:text-base leading-[22px] sm:leading-[26px] font-normal text-[#1F232EB2] border-s-[3px] border-solid border-[#5E17EB] ps-3 lg:ps-[12px]'>A well-crafted portfolio highlights what exam transcripts alone cannot convey. Admissions committees weigh five acceptance factors.
              </p>
            </div>
          </ScrollAnimatedElement>
        </div>
      </ScrollAnimatedElement>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
        <ScrollAnimatedElement delay={0.2} yOffset={60}>
          <div className='group rounded-[16px] overflow-hidden bg-[#FAF8F3] border border-solid border-[#E8E3D8] h-full'>
            <div className='h-[280px] sm:h-[320px] md:h-[333px] lg:h-[333px] overflow-hidden relative before:absolute before:bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(0deg,#1F232E_0%,rgba(31,35,46,0.3)_50%,rgba(31,35,46,0)_100%)] before:w-full before:h-full before:z-[1]'>
              <div className='flex gap-[6px] md:gap-[8px] items-center absolute top-3 md:top-4 lg:top-[20px] left-3 md:left-4 lg:left-[20px] z-[1]'>
                <span className='text-2xl sm:text-3xl lg:text-[35px] leading-[28px] sm:leading-[30px] lg:leading-[32px] font-normal text-[#FFFFFF]'>01</span>
              </div>
              <img src="/img/academic-performance.svg" alt="seekers" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0 relative' />
              <h4 className='text-xl lg:text-[22px] leading-[24px] lg:leading-[27px] font-normal text-[#FFFFFF] absolute left-3 md:left-[12px] bottom-3 md:bottom-4 lg:bottom-[16px] font-poppins z-[1]'>Academic Performance</h4>
            </div>
            <div className='p-3 md:p-4 lg:p-[20px_20px_20px_20px]'>
              <h3 className='text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#1F232ECC]'>Demonstrates mastering of subjects and intellectual rigour.</h3>
            </div>
          </div>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement delay={0.4} yOffset={60}>
          <div className='group rounded-[16px] overflow-hidden bg-[#FAF8F3] border border-solid border-[#E8E3D8] h-full'>
            <div className='h-[280px] sm:h-[320px] md:h-[333px] lg:h-[333px] overflow-hidden relative before:absolute before:bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(0deg,#1F232E_0%,rgba(31,35,46,0.3)_50%,rgba(31,35,46,0)_100%)] before:w-full before:h-full before:z-[1]'>
              <div className='flex gap-[6px] md:gap-[8px] items-center absolute top-3 md:top-4 lg:top-[20px] left-3 md:left-4 lg:left-[20px] z-[1]'>
                <span className='text-2xl sm:text-3xl lg:text-[35px] leading-[28px] sm:leading-[30px] lg:leading-[32px] font-normal text-[#FFFFFF]'>02</span>
              </div>
              <img src="/img/intellectual-curiosity.svg" alt="seekers" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0 relative' />
              <h4 className='text-xl lg:text-[22px] leading-[24px] lg:leading-[27px] font-normal text-[#FFFFFF] absolute left-3 md:left-[12px] bottom-3 md:bottom-4 lg:bottom-[16px] font-poppins z-[1]'>Intellectual Curiosity</h4>
            </div>
            <div className='p-3 md:p-4 lg:p-[20px_20px_40px_20px]'>
              <h3 className='text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#1F232ECC]'>Demonstrates mastering of subjects and intellectual rigour.</h3>
            </div>
          </div>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement delay={0.6} yOffset={60}>
         <div className='group rounded-[16px] overflow-hidden bg-[#FAF8F3] border border-solid border-[#E8E3D8] h-full'>
            <div className='h-[280px] sm:h-[320px] md:h-[333px] lg:h-[333px] overflow-hidden relative before:absolute before:bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(0deg,#1F232E_0%,rgba(31,35,46,0.3)_50%,rgba(31,35,46,0)_100%)] before:w-full before:h-full before:z-[1]'>
              <div className='flex gap-[6px] md:gap-[8px] items-center absolute top-3 md:top-4 lg:top-[20px] left-3 md:left-4 lg:left-[20px] z-[1]'>
                <span className='text-2xl sm:text-3xl lg:text-[35px] leading-[28px] sm:leading-[30px] lg:leading-[32px] font-normal text-[#FFFFFF]'>03</span>
              </div>
              <img src="/img/self-initiative.svg" alt="seekers" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0 relative' />
              <h4 className='text-xl lg:text-[22px] leading-[24px] lg:leading-[27px] font-normal text-[#FFFFFF] absolute left-3 md:left-[12px] bottom-3 md:bottom-4 lg:bottom-[16px] font-poppins z-[1]'>Self-Initiative</h4>
            </div>
            <div className='p-3 md:p-4 lg:p-[20px_20px_40px_20px]'>
              <h3 className='text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#1F232ECC]'>Demonstrates mastering of subjects and intellectual rigour.</h3>
            </div>
          </div>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement delay={0.8} yOffset={60}>
          <div className='group rounded-[16px] overflow-hidden bg-[#FAF8F3] border border-solid border-[#E8E3D8] h-full'>
            <div className='h-[280px] sm:h-[320px] md:h-[333px] lg:h-[333px] overflow-hidden relative before:absolute before:bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(0deg,#1F232E_0%,rgba(31,35,46,0.3)_50%,rgba(31,35,46,0)_100%)] before:w-full before:h-full before:z-[1]'>
              <div className='flex gap-[6px] md:gap-[8px] items-center absolute top-3 md:top-4 lg:top-[20px] left-3 md:left-4 lg:left-[20px] z-[1]'>
                <span className='text-2xl sm:text-3xl lg:text-[35px] leading-[28px] sm:leading-[30px] lg:leading-[32px] font-normal text-[#FFFFFF]'>04</span>
              </div>
              <img src="/img/leadership.svg" alt="seekers" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0 relative' />
              <h4 className='text-xl lg:text-[22px] leading-[24px] lg:leading-[27px] font-normal text-[#FFFFFF] absolute left-3 md:left-[12px] bottom-3 md:bottom-4 lg:bottom-[16px] font-poppins z-[1]'>Leadership</h4>
            </div>
            <div className='p-3 md:p-4 lg:p-[20px_20px_40px_20px]'>
              <h3 className='text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#1F232ECC]'>Shows the aptitude to inspire, organise and guide others toward a goal.</h3>
            </div>
          </div>
        </ScrollAnimatedElement>

         <ScrollAnimatedElement delay={1.0} yOffset={60}>
          <div className='group rounded-[16px] overflow-hidden bg-[#FAF8F3] border border-solid border-[#E8E3D8] h-full'>
            <div className='h-[280px] sm:h-[320px] md:h-[333px] lg:h-[333px] overflow-hidden relative before:absolute before:bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(0deg,#1F232E_0%,rgba(31,35,46,0.3)_50%,rgba(31,35,46,0)_100%)] before:w-full before:h-full before:z-[1]'>
              <div className='flex gap-[6px] md:gap-[8px] items-center absolute top-3 md:top-4 lg:top-[20px] left-3 md:left-4 lg:left-[20px] z-[1]'>
                <span className='text-2xl sm:text-3xl lg:text-[35px] leading-[28px] sm:leading-[30px] lg:leading-[32px] font-normal text-[#FFFFFF]'>05</span>
              </div>
              <img src="/img/social-impact.svg" alt="seekers" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0 relative' />
              <h4 className='text-xl lg:text-[22px] leading-[24px] lg:leading-[27px] font-normal text-[#FFFFFF] absolute left-3 md:left-[12px] bottom-3 md:bottom-4 lg:bottom-[16px] font-poppins z-[1]'>Social Impact</h4>
            </div>
            <div className='p-3 md:p-4 lg:p-[20px_20px_40px_20px]'>
              <h3 className='text-sm sm:text-sm leading-[16px] sm:leading-[20px] font-normal text-[#1F232ECC]'>Highlights contributions to community and efforts to make a difference.</h3>
            </div>
          </div>
        </ScrollAnimatedElement>
      </div>
    </section>
  )
}

export default UniversityEvaluationCriteria