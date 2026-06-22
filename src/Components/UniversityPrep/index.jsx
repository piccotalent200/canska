"use client";
import React, { useEffect, useState } from 'react';
import { Tabs } from "flowbite-react";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import HeroSection from './sections/HeroSection';
import Top50Universities from './sections/Top50Universities';
import UniversityAdmissions from './sections/UniversityAdmissions';
import ScholarshipSupport from './sections/ScholarshipSupport';
import StudentVisa from './sections/StudentVisa';

const customTabsTheme = {
    tablist: {
        base: "sticky top-[80px] z-[20] whitespace-nowrap !flex-nowrap flex items-center gap-2 p-[16px] sm:p-[16px_32px] lg:p-[16px_56px] bg-[rgba(251,250,255,0.9)] border-y border-[#EDE7FB] backdrop-blur-[12px] overflow-x-auto",
        tabitem: {
            base: "p-0 !bg-transparent hover:!bg-transparent",
        },
    },
};

const UniversityPrep = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

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

            <div className="w-full">
                <Tabs
                    key={activeTab}
                    variant="pills"
                    theme={customTabsTheme}
                    onActiveTabChange={handleTabChange}
                    className='[&>div:last-child>div]:p-0 gap-0'
                >
                    <Tabs.Item active={activeTab === 0} title={renderTabTitle("01", "TOP 50 Universities", 0)}>
                        <Top50Universities />
                    </Tabs.Item>

                    <Tabs.Item active={activeTab === 1} title={renderTabTitle("02", "University Admissions", 1)}>
                        <UniversityAdmissions />
                    </Tabs.Item>

                    <Tabs.Item active={activeTab === 2} title={renderTabTitle("03", "Scholarship Support", 2)}>
                        <ScholarshipSupport />
                    </Tabs.Item>

                    <Tabs.Item active={activeTab === 3} title={renderTabTitle("04", "Student Visa", 3)}>
                        <StudentVisa />
                    </Tabs.Item>
                </Tabs>
            </div>
        </div>
    );
};

export default UniversityPrep;
