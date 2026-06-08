'use client'
import React from 'react'
import Image from 'next/image'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import ScrollWordAnimation from '../../Reusable/ScrollWordAnimation'

const UniversityAspirationComponentBlue = () => {
    return (
        <ScrollAnimatedElement className='bg-[url("/img/aspire.svg")] bg-cover p-[40px_16px] lg:p-[10px_56px_80px] '>

            <ScrollAnimatedElement className='relative lg:-top-[130px] bg-white shadow-[0px_4px_24px_0px_#00000029] rounded-[10px] p-[40px_16px] lg:p-[40px_32px] xl:p-[48px_56px_56px_56px] max-lg:mb-[40px]'>
                <ScrollAnimatedElement>
                    <h2 className='mb-[40px] text-[44px] xl:text-[48px] leading-[56px] xl:leading-[60px] font-semibold text-[#111827] text-center'>Universities Our <span className='text-transparent bg-[linear-gradient(90deg,_#7F00FF_0%,_#AA8DC6_100%)] bg-clip-text'>Students</span> Aspire To</h2>
                </ScrollAnimatedElement>
                
                <ScrollAnimatedElement className='overflow-hidden relative'>
                    <div className='flex animate-scroll whitespace-nowrap'>
                        {/* First set of logos */}
                        <div className='flex gap-[64px] items-center flex-shrink-0 min-w-max'>
                            <div className='flex-shrink-0'>
                                <img className='h-[56px]' src="/img/massa.svg" alt="Massachusetts Institute of Technology" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img className='h-[56px]' src="/img/imperial-college.svg" alt="Imperial College London" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img className='h-[56px]' src="/img/harvard.svg" alt="Harvard University" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img className='h-[56px]' src="/img/stanford.svg" alt="Stanford University" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img className='h-[56px]' src="/img/oxford.png" alt="Oxford University" />
                            </div>
                        </div>
                        {/* Duplicate set for seamless loop */}
                        <div className='flex gap-[64px] items-center flex-shrink-0 min-w-max ml-[64px]'>
                            <div className='flex-shrink-0'>
                                <img className='h-[56px]' src="/img/massa.svg" alt="Massachusetts Institute of Technology" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img className='h-[56px]' src="/img/imperial-college.svg" alt="Imperial College London" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img className='h-[56px]' src="/img/harvard.svg" alt="Harvard University" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img className='h-[56px]' src="/img/stanford.svg" alt="Stanford University" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img className='h-[56px]' src="/img/oxford.png" alt="Oxford University" />
                            </div>
                        </div>
                    </div>
                </ScrollAnimatedElement>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement>
                <ScrollWordAnimation 
                    className='text-[40px] sm:text-[44px] leading-[48px] sm:leading-[56px] xl:text-[48px] xl:leading-[62px] font-medium text-[#A8B5D0] mb-[40px] text-center max-w-[1328px] mx-auto'
                    targetColor='text-[#7F00FF]'
                    defaultColor='text-[#A8B5D0]'
                >
                    They say it takes 12 years for a tree to grow.
                    Do you know which ages are … 
                    the most important in a child's development?
                </ScrollWordAnimation>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement>
                <input type="text" placeholder='e.g. Ages 3 to 19' className='outline-none border border-solid border-[#A8ADBD] rounded-[8px] bg-[#ffffff] text-base leading-[20px] font-normal placeholder:text-[#A8B5D0] text-[#111827] p-[16px_28px] block w-full max-w-[502px] mx-auto mb-[40px]' />
            </ScrollAnimatedElement>

            <ScrollAnimatedElement className='flex max-sm:flex-col gap-[16px] sm:gap-[32px] items-center justify-center'>
                <a href="" className='border border-solid border-[#7F00FF] rounded p-[14px_16px] text-base leading-[20px] font-normal text-[#7F00FF] block sm:w-fit w-full text-center transition-all duration-300 hover:bg-[#DBBCFB] hover:text-[#0F172A]'>
                    Get a Free Profile Evaluation
                </a>
                <a href="" className='bg-[#7F00FF] rounded p-[14px_16px] text-base leading-[20px] font-normal text-[#FFFFFF] block sm:w-fit w-full text-center transition-all duration-300 hover:bg-[#6B00E6] hover:shadow-lg'>
                    Book a 20-Minute Meeting
                </a>
            </ScrollAnimatedElement>

        </ScrollAnimatedElement>
    )
}

export default UniversityAspirationComponentBlue