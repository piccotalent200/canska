'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { animate, scroll } from "motion"
import { slides } from '@/utilities/constants'

const CrucialYearsComponent = () => {
    const [activeTab, setActiveTab] = useState(0)


    useEffect(() => {
        // Add a small delay to ensure DOM is fully rendered and Lenis is initialized
        const timer = setTimeout(() => {
            const items = document.querySelectorAll(".slide-container")
            const slideGroup = document.querySelector(".slide-group")
            const slideGroupContainer = document.querySelector(".slide-group-container")
            const progressBar = document.querySelector(".progress")

            if (items.length > 0 && slideGroup && slideGroupContainer && progressBar) {
                try {
                    // Animate gallery horizontally during vertical scroll
                    scroll(
                        animate(slideGroup, {
                            transform: ["none", `translateX(-${items.length - 1}00vw)`],
                        }),
                        {
                            target: slideGroupContainer,
                            offset: ["start start", "end end"] // Full scroll range for horizontal animation
                        }
                    )

                    // Progress bar representing gallery scroll
                    scroll(animate(progressBar, { scaleX: [0, 1] }), {
                        target: slideGroupContainer,
                        offset: ["start start", "end end"] // Full scroll range for progress bar
                    })

                    // Track scroll progress to update active tab
                    scroll(({ y }) => {
                        const containerRect = slideGroupContainer.getBoundingClientRect()
                        const containerTop = containerRect.top + window.scrollY
                        const containerHeight = containerRect.height
                        const scrollProgress = (window.scrollY - containerTop) / (containerHeight - window.innerHeight)
                        
                        // Clamp progress between 0 and 1
                        const clampedProgress = Math.max(0, Math.min(1, scrollProgress))
                        
                        // Calculate which slide should be active based on scroll progress
                        const slideIndex = Math.floor(clampedProgress * slides.length)
                        const activeIndex = Math.min(slideIndex, slides.length - 1)
                        
                        setActiveTab(activeIndex)
                    }, {
                        target: slideGroupContainer,
                        offset: ["start start", "end end"]
                    })
                } catch (error) {
                    console.warn("Motion animation setup failed:", error)
                }
            }
        }, 200) // Increased delay for Lenis initialization

        return () => clearTimeout(timer)
    }, [])

    return (
        <article id="crucial-years-gallery" className="w-full bg-[url('/img/crucialyears-bg.svg')] bg-contain bg-fixed">

            <section className="slide-group-container min-h-[500vh] relative">
                <div className="sticky top-[60px] lg:top-[80px] overflow-hidden h-screen p-[40px_16px] lg:p-[40px_56px] grid items-center">
                     <ul className='flex gap-[24px] max-md:hidden'>
                            {slides.map((slide, index) => (
                                <li key={slide.id} className={`text-base leading-[20px] font-medium rounded-[2px] p-[4px_4px_4px_12px] mb-[20px] before:min-w-[4px] flex items-center gap-[12px] before:block before:w-[4px] before:h-[4px] before:rounded-full whitespace-nowrap transition-all duration-300 rounded-[2px] ${
                                    activeTab === index 
                                        ? 'text-[#FFFFFF] bg-[#7F00FF] before:bg-white' 
                                        : 'text-[#5E17EB] before:bg-[#5E17EB]'
                                }`}>
                                    {slide.title}
                                </li>
                            ))}
                        </ul>
                    <ul className="slide-group flex my-auto gap-[56px]">
                       
                        {slides.map((slide, index) => (
                            <li key={slide.id} className="slide-container flex w-[calc(100vw-32px)] lg:w-[calc(100vw-112px)] flex-shrink-0 items-center justify-center flex-col max-md:justify-start">
                                <div className="w-full">

                                    <div className="grid lg:grid-cols-2 gap-[40px] lg:gap-[64px] items-center">
                                        <div>
                                            <h3 className="text-[32px] md:text-[38px] lg:text-[40px]  lg:text-[44px] leading-[48px] leading-[40px] md:leading-[50px] xl:text-[48px] lg:leading-[56px] xl:leading-[62px] font-medium text-[#111827] mb-[32px]">
                                                {slide.heading}
                                            </h3>
                                            <div className="p-[40px_16px] xl:p-[40px] bg-[#F5ECFF] rounded-[16px]">
                                                <h4 className="text-[24px] leading-[32px] font-medium text-[#7F00FF] mb-[16px]">
                                                    {slide.content}
                                                </h4>
                                                <ul className="ps-[32px]">
                                                    {slide.points.map((point, pointIndex) => (
                                                        <li key={pointIndex} className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-medium text-[#111827] list-disc">
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='max-lg:hidden'>
                        <Image src="/img/urial-year-banner.svg" alt={`Crucial Years ${index + 1}`} width={600} height={400} className="w-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <footer className="h-[70vh] flex justify-center items-center hidden">
                <p className="text-center">
                    Empowering students through their most crucial developmental years
                </p>
            </footer>

            <div className="progress fixed left-0 right-0 h-[5px] bg-[#7F00FF] bottom-[50px] transform scale-x-0 origin-left hidden"></div>
        </article>
    )
}

export default CrucialYearsComponent