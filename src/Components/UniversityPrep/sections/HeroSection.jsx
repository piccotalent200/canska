import React from 'react';
import Breadcrumb from '../../Reusable/Breadcrumb';
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement';

const breadcrumbLinks = [
    { label: 'Home', href: '/' },
    { label: 'University Prep', href: '/university-prep?activeTab=0' }
];

const HeroSection = () => {
    return (
        <section className={`relative w-full flex items-center overflow-hidden bg-[url('/img/university-prep.svg')] bg-cover bg-center  p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[100px_61px_105px]`}>

            {/* Gradient Overlay 1: Left-to-Right Depth */}
            <div
                className="absolute inset-0 w-full h-full top-0 left-0 z-10"
                style={{
                    background: 'linear-gradient(90deg, rgba(45, 11, 112, 0.70) 0%, rgba(45, 11, 112, 0) 50%, rgba(45, 11, 112, 0) 100%)'
                }}
            />

            {/* Gradient Overlay 2: Vertical Ambient Glow */}
            <div
                className="absolute inset-0 w-full h-full top-0 left-0 z-20"
                style={{
                    background: 'linear-gradient(90deg, rgba(45, 11, 112, 0.85) 0%, rgba(45, 11, 112, 0.60) 50%, rgba(45, 11, 112, 0.30) 100%)'
                }}
            />

            {/* Main Content Container */}
            <div className="relative z-40 w-full flex flex-col gap-[34px]">

                {/* Breadcrumb - Instant or standalone load depending on preference */}
                <Breadcrumb items={breadcrumbLinks} />

                {/* Info Block wrapped for smooth layout animation */}
                <ScrollAnimatedElement direction="up" delay={0.1}>
                    <div className="max-w-[852px] flex flex-col gap-[20px]">

                        {/* Subtitle / Tagline */}
                        <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-4">
                            -Top 50 Admissions, Scholarships, Visas
                        </span>

                        {/* Main Heading */}
                        <h1 className="text-white text-5xl md:text-[64px] font-extrabold leading-[64px] tracking-[-1.6px]">
                            University <span className="text-[#FFB433]"> Prep</span>
                        </h1>

                        {/* Description Paragraph */}
                        <p className="text-white text-[18px] font-medium leading-7 text-left">
                            From the world's top 50 universities to scholarship architecture and visa precision — a complete preparation system that turns ambition into acceptance letters and full-ride awards.
                        </p>

                    </div>
                </ScrollAnimatedElement>

            </div>
        </section>
    );
};

export default HeroSection;
