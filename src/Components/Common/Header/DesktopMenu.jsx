"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const DesktopMenu = ({
  menuLink,
  menuTitle,
  menuData,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}) => {
  const router = useRouter();

  const handleLearnMore = (link) => () => {
    onMouseLeave();
    router.push(link);
  };

  return (
    <div className="group/item h-full peer pe-[16px] last:pe-0">
      <button 
        onClick={handleLearnMore(menuLink)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className='text-xs xl:text-sm min-[1400px]:!text-base leading-[22px] text-[#FFFFFF] font-medium flex items-center gap-[4px] cursor-pointer [&:hover>img]:rotate-[180deg] outline-none [&[aria-expanded="true"]]:font-merienda h-full group/a whitespace-nowrap'
      >
        <span>{menuTitle}</span>
        <img src="/img/dropdown-arrow-white.svg" alt="arrow" className='transition-all duration-200' />
      </button>

      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`absolute w-full right-0 top-[80px] left-0 z-10 flex
         bg-[#ffffff] h-[calc(100vh-80px)]
          transition-all duration-500
          ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }
        `}
      >
        <div className='bg-white grid h-fit relative'>
          {menuData.sections.map((section, index) => (
            <div key={index}>
              {section.title && (
                <div className='p-[32px_64px_28px_16px]'>
                  <h3 className='text-[24px] leading-[30px] font-medium text-[#5E17EB] mb-[8px] sansFlex'>{section.title}</h3>
                  <p className='text-sm leading-[20px] font-normal text-[#111827] mb-[34px] sansFlex'>{section.description}</p>
                  {section.cta && (
                    <button
                     onClick={handleLearnMore(section.link)}
                     className='text-base cursor-pointer leading-[24px] font-semibold text-[#FFFFFF] bg-[#5E17EB] rounded-[999px] p-[16px_24px] uppercase sansFlex block hover:bg-[#4300c9] transition-all duration-200 w-fit flex items-center gap-[8px]'>
                      {section.cta}

                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33398 8H12.6673" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 3.3335L12.6667 8.00016L8 12.6668" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                    </button>
                  )}
                </div>
              )}
              {section.links && (
                <div>
                  <ul className='group/links'>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="last:mb-0 group/link">
                        <div>
                          <button 
                            onClick={handleLearnMore(link.mainLink)}
                            className="text-[24px] cursor-pointer leading-[30px] font-normal text-[#5E17EB] hover:bg-[#EBE1FF] p-[8px_64px_8px_16px] flex items-center justify-between transition-all duration-200 group-hover/link:bg-[#EBE1FF] sansFlex">
                            <span>{link.title}</span>
                            {/* <img src="/img/drop-arrow-blue.svg" alt="arrow" className='w-4 h-4 transition-transform duration-200' /> */}
                          </button>

                          {/* Sub-links dropdown */}
                          {/* <div className='absolute left-full top-0 w-[360px] bg-[#EBE1FF] opacity-0 invisible group-hover/links:opacity-100 group-hover/links:visible transition-all duration-200'>
                            <div className="relative w-[360px] opacity-0 invisible group-hover/link:opacity-100 group-hover/link:visible transition-all duration-200 z-20 h-screen p-[80px_40px]">
                              <ul>
                                {link.subLinks.map((subLink, subIndex) => (
                                  <li key={subIndex}>
                                    <a href="" className="block text-[24px] leading-[30px] font-normal text-[#5E17EB] hover:underline p-[12px_16px] transition-all duration-200 border-b border-gray-100 last:border-b-0 sansFlex">
                                      {subLink}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div> */}
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
  );
};

export default DesktopMenu;
