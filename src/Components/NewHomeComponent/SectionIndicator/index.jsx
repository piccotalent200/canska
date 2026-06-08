'use client'

import { sections } from '@/utilities/constants';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

const SectionIndicator = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipTimeout, setTooltipTimeout] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i].id);
                if (element && element.offsetTop <= scrollPosition) {
                    const newActiveSection = sections[i].id;
                    if (newActiveSection !== activeSection) {
                        setActiveSection(newActiveSection);

                        // Show tooltip when section changes
                        setShowTooltip(true);

                        // Clear existing timeout
                        if (tooltipTimeout) {
                            clearTimeout(tooltipTimeout);
                        }

                        // Set new timeout to hide tooltip after 2 seconds
                        const newTimeout = setTimeout(() => {
                            setShowTooltip(false);
                        }, 2000);

                        setTooltipTimeout(newTimeout);
                    }
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (tooltipTimeout) {
                clearTimeout(tooltipTimeout);
            }
        };
    }, [sections, activeSection, tooltipTimeout]);

    return (
        <div className='max-md:hidden fixed top-[250px] right-[24px] flex flex-col items-center justify-between gap-[10px] z-50'>
            <span className='bg-[linear-gradient(180deg,_#5819EB_0%,_#FFAD33_100%)] w-[3px] h-full absolute'>
            </span>
            {sections.map((section) => (
                <div key={section.id} className='flex items-center group'>
                    <div>
                        <Link
                            href={`#${section.id}`}
                            className={`w-[12px] h-[12px] block rounded-full bg-[#5819EBB2] relative hover:bg-[#5819EB] transition-all duration-200 cursor-pointer border-none outline-none ${activeSection === section.id
                                ? 'active bg-[#FFB433] shadow-[0px_0px_0px_4px_#FFB43380]'
                                : 'hover:shadow-[0px_0px_0px_4px_#5819EB26]'
                                }`}
                        >
                        </Link>
                    </div>
                    <div className={`absolute right-[calc(100%+6px)] mr-2 transition-all duration-500 ${(activeSection === section.id && showTooltip) ||
                            (activeSection !== section.id && false) // Only show on hover for non-active sections
                            ? 'opacity-100 visible'
                            : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                        }`}>

                        <div className='relative border border-solid border-[#DFE2E7] p-[16px_16px_12px_16px] bg-[#FFFFFF] rounded-[16px] w-max'>

                            {/* Arrow */}
                            <span className='absolute top-1/2 -right-[7px] -translate-y-1/2 w-[14px] h-[14px] bg-white border-r border-b border-[#DFE2E7] rotate-[-45deg]'></span>

                            <h3 className='hidden text-[10px] leading-[15px] font-semibold text-[#5819EB] mb-[16px]'>
                                Now Reading
                            </h3>

                            <p className='text-sm leading-[20px] font-semibold text-[#1F242E] mb-[6px]'>
                                {section.name}
                            </p>

                            <div className='min-h-[21px] flex items-center gap-[8px]'>
                                <p className='text-sm leading-[15px] font-medium text-[#616875] whitespace-nowrap'>
                                    {section.number} / 15
                                </p>

                                <span className='bg-[linear-gradient(90deg,_#5819EB_0%,_#FFAD33_100%)] grow h-[2px] min-w-[85px] rounded'></span>
                            </div>
                        </div>
                    </div>
                </div>))}
        </div>
    )
}

export default SectionIndicator