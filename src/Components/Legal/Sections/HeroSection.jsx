import React from 'react';
import Breadcrumb from '../../Reusable/Breadcrumb';
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement';


const HeroSection = () => {
    return (
        <section className={`relative w-full flex items-center overflow-hidden   p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[82px_61px_64px]  bg-cover bg-center bg-[url("/img/hero-legal.svg")]`}>
          <div className='bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(180deg,#6717E8_0%,rgba(103,23,232,0)_50%,#6717E8_100%)] absolute w-full h-full object-center object-cover left-0 top-0'>
               <div className='bg-[#0E1B2C]/80 absolute w-full h-full object-center object-cover left-0 top-0'></div>
            
          </div>

            <div className="relative z-40 w-full flex flex-col gap-[34px]">
                <ScrollAnimatedElement direction="up" delay={0.1}>
                    <div className="max-w-[852px] flex flex-col gap-[20px]">

                        <h1 className="text-white text-5xl md:text-[70px] font-medium leading-[73px] tracking-[-1.6px]">
                           Legal & <span className="text-[#FFB433]">Policies.</span>
                        </h1>

                        <p className="text-white text-[16px] font-medium leading-6 text-left">
                          Transparency, child safety, and data protection are foundational to the Canska league. The six documents below define how we operate.
                        </p>

                    </div>
                </ScrollAnimatedElement>

            </div>
        </section>
    );
};

export default HeroSection;
