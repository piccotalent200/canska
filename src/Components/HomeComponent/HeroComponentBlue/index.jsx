'use client'
import React, { useEffect, useRef } from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import { scroll, animate } from "motion"

const HeroComponentBlue = () => {
    const containerRef = useRef(null)
    const listRef = useRef(null)
    const videoWrapperRef = useRef(null)

    useEffect(() => {
        if (!containerRef.current || !listRef.current || !videoWrapperRef.current) return

        const unsubscribe = scroll(
            (progress) => {
                // progress ranges from 0 (top) to 1 (fully scrolled down)

                // Slower scaling, faster downward movement
                const slowScaleThreshold = 0.4 // Video reaches full width at 40% scroll progress (slower)
                const fastTransformMultiplier = 6 // Even faster downward movement

                // 1. Smoothly guide the list upward and adjust its width footprint slightly
                animate(listRef.current, {
                    transform: `translateY(${-progress * 20}px)`, // Drifts up smoothly
                    width: `${40 + (progress * 60)}%`            // Expands text layout space subtly
                }, { duration: 0 })

                // 2. Slower scaling but much faster downward transform
                const videoWidth = progress <= slowScaleThreshold
                    ? `${55 + (progress / slowScaleThreshold * 45)}%` // Slower scaling - reach 100% at 40% progress
                    : '100%' // Stay at 100% width after threshold

                animate(videoWrapperRef.current, {
                    width: videoWidth,
                    transform: `translateY(${progress * 160 * fastTransformMultiplier}px)`, // Much faster downward movement
                }, { duration: 0 })
            },
            {
                target: containerRef.current,
                offset: ["start start", "end end"] // Tracks dynamically over the scroll track
            }
        )

        return () => unsubscribe()
    }, [])

    return (
        // The taller this container, the longer and smoother the scroll action feels
        <section ref={containerRef} className="p-[40px_16px] lg:p-[56px_56px_250px_56px] bg-[#7F00FF] bg-cover bg-center" >

            {/* Full-Width Title */}
            <ScrollAnimatedElement>
                <h1 className=' text-[44px] lg:text-[54px] xl:text-[64px] font-semibold text-[#FFFFFF]  leading-[54px] lg:leading-[64px] xl:leading-[68px] max-w-[880px] w-full mb-[40px]'>Build Portfolios for Top <span className="text-transparent bg-[linear-gradient(90deg,_#D0A3FD_0%,_#D2B1F5_100%)] bg-clip-text">
                    Universities & Scholarships
                </span></h1>
            </ScrollAnimatedElement>

            {/* Grid Container that holds both layout items concurrently */}
            <div className="w-full grid grid-cols-1 md:grid-items-layout relative items-start md:after:mt-[300px] md:after:pt-[clamp(908px,calc(100vw-56px),1330px)] md:after:block mx-auto">

                {/* Left List Item (Absolute layout placeholder logic handles position without snapping) */}
                <div
                    ref={listRef}
                    className="max-md:!w-full w-[40%] md:absolute left-0 top-0 z-10 will-change-transform"
                >
                    <ScrollAnimatedElement delay={0.2}>
                        <ul className="ps-[32px]">
                            <li className="text-[24px] leading-[38px] lg:text-[28px] lg:leading-[40px] xl:text-[32px] xl:leading-[46px] font-medium text-[#FFFFFF] list-disc">

                                12-Year Student Growth Journey
                            </li>
                            <li className="text-[24px] leading-[38px] lg:text-[28px] lg:leading-[40px] xl:text-[32px] xl:leading-[46px] font-medium text-[#FFFFFF] list-disc">

                                Portfolio Beyond Academics
                            </li>
                            <li className="text-[24px] leading-[38px] lg:text-[28px] lg:leading-[40px] xl:text-[32px] xl:leading-[46px] font-medium text-[#FFFFFF] list-disc">

                                Top Universities & Scholarships
                            </li>
                        </ul>
                    </ScrollAnimatedElement>
                </div>

                {/* Right Video Wrapper */}
                <ScrollAnimatedElement delay={0.2}>
                <div
                    ref={videoWrapperRef}
                    className="overflow-hidden rounded-lg max-md:mt-[40px] md:absolute right-0 top-0 will-change-transform aspect-video max-h-[calc(100vh-102px)] max-md:!w-full max-md:!transform-none"
                >
                    <video
                        src="/video/canska-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                </ScrollAnimatedElement>

            </div>
        </section>
    )
}

export default HeroComponentBlue

