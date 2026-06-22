"use client";
import React, { Fragment, useState } from "react";
import { usePathname } from "next/navigation";
import menuData from "./menuData";
import DesktopMenu from "./DesktopMenu";
import MobileDrawer from "./MobileDrawer";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const NewHeaderComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const pathname = usePathname();

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const handleLogoClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="flex items-center bg-[#5E17EB] h-20 sticky top-0 z-[100] lg:px-[32px] px-[16px] gap-[16px]">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="cursor-pointer outline-none"
        >
          <img src="/img/canska-white.svg" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="grow flex justify-center h-full gap-[16px]">
          <div
            className={`flex items-center px-[0px] max-[1100px]:hidden relative w-fit max-xl:me-auto group h-full before:absolute before:h-0 before:transition-all before:duration-500 before:bg-white before:w-screen before:right-0 before:top-[80px] before:z-[5] after:z-[1] after:fixed after:right-0 after:w-screen after:h-[calc(100vh-80px)] after:top-[80px] after:opacity-0 after:invisible after:duration-500 after:transition-all after:bg-[#1A02AD4D]
            ${activeMenu ? "before:h-screen after:opacity-100 after:visible" : ""}
          `}
          >
            {Object.entries(menuData).map(([menuTitle, data]) => {
              const extractedLink = data?.sections?.[0]?.link || "/";

              return (
                <DesktopMenu
                  key={menuTitle}
                  menuTitle={menuTitle}
                  menuData={data}
                  menuLink={extractedLink}
                  isOpen={activeMenu === menuTitle}
                  onMouseEnter={() => setActiveMenu(menuTitle)}
                  onMouseLeave={() => setActiveMenu(null)}
                />
              );
            })}
          </div>

                    <div className='max-[1100px]:hidden flex gap-[16px] h-full'>
            <Link href="" className='text-xs xl:text-sm h-full flex items-center min-[1400px]:!text-base leading-[20px] font-medium text-[#FFFFFF] whitespace-nowrap'> Add-Ons</Link>

            <Link href="" className='text-xs xl:text-sm h-full flex items-center min-[1400px]:!text-base leading-[20px] font-medium text-[#FFFFFF] whitespace-nowrap'>About</Link>

            <Menu as="div" className="relative inline-block">
              <MenuButton className="flex text-xs xl:text-sm h-full flex items-center min-[1400px]:!text-base leading-[20px] font-medium text-[#ffffff] whitespace-nowrap gap-[4px] outline-none border-0 cursor-pointer" >
                More
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MenuButton>

              <MenuItems
                transition
                className="absolute left-0 z-10 -mt-2 w-[230px] origin-top-left rounded-[12px] shadow-[4px_4px_4px_4px_#0000000D] bg-[#FFFFFF] outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="">
                  <MenuItem>
                    <a
                      href="#"
                      className="block text-[20px] leading-[24px] font-medium text-[#5E17EB] p-[12px_24px] hover:bg-[#5E17EB1A]"
                    >
                      FAQs

                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block text-[20px] leading-[24px] font-medium text-[#5E17EB] p-[12px_24px] hover:bg-[#5E17EB1A]"
                    >
                      Blog

                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block text-[20px] leading-[24px] font-medium text-[#5E17EB] p-[12px_24px] hover:bg-[#5E17EB1A]"
                    >
                      Contact us
                    </a>
                  </MenuItem>

                </div>
              </MenuItems>
            </Menu>

          </div>
        </div>

        {/* Desktop Action Buttons */}
        <div className='flex items-center ms-auto max-[1100px]:hidden gap-[12px]'>
          <Link href="/create-account" className='h-[51px] p-[12px_16px] min-[1400px]:!p-[15px_27px] text-xs xl:text-sm leading-[none] font-bold text-[#FFFFFF] transition-all duration-200 hover:bg-[#ffffff]/10 rounded-[999px] border-[2px] border-solid border-[#FFFFFF] min-h-[51px] items-center justify-center flex whitespace-nowrap'>
            Create Account
          </Link>
          <Link href="/apply-quad" className='h-[51px] p-[12px_16px] min-[1400px]:!p-[15px_27px] text-xs xl:text-sm leading-[none] font-bold text-[#FFFFFF] transition-all duration-200 hover:bg-[#1F232E]/90 block bg-[#1F232E] rounded-[999px] border border-solid border-[#00000000] gap-[10px] group min-h-[51px] items-center justify-center flex whitespace-nowrap'>
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
  );
};

export default NewHeaderComponent;
