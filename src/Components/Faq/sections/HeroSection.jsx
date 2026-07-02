import React from 'react';
import Breadcrumb from '../../Reusable/Breadcrumb';
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement';

const breadcrumbLinks = [
    { label: 'Home', href: '/' },
    { label: 'Frequently Asked Questions', href: '/faq?activeTab=0' }
];

const HeroSection = () => {
    return (
        <section className={`relative w-full flex items-center overflow-hidden bg-[url('/img/hero-faq.svg')] bg-cover bg-center  p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[200px_61px_56px]`}>
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
                          - Clarity for Parents and Students
                        </span>

                        <h1 className="text-white text-5xl md:text-[64px] font-extrabold leading-[64px] tracking-[-1.6px]">
                           Frequently Asked  <span className="text-[#FFB433]">Questions</span>
                        </h1>

                        <p className="text-white text-[18px] font-normal leading-7 text-left">
                          Real questions, plain answers — about the Quad program, your user account, and how we protect your privacy.
                        </p>

                    </div>
                </ScrollAnimatedElement>

            </div>
        </section>
    );
};

export default HeroSection;
