import React from 'react';
import Breadcrumb from '../../Reusable/Breadcrumb';
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement';

const breadcrumbLinks = [
    { label: 'Home', href: '/' },
    { label: 'Why Canska?', href: '/why-canska' }
];

const HeroSection = () => {
    return (
        <section className="relative w-full flex items-center overflow-hidden bg-[url('/img/why-canska-hero-bg.jpg')] bg-cover bg-center p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[90px_61px]">
            {/* Gradient Overlay 1: Left-to-Right Depth */}
            <div
                className="absolute inset-0 w-full h-full top-0 left-0 z-10"
                style={{ background: 'linear-gradient(90deg, rgba(45, 11, 112, 0.70) 0%, rgba(45, 11, 112, 0) 50%, rgba(45, 11, 112, 0) 100%)' }}
            />
            {/* Gradient Overlay 2: Vertical Ambient Glow */}
            <div
                className="absolute inset-0 w-full h-full top-0 left-0 z-20"
                style={{ background: 'linear-gradient(90deg, rgba(45, 11, 112, 0.85) 0%, rgba(45, 11, 112, 0.60) 50%, rgba(45, 11, 112, 0.30) 100%)' }}
            />
            {/* Decorative Blur Object (Top Right) */}
            <div className="absolute w-full h-full -top-[30px] left-[1146px] bg-[#FFB43326] blur-[64px] rounded-full z-30 pointer-events-none" />

            {/* Main Content Container */}
            <div className="relative z-40 w-full flex flex-col gap-[34px]">
                <Breadcrumb items={breadcrumbLinks} />

                {/* Info Block wrapped in structural fade-up entry */}
                <ScrollAnimatedElement
                    className="max-w-[852px] flex flex-col gap-[20px]"
                    duration={0.6}
                    yOffset={25}
                >
                    <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-4">
                        -Human Capital Incubator
                    </span>
                    <h1 className="text-white text-5xl md:text-[64px] font-extrabold leading-[64px] tracking-[-1.6px]">
                        Why <span className="text-[#FFB433]"> Canska?</span>
                    </h1>
                    <p className="text-white text-[18px] font-medium leading-7 text-left">
                        Canska is not a school, a tutoring platform, or an academic counselling service. It is a human
                        capital incubator for the next generation of students. In the competitive world, Canska
                        operates as a high-precision bridge between childhood capabilities and global successes.
                        Rather than providing fragmented academic support, Canska approaches childhood
                        development with the discipline and far-sightedness of an investment fund.
                    </p>
                </ScrollAnimatedElement>
            </div>
        </section>
    );
};

export default HeroSection;
