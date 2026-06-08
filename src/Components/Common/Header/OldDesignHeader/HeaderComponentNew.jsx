'use client'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import { Popover, PopoverButton, PopoverPanel, Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'

const menuData = {
    'The Quad Program': {
        sections: [
            {
                title: 'The Quad Program',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis dis parturient.',
                cta: 'Learn More'
            },
            {
                title: 'Program Overview',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
                links: [
                    'The Quad Program',
                    'Why Quad Program',
                    'Application Flow'
                ]
            },
            {
                title: 'Student Journey',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
                links: [
                    'Why Start at Age 8',
                    'Why Portfolio',
                    'Portfolio Building'
                ]
            }
        ]
    },
    'University & Career': {
        sections: [
            {
                title: 'University & Career',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis dis parturient.',
                cta: 'Learn More'
            },
            {
                title: 'University Guidance',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
                links: [
                    'Top Universities',
                    'Admission Process',
                    'Scholarship Opportunities'
                ]
            },
            {
                title: 'Career Planning',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
                links: [
                    'Career Assessment',
                    'Industry Insights',
                    'Professional Development'
                ]
            }
        ]
    },
    'Why Choose Canska': {
        sections: [
            {
                title: 'Why Choose Canska',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis dis parturient.',
                cta: 'Learn More'
            },
            {
                title: 'Our Approach',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
                links: [
                    'Personalized Learning',
                    'Expert Mentorship',
                    'Proven Results'
                ]
            },
            {
                title: 'Success Stories',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
                links: [
                    'Student Testimonials',
                    'University Acceptances',
                    'Achievement Gallery'
                ]
            }
        ]
    }
}



const HeaderComponentNew = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [activeSubmenu, setActiveSubmenu] = useState(null)
    const [activeSubLink, setActiveSubLink] = useState(null)

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
        setActiveSubmenu(null)
        setActiveSubLink(null)
    }

    const handleSubmenuClick = (menuTitle) => {
        setActiveSubmenu(activeSubmenu === menuTitle ? null : menuTitle)
        setActiveSubLink(null)
    }

    const handleSubLinkClick = (linkTitle) => {
        setActiveSubLink(activeSubLink === linkTitle ? null : linkTitle)
    }

    const renderDesktopMenu = (menuTitle, menuData) => (
        <Popover className="relative">
            <PopoverButton className='text-base leading-[22px] text-[#111827] font-medium flex items-center gap-[4px] cursor-pointer [&[aria-expanded="true"]>img]:rotate-[180deg] outline-none [&[aria-expanded="true"]]:font-merienda'>
                <span>{menuTitle}</span>
                <Image src="/img/dropdown-arrow.svg" alt="arrow" width={16} height={16} className='transition-all duration-200' />
            </PopoverButton>

            <PopoverPanel
                transition
                className="fixed left-0 top-[80px] z-10 flex w-screen max-w-max transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in bg-[#0A011214] h-[calc(100vh-80px)]"
            >
                <div className='bg-white p-[32px_40px] grid grid-cols-3 h-fit'>
                    {menuData.sections.map((section, index) => (
                        <div key={index} className='ms-[16px] first:ms-0 px-[32px] border-s border-solid border-[#CAC2DE]'>
                            <h3 className='text-[22px] leading-[32px] font-semibold text-[#1A02AD] mb-[6px] merienda'>{section.title}</h3>
                            <p className='text-sm leading-[20px] font-normal text-[#111827] mb-[24px]'>{section.description}</p>
                            {section.cta ? (
                                <a href="" className='text-base leading-[20px] font-medium text-[#FFFFFF] bg-[#1A02AD] p-[12px_24px] uppercase'>{section.cta}</a>
                            ) : (
                                <ul className='mt-[8px]'>
                                    {section.links?.map((link, linkIndex) => (
                                        <li key={linkIndex} className="mb-[20px] last:mb-0">
                                            <a href="" className="text-[20px] leading-[25px] font-medium text-[#111827] hover:underline">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </PopoverPanel>
        </Popover>
    )

    return (
        <>
            <header className='flex items-center shadow-[0px_4px_4px_0px_#00000029] bg-white h-[80px] sticky top-0 z-[100] px-[32px] '>
                <div className='pe-[16px] xl:pe-[32px]'>
                    <a href="" className='cursor-pointer'>
                        <Image src="/img/canska.svg" alt="" width={120} height={32} />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className='grow flex items-center gap-[16px] xl:gap-[34px] px-[16] xl:px-[32px] max-[1050px]:hidden'>
                    {Object.entries(menuData).map(([menuTitle, data]) =>
                        <div key={menuTitle}>
                            {renderDesktopMenu(menuTitle, data)}
                        </div>
                    )}
                </div>

                {/* Desktop Action Buttons */}
                <div className='flex items-stretch ms-auto max-[1050px]:hidden'>
                    <a href="" className='h-full p-[29px_16px] xl:p-[29px_32px] text-base leading-[22px] font-medium text-[#111827] transition-all duration-200 hover:bg-[#0A011214] block border-s border-solid border-[#CAC2DE]'>
                        Create Account
                    </a>
                    <a href="" className='h-full p-[29px_16px] xl:p-[29px_32px] text-base leading-[22px] font-medium text-[#111827] transition-all duration-200 hover:bg-[#0A011214] block border-s border-solid border-[#CAC2DE]'>
                        Apply to The Quad
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={toggleDrawer}
                    className='min-[1051px]:hidden ml-auto p-2 flex flex-col justify-center items-center w-8 h-8 space-y-1 cursor-pointer'
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-[#111827] transition-all duration-300 `}></span>
                    <span className={`block w-6 h-0.5 bg-[#111827] transition-all duration-300 `}></span>
                    <span className={`block w-6 h-0.5 bg-[#111827] transition-all duration-300 `}></span>
                </button>
            </header>

            {/* Mobile Drawer using Headless UI Dialog */}
            <Dialog open={isDrawerOpen} onClose={setIsDrawerOpen} className="relative z-[200] min-[1051px]:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <DialogPanel
                                transition
                                className="pointer-events-auto w-screen max-w-lg transform transition duration-300 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                            >
                                <div className="flex h-full flex-col bg-white shadow-xl">
                                    {/* Header */}
                                    <div className="flex items-center justify-between p-4 border-b border-[#CAC2DE]">
                                        <Image src="/img/canska-mb.svg" alt="Canska" width={120} height={32} className="h-8" />
                                        <button
                                            onClick={() => setIsDrawerOpen(false)}
                                            className="p-2 text-[#111827] hover:bg-gray-100 rounded cursor-pointer"
                                            aria-label="Close menu"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Navigation Content */}
                                    <div className="flex-1 overflow-y-auto">
                                        {/* Mobile Navigation Items */}
                                        {Object.entries(menuData).map(([menuTitle, data]) => (
                                            <div key={menuTitle} className="border-b border-[#CAC2DE]">
                                                <button
                                                    onClick={() => handleSubmenuClick(menuTitle)}
                                                    className="w-full flex items-center justify-between p-4 text-left text-base font-medium text-[#111827] hover:bg-gray-50 cursor-pointer"
                                                >
                                                    <span>{menuTitle}</span>
                                                    <img
                                                        src="/img/dropdown-arrow.svg"
                                                        alt="arrow"
                                                        className={`transition-transform duration-200 ${activeSubmenu === menuTitle ? 'rotate-180' : ''}`}
                                                    />
                                                </button>

                                                {/* Submenu Content */}
                                                <div className={`overflow-hidden transition-all duration-300 ${activeSubmenu === menuTitle ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                                    }`}>
                                                    <div className="bg-gray-50 p-4 space-y-4">
                                                        {data.sections.map((section, index) => (
                                                            <div key={index} className="pb-4 border-b border-gray-200 last:border-b-0">
                                                                <h4 className="text-lg font-semibold text-[#1A02AD] mb-2 merienda">{section.title}</h4>
                                                                <p className="text-sm text-[#111827] mb-3">{section.description}</p>
                                                                {section.cta ? (
                                                                    <a href="" className="inline-block text-sm font-medium text-white bg-[#1A02AD] px-4 py-2 uppercase">
                                                                        {section.cta}
                                                                    </a>
                                                                ) : (
                                                                    <ul className="space-y-2">
                                                                        {section.links?.map((link, linkIndex) => (
                                                                            <li key={linkIndex}>
                                                                                <a href="" className="text-base font-medium text-[#111827] hover:text-[#1A02AD] block py-1">
                                                                                    {link}
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Mobile Action Buttons */}
                                    <div className="border-t border-[#CAC2DE] p-4 space-y-3">
                                        <a href="" className="block w-full text-center py-3 px-4 text-base font-medium text-[#111827] border border-[#CAC2DE] hover:bg-gray-50 transition-colors">
                                            Create Account
                                        </a>
                                        <a href="" className="block w-full text-center py-3 px-4 text-base font-medium text-white bg-[#1A02AD] hover:bg-[#1502a0] transition-colors">
                                            Apply to The Quad
                                        </a>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default HeaderComponentNew