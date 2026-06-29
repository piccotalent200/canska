"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Tabs } from "flowbite-react";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import TheRealROI from './sections/TheRealROI';
import HeroSection from './sections/HeroSection';
import TheStrategicValue from './sections/TheStrategicValue';
import AdmissionsInsights from './sections/AdmissionsInsights';
import ParentalCommitment from './sections/ParentalCommitment';


const customTabsTheme = {
    tablist: {
        base: "sticky top-[80px] z-[20] whitespace-nowrap !flex-nowrap flex items-center gap-2 p-[16px] sm:p-[16px_32px] lg:p-[16px_56px] bg-[rgba(251,250,255,0.9)] border-y border-[#EDE7FB] backdrop-blur-[12px] overflow-x-auto",
        tabitem: {
            base: "p-0 !bg-transparent hover:!bg-transparent",
        },
    },
};

const ForParents = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const tabsRef = useRef(null);

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

        // Keep scroll: false so Next.js doesn't forcefully yank the viewport to the absolute top of the page
        router.push(`${pathname}?${params.toString()}`, { scroll: false });

        // 3. Smoothly scroll the user to the top of the tab container (accounting for your sticky headers if needed)
        if (tabsRef.current) {
            const yOffset = -80;
            const yPosition = tabsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };

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
            <HeroSection />

            <div className="w-full" ref={tabsRef}>
                <Tabs
                    key={activeTab}
                    variant="pills"
                    theme={customTabsTheme}
                    onActiveTabChange={handleTabChange}
                    className='[&>div:last-child>div]:p-0 gap-0'
                >
                    <Tabs.Item active={activeTab === 0} title={renderTabTitle("01", "The Real ROI", 0)}>
                      <TheRealROI/>
                    </Tabs.Item>

                    <Tabs.Item active={activeTab === 1} title={renderTabTitle("02", "The Strategic Value", 1)}>
                        <TheStrategicValue/>
                    </Tabs.Item>

                    <Tabs.Item active={activeTab === 2} title={renderTabTitle("03", "Admissions Insights", 2)}>
                        <AdmissionsInsights/>
                    </Tabs.Item>

                    <Tabs.Item active={activeTab === 3} title={renderTabTitle("04", "Parental Commitment", 3)}>
                        <ParentalCommitment/>
                    </Tabs.Item>
                </Tabs>
            </div>
        </div>
    );
};

export default ForParents;