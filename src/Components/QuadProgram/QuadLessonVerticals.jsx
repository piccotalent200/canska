'use client'
import Image from 'next/image';
import React from 'react'
import Breadcrumb from '../Reusable/Breadcrumb';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ScrollAnimatedElement from '../Reusable/ScrollAnimatedElement';
import { phasesQuad, verticalsData, verticalsDataFlyers, verticalsDataMakers, verticalsDataRisers } from '@/utilities/constants';

const QuadLessonVerticals = () => {

    const breadcrumbLinks = [
        { label: 'Home', href: '/' },
        { label: 'The Quad Program', href: '/quad-program' },
        { label: 'The Quad Lesson Verticals', href: '/programs/quad/verticals' }
    ];

    const metrics = [
        { value: '12', label: 'Verticals' },
        { value: '3', label: 'Years' },
        { value: '365', label: 'Days / Year' }
    ];


    const [showMini, setShowMini] = useState(false);
    const mainContainerRef = useRef(null);

    useEffect(() => {
        const currentContainer = mainContainerRef.current;
        if (!currentContainer) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowMini(!entry.isIntersecting);
            },
            {
                threshold: 0,
                rootMargin: '-80px 0px 0px 0px'
            }
        );

        observer.observe(currentContainer);

        return () => {
            if (currentContainer) {
                observer.unobserve(currentContainer);
            }
        };
    }, []);

    return (
        <div className='font-dm'>
            <section className="relative w-full bg-[#1F232E] overflow-hidden flex flex-col justify-between isolation-isolate">

                {/* Background Mosaic Images Layer (Right Side / 50% opacity setup) */}
                <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none z-0 hidden md:grid grid-cols-2 grid-rows-2 gap-1 p-2">
                    <div></div>
                    <div>
                        <img src="/img/quad-lesson.svg" alt="" className="w-full" />
                    </div>
                </div>

                {/* Main Container Content */}
                <div className="relative z-20 w-full flex flex-col gap-[24px] h-full justify-between p-[20px_16px_20px_16px] sm:p-[40px_32px_40px_32px] lg:p-[77px_48px_56px]">

                    {/* Primary Brand Color Gradient Bleed Overlay */}
                    <div
                        className="absolute inset-y-0 left-0 w-full h-full top-0 z-1 pointer-events-none mix-blend-multiply md:mix-blend-normal"
                        style={{
                            background: 'linear-gradient(90deg, #5E17EB 0%, rgba(68, 18, 167, 0.8) 50%, rgba(94, 23, 235, 0.2) 100%)'
                        }}
                    />

                    {/* Navigation Layer */}
                    <div className="w-full relative z-[1]">
                        <Breadcrumb items={breadcrumbLinks} />
                    </div>

                    {/* Hero Context Blocks */}
                    <div className="w-full flex flex-col lg:flex-row justify-between lg:items-end gap-4 md:gap-8 lg:gap-10 xl:gap-16 relative z-[1]">

                        {/* Wrapped Left Context with initial delay */}
                        <ScrollAnimatedElement
                            className="flex flex-col gap-5 max-w-[760px]"
                            duration={0.6}
                            yOffset={40}
                        >
                            <span className="text-[#FFB433] text-[11px] font-semibold tracking-[2.42px] uppercase leading-4">
                                — The 12-Year Scholarship Incubator
                            </span>
                            <h1 className="text-white text-5xl sm:text-7xl lg:text-[88px] font-semibold leading-[normal] lg:leading-[86px] tracking-[-2.64px]">
                                The Quad Program <br />
                                <span className="text-[#FFB433]">Sample Lesson Verticals.</span>
                            </h1>
                        </ScrollAnimatedElement>

                        {/* Wrapped Right Context with a slight stagger delay */}
                        <ScrollAnimatedElement
                            className="max-w-[460px]"
                            duration={0.6}
                            delay={0.15}
                            yOffset={40}
                        >
                            <p className="text-white/80 text-base font-normal leading-[26px]">
                                Across <span className="text-[#FFB433] font-bold">Seekers</span>,{' '}
                                <span className="text-[#FFB433] font-bold">Makers</span>,{' '}
                                <span className="text-[#FFB433] font-bold">Risers</span> and{' '}
                                <span className="text-[#FFB433] font-bold">Flyers</span>, students master 12 major and
                                minor verticals each year — a curriculum that moves from foundational discovery to advanced
                                application and adult readiness.
                            </p>
                        </ScrollAnimatedElement>
                    </div>

                </div>

                {/* Cards Row Wrapper Component */}
                <div className="relative w-full">

                    {/* 1. CONDENSED MINI NAV BAR */}
                    {/* This only shows when the main container below is 100% hidden from the viewport */}
                    <div
                        className={`fixed top-[80px] left-0 w-full z-50 bg-[#1F232E]/95 backdrop-blur-md border-b border-white/10 p-[12px_16px] sm:p-[16px_32px] lg:p-[16px_48px] overflow-auto [scrollbar-width:none] transition-all duration-300 ease-in-out ${showMini
                                ? 'opacity-100 translate-y-0 pointer-events-auto'
                                : 'opacity-0 -translate-y-2 pointer-events-none'
                            }`}
                    >
                        <div className="flex items-center gap-[16px] sm:gap-[24px] flex-nowrap">

                            <div className="flex gap-[8px] sm:gap-[12px] flex-nowrap">
                                {phasesQuad.map((phase, idx) => (
                                    <button
                                        type="button"
                                        key={idx}
                                        onClick={() => {
                                            // 1. Clean the string to get the exact ID
                                            const targetId = phase.link.replace('#', '').trim().toLowerCase();
                                            const element = document.getElementById(targetId);

                                            if (element) {
                                                // 2. Perform the scroll
                                                element.scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'start'
                                                });

                                                // 3. Update the URL cleanly
                                                if (window.location.hash !== phase.link) {
                                                    window.history.pushState(null, '', phase.link);
                                                }
                                            } else {
                                                // Debugger helper: This will tell you exactly what's wrong in your console
                                                console.error(`Could not find an HTML element with id="${targetId}"`);
                                            }
                                        }}
                                        className="cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] transition-colors whitespace-nowrap group"
                                    >
                                        <div
                                            className="w-2 h-2 rounded-full transform group-hover:scale-125 transition-transform"
                                            style={{ backgroundColor: phase.color }}
                                        />
                                        <span className="text-white text-xs sm:text-sm font-medium tracking-tight">
                                            {phase.name}
                                        </span>

                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 2. PRIMARY ACTUAL VERSION CONTAINER */}
                    {/* We attach the ref directly here to observe its direct visibility status */}
                    <div
                        ref={mainContainerRef}
                        className="top-[80px] sticky w-full p-[20px_16px_20px_16px] sm:p-[40px_32px_40px_32px] lg:p-[60px_48px_50px] overflow-auto [scrollbar-width:none] z-40"
                    >
                        <div className="flex gap-[12px] flex-nowrap">
                            {phasesQuad.map((phase, idx) => (
                                <ScrollAnimatedElement
                                    key={idx}
                                    duration={0.5}
                                    delay={0.3 + idx * 0.08}
                                    yOffset={30}
                                    className="min-w-[327px] group relative flex flex-col justify-between p-[19.8px] min-h-[160px] bg-white/[0.05] border border-white/15 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.08] hover:border-white/30 hover:-translate-y-1 cursor-pointer grow"
                                >
                                    <button 
                                    type="button"
                                    onClick={() => {
                                            // 1. Clean the string to get the exact ID
                                            const targetId = phase.link.replace('#', '').trim().toLowerCase();
                                            const element = document.getElementById(targetId);

                                            if (element) {
                                                // 2. Perform the scroll
                                                element.scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'start'
                                                });

                                                // 3. Update the URL cleanly
                                                if (window.location.hash !== phase.link) {
                                                    window.history.pushState(null, '', phase.link);
                                                }
                                            } else {
                                                // Debugger helper: This will tell you exactly what's wrong in your console
                                                console.error(`Could not find an HTML element with id="${targetId}"`);
                                            }
                                        }}
                                    className="relative z-10 flex flex-col gap-1 w-full h-full cursor-pointer">
                                        <div className="flex justify-between items-center w-full">
                                            <h3
                                                className="text-[26px] font-semibold tracking-[-0.52px] leading-[40px]"
                                                style={{ color: phase.color }}
                                            >
                                                {phase.name}
                                            </h3>
                                            <div
                                                className="w-2 h-2 rounded-full"
                                                style={{ backgroundColor: phase.color }}
                                            />
                                        </div>

                                        <span className="block text-start text-white text-sm leading-[18px] font-medium tracking-[1.2px] uppercase pt-3">
                                            {phase.ages}
                                        </span>

                                        <span className="block text-start text-white/80 text-sm leading-[16px] italic font-normal pt-1">
                                            {phase.tagline}
                                        </span>
                                    </button>
                                </ScrollAnimatedElement>
                            ))}
                        </div>
                    </div>

                </div>

            </section>

            <section
                className="w-full p-[20px_16px_20px_16px] sm:p-[40px_32px_40px_32px] lg:p-[56px_48px] bg-[#FAFAFC] scroll-mt-[148px]"
                id="seekers"
            >
                {/* Top Structural Layout Layer */}
                <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-10 xl:gap-16 mb-[56px]">

                    {/* Wrapped Left Canvas with smooth upscale entry */}
                    <ScrollAnimatedElement
                        className="flex-1 w-full relative min-h-[500px] lg:min-h-[762px] rounded-[24px] overflow-visible z-10 group max-sm:mb-[100px]"
                        duration={0.7}
                        yOffset={30}
                    >
                        {/* Main Container Image Canvas */}
                        <div className="absolute inset-0 rounded-[24px] overflow-hidden">
                            <Image
                                src="/img/seeker-phase-apple.svg"
                                alt="Seekers Phase - Apple resting on stack of library books"
                                fill
                                priority
                                className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* Linear Dark Vignette Contrast Layer Gradient Spec */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1F232E]/85 via-[#1F232E]/25 to-transparent z-10" />
                        </div>

                        {/* Top Indicator Accent Tag */}
                        <div className="absolute top-6 left-6 z-20 flex items-center gap-3 rounded-full">
                            <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
                            <span className="text-white text-xs md:text-sm font-bold tracking-[1.1px] uppercase leading-[17px]">
                                Phase 1 of 4
                            </span>
                        </div>

                        {/* Bottom Branding & Target Demographic Context Blocks */}
                        <div className="absolute bottom-[24px] left-[24px] right-[24px] z-20 flex flex-col gap-2">
                            <span className="text-[#3B82F6] text-sm font-bold tracking-[1.2px] uppercase leading-none">
                                Ages 8, 9, and 10
                            </span>
                            <h3 className="text-white text-5xl sm:text-7xl lg:text-[88px] font-semibold tracking-[-2.64px] leading-[0.9]">
                                Seekers
                            </h3>
                        </div>

                        {/* Floating 'Major Focus' Overlap Card Badge */}
                        <div className="absolute max-sm:top-full max-sm:mt-[16px] max-sm:w-full max-sm:max-w-full sm:-bottom-[22px] sm:right-4 lg:right-[-64px] z-30 bg-white border border-[#E8E3D8] rounded-[16px] p-[15.8px] w-full max-w-[232.6px] h-[77.1px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] flex flex-col justify-center gap-[3.5px]">
                            <span className="text-[#3B82F6] text-[11px] font-semibold tracking-[1.1px] uppercase leading-[17px]">
                                Major Focus
                            </span>
                            <span className="text-[#1F232E] text-[18px] font-semibold tracking-[-0.36px] leading-[22px]">
                                Curiosity and Discovery
                            </span>
                        </div>
                    </ScrollAnimatedElement>

                    {/* Right Text Description & Metrics Panel */}
                    <div className="flex-1 w-full flex flex-col justify-center">

                        {/* Wrapped Copy Text Content block */}
                        <ScrollAnimatedElement duration={0.6} delay={0.15} yOffset={25}>
                            {/* Section Subheading Tag */}
                            <span className="text-[#3B82F6] text-sm font-medium leading-[16px] tracking-[1.1px] uppercase mb-3 block">
                                — Phase Overview
                            </span>

                            {/* Primary Identity Headline Statement */}
                            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-[-1.62px] leading-[55px] text-[#1F232E] mb-6">
                                Awaken <span className="text-[#3B82F6] italic font-medium">curiosity</span> & character.
                            </h2>

                            {/* Detailed Paragraph Block Context */}
                            <p className="text-[#0A0A0A] text-base font-medium leading-[26px] text-left mb-[32px]">
                                The Seekers Phase is designed to awaken curiosity, character, competence, and self-confidence.
                                Through communication, scientific inquiry, creative expression, practical life skills, emotional
                                intelligence, and well-organised exploration, students develop the foundational habits and
                                mindsets required to become independent learners, thinkers, responsible citizens, and future
                                leaders in an increasingly competitive world.
                            </p>

                            {/* Dividing Structural Metric Rule Line */}
                            <div className="w-full h-[1px] bg-[#E8E3D8] mb-6" />
                        </ScrollAnimatedElement>

                        {/* Core Numerical Metrics Matrix Grid with quick internal delay entry */}
                        <div className="grid grid-cols-3 gap-4">
                            {metrics.map((metric, idx) => (
                                <ScrollAnimatedElement
                                    key={idx}
                                    className="flex flex-col gap-1"
                                    duration={0.5}
                                    delay={0.3 + (idx * 0.05)}
                                    yOffset={15}
                                >
                                    <span className="text-3xl sm:text-4xl lg:text-[34px] font-semibold tracking-[-0.68px] leading-[51px] text-[#3B82F6]">
                                        {metric.value}
                                    </span>
                                    <span className="text-[11px] leading-[16px] font-normal tracking-[1.1px] uppercase text-[#1F232E8C]">
                                        {metric.label}
                                    </span>
                                </ScrollAnimatedElement>
                            ))}
                        </div>

                    </div>

                </div>

                {/* Verticals Cards Layout Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 min-[992px]:!grid-cols-3 min-[1200px]:!grid-cols-4 gap-y-6 gap-x-5 isolation-isolate">
                    {verticalsData.map((vertical, index) => (
                        /* Wrapped each lesson card container with a cascading stagger */
                        <ScrollAnimatedElement
                            key={index}
                            duration={0.5}
                            delay={0.2 + (index * 0.06)} // Smooth grid-wave cascade flow
                            yOffset={40}
                            className="box-sizing-border flex flex-col items-start p-0 gap-0 isolation-isolate bg-white border border-[#E8E3D8] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow h-fit duration-300 group"
                        >
                            <div className="relative w-full h-[199.63px] flex flex-col justify-center items-start isolation-isolate overflow-hidden">
                                {/* Media Element Asset */}
                                <Image
                                    src={vertical.image}
                                    alt={vertical.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out z-0"
                                />

                                {/* Linear Gradient spec overlay (rgba mapping) */}
                                <div
                                    className="absolute inset-0 z-10 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(0deg, rgba(31, 35, 46, 0.65) 0%, rgba(31, 35, 46, 0.1) 50%, rgba(31, 35, 46, 0) 100%)'
                                    }}
                                />

                                {/* Pill Phase Indicator Badge Block */}
                                <div className="absolute top-[12px] left-[12px] z-20 flex flex-col items-start px-[10px] py-[4px] bg-[#3B82F6] rounded-full">
                                    <span className="text-white text-[10px] font-semibold tracking-[1px] uppercase leading-[15px]">
                                        {vertical.phase}
                                    </span>
                                </div>

                                {/* Bottom Fixed Text Block Canvas Layer */}
                                <div className="absolute bottom-[11.85px] left-[12px] right-[11.6px] z-20 flex flex-col items-start">
                                    <h3 className="w-full line-clamp-1 text-white text-[17px] font-semibold tracking-[-0.255px] leading-[22px]">
                                        {vertical.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="w-full flex-1 flex flex-col justify-between p-[19.135px_20px_20.01px] bg-white">
                                {/* Context Block Core Copy */}
                                <div className="w-full">
                                    <p className="w-full text-[#0A0A0A] text-[14px] font-normal leading-[22px] align-middle text-left antialiased">
                                        {vertical.description}
                                    </p>
                                </div>

                                {/* Card Footer Interaction Action Bar */}
                                <div className="w-full pt-4 mt-4 border-t border-[#E8E3D8] flex flex-row justify-between items-center">
                                    {/* Taxonomy Label Pillar */}
                                    <span className="text-[10px] font-semibold tracking-[1px] uppercase leading-[15px] text-[#1F232E80]">
                                        Vertical
                                    </span>

                                    {/* Interactive Anchor Element */}
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-[5.99px] group/link text-[#3B82F6] hover:text-[#2563EB] transition-colors duration-200 hover:underline"
                                    >
                                        <span className="text-[11px] font-semibold tracking-[1.1px] uppercase leading-[16px]">
                                            Explore in The Quad
                                        </span>
                                        <span className="text-[11px] font-semibold tracking-[1.1px] uppercase leading-[16px] transform group-hover/link:translate-x-1 transition-transform duration-200">
                                            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M-0.000171863 4.67498V3.47598H5.84083L2.94783 0.835976L3.78383 -2.3663e-05L7.69983 3.68498V4.45498L3.78383 8.13998L2.94783 7.29298L5.81883 4.67498H-0.000171863Z" fill="#3B82F6" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </ScrollAnimatedElement>
                    ))}
                </div>
            </section>


            <section
                className="w-full p-[20px_16px_20px_16px] sm:p-[40px_32px_40px_32px] lg:p-[56px_48px] bg-[#FFFFFF] scroll-mt-[148px]"
                id="makers"
            >
                {/* Top Layout Split Content Row */}
                <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-10 xl:gap-16 mb-[56px]">

                    {/* Left Side: Animated Image Canvas Wrapper */}
                    <ScrollAnimatedElement
                        className="flex-1 w-full relative min-h-[500px] lg:min-h-[762px] rounded-[24px] overflow-visible z-10 group max-sm:mb-[100px]"
                        duration={0.7}
                        yOffset={30}
                    >
                        {/* Main Container Image Canvas */}
                        <div className="absolute inset-0 rounded-[24px] overflow-hidden">
                            <Image
                                src="/img/maker-phase.svg"
                                alt="maker Phase"
                                fill
                                priority
                                className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* Linear Dark Vignette Contrast Layer Gradient Spec */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1F232E]/85 via-[#1F232E]/25 to-transparent z-10" />
                        </div>

                        {/* Top Indicator Accent Tag */}
                        <div className="absolute top-6 left-6 z-20 flex items-center gap-3 rounded-full">
                            <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                            <span className="text-white text-xs md:text-sm font-bold tracking-[1.1px] uppercase leading-[17px]">
                                Phase 2 of 4
                            </span>
                        </div>

                        {/* Bottom Branding & Target Demographic Context Blocks */}
                        <div className="absolute bottom-[24px] left-[24px] right-[24px] z-20 flex flex-col gap-2">
                            <span className="text-[#10B981] text-sm font-bold tracking-[1.2px] uppercase leading-none">
                                Ages 11, 12, and 13
                            </span>
                            <h3 className="text-white text-5xl sm:text-7xl lg:text-[88px] font-semibold tracking-[-2.64px] leading-[0.9]">
                                Makers
                            </h3>
                        </div>

                        {/* Floating 'Major Focus' Overlap Card Badge */}
                        <div className="absolute max-sm:top-full max-sm:mt-[16px] max-sm:w-full max-sm:max-w-full sm:-bottom-[22px] sm:right-4 lg:right-[-64px] z-30 bg-white border border-[#E8E3D8] rounded-[16px] p-[15.8px] w-full max-w-[232.6px] min-h-[77.1px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] flex flex-col justify-center gap-[3.5px]">
                            <span className="text-[#10B981] text-[11px] font-semibold tracking-[1.1px] uppercase leading-[17px]">
                                Major Focus
                            </span>
                            <span className="text-[#1F232E] text-[18px] font-semibold tracking-[-0.36px] leading-[22px]">
                                "Spike" Mastery and Projects
                            </span>
                        </div>
                    </ScrollAnimatedElement>

                    {/* Right Side: Copy Overview Panel */}
                    <div className="flex-1 w-full flex flex-col justify-center">

                        {/* Wrapped Text Blocks to ease-in together */}
                        <ScrollAnimatedElement duration={0.6} delay={0.15} yOffset={25}>
                            {/* Section Subheading Tag */}
                            <span className="text-[#10B981] text-sm font-medium leading-[16px] tracking-[1.1px] uppercase mb-3 block">
                                — Phase Overview
                            </span>

                            {/* Primary Identity Headline Statement */}
                            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-[-1.62px] leading-[55px] text-[#1F232E] mb-6">
                                Turn curiosity into <span className="text-[#10B981] italic font-medium">skill.</span>
                            </h2>

                            {/* Detailed Paragraph Block Context */}
                            <p className="text-[#0A0A0A] text-base font-medium leading-[26px] text-left mb-[32px]">
                                The Makers Phase transforms curiosities into skills through creation, experimentation, and
                                execution. Students begin moving from guided exploration toward independent production by building projects, solving real-world problems, strengthening technical eloquence, and
                                developing personal responsibility. This phase emphasises initiative, resilience, strategic thinking, and confidence to convert ideas into tangible outcomes.
                            </p>

                            {/* Dividing Structural Metric Rule Line */}
                            <div className="w-full h-[1px] bg-[#E8E3D8] mb-6" />
                        </ScrollAnimatedElement>

                        {/* Numerical Stats Grid with quick staggered item entries */}
                        <div className="grid grid-cols-3 gap-4">
                            {metrics.map((metric, idx) => (
                                <ScrollAnimatedElement
                                    key={idx}
                                    className="flex flex-col gap-1"
                                    duration={0.5}
                                    delay={0.3 + (idx * 0.05)}
                                    yOffset={15}
                                >
                                    <span className="text-3xl sm:text-4xl lg:text-[34px] font-semibold tracking-[-0.68px] leading-[51px] text-[#10B981]">
                                        {metric.value}
                                    </span>
                                    <span className="text-[11px] leading-[16px] font-normal tracking-[1.1px] uppercase text-[#1F232E8C]">
                                        {metric.label}
                                    </span>
                                </ScrollAnimatedElement>
                            ))}
                        </div>

                    </div>

                </div>

                {/* Verticals Lesson Data Grid Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 min-[992px]:!grid-cols-3 min-[1200px]:!grid-cols-4 gap-y-6 gap-x-5 isolation-isolate">
                    {verticalsDataMakers.map((vertical, index) => (
                        /* Individual structural card entry with cascading loop index calculation */
                        <ScrollAnimatedElement
                            key={index}
                            duration={0.5}
                            delay={0.2 + (index * 0.06)}
                            yOffset={40}
                            className="box-sizing-border flex flex-col items-start p-0 gap-0 isolation-isolate bg-white border border-[#E8E3D8] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow h-fit duration-300 group"
                        >
                            <div className="relative w-full h-[199.63px] flex flex-col justify-center items-start isolation-isolate overflow-hidden">
                                {/* Media Element Asset */}
                                <Image
                                    src={vertical.image}
                                    alt={vertical.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out z-0"
                                />

                                {/* Linear Gradient spec overlay (rgba mapping) */}
                                <div
                                    className="absolute inset-0 z-10 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(0deg, rgba(31, 35, 46, 0.65) 0%, rgba(31, 35, 46, 0.1) 50%, rgba(31, 35, 46, 0) 100%)'
                                    }}
                                />

                                {/* Pill Phase Indicator Badge Block */}
                                <div className="absolute top-[12px] left-[12px] z-20 flex flex-col items-start px-[10px] py-[4px] bg-[#10B981] rounded-full">
                                    <span className="text-white text-[10px] font-semibold tracking-[1px] uppercase leading-[15px]">
                                        {vertical.phase}
                                    </span>
                                </div>

                                {/* Bottom Fixed Text Block Canvas Layer */}
                                <div className="absolute bottom-[11.85px] left-[12px] right-[11.6px] z-20 flex flex-col items-start">
                                    <h3 className="w-full line-clamp-1 text-white text-[17px] font-semibold tracking-[-0.255px] leading-[22px]">
                                        {vertical.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="w-full flex-1 flex flex-col justify-between p-[19.135px_20px_20.01px] bg-white">
                                {/* Context Block Core Copy */}
                                <div className="w-full">
                                    <p className="w-full text-[#0A0A0A] text-[14px] font-normal leading-[22px] align-middle text-left antialiased">
                                        {vertical.description}
                                    </p>
                                </div>

                                {/* Card Footer Interaction Action Bar */}
                                <div className="w-full pt-4 mt-4 border-t border-[#E8E3D8] flex flex-row justify-between items-center">
                                    {/* Taxonomy Label Pillar */}
                                    <span className="text-[10px] font-semibold tracking-[1px] uppercase leading-[15px] text-[#1F232E80]">
                                        Vertical
                                    </span>

                                    {/* Interactive Anchor Element */}
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-[5.99px] group/link text-[#10B981] hover:text-[#0aac76] transition-colors duration-200 hover:underline"
                                    >
                                        <span className="text-[11px] font-semibold tracking-[1.1px] uppercase leading-[16px]">
                                            Explore in The Quad
                                        </span>
                                        <span className="text-[11px] font-semibold tracking-[1.1px] uppercase leading-[16px] transform group-hover/link:translate-x-1 transition-transform duration-200">
                                            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M-0.000171863 4.67498V3.47598H5.84083L2.94783 0.835976L3.78383 -2.3663e-05L7.69983 3.68498V4.45498L3.78383 8.13998L2.94783 7.29298L5.81883 4.67498H-0.000171863Z" fill="#10B981" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </ScrollAnimatedElement>
                    ))}
                </div>
            </section>

            <section
                className="w-full p-[20px_16px_20px_16px] sm:p-[40px_32px_40px_32px] lg:p-[56px_48px] bg-[#FAF8F3] scroll-mt-[148px]"
                id="risers"
            >
                {/* Top Layout Split Content Row */}
                <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-10 xl:gap-16 mb-[56px]">

                    {/* Left Side: Animated Image Canvas Wrapper */}
                    <ScrollAnimatedElement
                        className="flex-1 w-full relative min-h-[500px] lg:min-h-[762px] rounded-[24px] overflow-visible z-10 group max-sm:mb-[100px]"
                        duration={0.7}
                        yOffset={30}
                    >
                        {/* Main Container Image Canvas */}
                        <div className="absolute inset-0 rounded-[24px] overflow-hidden">
                            <Image
                                src="/img/risers-phase.svg"
                                alt="Risers Phase"
                                fill
                                priority
                                className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* Linear Dark Vignette Contrast Layer Gradient Spec */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1F232E]/85 via-[#1F232E]/25 to-transparent z-10" />
                        </div>

                        {/* Top Indicator Accent Tag */}
                        <div className="absolute top-6 left-6 z-20 flex items-center gap-3 rounded-full">
                            <div className="w-3 h-3 rounded-full bg-[#F97316]" />
                            <span className="text-white text-xs md:text-sm font-bold tracking-[1.1px] uppercase leading-[17px]">
                                Phase 3 of 4
                            </span>
                        </div>

                        {/* Bottom Branding & Target Demographic Context Blocks */}
                        <div className="absolute bottom-[24px] left-[24px] right-[24px] z-20 flex flex-col gap-2">
                            <span className="text-[#F97316] text-sm font-bold tracking-[1.2px] uppercase leading-none">
                                Ages 14, 15, and 16
                            </span>
                            <h3 className="text-white text-5xl sm:text-7xl lg:text-[88px] font-semibold tracking-[-2.64px] leading-[0.9]">
                                Risers
                            </h3>
                        </div>

                        {/* Floating 'Major Focus' Overlap Card Badge */}
                        <div className="absolute max-sm:top-full max-sm:mt-[16px] max-sm:w-full max-sm:max-w-full sm:-bottom-[22px] sm:right-4 lg:right-[-64px] z-30 bg-white border border-[#E8E3D8] rounded-[16px] p-[15.8px] w-full max-w-[232.6px] min-h-[77.1px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] flex flex-col justify-center gap-[3.5px]">
                            <span className="text-[#F97316] text-[11px] font-semibold tracking-[1.1px] uppercase leading-[17px]">
                                Major Focus
                            </span>
                            <span className="text-[#1F232E] text-[18px] font-semibold tracking-[-0.36px] leading-[22px]">
                                Competitions and Validations
                            </span>
                        </div>
                    </ScrollAnimatedElement>

                    {/* Right Side: Copy Overview Panel */}
                    <div className="flex-1 w-full flex flex-col justify-center">

                        {/* Wrapped Text Blocks to ease-in together */}
                        <ScrollAnimatedElement duration={0.6} delay={0.15} yOffset={25}>
                            {/* Section Subheading Tag */}
                            <span className="text-[#F97316] text-sm font-medium leading-[16px] tracking-[1.1px] uppercase mb-3 block">
                                — Phase Overview
                            </span>

                            {/* Primary Identity Headline Statement */}
                            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-[-1.62px] leading-[55px] text-[#1F232E] mb-6">
                                Validate skills with <span className="text-[#F97316] italic font-medium">real-world standards.</span>
                            </h2>

                            {/* Detailed Paragraph Block Context */}
                            <p className="text-[#0A0A0A] text-base font-medium leading-[26px] text-left mb-[32px]">
                                The Risers Phase transforms disciplined learners into capable performers, strategic thinkers, and
                                credible young professionals. Students begin operating within real-world standards by validating
                                their major skills through competitions, projects, certifications, technical execution, and
                                leadership duties. This phase emphasises practical thinking, mastery, resilience, credibility, and
                                the aptitude to perform effectively under pressure.
                            </p>

                            {/* Dividing Structural Metric Rule Line */}
                            <div className="w-full h-[1px] bg-[#E8E3D8] mb-6" />
                        </ScrollAnimatedElement>

                        {/* Numerical Stats Grid with quick staggered item entries */}
                        <div className="grid grid-cols-3 gap-4">
                            {metrics.map((metric, idx) => (
                                <ScrollAnimatedElement
                                    key={idx}
                                    className="flex flex-col gap-1"
                                    duration={0.5}
                                    delay={0.3 + (idx * 0.05)}
                                    yOffset={15}
                                >
                                    <span className="text-3xl sm:text-4xl lg:text-[34px] font-semibold tracking-[-0.68px] leading-[51px] text-[#F97316]">
                                        {metric.value}
                                    </span>
                                    <span className="text-[11px] leading-[16px] font-normal tracking-[1.1px] uppercase text-[#1F232E8C]">
                                        {metric.label}
                                    </span>
                                </ScrollAnimatedElement>
                            ))}
                        </div>

                    </div>

                </div>

                {/* Verticals Lesson Data Grid Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 min-[992px]:!grid-cols-3 min-[1200px]:!grid-cols-4 gap-y-6 gap-x-5 isolation-isolate">
                    {verticalsDataRisers.map((vertical, index) => (
                        /* Individual structural card entry with cascading loop index calculation */
                        <ScrollAnimatedElement
                            key={index}
                            duration={0.5}
                            delay={0.2 + (index * 0.06)}
                            yOffset={40}
                            className="box-sizing-border flex flex-col items-start p-0 gap-0 isolation-isolate bg-white border border-[#E8E3D8] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow h-fit duration-300 group"
                        >
                            <div className="relative w-full h-[199.63px] flex flex-col justify-center items-start isolation-isolate overflow-hidden">
                                {/* Media Element Asset */}
                                <Image
                                    src={vertical.image}
                                    alt={vertical.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out z-0"
                                />

                                {/* Linear Gradient spec overlay (rgba mapping) */}
                                <div
                                    className="absolute inset-0 z-10 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(0deg, rgba(31, 35, 46, 0.65) 0%, rgba(31, 35, 46, 0.1) 50%, rgba(31, 35, 46, 0) 100%)'
                                    }}
                                />

                                {/* Pill Phase Indicator Badge Block */}
                                <div className="absolute top-[12px] left-[12px] z-20 flex flex-col items-start px-[10px] py-[4px] bg-[#F97316] rounded-full">
                                    <span className="text-white text-[10px] font-semibold tracking-[1px] uppercase leading-[15px]">
                                        {vertical.phase}
                                    </span>
                                </div>

                                {/* Bottom Fixed Text Block Canvas Layer */}
                                <div className="absolute bottom-[11.85px] left-[12px] right-[11.6px] z-20 flex flex-col items-start">
                                    <h3 className="w-full line-clamp-1 text-white text-[17px] font-semibold tracking-[-0.255px] leading-[22px]">
                                        {vertical.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="w-full flex-1 flex flex-col justify-between p-[19.135px_20px_20.01px] bg-white">
                                {/* Context Block Core Copy */}
                                <div className="w-full">
                                    <p className="w-full text-[#0A0A0A] text-[14px] font-normal leading-[22px] align-middle text-left antialiased">
                                        {vertical.description}
                                    </p>
                                </div>

                                {/* Card Footer Interaction Action Bar */}
                                <div className="w-full pt-4 mt-4 border-t border-[#E8E3D8] flex flex-row justify-between items-center">
                                    {/* Taxonomy Label Pillar */}
                                    <span className="text-[10px] font-semibold tracking-[1px] uppercase leading-[15px] text-[#1F232E80]">
                                        Vertical
                                    </span>

                                    {/* Interactive Anchor Element */}
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-[5.99px] group/link text-[#F97316] hover:text-[#ee690a] transition-colors duration-200 hover:underline"
                                    >
                                        <span className="text-[11px] font-semibold tracking-[1.1px] uppercase leading-[16px]">
                                            Explore in The Quad
                                        </span>
                                        <span className="text-[11px] font-semibold tracking-[1.1px] uppercase leading-[16px] transform group-hover/link:translate-x-1 transition-transform duration-200">
                                            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M-0.000171863 4.67498V3.47598H5.84083L2.94783 0.835976L3.78383 -2.3663e-05L7.69983 3.68498V4.45498L3.78383 8.13998L2.94783 7.29298L5.81883 4.67498H-0.000171863Z" fill="#F97316" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </ScrollAnimatedElement>
                    ))}
                </div>
            </section>


            <section
                className="w-full p-[20px_16px_20px_16px] sm:p-[40px_32px_40px_32px] lg:p-[56px_48px] bg-[#FFFFFF] scroll-mt-[148px]"
                id="flyers"
            >
                {/* Top Layout Split Content Row */}
                <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-10 xl:gap-16 mb-[56px]">

                    {/* Left Side: Animated Image Canvas Wrapper */}
                    <ScrollAnimatedElement
                        className="flex-1 w-full relative min-h-[500px] lg:min-h-[762px] rounded-[24px] overflow-visible z-10 group max-sm:mb-[100px]"
                        duration={0.7}
                        yOffset={30}
                    >
                        {/* Main Container Image Canvas */}
                        <div className="absolute inset-0 rounded-[24px] overflow-hidden">
                            <Image
                                src="/img/flyers-phase.svg"
                                alt="Flyers Phase"
                                fill
                                priority
                                className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* Linear Dark Vignette Contrast Layer Gradient Spec */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1F232E]/85 via-[#1F232E]/25 to-transparent z-10" />
                        </div>

                        {/* Top Indicator Accent Tag */}
                        <div className="absolute top-6 left-6 z-20 flex items-center gap-3 rounded-full">
                            <div className="w-3 h-3 rounded-full bg-[#5E17EB]" />
                            <span className="text-white text-xs md:text-sm font-bold tracking-[1.1px] uppercase leading-[17px]">
                                Phase 4 of 4
                            </span>
                        </div>

                        {/* Bottom Branding & Target Demographic Context Blocks */}
                        <div className="absolute bottom-[24px] left-[24px] right-[24px] z-20 flex flex-col gap-2">
                            <span className="text-[#5E17EB] text-sm font-bold tracking-[1.2px] uppercase leading-none">
                                Ages 17, 18, and 19
                            </span>
                            <h3 className="text-white text-5xl sm:text-7xl lg:text-[88px] font-semibold tracking-[-2.64px] leading-[0.9]">
                                Flyers
                            </h3>
                        </div>

                        {/* Optional Floating 'Major Focus' Overlap Card Badge (Uncomment if needed) */}
                        {/* 
                    <div className="absolute max-sm:top-full max-sm:mt-[16px] max-sm:w-full max-sm:max-w-full sm:-bottom-[22px] sm:right-4 lg:right-[-64px] z-30 bg-white border border-[#E8E3D8] rounded-[16px] p-[15.8px] w-full max-w-[232.6px] min-h-[77.1px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] flex flex-col justify-center gap-[3.5px]">
                        <span className="text-[#5E17EB] text-[11px] font-semibold tracking-[1.1px] uppercase leading-[17px]">
                            Major Focus
                        </span>
                        <span className="text-[#1F232E] text-[18px] font-semibold tracking-[-0.36px] leading-[22px]">
                            Launch and Independence
                        </span>
                    </div> 
                    */}
                    </ScrollAnimatedElement>

                    {/* Right Side: Copy Overview Panel */}
                    <div className="flex-1 w-full flex flex-col justify-center">

                        {/* Wrapped Text Blocks to ease-in together */}
                        <ScrollAnimatedElement duration={0.6} delay={0.15} yOffset={25}>
                            {/* Section Subheading Tag */}
                            <span className="text-[#5E17EB] text-sm font-medium leading-[16px] tracking-[1.1px] uppercase mb-3 block">
                                — Phase Overview
                            </span>

                            {/* Primary Identity Headline Statement */}
                            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-[-1.62px] leading-[55px] text-[#1F232E] mb-6">
                                Become an <span className="text-[#5E17EB] italic font-medium">independent</span> young adult.
                            </h2>

                            {/* Detailed Paragraph Block Context (Updated to reflect Flyers context) */}
                            <p className="text-[#0A0A0A] text-base font-medium leading-[26px] text-left mb-[32px]">
                                The Flyers Phase guides students through their ultimate transition into self-reliance, leadership,
                                and purpose-driven execution. As independent young adults, they refine their specialized skill sets,
                                execute high-level capstone projects, and begin navigating professional or academic landscapes with
                                total confidence. This final layer cements executive execution, long-term strategy, and personal accountability.
                            </p>

                            {/* Dividing Structural Metric Rule Line */}
                            <div className="w-full h-[1px] bg-[#E8E3D8] mb-6" />
                        </ScrollAnimatedElement>

                        {/* Numerical Stats Grid with synchronized staggered item entries */}
                        <div className="grid grid-cols-3 gap-4">
                            {metrics.map((metric, idx) => (
                                <ScrollAnimatedElement
                                    key={idx}
                                    className="flex flex-col gap-1"
                                    duration={0.5}
                                    delay={0.3 + (idx * 0.05)}
                                    yOffset={15}
                                >
                                    <span className="text-3xl sm:text-4xl lg:text-[34px] font-semibold tracking-[-0.68px] leading-[51px] text-[#5E17EB]">
                                        {metric.value}
                                    </span>
                                    <span className="text-[11px] leading-[16px] font-normal tracking-[1.1px] uppercase text-[#1F232E8C]">
                                        {metric.label}
                                    </span>
                                </ScrollAnimatedElement>
                            ))}
                        </div>

                    </div>

                </div>

                {/* Verticals Lesson Data Grid Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 min-[992px]:!grid-cols-3 min-[1200px]:!grid-cols-4 gap-y-6 gap-x-5 isolation-isolate">
                    {verticalsDataFlyers.map((vertical, index) => (
                        /* Individual structural card entry with cascading loop index calculation */
                        <ScrollAnimatedElement
                            key={index}
                            duration={0.5}
                            delay={0.2 + (index * 0.06)}
                            yOffset={40}
                            className="box-sizing-border flex flex-col items-start p-0 gap-0 isolation-isolate bg-white border border-[#E8E3D8] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow h-fit duration-300 group"
                        >
                            <div className="relative w-full h-[199.63px] flex flex-col justify-center items-start isolation-isolate overflow-hidden">
                                {/* Media Element Asset */}
                                <Image
                                    src={vertical.image}
                                    alt={vertical.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out z-0"
                                />

                                {/* Linear Gradient spec overlay (rgba mapping) */}
                                <div
                                    className="absolute inset-0 z-10 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(0deg, rgba(31, 35, 46, 0.65) 0%, rgba(31, 35, 46, 0.1) 50%, rgba(31, 35, 46, 0) 100%)'
                                    }}
                                />

                                {/* Pill Phase Indicator Badge Block */}
                                <div className="absolute top-[12px] left-[12px] z-20 flex flex-col items-start px-[10px] py-[4px] bg-[#5E17EB] rounded-full">
                                    <span className="text-white text-[10px] font-semibold tracking-[1px] uppercase leading-[15px]">
                                        {vertical.phase}
                                    </span>
                                </div>

                                {/* Bottom Fixed Text Block Canvas Layer */}
                                <div className="absolute bottom-[11.85px] left-[12px] right-[11.6px] z-20 flex flex-col items-start">
                                    <h3 className="w-full line-clamp-1 text-white text-[17px] font-semibold tracking-[-0.255px] leading-[22px]">
                                        {vertical.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="w-full flex-1 flex flex-col justify-between p-[19.135px_20px_20.01px] bg-white">
                                {/* Context Block Core Copy */}
                                <div className="w-full">
                                    <p className="w-full text-[#0A0A0A] text-[14px] font-normal leading-[22px] align-middle text-left antialiased">
                                        {vertical.description}
                                    </p>
                                </div>

                                {/* Card Footer Interaction Action Bar */}
                                <div className="w-full pt-4 mt-4 border-t border-[#E8E3D8] flex flex-row justify-between items-center">
                                    {/* Taxonomy Label Pillar */}
                                    <span className="text-[10px] font-semibold tracking-[1px] uppercase leading-[15px] text-[#1F232E80]">
                                        Vertical
                                    </span>

                                    {/* Interactive Anchor Element */}
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-[5.99px] group/link text-[#5E17EB] hover:text-[#5510dd] transition-colors duration-200 hover:underline"
                                    >
                                        <span className="text-[11px] font-semibold tracking-[1.1px] uppercase leading-[16px]">
                                            Explore in The Quad
                                        </span>
                                        <span className="text-[11px] font-semibold tracking-[1.1px] uppercase leading-[16px] transform group-hover/link:translate-x-1 transition-transform duration-200">
                                            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M-0.000171863 4.67498V3.47598H5.84083L2.94783 0.835976L3.78383 -2.3663e-05L7.69983 3.68498V4.45498L3.78383 8.13998L2.94783 7.29298L5.81883 4.67498H-0.000171863Z" fill="#5E17EB" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </ScrollAnimatedElement>
                    ))}
                </div>
            </section>


            <section
                className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[84px_48px] flex items-center bg-[linear-gradient(135deg,_#5E17EB_0%,_#3B0B9D_100%)] text-white"
                id="flyers-cta"
            >
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">

                    {/* Left Column: Context Texts */}
                    <ScrollAnimatedElement
                        className="flex flex-col gap-[15px] max-w-[880px]"
                        duration={0.6}
                        yOffset={20}
                    >
                        {/* Section Marker */}
                        <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[17px]">
                            — Next
                        </span>

                        {/* Heading with styled dynamic context highlight */}
                        <h2 className="text-4xl sm:text-5xl md:text-[64px] font-semibold leading-[1.05] tracking-[-1.92px]">
                            Continue to <span className="italic text-[#FFB433] font-medium">Why Quad Program?</span>
                        </h2>

                        {/* Context Body */}
                        <p className="text-white/80 text-base font-normal leading-[26px]">
                            The Quad Program aims to redefine education as a continuous expedition of capability building instead of
                            simple subject completion. Its microlessons position learning as a process of character formation and
                            functional readiness for life, marking a significant departure from traditional education systems and
                            encouraging students to develop key practical skills, adaptability, resilience, collaboration, and a
                            lifelong growth mindset.
                        </p>
                    </ScrollAnimatedElement>

                    {/* Right Column: CTA Pill Action Component */}
                    <ScrollAnimatedElement
                        className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0"
                        duration={0.5}
                        delay={0.15}
                        yOffset={15}
                    >
                        <Link
                            href="/quad-program"
                            className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#1F232E] px-[25.8px] py-[13.8px] min-w-[258px] h-[50.6px] rounded-full font-semibold text-sm tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group shadow-sm"
                        >
                            <span className="flex-1 text-left">Read Why Quad Program</span>
                            <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                                <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#1F232E" />
                                </svg>
                            </span>
                        </Link>
                    </ScrollAnimatedElement>

                </div>
            </section>

        </div>
    )
}

export default QuadLessonVerticals
