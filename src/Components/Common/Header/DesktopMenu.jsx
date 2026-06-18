'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const DesktopMenu = ({ menuLink, menuTitle, menuData, onMouseEnter, onMouseLeave }) => {

  const router = useRouter()
  const handleLearnMore = (link) => () => {
    router.push(link)
    onMouseLeave()
  }

  return (
    <div className="group/item h-full peer pe-[16px] xl:pe-[34px] last:pe-0">
      <Link href={menuLink}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className='text-base leading-[22px] text-[#FFFFFF] font-medium flex items-center gap-[4px] cursor-pointer [&:hover>img]:rotate-[180deg] outline-none [&[aria-expanded="true"]]:font-merienda h-full group/a'
      >
        <span>{menuTitle}</span>
        <img src="/img/dropdown-arrow-white.svg" alt="arrow" className='transition-all duration-200' />
      </Link>

      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`group-hover/item:delay-200 absolute w-full right-0 top-[80px] left-0 opacity-0 group-hover/item:opacity-100 group-hover/item:visible transition-all duration-500 invisible z-10 flex transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in bg-[#ffffff] h-[calc(100vh-80px)]`}
      >
        <div className='bg-white grid h-fit relative'>
          {menuData.sections.map((section, index) => (
            <div key={index}>
              {section.title && (
                <div className='p-[32px_64px_56px_16px]'>
                  <h3 className='text-[24px] leading-[30px] font-medium text-[#5E17EB] mb-[8px] sansFlex'>{section.title}</h3>
                  <p className='text-sm leading-[20px] font-normal text-[#111827] mb-[16px] sansFlex'>{section.description}</p>
                  {section.cta && (
                    <button onClick={handleLearnMore(section.link)} className='text-base leading-[20px] font-medium text-[#FFFFFF] bg-[#5E17EB] p-[12px_24px] uppercase sansFlex block hover:bg-[#4300c9] transition-all duration-200 w-fit cursor-pointer'>
                      {section.cta}
                    </button>
                  )}
                </div>
              )}
              {section.links && (
                <div>
                  <ul className='mt-[8px] group/links'>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="last:mb-0 group/link">
                        <div>
                          <a href={link.mainLink} className="text-[24px] leading-[30px] font-normal text-[#5E17EB] hover:bg-[#EBE1FF] p-[8px_64px_8px_16px] flex items-center justify-between transition-all duration-200 group-hover/link:bg-[#EBE1FF] sansFlex">
                            <span>{link.title}</span>
                            {/* <img src="/img/drop-arrow-blue.svg" alt="arrow" className='w-4 h-4 transition-transform duration-200' /> */}
                          </a>

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
  )
}

export default DesktopMenu
