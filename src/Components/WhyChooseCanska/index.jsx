"use client";
import React, { useEffect } from 'react'
import Image from 'next/image';
import Breadcrumb from '../Reusable/Breadcrumb';
import Link from 'next/link';
import { useState } from "react";
import { Tabs } from "flowbite-react";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import ScrollAnimatedElement from '../Reusable/ScrollAnimatedElement';
import { portfolioBuilding, WhyAtAgeEightContent, WhyCanskaContent, whyPortfolio } from '@/utilities/constants';
const breadcrumbLinks = [
  { label: 'Home', href: '/' },
  { label: 'Why Canska?', href: '/why-canska' }
];


const customTabsTheme = {
  tablist: {
    base: "sticky top-[80px] z-[10] whitespace-nowrap !flex-nowrap flex items-center gap-2 p-[16px] sm:p-[16px_32px] lg:p-[16px_56px] bg-[rgba(251,250,255,0.9)] border-y border-[#EDE7FB] backdrop-blur-[12px] overflow-x-auto",
    tabitem: {
      base: "p-0 !bg-transparent hover:!bg-transparent",
    },
  },
};


const WhyChooseCanska = () => {

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Convert string parameter to an integer safely, fallback to 0
  const urlTab = searchParams.get('activeTab');
  const initialTab = urlTab ? parseInt(urlTab, 10) : 0;

  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (urlTab !== null) {
      const parsed = parseInt(urlTab, 10);
      if (!isNaN(parsed)) setActiveTab(parsed);
    }
  }, [urlTab]);

  const handleTabChange = (index) => {
    setActiveTab(index);

    const params = new URLSearchParams(searchParams.toString());
    params.set('activeTab', index.toString());

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  console.log("activeTab", activeTab);

  const renderTabTitle = (number, text, index) => {
    const isActive = activeTab === index;
    return (
      <div className={`flex items-center gap-2.5 p-[10px_20px] rounded-[999px] cursor-pointer transition-all duration-200 border border-solid ${isActive
        ? "bg-[#5E17EB] border-[#5E17EB] shadow-[0_4px_6px_-4px_rgba(94,23,235,0.25),0_10px_15px_-3px_rgba(94,23,235,0.25)] text-[#FFFFFF] "
        : "bg-[#FFFFFF] text-[#0A0A0ABF] border-[#EDE7FB] rounded-[999px]"
        }`}>
        <span
          className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold transition-all duration-200 ${isActive
            ? "bg-[#FFB433] text-[#2D0B70]"
            : "bg-[#F4F1FE] text-[#5E17EB]"
            }`}
        >
          {number}
        </span>
        <span>{text}</span>
      </div>
    );
  };

  return (

    <div className='font-dm'>
      
      {/* ================= HERO SECTION ================= */}
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

      {/* ================= TABS NAVIGATION SECTION ================= */}
      <div className="w-full">
        <Tabs
          key={activeTab}
          variant="pills"
          theme={customTabsTheme}
          onActiveTabChange={handleTabChange}
          className='[&>div:last-child>div]:p-0 gap-0'
        >
          
          {/* TAB 01: WHY CANSKA? */}
          <Tabs.Item active={activeTab === 0} title={renderTabTitle("01", "Why Canska?", 0)}>
            <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">
              
              <ScrollAnimatedElement className="w-full" duration={0.5} yOffset={20}>
                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                  <Image
                    src="/img/whycanska-banner.svg"
                    alt="Graduating students throwing caps against city skyline"
                    fill
                    priority
                    className="object-cover object-center absolute w-full h-full"
                  />
                  <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Why Canska?</h1>
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                </div>
                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[54px] max-w-[896px]'>
                  Canska views the years from age 8 to 19 as a critical and finite lifecycle window during which identity, capability, and
                  positioning must be intentionally engineered...
                </p>
              </ScrollAnimatedElement>

              {/* Feature Blocks Staggered Loop Array */}
              <div className="flex flex-col gap-[20px] mb-[40px] xl:mb-[69px]">
                {WhyCanskaContent?.map((block, index) => (
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

              {/* Next Footer CTA */}
              <WhyCanskaCta />
            </section>
          </Tabs.Item>

          {/* TAB 02: WHY START AT AGE 8? */}
          <Tabs.Item active={activeTab === 1} title={renderTabTitle("02", "Why Start at Age 8?", 1)}>
            <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">
              
              <ScrollAnimatedElement className="w-full" duration={0.5} yOffset={20}>
                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                  <Image
                    src="/img/whycanska-at8-banner.svg"
                    alt="Graduating students"
                    fill
                    priority
                    className="object-cover object-center absolute w-full h-full"
                  />
                  <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Why Start at Age 8?</h1>
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                </div>
                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[54px] max-w-[896px]'>
                  Starting at age eight allows a child to move beyond the frantic "resume padding" that plagues high school applicants...
                </p>
              </ScrollAnimatedElement>

              <div className="flex flex-col gap-[20px] mb-[40px] xl:mb-[69px]">
                {WhyAtAgeEightContent?.map((block, index) => (
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
          </Tabs.Item>

          {/* TAB 03: WHY PORTFOLIO? */}
          <Tabs.Item active={activeTab === 2} title={renderTabTitle("03", "Why Portfolio?", 2)}>
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
          </Tabs.Item>

          {/* TAB 04: PORTFOLIO BUILDING */}
          <Tabs.Item active={activeTab === 3} title={renderTabTitle("04", "Portfolio Building", 3)}>
            <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">
              
              <ScrollAnimatedElement className="w-full" duration={0.5} yOffset={20}>
                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                  <Image
                    src="/img/portfolio-bulding.svg"
                    alt="Graduating students"
                    fill
                    priority
                    className="object-cover object-center absolute w-full h-full"
                  />
                  <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Portfolio Building</h1>
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                </div>
                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[54px] max-w-[896px]'>
                  Portfolio Building for Elite Scholarships — seven pillars that turn a student profile into compelling, unfakeable proof of worth...
                </p>
              </ScrollAnimatedElement>

              <div className="flex flex-col gap-[20px] mb-[40px] xl:mb-[69px]">
                {portfolioBuilding?.map((block, index) => (
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
          </Tabs.Item>

        </Tabs>
      </div>
    </div>
  );
}

// Sub-Component to avoid repeating identical CTA blocks inside each Tab configuration
function WhyCanskaCta() {
  return (
    <ScrollAnimatedElement duration={0.6} yOffset={25}>
      <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[56px] flex items-center bg-[#5E17EB] text-white rounded-[24px] relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] -top-[12px] -left-[200px] bg-[#FFFFFF1A] blur-[64px] rounded-full z-30 pointer-events-none" />
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
          
          <div className="flex flex-col max-w-[880px] gap-[12px]">
            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[16px]">
              Next Up
            </span>
            <h2 className="max-w-[926px] text-4xl sm:text-5xl md:text-[36px] font-bold leading-normal md:leading-[40px] tracking-[-1.92px]">
              Continue to <span className="text-[#FFB433]">University Prep</span>
            </h2>
            <p className="max-w-[576px] text-white/80 text-base font-normal leading-[26px]">
              From the world's top 50 universities to scholarship architecture and visa precision
              — a complete preparation system that turns ambition into acceptance letters and full-ride awards.
            </p>
          </div>

          <div className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0">
            <Link
              href="/university-prep?activeTab=0"
              className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] min-w-[232px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group"
            >
              <span className="flex-1 text-left">Read University Prep</span>
              <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#2D0B70" />
                </svg>
              </span>
            </Link>
          </div>

        </div>
      </section>
    </ScrollAnimatedElement>
  )
}


export default WhyChooseCanska
