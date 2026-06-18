'use client'
import React, { useState } from "react";
import { FormDatePicker } from "../Reusable/FormDatePicker";
import FormSelect from "../Reusable/FormSelect";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import QuadTabPanels from "./QuadTabPanels";
import QuadApplicationMOdal from "./QuadModals";
import { span } from "motion/react-client";

// Sidebar data configuration derived from the specification sheet
const sidebarItems = [
  { id: 1, title: "Student Information", duration: "20 min", isCompleted: true, isPending: false },
  { id: 2, title: "Contact Information", duration: "20 min", isCompleted: false, isPending: false },
  { id: 3, title: "Student on Social Media", duration: "15 min", isCompleted: false, isPending: true },
  { id: 4, title: "Language Information", duration: "20 min", isCompleted: false, isPending: false },
  { id: 5, title: "School Information", duration: "20 min", isCompleted: false, isPending: false },
  { id: 6, title: "Academic Performance", duration: "30 min", isCompleted: false, isPending: true },
  { id: 7, title: "Non-Academic Performance", duration: "20 min/entry", isCompleted: false, isPending: false },
  { id: 8, title: "Awards & Prizes Received", duration: "30 min/entry", isCompleted: false, isPending: false },
  { id: 9, title: "Achievements & Honours", duration: "30 min/entry", isCompleted: false, isPending: false },
  { id: 10, title: "Student Travel History", duration: "30 min", isCompleted: false, isPending: false },
  { id: 11, title: "Quick Questions", duration: "20 min/Q", isCompleted: false, isPending: false },
  { id: 12, title: "Parent / Guardian Info", duration: "45 min/entry", isCompleted: false, isPending: false },
  { id: 13, title: "Family Information", duration: "20 min/entry", isCompleted: false, isPending: false },
  { id: 14, title: "About Student: Parent Insights", duration: "250 wd/Q", isCompleted: false, isPending: false },
  { id: 15, title: "Student Health History", duration: "30 min", isCompleted: false, isPending: false },
  { id: 16, title: "Three Referees", duration: "30 min", isCompleted: false, isPending: false },
  { id: 17, title: "Refer Students & Earn", duration: "10 min/entry", isCompleted: false, isPending: false },
  { id: 18, title: "Personal Declaration", duration: "20 min", isCompleted: false, isPending: false },
];


const ApplyTheQuad = () => {

  const [activeTab, setActiveTab] = useState(1);

  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>

      <div className="min-h-screen bg-[#FDFBF7] p-4 md:p-[30px] antialiased font-dm">

        <p className="text-xs leading-[16px] font-extrabold text-[#5E17EB] uppercase tracking-[3.6px] mb-[12px]">Apply to The Quad</p>
        <h3 className="text-[60px] leading-[60px] font-normal text-[#0A0A0A] mb-[16px] md:mb-[6px]">The "Quad" Application</h3>

        <div className="flex max-md:flex-col gap-[16px] md:items-center mb-[18px]">
          <p className="text-base leading-[24px] font-normal text-[#0A0A0AB2] grow">This application consolidates everything needed for a thorough assessment. 18 sections — completing thoroughly may take 2 to 3 weeks. Quality over speed.</p>

          <button onClick={openModal} className="text-base leading-[24px] font-normal text-[#0A0A0A] flex items-center gap-[8px] rounded-[24px] border border-solid border-[#5E17EB] hover:bg-[#5E17EB]/10 transition-all duration-300 rounded-[24px] h-[46px] shadow-[0px_4px_4px_0px_#0000001A] bg-[#FFFFFF] min-w-[201px] px-[16px] justify-center cursor-pointer">
            <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.74115 20.1534H7.83337L6.47726 24.0284H8.67504L10.0312 20.1534H12.1234L10.7673 24.0284H12.965L14.3212 20.3756H14.7756L14.3112 9.75891H12.1617C11.9076 10.134 11.5589 10.4353 11.1509 10.6324C10.743 10.8295 10.2902 10.9153 9.83837 10.8811C9.36533 10.8922 8.89582 10.7972 8.46434 10.603C8.03287 10.4088 7.65039 10.1204 7.34504 9.75891H5.07559L4.16504 23.7978L4.40337 23.8334L5.74115 20.1534Z" fill="#5E17EB" />
              <path d="M12.7466 13.4867C12.7466 13.4867 12.5505 16.0345 11.1133 16.0345C9.74109 16.0345 9.47998 13.4867 9.47998 13.4867C10.5255 12.6373 12.1589 12.8334 12.7466 13.4867Z" fill="#F4CD50" />
              <path d="M7.12988 3.54781H12.8799V2.54781L13.6188 1.86448L13.5632 0.3367L7.61877 1.3867L7.12988 2.3367V3.54781Z" fill="#5E17EB" stroke="#5E17EB" strokeWidth="0.666667" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="bevel" />
              <path d="M12.3816 4.6478V5.4728C12.1372 8.57169 7.59716 8.57169 7.35327 5.4728C7.35383 5.01557 7.35549 5.10446 7.35327 4.6478H12.3816Z" fill="#F4CD50" stroke="#F4CD50" strokeWidth="0.666667" strokeLinecap="square" />
              <path d="M14.3093 9.75892H25.1927C25.546 9.7367 25.8543 9.99781 25.8904 10.3495C25.8904 11.3161 24.9232 12.6589 23.8493 12.7128L14.4882 13.2695L14.3093 9.75892Z" fill="#F4CD50" stroke="#F4CD50" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="bevel" />
              <path d="M4.7038 14.8645L3.14825 21.9478C3.09321 22.3466 2.88761 22.7092 2.57365 22.9612C2.25968 23.2132 1.86117 23.3354 1.45991 23.3028C0.671026 23.3028 0.226026 22.2906 0.35547 21.4645L1.85047 13.0589C2.22269 10.865 3.08936 9.76337 5.0738 9.76337" fill="#F4CD50" />
              <path d="M4.7038 14.8645L3.14825 21.9478C3.09321 22.3466 2.88761 22.7092 2.57365 22.9612C2.25968 23.2132 1.86117 23.3354 1.45991 23.3028C0.671026 23.3028 0.226026 22.2906 0.35547 21.4645L1.85047 13.0589C2.22269 10.865 3.08936 9.76337 5.0738 9.76337" stroke="#F4CD50" strokeWidth="0.666667" />
              <path d="M15.4928 9.75889H25.1984C25.3684 9.74851 25.5358 9.80412 25.6658 9.91413C25.7958 10.0242 25.8783 10.1801 25.8962 10.3494C25.8962 11.3161 24.9289 12.6589 23.855 12.7128L16.6439 13.1428M1.46504 23.2978C0.676153 23.2978 0.231153 22.2856 0.360597 21.4594L1.8556 13.0539C2.22782 10.86 3.11949 9.75834 5.07893 9.75834" stroke="#0A0A0A" strokeWidth="0.666667" strokeMiterlimit="10" strokeLinecap="round" />
              <path d="M4.56496 18.3033L5.07496 9.7589H7.3444C7.65444 10.1243 8.04299 10.415 8.48106 10.6094C8.91913 10.8037 9.39542 10.8966 9.8744 10.8811M10.2705 3.54223H12.8816M14.9411 3.80557L12.88 3.54445V2.54445L13.6188 1.86112L13.5633 0.333344L7.61885 1.38334L7.12996 2.33334V3.54445M15.6022 9.75556H14.3133L14.68 18.2278M5.57051 20.4033L4.49829 23.4811M9.85385 20.4033L8.78162 23.4811M14.2094 20.4033L13.1205 23.4811" stroke="#0A0A0A" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.354 5.47C7.40464 6.10204 7.69147 6.69183 8.15739 7.12191C8.6233 7.55198 9.2341 7.7908 9.86817 7.7908C10.5022 7.7908 11.113 7.55198 11.579 7.12191C12.0449 6.69183 12.3317 6.10204 12.3823 5.47" stroke="#0A0A0A" strokeWidth="0.666667" strokeMiterlimit="10" strokeLinecap="round" />
            </svg>
            View Instructions</button>

        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[16px] leading-[16px] font-bold text-[#0A0A0A] p-[6px_24px] shadow-[2px_2px_2px_0px_#0000001A] bg-[#EFE8FE] rounded-[999px] uppercase w-fit mx-auto h-[28px]">
            Section 1 of 18 · 20 min
          </p>

          <div className="mb-[14px]">
            <div className="mb-[8px] flex items-center justify-between gap-[16px]">
              <h3 className="text-base leading-[16px] font-medium text-[#0A0A0AD9]">Progress</h3>
              <p className="text-base leading-[16px] font-bold text-[#0A0A0AD9]">6%</p>
            </div>
            <div className="w-full h-[8px] rounded-[999px] bg-[#6F2DAE1A] relative">
              <span className="block h-full bg-[#5E17EB] rounded-[999px] w-[6%] absolute left-0"></span>
            </div>
          </div>
        </div>


        <TabGroup className=" w-full grid grid-cols-1 lg:grid-cols-[1.5fr_3fr] xl:grid-cols-[1fr_3fr] gap-4 min-[1200px]:gap-8">

          <TabList className=" bg-white border border-[#6F2DAE1A] rounded-[24px] p-[21px_31px_21px_21px] flex flex-col justify-between h-[calc(100vh-114px)] overflow-y-auto [scrollbar-width:thin] shadow-sm top-[112px] sticky max-lg:hidden" data-lenis-prevent>
            {sidebarItems.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <Tab
                  onClick={() => setActiveTab(item.id)}
                  key={item.id}
                  className={`outline-none shadow-none cursor-pointer w-full p-2.5 rounded-[12px] transition-all duration-200 text-left ${isActive
                    ? "bg-[#5E17EB] text-white"
                    : "hover:bg-gray-50 text-[#0A0A0A]"
                    }`}
                >
                  <div className="flex items-start gap-3 ">
                    {
                      item.isCompleted  ? <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#10B981]"><img src="/img/completed.svg" alt="completed" /> </span> : <div
                        className={`w-7 h-7 flex items-center justify-center rounded-full text-[11px] leading-[16px] font-bold shrink-0 transition-all duration-200 ${isActive || item.isPending
                          ? "bg-[#D4AF37] text-[#3A1660]"
                          : "bg-[#F6F1E7] text-[#0A0A0AB2]"
                          }`}
                      >
                        {item.id}
                      </div>
                    }


                    <div className="flex flex-col min-w-0">
                      <span
                        className={`text-[14px] leading-[16px] font-medium truncate block mb-[2px] transition-all duration-200 ${isActive ? "text-white" : "text-[#0A0A0A]"
                          }`}
                      >
                        {item.title}
                      </span>
                      <span
                        className={`text-[12px] leading-[16px] font-normal block transition-all duration-200 ${isActive ? "text-[#FFFFFF]" : "text-[#0A0A0A80]"
                          }`}
                      >
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  {item.isPending ?
                    <div>
                      <div className="flex items-end gap-[16px] mb-[5px] justify-between">
                        <span className={`${isActive ? "text-[#FFFFFF]" : "text-[#0A0A0A]"} text-sm leading-[16px] font-bold `}>60%</span>
                        <span className="text-sm leading-[24px] font-nomral text-[#0A0A0A] bg-[#E0CD8F] h-[24px] w-fit px-[12px] rounded-[24px]">Resume</span>
                      </div>
                      <div className={`${isActive ? "bg-[#946FDD]" : "bg-[#6F2DAE1A]"}  w-full h-[8px] rounded-[999px] relative overflow-hidden`}>
                        <span className={` ${isActive ? "bg-[#FFFFFF]" : "bg-[linear-gradient(90deg,_#6F2DAE_0%,_#5E17EB_100%)]"}  absolute left-0 top-0 h-full w-[60%] rounded-[999px]`}></span>
                      </div>
                    </div> : ""}
                </Tab>
              )
            })}
          </TabList>

          <QuadTabPanels />

        </TabGroup>

        <QuadApplicationMOdal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />

      </div>

    </>
  );
};

export default ApplyTheQuad;
