import React from 'react';
import Breadcrumb from '../../Reusable/Breadcrumb';
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement';

const breadcrumbLinks = [
    { label: 'Home', href: '/' },
    { label: 'For Parents', href: '/for-parents?activeTab=0' }
];

const HeroSection = () => {
    return (
        <section className={`relative w-full flex items-center overflow-hidden bg-[url('/img/university-prep.svg')] bg-cover bg-center  p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[100px_61px_105px]`}>
            <div
                className="absolute inset-0 w-full h-full top-0 left-0 z-10"
                style={{
                    background: 'linear-gradient(90deg, rgba(45, 11, 112, 0.70) 0%, rgba(45, 11, 112, 0) 50%, rgba(45, 11, 112, 0) 100%)'
                }}
            />
            <div
                className="absolute inset-0 w-full h-full top-0 left-0 z-20"
                style={{
                    background: 'linear-gradient(90deg, rgba(45, 11, 112, 0.85) 0%, rgba(45, 11, 112, 0.60) 50%, rgba(45, 11, 112, 0.30) 100%)'
                }}
            />

            <div className="relative z-40 w-full flex flex-col gap-[34px]">
                <Breadcrumb items={breadcrumbLinks} />
                <ScrollAnimatedElement direction="up" delay={0.1}>
                    <div className="max-w-[852px] flex flex-col gap-[20px]">

                        <span className="text-[#FFFFFF] text-[10px] font-bold tracking-[2.42px] uppercase leading-4">
                            - Investing in the Long Horizon
                        </span>

                        <h1 className="text-white text-5xl md:text-[64px] font-extrabold leading-[64px] tracking-[-1.6px]">
                           For  <span className="text-[#FFB433]"> Parents</span>
                        </h1>

                        <p className="text-white text-[18px] font-normal leading-7 text-left">
                           Parenting is the ultimate long-term investment. This is your map — the strategic value, the real ROI, the admissions insights, the commitments expected, and the workload philosophy that protects childhood while building greatness.
                        </p>

                    </div>
                </ScrollAnimatedElement>

            </div>
        </section>
    );
};

export default HeroSection;
