'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useRef } from 'react'
import ScrollAnimatedElement from '@/Components/Reusable/ScrollAnimatedElement'

const HeroComponent = () => {
    const scrollRef = useRef(null)

    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        let scrollAmount = 0
        const scrollSpeed = 1
        
        const animate = () => {
            scrollAmount += scrollSpeed
            
            // Calculate responsive dimensions
            const getResponsiveDimensions = () => {
                const width = window.innerWidth
                if (width >= 1024) { // lg breakpoint
                    return { logoWidth: 160, gap: 27 }
                } else if (width >= 640) { // sm breakpoint
                    return { logoWidth: 140, gap: 20 }
                } else {
                    return { logoWidth: 120, gap: 16 }
                }
            }
            
            const { logoWidth, gap } = getResponsiveDimensions()
            
            // Calculate the width of one complete set (5 logos + 4 gaps)
            const oneSetWidth = (logoWidth * 5) + (gap * 4)
            
            // Reset when we've scrolled past one complete set
            if (scrollAmount >= oneSetWidth) {
                scrollAmount = 0
            }
            
            scrollContainer.style.transform = `translateX(-${scrollAmount}px)`
            requestAnimationFrame(animate)
        }
        
        const animationId = requestAnimationFrame(animate)
        
        return () => cancelAnimationFrame(animationId)
    }, [])

    return (
        <section>
            <div className='relative overflow-hidden w-full min-h-wrap'>
                
                {/* Background Video Element */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/img/hero-banner-image.svg" /* Fallback image while video loads */
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src="/video/canska-video.mp4" type="video/mp4" />
                    {/* Add fallback sources here if you have .webm formats */}
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay Layer - Keeps typography readable */}
                <div className='relative z-10 bg-[rgba(31,35,46,0.45)] sm:bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(180deg,rgba(31,35,46,0.2)_0%,rgba(31,35,46,0.55)_85%,rgba(31,35,46,0.85)_100%)] p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[29px_95px_127px_48px] grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-0'>

                    {/* Left Column Content */}
                    <div>
                        <ScrollAnimatedElement delay={0.1}>
                            <div className='flex flex-wrap gap-[8px] sm:gap-[12px] mb-[12px]'>
                                <div className='text-[9px] sm:text-[11px] leading-[14px] sm:leading-[16px] text-[#1F232E] p-[4px_8px] sm:p-[6px_12px] bg-[#FFB433F2] rounded-[999px] uppercase'>
                                    World's First
                                </div>
                                <div className='text-[9px] sm:text-[11px] leading-[14px] sm:leading-[16px] text-[#1F232E] p-[4px_8px] sm:p-[6px_12px] rounded-[999px] bg-[#FFFFFF99] border border-solid border-[#FFFFFF33] uppercase'>
                                    Scholarship Incubator
                                </div>
                            </div>
                        </ScrollAnimatedElement>
                        
                        <ScrollAnimatedElement delay={0.2}>
                            <h1 className='text-[38px] sm:text-[48px] xl:text-[64px] 2xl:text-[80px] leading-[40px] sm:leading-[48px] md:leading-[60px] lg:leading-[70px] font-normal text-[#FFFFFF] mb-[12px]'>
                                Build an outstanding
                                <span className='text-[#FFB433] font-medium'> student portfolio </span>  for
                                the world's top-50
                                universities.
                            </h1>
                        </ScrollAnimatedElement>
                        
                        <ScrollAnimatedElement delay={0.3}>
                            <p className='text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[26px] lg:leading-[30px] font-normal text-[#FFFFFFCC] mb-[12px]'>
                                The "Quad" is a <span className='text-[#FFFFFF]'>12-year scholarship mentoring program </span> that guides students from age 8 to unlock admissions and US$60K–US$400K+ scholarships at the world's top-50 universities.
                            </p>
                        </ScrollAnimatedElement>
                        
                        <ScrollAnimatedElement delay={0.4}>
                            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-[12px] sm:gap-[16px] mb-[32px]'>
                                <Link href="#contact" className='bg-[#FFB433] hover:bg-[#E6A02E] p-[12px_20px] sm:p-[15px_27px] flex items-center gap-[8px] sm:gap-[10px] text-sm sm:text-sm leading-[18px] sm:leading-[21px] font-bold text-[#1F232E] shadow-[0px_4px_4px_0px_#00000026] rounded-[999px] w-full sm:w-auto justify-center sm:justify-start transition-all duration-300 ease-in-out hover:shadow-[0px_6px_8px_0px_#00000033]'>Get a Free Evaluation</Link>
                                <Link href="#contact" className='border border-solid border-[#FFFFFF33] hover:border-[#FFFFFF66] p-[12px_20px] sm:p-[15px_27px] flex items-center gap-[8px] sm:gap-[10px] text-sm sm:text-sm leading-[18px] sm:leading-[21px] font-bold text-[#FFFFFF] bg-[#FFFFFF1A] hover:bg-[#FFFFFF2A] shadow-[0px_4px_4px_0px_#00000026] rounded-[999px] w-full sm:w-auto justify-center sm:justify-start transition-all duration-300 ease-in-out hover:shadow-[0px_6px_8px_0px_#00000033]'>Book a 20-Minute Meeting</Link>
                            </div>
                        </ScrollAnimatedElement>
                        
                        <ScrollAnimatedElement delay={0.5}>
                            <div className='grid grid-cols-[auto_auto] sm:flex sm:flex-wrap gap-[16px] sm:gap-[20px] lg:gap-[40px] mb-[40px] sm:mb-[60px]'>
                                <div>
                                    <h3 className='text-[32px] sm:text-[40px] lg:text-[48px] leading-[28px] sm:leading-[34px] lg:leading-[39px] font-normal text-[#FFFFFF] mb-[6px] sm:mb-[8px]'>500+</h3>
                                    <p className='text-sm sm:text-sm leading-[16px] sm:leading-[18px] font-normal text-[#FFFFFFCC]'>Students mentored</p>
                                </div>
                                <div>
                                    <h3 className='text-[32px] sm:text-[40px] lg:text-[48px] leading-[28px] sm:leading-[34px] lg:leading-[39px] font-normal text-[#FFFFFF] mb-[6px] sm:mb-[8px]'>Top 50</h3>
                                    <p className='text-sm sm:text-sm leading-[16px] sm:leading-[18px] font-normal text-[#FFFFFFCC]'>Target universities</p>
                                </div>
                                <div>
                                    <h3 className='text-[32px] sm:text-[40px] lg:text-[48px] leading-[28px] sm:leading-[34px] lg:leading-[39px] font-normal text-[#FFFFFF] mb-[6px] sm:mb-[8px]'>US$400K+</h3>
                                    <p className='text-sm sm:text-sm leading-[16px] sm:leading-[18px] font-normal text-[#FFFFFFCC]'>Max scholarship</p>
                                </div>
                                <div>
                                    <h3 className='text-[32px] sm:text-[40px] lg:text-[48px] leading-[28px] sm:leading-[34px] lg:leading-[39px] font-normal text-[#FFFFFF] mb-[6px] sm:mb-[8px]'>98%</h3>
                                    <p className='text-sm sm:text-sm leading-[16px] sm:leading-[18px] font-normal text-[#FFFFFFCC]'>Acceptance rate</p>
                                </div>
                            </div>
                        </ScrollAnimatedElement>

                        <ScrollAnimatedElement delay={0.6}>
                            <p className='text-[10px] sm:text-[11px] leading-[14px] sm:leading-[16px] font-normal text-[#FFFFFFB2] flex items-center gap-[8px] sm:gap-[12px] before:w-[30px] sm:before:w-[40px] before:h-[1px] before:bg-[#FFFFFF66]'>Scroll · The Marathon Begins</p>
                        </ScrollAnimatedElement>
                    </div>

                    {/* Right Column Content */}
                    <div className='flex flex-col justify-between gap-[16px]'>
                        <ScrollAnimatedElement delay={0.3} yOffset={30}>
                            <div className='p-[16px] sm:p-[20px] bg-[#FAF8F3] rounded-[16px] lg:max-w-[280px] ms-auto w-full'>
                                <span className='inline-block p-[4px_8px] sm:p-[6px_12px] rounded-[999px] bg-[#FFB433] text-[10px] sm:text-[11px] leading-[14px] sm:leading-[16px] font-bold text-[#1F232E] mb-[8px] sm:mb-[12px]'>Live Cohort</span>
                                <h3 className='text-[14px] sm:text-[13px] leading-[18px] sm:leading-[21px] font-normal text-[#1F232ECC] mb-[12px] sm:mb-[16px]'>Currently mentoring 500+ students across 8–19 years. Earlier you start, more you unlock.</h3>
                                <div className='flex'>
                                    <img src="/img/profile1.svg" alt="" className='-ms-[8px] sm:-ms-[10px] bg-white rounded-full w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] min-w-[28px] sm:min-w-[32px]' />
                                    <img src="/img/profile2.svg" alt="" className='-ms-[8px] sm:-ms-[10px] bg-white rounded-full w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] min-w-[28px] sm:min-w-[32px]' />
                                    <img src="/img/profile3.svg" alt="" className='-ms-[8px] sm:-ms-[10px] bg-white rounded-full w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] min-w-[28px] sm:min-w-[32px]' />
                                    <img src="/img/add-profile.svg" alt="" className='-ms-[8px] sm:-ms-[10px] bg-white rounded-full w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] min-w-[28px] sm:min-w-[32px]' />
                                </div>
                            </div>
                        </ScrollAnimatedElement>

                        <ScrollAnimatedElement delay={0.5} yOffset={40}>
                            <div className='p-[16px] sm:p-[20px] bg-[#FAF8F3] rounded-[16px] lg:max-w-[360px] ms-auto w-full'>
                               <div className='mb-[8px] sm:mb-[12px] flex items-start gap-[12px] sm:gap-[16px] justify-between'>
                                 <span className='text-[10px] sm:text-[11px] leading-[14px] sm:leading-[16px] font-bold text-[#5E17EB] uppercase'>Why Start at 8</span>
                                 <a href="#early-planning" className="group inline-block">
                                    <img src="/img/arrow.svg" alt="" className="w-[16px] sm:w-auto transition-transform duration-300 ease-in-out group-hover:rotate-90" />
                                 </a>
                               </div>
                                <div className='pb-[12px] sm:pb-[16px] mb-[12px] sm:mb-[16px] border-b border-solid border-[#1F232E26]'>
                                    <h3 className='text-[18px] sm:text-[22px] leading-[22px] sm:leading-[27px] font-normal text-[#1F232E]'>Ages <span className='text-[#5E17EB]'>8–19</span> are the most crucial growth years.</h3>
                                </div>
                                <div className='flex gap-[12px] sm:gap-[16px] justify-between'>
                                 <p className='text-[10px] sm:text-[11px] leading-[14px] sm:leading-[16px] font-normal text-[#1F232E] uppercase'>Phase 01 · Seekers</p>
                                 <p className='text-[10px] sm:text-[11px] leading-[14px] sm:leading-[16px] font-normal text-[#1F232E] uppercase'>04 Phases</p>
                                </div>
                            </div>
                        </ScrollAnimatedElement>
                    </div>

                </div>
            </div>

            <div className='p-[0_16px_0px] sm:p-[0_32px_0px] lg:p-[0_61px_0px] bg-[#FAF8F3]'>
                <div className='bg-[#FAF8F3] relative z-10 -top-[30px] sm:-top-[40px] lg:-top-[47px] rounded-[16px] p-[30px_16px_50px_16px] sm:p-[40px_16px_60px_20px] lg:p-[50px_16px_84px_27px]'>

                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-[12px] gap-y-[20px] lg:gap-y-0 items-end mb-[32px] sm:mb-[40px] lg:mb-[52px]">
                        <ScrollAnimatedElement delay={0.2}>
                            <div>
                                <p className='text-[10px] sm:text-[11px] leading-[14px] sm:leading-[16px] font-bold text-[#5E17EB] mb-[12px] sm:mb-[16px] uppercase'>— Top 50 Target Universities</p>
                                <h3 className='text-[32px] sm:text-[44px] lg:text-[56px] leading-[36px] sm:leading-[50px] lg:leading-[68px] text-[#1F232E] font-normal'>Where Quad students land & thrive.</h3>
                            </div>
                        </ScrollAnimatedElement>
                        <ScrollAnimatedElement delay={0.4} className='lg:row-start-2 lg:col-start-2'>
                            <div>
                                <p className='text-[14px] sm:text-sm leading-[18px] sm:leading-[22px] font-normal text-[#1F232EB2] ps-[8px] sm:ps-[12px] border-s-[2px] sm:border-s-[3px] border-solid border-[#5E17EB]'> The universities and colleges shown represent examples of institutions where students with standout portfolios often gain admissions and scholarships.</p>
                            </div>
                        </ScrollAnimatedElement>
                    </div>
                    <ScrollAnimatedElement className='overflow-hidden relative' delay={0.6}>
                        <div 
                            ref={scrollRef}
                            className='flex gap-[16px] sm:gap-[20px] lg:gap-[27px]'
                        >
                            {/* First set of logos */}
                            <div className='flex-shrink-0 border border-solid border-[#E8E3D8] bg-white p-[20px_10px] sm:p-[30px_12px] lg:p-[40px_17px] flex items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[120px] sm:w-[140px] lg:w-[160px] min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[110px]'>
                                <img className='w-full object-contain' src="/img/cambridge.svg" alt="Massachusetts Institute of Technology" />
                            </div>
                            <div className='flex-shrink-0 border border-solid border-[#E8E3D8] bg-white p-[20px_10px] sm:p-[30px_12px] lg:p-[40px_17px] flex items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[120px] sm:w-[140px] lg:w-[160px] min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[110px]'>
                                <img className='w-full object-contain' src="/img/eth.svg" alt="Imperial College London" />
                            </div>
                            <div className='flex-shrink-0 border border-solid border-[#E8E3D8] bg-white p-[20px_10px] sm:p-[30px_12px] lg:p-[40px_17px] flex items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[120px] sm:w-[140px] lg:w-[160px] min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[110px]'>
                                <img className='w-full object-contain' src="/img/nus.svg" alt="Harvard University" />
                            </div>
                            <div className='flex-shrink-0 border border-solid border-[#E8E3D8] bg-white p-[20px_10px] sm:p-[30px_12px] lg:p-[40px_17px] flex items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[120px] sm:w-[140px] lg:w-[160px] min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[110px]'>
                                <img className='w-full object-contain' src="/img/ucl.svg" alt="Stanford University" />
                            </div>
                            <div className='flex-shrink-0 border border-solid border-[#E8E3D8] bg-white p-[20px_10px] sm:p-[30px_12px] lg:p-[40px_17px] flex items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[120px] sm:w-[140px] lg:w-[160px] min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[110px]'>
                                <img className='w-full object-contain' src="/img/caltech.svg" alt="Oxford University" />
                            </div>
                            {/* Second set for seamless loop */}
                            <div className='flex-shrink-0 border border-solid border-[#E8E3D8] bg-white p-[20px_10px] sm:p-[30px_12px] lg:p-[40px_17px] flex items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[120px] sm:w-[140px] lg:w-[160px] min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[110px]'>
                                <img className='w-full object-contain' src="/img/cambridge.svg" alt="Massachusetts Institute of Technology" />
                            </div>
                            <div className='flex-shrink-0 border border-solid border-[#E8E3D8] bg-white p-[20px_10px] sm:p-[30px_12px] lg:p-[40px_17px] flex items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[120px] sm:w-[140px] lg:w-[160px] min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[110px]'>
                                <img className='w-full object-contain' src="/img/eth.svg" alt="Imperial College London" />
                            </div>
                            <div className='flex-shrink-0 border border-solid border-[#E8E3D8] bg-white p-[20px_10px] sm:p-[30px_12px] lg:p-[40px_17px] flex items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[120px] sm:w-[140px] lg:w-[160px] min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[110px]'>
                                <img className='w-full object-contain' src="/img/nus.svg" alt="Harvard University" />
                            </div>
                            <div className='flex-shrink-0 border border-solid border-[#E8E3D8] bg-white p-[20px_10px] sm:p-[30px_12px] lg:p-[40px_17px] flex items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[120px] sm:w-[140px] lg:w-[160px] min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[110px]'>
                                <img className='w-full object-contain' src="/img/ucl.svg" alt="Stanford University" />
                            </div>
                            <div className='flex-shrink-0 border border-solid border-[#E8E3D8] bg-white p-[20px_10px] sm:p-[30px_12px] lg:p-[40px_17px] flex items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[120px] sm:w-[140px] lg:w-[160px] min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[110px]'>
                                <img className='w-full object-contain' src="/img/caltech.svg" alt="Oxford University" />
                            </div>
                            {/* Third set for extra buffer */}
                            <div className='flex-shrink-0 border border-solid border-[#E8E3D8] bg-white p-[20px_10px] sm:p-[30px_12px] lg:p-[40px_17px] flex items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[120px] sm:w-[140px] lg:w-[160px] min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[110px]'>
                                <img className='w-full object-contain' src="/img/cambridge.svg" alt="Massachusetts Institute of Technology" />
                            </div>
                            <div className='flex-shrink-0 border border-solid border-[#E8E3D8] bg-white p-[20px_10px] sm:p-[30px_12px] lg:p-[40px_17px] flex items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[120px] sm:w-[140px] lg:w-[160px] min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[110px]'>
                                <img className='w-full object-contain' src="/img/eth.svg" alt="Imperial College London" />
                            </div>
                            <div className='flex-shrink-0 border border-solid border-[#E8E3D8] bg-white p-[20px_10px] sm:p-[30px_12px] lg:p-[40px_17px] flex items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[120px] sm:w-[140px] lg:w-[160px] min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[110px]'>
                                <img className='w-full object-contain' src="/img/nus.svg" alt="Harvard University" />
                            </div>
                            <div className='flex-shrink-0 border border-solid border-[#E8E3D8] bg-white p-[20px_10px] sm:p-[30px_12px] lg:p-[40px_17px] flex items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[120px] sm:w-[140px] lg:w-[160px] min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[110px]'>
                                <img className='w-full object-contain' src="/img/ucl.svg" alt="Stanford University" />
                            </div>
                            <div className='flex-shrink-0 border border-solid border-[#E8E3D8] bg-white p-[20px_10px] sm:p-[30px_12px] lg:p-[40px_17px] flex items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[120px] sm:w-[140px] lg:w-[160px] min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[110px]'>
                                <img className='w-full object-contain' src="/img/caltech.svg" alt="Oxford University" />
                            </div>
                        </div>
                    </ScrollAnimatedElement>

                </div>
            </div>

            {/* <div className='bg-[#0F172A] p-[40px_16px] lg:p-[120px_56px] !delay-0'>


                <ScrollAnimatedElement>
                    <ScrollWordAnimation 
                        className='text-[40px] sm:text-[44px] leading-[48px] sm:leading-[56px] xl:text-[48px] xl:leading-[62px] font-medium mb-[40px] text-center max-w-[1328px] mx-auto'
                    >
                        They say it takes 12 years for a tree to grow.
                        Do you know which ages are … 
                        the most important in a child's development?
                    </ScrollWordAnimation>
                </ScrollAnimatedElement>


            </div> */}

        </section>
    )
}

export default HeroComponent