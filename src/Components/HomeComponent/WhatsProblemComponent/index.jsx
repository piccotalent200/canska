'use client'
import React, { useState, useEffect } from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'

const WhatsProblemComponent = () => {
    const [activeSection, setActiveSection] = useState('seekers')

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['seekers', 'makers', 'risers', 'flyers']
            const scrollPosition = window.scrollY + 200 // Reduced offset for better detection

            let currentSection = 'seekers' // Default to first sectionss

            sections.forEach(sectionId => {
                const element = document.getElementById(sectionId)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    const elementTop = rect.top + window.scrollY
                    
                    // Check if section is in viewport
                    if (elementTop <= scrollPosition) {
                        currentSection = sectionId
                    }
                }
            })

            setActiveSection(currentSection)
        }

        // Add a small delay to ensure elements are rendered
        const timeoutId = setTimeout(() => {
            handleScroll()
        }, 100)

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timeoutId)
        }
    }, [])
    return (
        <>
        <section className='p-[40px_16px] xl:p-[80px_56px_80px_56px] bg-[url("/img/problem-bg.png")] bg-[100%_auto] bg-center bg-fixed sticky top-[80px]'>

            <div className=''>
                <ScrollAnimatedElement>
                    <div className='mb-[40px] xl:mb-[56px]'>
                        <div className='mb-[32px] bg-[linear-gradient(90deg,_#7F00FF_0%,_#AA8DC6_100%)] rounded-[8px] p-[12px] w-fit'>
                            <img src="/img/problem.svg" alt="" />
                        </div>
                        <h3 className='text-[40px] lg:text-[44px] xl:text-[48px] leading-normal xl:leading-[60px] font-semibold text-[#FFFFFF] mb-[16px]'>WHAT'S THE <span className='text-transparent bg-[linear-gradient(90deg,_#7F00FF_0%,_#AA8DC6_100%)] bg-clip-text'>PROBLEM?</span></h3>
                        <p className='text-[20px] leading-[32px] font-normal text-[#FFFFFF] mb-[]'>Students and parents start preparing for admissions too late!</p>
                    </div>
                </ScrollAnimatedElement>

                <div className='grid lg:grid-cols-2 gap-[16px]'>
                    <ScrollAnimatedElement delay={0.3} yOffset={60}>
                        <div className='h-full grid items-center bg-[#0E1627] rounded-[10px] bg-[url("/img/info.svg")] p-[32px_16px] sm:p-[32px] bg-no-repeat bg-left'>
                            <h4 className='text-[20px] leading-[32px] font-normal text-[#FFFFFF] mb-[16px]'>At age 17</h4>
                            <p className='text-[20px] leading-[28px] font-normal text-[#FFFFFF] mb-[12px]'> × There is no time to build an outstanding portfolio</p>
                            <p className='text-[20px] leading-[28px] font-normal text-[#FFFFFF] mb-[12px]'> × Students depend solely on grades and test scores</p>
                            <p className='text-[20px] leading-[28px] font-normal text-[#FFFFFF] mb-[12px]'> × Admissions and scholarships become incredibly competitive</p>
                        </div>
                    </ScrollAnimatedElement>

                    <ScrollAnimatedElement delay={0.5} yOffset={60}>
                        <div className='h-full grid items-center bg-[#0E1627] rounded-[10px] bg-[url("/img/result.svg")] p-[32px_16px] sm:p-[32px] bg-no-repeat bg-left'>
                            <p className='text-[20px] leading-[28px] font-normal text-[#E4DDEB]'>The result: Higher rejections, increased costs, and greater stress. The skills required for a scholarship can't be mastered in 12 months</p>
                        </div>
                    </ScrollAnimatedElement>
                </div>
            </div>

        </section>

 <section className='p-[40px_16px] xl:p-[80px_56px_80px_56px] bg-[url("/img/problem-bg.png")] bg-[100%_auto] bg-center bg-fixed sticky top-[80px]'>

            {/* WHAT'S THE SOLUTION? */}
            <div className='pb-[40px] xl:pb-[80px] border-b border-solid  border-[#321C48]'>
                <ScrollAnimatedElement>
                    <div className='mb-[16px]'>
                        <div className='mb-[32px] bg-[linear-gradient(90deg,_#7F00FF_0%,_#AA8DC6_100%)] rounded-[8px] p-[12px] w-fit'>
                            <img src="/img/solution.svg" alt="" />
                        </div>
                        <h3 className='text-[40px] lg:text-[44px] xl:text-[48px] leading-normal xl:leading-[60px] font-semibold text-[#FFFFFF] mb-[16px]'>WHAT'S THE  <span className='text-transparent bg-[linear-gradient(90deg,_#7F00FF_0%,_#AA8DC6_100%)] bg-clip-text'>SOLUTION?</span></h3>
                    </div>
                </ScrollAnimatedElement>

                <div className='grid lg:grid-cols-2 gap-[16px] items-center'>
                    <ScrollAnimatedElement delay={0.3} yOffset={60}>
                        <h4 className='text-[40px] lg:text-[44px] xl:text-[48px] leading-normal xl:leading-[60px] font-semibold text-[#FFFFFF]'>The "Quad" Program</h4>
                    </ScrollAnimatedElement>

                    <ScrollAnimatedElement delay={0.5} yOffset={60}>
                        <p className='text-[20px] leading-[32px] font-normal text-[#FFFFFF]'>A long-term incubator program designed to help students gradually build an amazing academic profile, extracurricular activities, indispensable skills, real world projects, and leadership experience, so that by the time they apply to universities, their applications definitely stand out and admissions officers are awestruck by their personal portfolio</p>
                    </ScrollAnimatedElement>
                </div>
            </div>

            <div className='grid md:grid-cols-[156px_1fr] lg:ms-[64px] lg:border-s border-solid border-[#321C48] pt-[40px] md:pt-[80px]'>
                <ScrollAnimatedElement delay={0.2} className='max-lg:sticky max-lg:top-[80px] max-lg:bg-white/10 max-md:hidden'>
                    <div className='h-fit sticky top-[136px] max-lg:flex gap-[16px] max-lg:py-[16px] '>
                        <a href="#seekers" className={`whitespace-nowrap text-base leading-[20px] font-normal text-[#A263E1] w-fit block mb-[8px] flex items-center gap-[8px] transition-all duration-200 before:content-[''] before:w-[9px] before:h-[9px] before:bg-[#7F00FF] before:rounded-full before:opacity-0 [&.active]:before:opacity-100 [&.active]:text-[#FFFFFF] -ms-[5px] ${activeSection === 'seekers' ? 'active' : ''}`}>Phase 1</a>
                        <a href="#makers" className={`whitespace-nowrap text-base leading-[20px] font-normal text-[#A263E1] w-fit block mb-[8px] flex items-center gap-[8px] transition-all duration-200 before:content-[''] before:w-[9px] before:h-[9px] before:bg-[#7F00FF] before:rounded-full before:opacity-0 [&.active]:before:opacity-100 [&.active]:text-[#FFFFFF] -ms-[5px] ${activeSection === 'makers' ? 'active' : ''}`}>Phase 2</a>
                        <a href="#risers" className={`whitespace-nowrap text-base leading-[20px] font-normal text-[#A263E1] w-fit block mb-[8px] flex items-center gap-[8px] transition-all duration-200 before:content-[''] before:w-[9px] before:h-[9px] before:bg-[#7F00FF] before:rounded-full before:opacity-0 [&.active]:before:opacity-100 [&.active]:text-[#FFFFFF] -ms-[5px] ${activeSection === 'risers' ? 'active' : ''}`}>Phase 3</a>
                        <a href="#flyers" className={`whitespace-nowrap text-base leading-[20px] font-normal text-[#A263E1] w-fit block mb-[8px] flex items-center gap-[8px] transition-all duration-200 before:content-[''] before:w-[9px] before:h-[9px] before:bg-[#7F00FF] before:rounded-full before:opacity-0 [&.active]:before:opacity-100 [&.active]:text-[#FFFFFF] -ms-[5px] ${activeSection === 'flyers' ? 'active' : ''}`}>Phase 4</a>
                    </div>
                </ScrollAnimatedElement>

                <div>
                    <ScrollAnimatedElement className=' last:mb-[56px] pb-[56px]'>
                        <div id='seekers' className='grid md:grid-cols-[427px_1fr] gap-[32px] '>
                            <div>
                                <div className='before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#A263E1] flex items-center gap-[8px] before:min-w-[6px] border border-solid border-[#A263E1] rounded-[18px] shadow-[0px_0px_32px_0px_#7F00FFA3] mb-[12px] text-base leading-[20px] font-normal text-[#A263E1] p-[8px_16px] w-fit'>
                                    Phase 1: Seekers
                                </div>
                                <h2 className='text-[32px] xl:text-[36px] leading-normal xl:leading-[48px] font-medium text-[#FFFFFF]'>SEEKERS</h2>
                                <h3 className='text-[24px] leading-[30px] font-medium text-[#9A4EE6] mb-[16px] sm:mb-[24px]'>(Ages 8, 9, and 10)</h3>
                                <p className='text-[20px] leading-[32px] font-normal text-[#F3EFF6]'>Curiosity, Exploration, and Discovering Interests</p>
                            </div>
                            <div className='rounded-[16px] overflow-hidden'>
                                <img src="/img/solution-banner.svg" alt="" className='w-full' />
                            </div>
                        </div>
                    </ScrollAnimatedElement>

                    <ScrollAnimatedElement className=' last:mb-[56px] pb-[56px]'>
                        <div id='makers' className='grid md:grid-cols-[427px_1fr] gap-[32px] '>
                            <div>
                                <div className='before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#A263E1] flex items-center gap-[8px] before:min-w-[6px] border border-solid border-[#A263E1] rounded-[18px] shadow-[0px_0px_32px_0px_#7F00FFA3] mb-[12px] text-base leading-[20px] font-normal text-[#A263E1] p-[8px_16px] w-fit'>
                                    Phase 2: Makers
                                </div>
                                <h2 className='text-[32px] xl:text-[36px] leading-normal xl:leading-[48px] font-medium text-[#FFFFFF]'>MAKERS</h2>
                                <h3 className='text-[24px] leading-[30px] font-medium text-[#9A4EE6] mb-[16px] sm:mb-[24px]'>(Ages 11, 12, and 13)</h3>
                                <p className='text-[20px] leading-[32px] font-normal text-[#F3EFF6]'>"Spike" Mastering, Projects, and Certifications</p>
                            </div>
                            <div className='rounded-[16px] overflow-hidden'>
                                <img src="/img/seekers.svg" alt="" className='w-full' />
                            </div>
                        </div>
                    </ScrollAnimatedElement>

                    <ScrollAnimatedElement className=' last:mb-[56px] pb-[56px]'>
                        <div id='risers' className='grid md:grid-cols-[427px_1fr] gap-[32px] '>
                            <div>
                                <div className='before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#A263E1] flex items-center gap-[8px] before:min-w-[6px] border border-solid border-[#A263E1] rounded-[18px] shadow-[0px_0px_32px_0px_#7F00FFA3] mb-[12px] text-base leading-[20px] font-normal text-[#A263E1] p-[8px_16px] w-fit'>
                                    Phase 3: Risers
                                </div>
                                <h2 className='text-[32px] xl:text-[36px] leading-normal xl:leading-[48px] font-medium text-[#FFFFFF]'>RISERS</h2>
                                <h3 className='text-[24px] leading-[30px] font-medium text-[#9A4EE6] mb-[16px] sm:mb-[24px]'>(Ages 14, 15, and 16)</h3>
                                <p className='text-[20px] leading-[32px] font-normal text-[#F3EFF6]'>Competitions, Validations, and Achievements</p>
                            </div>
                            <div className='rounded-[16px] overflow-hidden'>
                                <img src="/img/risers.svg" alt="" className='w-full' />
                            </div>
                        </div>
                    </ScrollAnimatedElement>

                    <ScrollAnimatedElement className=' last:mb-[56px] pb-[56px]'>
                        <div id='flyers' className='grid md:grid-cols-[427px_1fr] gap-[32px] '>
                            <div>
                                <div className='before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#A263E1] flex items-center gap-[8px] before:min-w-[6px] border border-solid border-[#A263E1] rounded-[18px] shadow-[0px_0px_32px_0px_#7F00FFA3] mb-[12px] text-base leading-[20px] font-normal text-[#A263E1] p-[8px_16px] w-fit'>
                                    Phase 4: Flyers
                                </div>
                                <h2 className='text-[32px] xl:text-[36px] leading-normal xl:leading-[48px] font-medium text-[#FFFFFF]'>FLYERS</h2>
                                <h3 className='text-[24px] leading-[30px] font-medium text-[#9A4EE6] mb-[16px] sm:mb-[24px]'>(Ages 17, 18, and 19)</h3>
                                <p className='text-[20px] leading-[32px] font-normal text-[#F3EFF6]'>University Admissions and Scholarship Strategy</p>
                            </div>
                            <div className='rounded-[16px] overflow-hidden'>
                                <img src="/img/flyers.svg" alt="" className='w-full' />
                            </div>
                        </div>
                    </ScrollAnimatedElement>
                </div>
            </div>
              </section>
              </>
    )
}

export default WhatsProblemComponent