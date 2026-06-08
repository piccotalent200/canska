'use client'
import React from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'

const WhatCanskaDoComponent = () => {
    return (
        <section className='p-[40px_16px] xl:p-[56px_56px_80px_56px] relative'>
            <span className='bg-[url("/img/canska-bg.svg")] bg-cover bg-center  absolute w-full h-full object-cover object-contain left-0 top-0 opacity-[50%] blur-[120px]'>
            </span>

            <div className='relative z-[1]'>

                <ScrollAnimatedElement>
                    <h1 className='text-[48px] font-semibold text-[#111827] leading-[60px] max-w-[880px] text-center w-full mb-[56px] mx-auto'>What does <span className='text-transparent bg-[linear-gradient(90deg,_#7F00FF_0%,_#AA8DC6_100%)] bg-clip-text'> Canska </span> Do?</h1>
                </ScrollAnimatedElement>

                <div className='grid lg:grid-cols-[1.1fr_1fr] gap-[50px]'>
                    <ScrollAnimatedElement >
                        <p className='text-[24px] leading-[34px] font-normal text-[#111827]'>
                            <span className="font-medium">Canska</span> is the world's first scholarship incubation program that empowers students to build a truly exceptional portfolio over 12 years, supporting them gain admission to the world's Top-50 universities and colleges and receive high-value scholarships. Unlike traditional approaches that begin university admissions preparation at the age of 17, the "Quad" program follows a long-term, step-by-step approach, guiding students from the age of 8 to develop their academic strengths, extracurricular achievements, and leadership skills through an exclusive, highly structured, and strategic methodology.
                        </p>
                    </ScrollAnimatedElement>

                    <ScrollAnimatedElement >
                        <h3 className='text-[18px] leading-[23px] font-semibold uppercase mb-[16px] text-[#7F00FF]'>High-Impact "Quad" Outcomes</h3>

                        <div className='grid grid-cols-2 gap-[16px]'>
                            <ScrollAnimatedElement >
                                <div className="border border-solid border-[#7F00FF] rounded-[16px] bg-[#F8F2FF] p-[16px] sm:p-[24px]">
                                    <img src="/img/exceptional-student.svg" className='mb-[8px]' alt="" />
                                    <p className='text-[22px] leading-[28px] font-medium text-[#7F00FF]'>Exceptional Student Portfolio</p>
                                </div>
                            </ScrollAnimatedElement>

                            <ScrollAnimatedElement >
                                <div className="border border-solid border-[#7F00FF] rounded-[16px] bg-[#F8F2FF] p-[16px] sm:p-[24px]">
                                    <img src="/img/exceptional-student.svg" className='mb-[8px]' alt="" />
                                    <p className='text-[22px] leading-[28px] font-medium text-[#7F00FF]'>Top University Admission</p>
                                </div>
                            </ScrollAnimatedElement>

                            <ScrollAnimatedElement >
                                <div className="border border-solid border-[#7F00FF] rounded-[16px] bg-[#F8F2FF] p-[16px] sm:p-[24px]">
                                    <img src="/img/exceptional-student.svg" className='mb-[8px]' alt="" />
                                    <p className='text-[22px] leading-[28px] font-medium text-[#7F00FF]'>High-Value Scholarships</p>
                                </div>
                            </ScrollAnimatedElement>

                            <ScrollAnimatedElement >
                                <div className="border border-solid border-[#7F00FF] rounded-[16px] bg-[#F8F2FF] p-[16px] sm:p-[24px]">
                                    <img src="/img/exceptional-student.svg" className='mb-[8px]' alt="" />
                                    <p className='text-[22px] leading-[28px] font-medium text-[#7F00FF]'>Leadership Development</p>
                                </div>
                            </ScrollAnimatedElement>
                        </div>
                    </ScrollAnimatedElement>
                </div>

                <ScrollAnimatedElement>
                    <div className='flex items-center gap-[5px] border border-solid border-[#E8E8E8] bg-[#EDEBF0] rounded-[10px]  p-[14px_16px] mt-[32px]'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_0_81)">
                                <path d="M8 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8 1.33325C4.3181 1.33325 1.33334 4.31802 1.33334 7.99992C1.33334 11.6818 4.3181 14.6666 8 14.6666Z" stroke="#5F3B83" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 10.6667V7.66675" stroke="#5F3B83" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 5.34096V5.33447" stroke="#5F3B83" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_81">
                                    <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='text-[14px] leading-[20px] font-normal text-[#111827]'>Disclaimer: Outcomes will vary depending on each student’s starting phase, level of engagement, personal effort, and progress. Success is not completely dependent on Canska,  <span className='cursor-pointer text-[14px] leading-[20px] font-medium text-[#7F00FF]'>see more...</span></p>
                    </div>
                </ScrollAnimatedElement>

            </div>

        </section>
    )
}

export default WhatCanskaDoComponent