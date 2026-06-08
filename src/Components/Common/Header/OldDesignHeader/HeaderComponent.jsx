'use client'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'

const menuData = {
  'The Quad Program': {
    sections: [
      {
        title: 'The Quad Program',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis dis parturient.',
        cta: 'Learn More',
      },
      {
        links: [
          {
            title: 'Program Overview',
            subLinks: ['Program Structure', 'Learning Outcomes', 'Duration & Schedule']
          },
          {
            title: 'Curriculum Details',
            subLinks: ['Core Subjects', 'Electives', 'Assessment Methods']
          },
          {
            title: 'Student Journey',
            subLinks: ['Admission Process', 'Academic Support', 'Graduate Outcomes']
          },
          {
            title: 'Application Process',
            subLinks: ['Requirements', 'Deadlines', 'Application Form']
          },
        ],
      },
    ],
  },

  'University & Career': {
    sections: [
      {
        title: 'University & Career',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis dis parturient.',
        cta: 'Learn More',
      },
      {
        links: [
          {
            title: 'University Guidance',
            subLinks: ['University Selection', 'Application Support', 'Scholarship Guidance']
          },
          {
            title: 'Expert Mentorship',
            subLinks: ['Academic Mentors', 'Industry Professionals', 'Alumni Network']
          },
          {
            title: 'Career Planning',
            subLinks: ['Career Assessment', 'Industry Insights', 'Internship Programs']
          },
          {
            title: 'Success Stories',
            subLinks: ['Student Achievements', 'Alumni Testimonials', 'Case Studies']
          },
        ],
      },

    ],
  },

  'Why Choose Canska': {
    sections: [
      {
        title: 'Why Choose Canska',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis dis parturient.',
        cta: 'Learn More',
      },
      {
        links: [
          {
            title: 'Our Approach',
            subLinks: ['Teaching Methodology', 'Personalized Learning', 'Innovation Focus']
          },
          {
            title: 'Success Rate',
            subLinks: ['University Acceptance', 'Academic Performance', 'Graduate Outcomes']
          },
          {
            title: 'Student Testimonials',
            subLinks: ['Current Students', 'Alumni Reviews', 'Parent Feedback']
          },
          {
            title: 'Compare Programs',
            subLinks: ['Program Comparison', 'Pricing Options', 'Benefits Overview']
          },
        ],
      },

    ],
  },
}


const HeaderComponent = () => {
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
    <div className="group/item h-full">
      <div className='text-base leading-[22px] text-[#1A02AD] font-medium flex items-center gap-[4px] cursor-pointer [&:hover>img]:rotate-[180deg] outline-none [&[aria-expanded="true"]]:font-merienda h-full group/a'>
        <span>{menuTitle}</span>
        <Image src="/img/dropdown-arrow.svg" alt="arrow" width={16} height={16} className='transition-all duration-200 ' />
      </div>

      <div
        className="absolute w-full right-0 top-[80px] left-0 opacity-0 group-hover/item:opacity-100 group-hover/item:visible transition-all duration-500 invisible z-10 flex transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in bg-[#ffffff] h-[calc(100vh-80px)]"
      >
        <div className='bg-white grid h-fit relative'>
          {menuData.sections.map((section, index) => (
            <div key={index} className=''>
              {section.title && (
                <div className='p-[32px_64px_56px_16px]'>
                  <h3 className='text-[24px] leading-[30px] font-medium text-[#0D3BAD] mb-[8px] sansFlex'>{section.title}</h3>
                  <p className='text-sm leading-[20px] font-normal text-[#111827] mb-[16px] sansFlex'>{section.description}</p>
                  {section.cta && (
                    <a href="" className='text-base leading-[20px] font-medium text-[#FFFFFF] bg-[#0D3BAD] p-[12px_24px] uppercase sansFlex block hover:bg-[#082c85] transition-all duration-200 w-fit'>{section.cta}</a>
                  )}
                </div>
              )}
              {section.links && (
                <div>
                  <ul className='mt-[8px] group/links'>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="last:mb-0 group/link">
                        <div className="">
                          <a href="" className="text-[24px] leading-[30px] font-normal text-[#0D3BAD] hover:bg-[#E8EEFF] p-[8px_64px_8px_16px] flex items-center justify-between transition-all duration-200 group-hover/link:bg-[#E8EEFF] sansFlex">
                            <span>{link.title}</span>
                            <Image src="/img/drop-arrow-blue.svg" alt="arrow" width={16} height={16} className='w-4 h-4 transition-transform duration-200 ' />
                          </a>

                          {/* Sub-links dropdown */}
                          <div className='absolute left-full top-0 w-[360px] bg-[#E8EEFF] opacity-0 invisible group-hover/links:opacity-100 group-hover/links:visible'>
                            <div className="relative w-[360px]  opacity-0 invisible group-hover/link:opacity-100 group-hover/link:visible transition-all duration-200 z-20 h-screen p-[80px_40px]">
                              <ul>
                                {link.subLinks.map((subLink, subIndex) => (
                                  <li key={subIndex}>
                                    <a href="" className="block text-[24px] leading-[30px] font-normal text-[#0D3BAD] hover:underline p-[12px_16px] transition-all duration-200 border-b border-gray-100 last:border-b-0 sansFlex">
                                      {subLink}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
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
        <div className='flex items-center gap-[16px] xl:gap-[34px] px-[16] xl:mx-[16px]  max-[1050px]:hidden relative w-fit me-auto group h-full'>
          {Object.entries(menuData).map(([menuTitle, data]) =>
            <Fragment key={menuTitle} >
              {renderDesktopMenu(menuTitle, data)}
            </Fragment>
          )}
          <div className='before:absolute before:h-0 group-hover:before:h-screen before:transition-all before:duration-500 before:bg-white before:w-screen before:right-0 before:top-[80px] before:z-[5] after:z-[1] after:fixed after:right-0 after:w-screen after:h-[calc(100vh-80px)] after:top-[80px] after:opacity-0 after:invisible  group-hover:after:opacity-100  group-hover:after:visible after:duration-500 after:transition-all after:bg-[#1A02AD4D]'>

          </div>

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
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full md:pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen  transform transition duration-300 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col bg-white shadow-xl">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-[#CAC2DE]">
                    <Image src="img/canska.svg" alt="Canska" width={120} height={32} className="h-8" />
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
                                {section.title && (
                                  <div>
                                    <h4 className="text-lg font-semibold text-[#1A02AD] mb-2 merienda">{section.title}</h4>
                                    <p className="text-sm text-[#111827] mb-3">{section.description}</p>
                                    {section.cta && (
                                      <a href="" className="inline-block text-sm font-medium text-white bg-[#1A02AD] px-4 py-2 uppercase">
                                        {section.cta}
                                      </a>
                                    )}
                                  </div>
                                )}
                                {section.links && (
                                  <div>
                                    <ul className="space-y-2">
                                      {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                          <div>
                                            <button
                                              onClick={() => handleSubLinkClick(link.title)}
                                              className="w-full flex items-center justify-between text-base font-medium text-[#111827] hover:text-[#1A02AD] py-2 cursor-pointer"
                                            >
                                              <span>{link.title}</span>
                                              <img
                                                src="/img/dropdown-arrow.svg"
                                                alt="arrow"
                                                className={`w-4 h-4 transition-transform duration-200 ${activeSubLink === link.title ? 'rotate-180' : ''}`}
                                              />
                                            </button>

                                            {/* Sub-links */}
                                            <div className={`overflow-hidden transition-all duration-300 ${activeSubLink === link.title ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                                              <ul className="ml-4 mt-2 space-y-1">
                                                {link.subLinks.map((subLink, subIndex) => (
                                                  <li key={subIndex}>
                                                    <a href="" className="block text-sm font-normal text-[#666] hover:text-[#1A02AD] py-1 pl-2 border-l-2 border-transparent hover:border-[#1A02AD] transition-all duration-200">
                                                      {subLink}
                                                    </a>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="border-t border-[#CAC2DE] p-4 gap-3 max-sm:flex-col flex">
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

export default HeaderComponent