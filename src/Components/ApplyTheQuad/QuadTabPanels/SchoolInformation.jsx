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

const areaOptions = [{ value: 'Metropolis', label: 'Metropolis' }, { value: 'Suburb', label: 'Suburb' }];


const SchoolInformation = () => {

    const [studentDob, setStudentDob] = useState("");
    const [title, setTitle] = useState({ value: "mr", label: "Mr" });
    const [livingSince, setLivingSince] = useState('June, 2024');
    const [areaType, setAreaType] = useState('Metropolis');


    return (
        <>
            <section className="space-y-[24px]">
                <div className=" bg-white border border-[#6F2DAE1A] rounded-[24px] p-6 md:p-[32px_41px] flex flex-col">
                    {/* Main Title Section */}
                    <div className="flex items-end justify-between gap-[8px]">
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-[40px] font-normal tracking-tight text-[#0A0A0A] border-b border-solid border-[#6F2DAE1A]  pb-[6px] grow">
                            School Information
                        </h1>
                        <div className="w-[64px] h-[64px] rounded-[16px] bg-[#6F2DAE1A] flex items-center justify-center text-[#5E17EB]">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_628_9161)">
                                    <path d="M15.1663 23.8333V19.5C15.1663 18.9254 14.9381 18.3743 14.5317 17.9679C14.1254 17.5616 13.5743 17.3333 12.9997 17.3333C12.425 17.3333 11.8739 17.5616 11.4676 17.9679C11.0613 18.3743 10.833 18.9254 10.833 19.5V23.8333" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.5003 10.8333L23.2346 12.701C23.4145 12.7909 23.5658 12.9291 23.6716 13.1002C23.7775 13.2712 23.8336 13.4684 23.8337 13.6695V21.6667C23.8337 22.2413 23.6054 22.7924 23.1991 23.1987C22.7927 23.6051 22.2416 23.8333 21.667 23.8333H4.33366C3.75902 23.8333 3.20792 23.6051 2.80159 23.1987C2.39527 22.7924 2.16699 22.2413 2.16699 21.6667V13.6695C2.1671 13.4684 2.2232 13.2712 2.32901 13.1002C2.43482 12.9291 2.58615 12.7909 2.76608 12.701L6.50033 10.8333" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.5 5.41666V23.8333" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.33301 6.49999L12.0312 2.6509C12.3319 2.50063 12.6635 2.42239 12.9997 2.42239C13.3359 2.42239 13.6674 2.50063 13.9682 2.6509L21.6663 6.49999" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.5 5.41666V23.8333" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.9997 11.9167C14.1963 11.9167 15.1663 10.9466 15.1663 9.75001C15.1663 8.55339 14.1963 7.58334 12.9997 7.58334C11.8031 7.58334 10.833 8.55339 10.833 9.75001C10.833 10.9466 11.8031 11.9167 12.9997 11.9167Z" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_628_9161">
                                        <rect width="26" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    </div>
                </div>

                <div className=" bg-white border border-[#6F2DAE1A] rounded-[24px] p-6 md:p-[32px_41px] flex flex-col">

                    <div>
                        <h3 className="text-[20px] leading-[28px] font-normal mb-4 text-[#0A0A0A] tracking-wide">School Data</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="col-span-2">
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">School Name *</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>
                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">School Type *</label>
                                <FormSelect
                                    label="Title"
                                    options={titleOptions}
                                    value={title}
                                    onChange={setTitle}
                                />
                            </div>
                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">The Curriculum *</label>
                                <FormSelect
                                    label="Title"
                                    options={titleOptions}
                                    value={title}
                                    onChange={setTitle}
                                />
                            </div>

                        </div>
                    </div>

                </div>


                <div className=" bg-white border border-[#6F2DAE1A] rounded-[24px] p-6 md:p-[32px_41px] flex flex-col">

                    <div>
                        <h3 className="text-[20px] leading-[28px] font-normal mb-4 text-[#0A0A0A] tracking-wide">School Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Building / Campus Name</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>

                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Building / Campus No</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>

                            <div className="col-span-full">
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Street / Road *</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>

                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Area / Zone</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>

                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">City / Town *</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>

                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">District / Region</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>

                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">State / Province *</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>

                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Country *</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>

                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Post / Zip Code</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>

                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">School Website</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>


                        </div>
                    </div>

                </div>




                <div className=" bg-white border border-[#6F2DAE1A] rounded-[24px] p-6 md:p-[32px_41px] flex flex-col">

                    <div>
                        <h3 className="text-[20px] leading-[28px] font-normal mb-4 text-[#0A0A0A] tracking-wide">School Uploads</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


                            <label htmlFor='Birth' className="border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                <input id="Birth" type="file" className="hidden" />
                                <div className="w-5 h-5 mb-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">School Photos</span>
                                <span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span>
                            </label>


                            <label htmlFor='Birth' className="border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                <input id="Birth" type="file" className="hidden" />
                                <div className="w-5 h-5 mb-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">School Activity Photos</span>
                                <span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span>
                            </label>



                            <label htmlFor='Birth' className="border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                <input id="Birth" type="file" className="hidden" />
                                <div className="w-5 h-5 mb-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">School ID Card</span>
                                <span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Single PDF, max 3 MB</span>
                            </label>


                            <label htmlFor='Birth' className="border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                <input id="Birth" type="file" className="hidden" />
                                <div className="w-5 h-5 mb-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Scholarship Letter</span>
                                <span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Single PDF, max 3 MB</span>
                            </label>


                        </div>




                    </div>

                </div>




                <div className=" bg-white border border-[#6F2DAE1A] rounded-[24px] p-6 md:p-[32px_41px] flex flex-col">

                    <div>
                        <h3 className="text-[20px] leading-[28px] font-normal mb-4 text-[#0A0A0A] tracking-wide">Additional School Info</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">In which year was this school established?</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>
                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">In what type of area is the school located?</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>

                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How many students are studying in the school?</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>
                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How many students are in your class or group?</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>

                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Since when have you been studying at this school?</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>

                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Do any of your siblings study at the same school?</label>
                                <div className="flex gap-[32px] items-center">
                                    <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[12px] cursor-pointer">
                                        <input type="radio" name="answer" className="peer hidden" />
                                        <img
                                            src="/img/unchecked-radio.svg"
                                            alt=""
                                            className="block peer-checked:hidden"
                                        />
                                        <img
                                            src="/img/checked-radio.svg"
                                            alt=""
                                            className="hidden peer-checked:block"
                                        />
                                        Yes
                                    </label>

                                    <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[12px] cursor-pointer">
                                        <input type="radio" name="answer" className="peer hidden" />
                                        <img
                                            src="/img/unchecked-radio.svg"
                                            alt=""
                                            className="block peer-checked:hidden"
                                        />
                                        <img
                                            src="/img/checked-radio.svg"
                                            alt=""
                                            className="hidden peer-checked:block"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>


                                <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">What is the annual school fee? (USD)</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            </div>

                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Have you been awarded a full or partial scholarship?</label>
                                <div className="flex gap-[32px] items-center">
                                    <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[12px] cursor-pointer">
                                        <input type="radio" name="answer" className="peer hidden" />
                                        <img
                                            src="/img/unchecked-radio.svg"
                                            alt=""
                                            className="block peer-checked:hidden"
                                        />
                                        <img
                                            src="/img/checked-radio.svg"
                                            alt=""
                                            className="hidden peer-checked:block"
                                        />
                                        Yes
                                    </label>

                                    <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[12px] cursor-pointer">
                                        <input type="radio" name="answer" className="peer hidden" />
                                        <img
                                            src="/img/unchecked-radio.svg"
                                            alt=""
                                            className="block peer-checked:hidden"
                                        />
                                        <img
                                            src="/img/checked-radio.svg"
                                            alt=""
                                            className="hidden peer-checked:block"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>

                        </div>
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
            </section>
        </>
    )
}

export default SchoolInformation
