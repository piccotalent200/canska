'use client'
import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const MobileDrawer = ({ isOpen, onClose, menuData }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null)

  const router = useRouter()

  const handleSubmenuClick = (menuTitle) => {
    setActiveSubmenu(activeSubmenu === menuTitle ? null : menuTitle)
  }

  const handleCreateAccount = () => {
    router.push('/create-account')
    onClose(false)
  }

  const handleApplyToTheQuad = () => {
    router.push('/apply-quad')
    onClose(false)
  }

  const handleCkickAbout = () => {
   router.push('/about')
    onClose(false)
  }
  
  const handleClickAddons = () => {
    router.push('/add-ons')
    onClose(false)
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-[200] min-[1100px]:hidden" data-lenis-prevent>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen transform transition duration-300 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              data-lenis-prevent
            >
              <div className="flex h-full flex-col bg-[#5E17EB] shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-[#FFFFFF]/20">
                  <img src="/img/canska-white.svg" alt="Canska" />
                  <button
                    onClick={() => onClose(false)}
                    className="p-2 text-[#FFFFFF] hover:bg-[#FFFFFF]/10 rounded cursor-pointer"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Content */}
                <div className="flex-1 overflow-y-auto" data-lenis-prevent>
                  {Object.entries(menuData).map(([menuTitle, data]) => (
                    <div key={menuTitle}>
                      <button
                        onClick={() => handleSubmenuClick(menuTitle)}
                        className="w-full flex items-center justify-between p-4 text-left text-base font-medium text-[#FFFFFF] hover:bg-[#ffffff]/10 cursor-pointer sansFlex"
                      >
                        <span>{menuTitle}</span>
                        <img
                          src="/img/dropdown-arrow-white.svg"
                          alt="arrow"
                          className={`transition-transform duration-200 ${activeSubmenu === menuTitle ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {/* Submenu Content */}
                      <div className={`overflow-hidden transition-all duration-300 ${activeSubmenu === menuTitle ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="bg-[#5E17EB]/10 p-4 space-y-4">
                          {data.sections.map((section, index) => (
                            <div key={index} className="pb-4 border-b border-[#FFFFFF]/20 last:border-b-0">
                              {section.title && (
                                <div>
                                  <h4 className="text-lg font-semibold text-[#FFFFFF] mb-2 sansFlex">{section.title}</h4>
                                  <p className="text-sm text-[#FFFFFF]/80 mb-3 sansFlex">{section.description}</p>
                                  {section.cta && (
                                    <Link 
                                      href={section.link || '/'}
                                      onClick={() => onClose(false)}
                                      className="inline-block text-sm font-medium text-[#5E17EB] bg-[#FFFFFF] px-4 py-2 uppercase sansFlex hover:bg-[#FFFFFF]/90 transition-all duration-200">
                                        {section.cta}
                                    </Link>
                                  )}
                                </div>
                              )}
                              {section.links && (
                                <ul className="space-y-2">
                                  {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                      <Link
                                        href={link.mainLink || '/'}
                                        onClick={() => onClose(false)}
                                        className="w-full flex items-center justify-between text-base font-medium text-[#FFFFFF] hover:text-[#FFFFFF]/80 py-2 cursor-pointer sansFlex"
                                      >
                                        <span>{link.title}</span>
                                      </Link>
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


                  <div>
                    <button
                      onClick={() => handleSubmenuClick("more")}
                      className="w-full flex items-center justify-between p-4 text-left text-base font-medium text-[#FFFFFF] hover:bg-[#ffffff]/10 cursor-pointer sansFlex"
                    >
                      <span>More</span>
                      <img
                        src="/img/dropdown-arrow-white.svg"
                        alt="arrow"
                        className={`transition-transform duration-200 ${activeSubmenu === "more" ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Submenu Content */}
                    <div className={`overflow-hidden transition-all duration-300 ${activeSubmenu === "more" ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-[#5E17EB]/10 px-4 space-y-4">
                        <div className="pb-4 border-b border-[#FFFFFF]/20 last:border-b-0">
                          <ul className="space-y-2">
                            <li>
                              <Link href="/faq"
                                onClick={() => onClose(false)}
                                className="w-full flex items-center justify-between text-base font-medium text-[#FFFFFF] hover:text-[#FFFFFF]/80 py-2 cursor-pointer sansFlex"
                              >
                                FAQs
                              </Link>
                              <Link href="/"
                                className="w-full flex items-center justify-between text-base font-medium text-[#FFFFFF] hover:text-[#FFFFFF]/80 py-2 cursor-pointer sansFlex"
                              >
                                Blog
                              </Link>
                              <Link href="/"
                                className="w-full flex items-center justify-between text-base font-medium text-[#FFFFFF] hover:text-[#FFFFFF]/80 py-2 cursor-pointer sansFlex"
                              >
                                Contact us
                              </Link>

                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>


                  <Link href="/"
                    className="w-full flex items-center justify-between p-4 text-left text-base font-medium text-[#FFFFFF] hover:bg-[#ffffff]/10 cursor-pointer sansFlex"
                  >
                    Add-Ons
                  </Link>

                  <Link href="/"
                    className="w-full flex items-center justify-between p-4 text-left text-base font-medium text-[#FFFFFF] hover:bg-[#ffffff]/10 cursor-pointer sansFlex"
                  >
                    About
                  </Link>
                </div>

                {/* Mobile Action Buttons */}
                <div className="border-t border-[#FFFFFF]/20 p-4 gap-3 flex">
                  <button onClick={() => handleCreateAccount()} className='h-full p-[8px_16px] text-sm leading-[21px] font-bold text-[#5E17EB] transition-all duration-200 hover:bg-[#FFFFFF]/90 bg-[#FFFFFF] rounded-[999px] border-[2px] border-solid border-[#FFFFFF] min-h-[45px] items-center justify-center flex grow sansFlex cursor-pointer'>
                    Create Account
                  </button>
                  <button onClick={() => handleApplyToTheQuad()} className='h-full p-[8px_16px] text-sm leading-[none] font-bold text-[#FFFFFF] transition-all duration-200 hover:bg-[#1F232E]/90 block bg-[#1F232E] rounded-[999px] border border-solid border-[#00000000] gap-[10px] group min-h-[45px] items-center justify-center flex grow sansFlex cursor-pointer'>
                    Apply to The Quad
                    <img src="/img/btn-arrow.svg" alt="" className='group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-200' />
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default MobileDrawer
