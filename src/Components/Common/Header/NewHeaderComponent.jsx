'use client'
import React, { Fragment, useState } from 'react'
import { usePathname } from 'next/navigation'
import menuData from './menuData'
import DesktopMenu from './DesktopMenu'
import MobileDrawer from './MobileDrawer'
import Link from 'next/link'

const NewHeaderComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const pathname = usePathname()

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen)

  const handleLogoClick = (e) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className='flex items-center bg-[#5E17EB] h-20 sticky top-0 z-[100] lg:px-[32px] px-[16px]'>
        {/* Logo */}
        <div className='pe-4 xl:pe-13'>
          <Link href="/" onClick={handleLogoClick} className='cursor-pointer'>
            <img src="/img/canska-white.svg" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={`flex items-center px-[0px] xl:mx-[10px] max-[1050px]:hidden relative w-fit me-auto group h-full before:absolute before:h-0 before:transition-all before:duration-500 before:bg-white before:w-screen before:right-0 before:top-[80px] before:z-[5] after:z-[1] after:fixed after:right-0 after:w-screen after:h-[calc(100vh-80px)] after:top-[80px] after:opacity-0 after:invisible after:duration-500 after:transition-all after:bg-[#1A02AD4D] ${showMenu ? "before:h-screen after:opacity-100 after:visible" : ""}`}>
          {Object.entries(menuData).map(([menuTitle, data]) => {
            const extractedLink = data?.sections?.[0]?.link || '/';
            return (
              <Fragment key={menuTitle}>
                <DesktopMenu
                  menuTitle={menuTitle}
                  menuData={data}
                  menuLink={extractedLink}
                  onMouseEnter={() => setShowMenu(true)}
                  onMouseLeave={() => setShowMenu(false)}
                />
              </Fragment>
            );
          })}
        </div>

        {/* Desktop Action Buttons */}
        <div className='flex items-center ms-auto max-[1050px]:hidden gap-[12px]'>
          <Link href="/create-account" className='h-[51px] p-[16px] xl:p-[15px_27px] text-sm leading-[none] font-bold text-[#FFFFFF] transition-all duration-200 hover:bg-[#ffffff]/10 rounded-[999px] border-[2px] border-solid border-[#FFFFFF] min-h-[51px] items-center justify-center flex'>
            Create Account
          </Link>
          <Link href="/apply-quad" className='h-[51px] p-[16px] xl:p-[15px_27px] text-sm leading-[none] font-bold text-[#FFFFFF] transition-all duration-200 hover:bg-[#1F232E]/90 block bg-[#1F232E] rounded-[999px] border border-solid border-[#00000000] gap-[10px] group min-h-[51px] items-center justify-center flex'>
            Apply to The Quad
            <img src="/img/btn-arrow.svg" alt="" className='group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-200' />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleDrawer}
          className='min-[1051px]:hidden ml-auto p-2 flex flex-col justify-center items-center w-8 h-8 space-y-1 cursor-pointer'
          aria-label="Toggle menu"
        >
          <span className='block w-6 h-[2px] bg-[#FFFFFF] transition-all duration-300'></span>
          <span className='block w-6 h-[2px] bg-[#FFFFFF] transition-all duration-300'></span>
          <span className='block w-6 h-[2px] bg-[#FFFFFF] transition-all duration-300'></span>
        </button>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={setIsDrawerOpen}
        menuData={menuData}
      />
    </>
  )
}

export default NewHeaderComponent
