'use client'
import Image from 'next/image'
import React from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'

const VerticalCard = ({ vertical, index, accentColor }) => {
    return (
        <ScrollAnimatedElement
            key={index}
            duration={0.5}
            delay={0.2 + index * 0.06}
            yOffset={40}
            className="box-sizing-border flex flex-col items-start p-0 gap-0 isolation-isolate bg-white border border-[#E8E3D8] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow h-fit duration-300 group"
        >
            <div className="relative w-full h-[199.63px] flex flex-col justify-center items-start isolation-isolate overflow-hidden">
                <Image
                    src={vertical.image}
                    alt={vertical.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out z-0"
                />

                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background: 'linear-gradient(0deg, rgba(31, 35, 46, 0.65) 0%, rgba(31, 35, 46, 0.1) 50%, rgba(31, 35, 46, 0) 100%)'
                    }}
                />

                <div
                    className="absolute top-[12px] left-[12px] z-20 flex flex-col items-start px-[10px] py-[4px] rounded-full"
                    style={{ backgroundColor: accentColor }}
                >
                    <span className="text-white text-[10px] font-semibold tracking-[1px] uppercase leading-[15px]">
                        {vertical.phase}
                    </span>
                </div>

                <div className="absolute bottom-[11.85px] left-[12px] right-[11.6px] z-20 flex flex-col items-start">
                    <h3 className="w-full line-clamp-1 text-white text-[17px] font-semibold tracking-[-0.255px] leading-[22px]">
                        {vertical.title}
                    </h3>
                </div>
            </div>

            <div className="w-full flex-1 flex flex-col justify-between p-[19.135px_20px_20.01px] bg-white">
                <div className="w-full">
                    <p className="w-full text-[#0A0A0A] text-[14px] font-normal leading-[22px] align-middle text-left antialiased">
                        {vertical.description}
                    </p>
                </div>

                <div className="w-full pt-4 mt-4 border-t border-[#E8E3D8] flex flex-row justify-between items-center">
                    <span className="text-[10px] font-semibold tracking-[1px] uppercase leading-[15px] text-[#1F232E80]">
                        Vertical
                    </span>

                    <a
                        href="#"
                        className="inline-flex items-center gap-[5.99px] group/link transition-colors duration-200 hover:underline"
                        style={{ color: accentColor }}
                    >
                        <span className="text-[11px] font-semibold tracking-[1.1px] uppercase leading-[16px]">
                            Explore in The Quad
                        </span>
                        <span className="text-[11px] font-semibold tracking-[1.1px] uppercase leading-[16px] transform group-hover/link:translate-x-1 transition-transform duration-200">
                            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-0.000171863 4.67498V3.47598H5.84083L2.94783 0.835976L3.78383 -2.3663e-05L7.69983 3.68498V4.45498L3.78383 8.13998L2.94783 7.29298L5.81883 4.67498H-0.000171863Z" fill={accentColor} />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </ScrollAnimatedElement>
    )
}

export default VerticalCard
