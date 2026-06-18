'use client'
import { FormDatePicker } from '@/Components/Reusable/FormDatePicker';
import FormSelect from '@/Components/Reusable/FormSelect';
import React, { useState } from 'react'

const titleOptions = [
    { value: "mr", label: "Mr" },
    { value: "mrs", label: "Mrs" },
    { value: "ms", label: "Ms" },
    { value: "dr", label: "Dr" },
];

const SocialMediaInformation = () => {
    const [studentDob, setStudentDob] = useState("");
    const [title, setTitle] = useState({ value: "mr", label: "Mr" });
    const [livingSince, setLivingSince] = useState('June, 2024');
    const [areaType, setAreaType] = useState('Metropolis');


    return (
        <>
            <div className=" bg-white border border-[#6F2DAE1A] rounded-[24px] p-6 md:p-[32px_41px] flex flex-col">

                <div className="flex items-end justify-between gap-[8px] mb-[64px]">
                    <h1 className="text-2xl md:text-3xl leading-[40px] font-normal tracking-tight text-[#0A0A0A] border-b border-solid border-[#6F2DAE1A]  pb-[6px] grow">
                        Student on Social Media
                    </h1>
                    <div className="w-[64px] h-[64px] rounded-[16px] bg-[#6F2DAE1A] flex items-center justify-center text-[#5E17EB]">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_479_26168)">
                                <path d="M4.3335 9.75H21.6668" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.3335 16.25H21.6668" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.8332 3.25L8.6665 22.75" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.3332 3.25L15.1665 22.75" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_479_26168">
                                    <rect width="26" height="26" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>


                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">LinkedIn — Account or Profile URL</label>
                        <input placeholder='Account or Profile URL' type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                    </div>
                    <div>
                        <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">YouTube — Account or Profile URL</label>
                        <input placeholder='Account or Channel URL' type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                    </div>
                    <div>
                        <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Instagram — Account or Profile URL</label>
                        <input placeholder='Account or Profile URL' type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                    </div>


                    <div>
                        <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">TikTok — Account or Profile URL</label>
                        <input type="text" placeholder='Account or Profile URL' className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                    </div>
                    <div>
                        <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">X (Twitter) — Account or Profile URL</label>
                        <input placeholder='Account or Profile URL' type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                    </div>
                    <div>
                        <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Facebook — Account or Profile URL</label>
                        <input placeholder='Account or Profile URL' type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                    </div>
                    <div>
                        <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">GitHub — Account or Profile URL</label>
                        <input placeholder='Username or Profile URL' type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                    </div>


                </div>

                <p className='text-xs leading-[16px] font-normal text-[#0A0A0A8C] mt-[28px]'>Account privacy settings should be set to "public" to enable assessment.</p>
                <div className='mt-[42px] text-xs leading-[16px] font-normal text-[#0A0A0AB2] p-[15px_19px] bg-[#F6F1E7] rounded-[16px]'>
                    The social media accounts will be studied to understand student’s social media presence for assessment and profile building. Please ensure that the account privacy settings are set to “public” (not “private”) to carry out the assessment process
                </div>
            </div>

            {/* --- ACTION FOOTER BAR --- */}
            <div className="flex  items-center justify-between gap-4 mt-[16px] bg-[#FDFBF7] sticky bottom-0 py-[16px]">
                <button type="button" className="border border-solid border-[#6F2DAE33] hover:bg-[#6F2DAE33] opacity-[0.4] pointer-events-none p-[12px_24px] taxt-base leading-[24px] font-medium text-[#0A0A0A] flex items-center justify-center gap-2 rounded-[999px] cursor-pointer transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99992 12.6666L3.33325 7.99992L7.99992 3.33325" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.6666 8H3.33325" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="max-md:hidden"> Previous</span>
                </button>

                <div className="w-full sm:w-auto flex  items-center gap-3 justify-end">
                    <button onClick={(e) => e.preventDefault()} type="button" className="max-md:h-[41px] border border-solid border-[#F6F1E7] bg-[#F6F1E7] hover:bg-[#e7e3d9] p-[12px_24px] taxt-base leading-[24px] font-medium text-[#0A0A0A] flex items-center justify-center gap-2 rounded-[999px] cursor-pointer transition-all duration-300">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1333 2C10.485 2.00501 10.8205 2.14878 11.0667 2.4L13.6 4.93333C13.8512 5.17951 13.995 5.51497 14 5.86667V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H10.1333Z" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.3332 14.0001V9.33341C11.3332 9.1566 11.2629 8.98703 11.1379 8.86201C11.0129 8.73699 10.8433 8.66675 10.6665 8.66675H5.33317C5.15636 8.66675 4.98679 8.73699 4.86177 8.86201C4.73674 8.98703 4.6665 9.1566 4.6665 9.33341V14.0001" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.6665 2V4.66667C4.6665 4.84348 4.73674 5.01305 4.86177 5.13807C4.98679 5.2631 5.15636 5.33333 5.33317 5.33333H9.99984" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        Save
                    </button>
                    <button type="button" className="border border-solid border-[#5E17EB] bg-[#5E17EB] hover:bg-[#5E17EB]/90 p-[12px_24px] taxt-base leading-[24px] font-medium text-[#FFFFFF] flex items-center justify-center gap-2 rounded-[999px] cursor-pointer transition-all duration-300">
                        <span className="max-md:hidden"> Next Section </span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.3335 8H12.6668" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 3.33325L12.6667 7.99992L8 12.6666" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </button>
                </div>
            </div>
        </>
    )
}

export default SocialMediaInformation
