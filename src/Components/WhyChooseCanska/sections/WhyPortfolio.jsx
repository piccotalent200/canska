import React from 'react';
import Image from 'next/image';
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement';
import { whyPortfolio } from '@/utilities/constants';
import WhyCanskaCta from './WhyCanskaCta';

const WhyPortfolio = () => {
    return (
        <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">

            <ScrollAnimatedElement className="w-full" duration={0.5} yOffset={20}>
                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                    <Image
                        src="/img/whycanska-portfolio.svg"
                        alt="Graduating students"
                        fill
                        priority
                        className="object-cover object-center absolute w-full h-full"
                    />
                    <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Why Portfolio?</h1>
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                </div>
                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[54px] max-w-[896px]'>
                    Building a portfolio early is crucial for academic, career, and personal growth...
                </p>
            </ScrollAnimatedElement>

            <div className="flex flex-col gap-[20px] mb-[40px] xl:mb-[69px]">
                {whyPortfolio?.map((block, index) => (
                    <ScrollAnimatedElement
                        key={block.id}
                        duration={0.5}
                        delay={index * 0.08}
                        yOffset={30}
                    >
                        <div className="bg-white border border-[#5E17EB4D] rounded-3xl p-6 md:p-[40px_40px_24px_40px] flex flex-col md:flex-row gap-6 md:gap-10 items-start transition-all duration-300 hover:shadow-md shadow-[0px_20px_60px_0px_#5E17EB1A]">
                            <div className="flex flex-col items-start flex-shrink-0 lg:min-w-[186px] ">
                                <span className="text-[72px] font-[900] text-[#FFB433] leading-[72px] tracking-tight">{block.id}</span>
                                <div className="w-[48px] h-[3px] bg-[#5E17EB] mt-3" />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <h2 className="text-xl md:text-2xl leading-[32px] font-[800] text-[#0A0A0A] mb-4">{block.title}</h2>
                                <h3 className="text-sm md:text-base leading-[25px] font-medium text-[#0A0A0A] mb-3">{block.subtitle}</h3>
                                <div className="w-full h-[1px] bg-[#5E17EB] mb-7" />
                                <p className="text-sm md:text-[14px] text-[#0A0A0A] leading-[25px] text-justify md:text-left font-medium">{block.description}</p>
                            </div>
                        </div>
                    </ScrollAnimatedElement>
                ))}
            </div>

            <WhyCanskaCta />
        </section>
    );
};

export default WhyPortfolio;
