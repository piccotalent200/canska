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


const AcademicPerformance = () => {

    const [studentDob, setStudentDob] = useState("");
    const [title, setTitle] = useState({ value: "mr", label: "Mr" });
    const [livingSince, setLivingSince] = useState('June, 2024');
    const [areaType, setAreaType] = useState('Metropolis');

    const rows = Array.from({ length: 8 });


    return (
        <>
            <section className="space-y-[24px]">
                <div className=" bg-white border border-[#6F2DAE1A] rounded-[24px] p-6 md:p-[32px_41px] flex flex-col">
                    {/* Main Title Section */}
                    <div className="flex items-end justify-between gap-[8px]">
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-[40px] font-normal tracking-tight text-[#0A0A0A] border-b border-solid border-[#6F2DAE1A]  pb-[6px] grow">
                            Academic Performance
                        </h1>
                        <div className="w-[64px] h-[64px] rounded-[16px] bg-[#6F2DAE1A] flex items-center justify-center text-[#5E17EB]">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_649_10322)">
                                    <path d="M13 7.58334V22.75" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.25033 19.5C2.96301 19.5 2.68746 19.3859 2.48429 19.1827C2.28113 18.9795 2.16699 18.704 2.16699 18.4167V4.33333C2.16699 4.04602 2.28113 3.77047 2.48429 3.5673C2.68746 3.36414 2.96301 3.25 3.25033 3.25H8.66699C9.81626 3.25 10.9185 3.70655 11.7311 4.5192C12.5438 5.33186 13.0003 6.43406 13.0003 7.58333C13.0003 6.43406 13.4569 5.33186 14.2695 4.5192C15.0822 3.70655 16.1844 3.25 17.3337 3.25H22.7503C23.0376 3.25 23.3132 3.36414 23.5164 3.5673C23.7195 3.77047 23.8337 4.04602 23.8337 4.33333V18.4167C23.8337 18.704 23.7195 18.9795 23.5164 19.1827C23.3132 19.3859 23.0376 19.5 22.7503 19.5H16.2503C15.3884 19.5 14.5617 19.8424 13.9522 20.4519C13.3427 21.0614 13.0003 21.888 13.0003 22.75C13.0003 21.888 12.6579 21.0614 12.0484 20.4519C11.4389 19.8424 10.6123 19.5 9.75033 19.5H3.25033Z" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_649_10322">
                                        <rect width="26" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>
                    </div>
                </div>

                <div className=" bg-white border border-[#6F2DAE1A] rounded-[24px] p-6 md:p-[32px_41px] flex flex-col">

                    <div>
                        <h3 className="text-[20px] leading-[28px] font-normal mb-4 text-[#0A0A0A] tracking-wide">Academic Data</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Medium of Study</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                            </div>
                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Current Class / Grade</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                            </div>
                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Current Academic Year</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                            </div>


                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Previous Academic Year</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                            </div>

                            <div className='col-span-full'>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Have you repeated any academic year?</label>
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
                                <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[119px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='If yes, please explain: (100 words)' name="" id=""></textarea>
                            </div>

                        </div>
                    </div>

                </div>


                <div className=" bg-white border border-[#6F2DAE1A] rounded-[24px] p-6 md:p-[32px_41px] flex flex-col">

                    <div>
                        <h3 className="text-[20px] leading-[28px] font-normal mb-4 text-[#0A0A0A] tracking-wide">Examination Records</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Academic Year</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                            </div>
                            <div>
                                <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Class / Grade</label>
                                <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                            </div>


                            <div className=" col-span-full bg-[#F6F1E7] rounded-[16px] p-[10px_16px_16px_16px] sm:p-[10px_24px_24px_24px] relative text-[#0A0A0A] overflow-auto">

                                {/* Header Section */}
                                <div className="flex items-center space-x-[27px] mb-[16px] min-w-[600px]">
                                    <h2 className="text-sm leading-[24px] font-bold flex items-center whitespace-nowrap">
                                        Major Examination — One
                                    </h2>
                                    {/* Date Picker Input */}
                                    <input
                                        type="text"
                                        placeholder="mm-yyyy"
                                        className="w-full max-w-[305px] h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                    />
                                </div>

                                {/* Table Headers */}
                                <div className="grid grid-cols-3 gap-x-[12px] min-w-[600px] mb-[5px]">
                                    <div className="text-sm leading-[24px] font-medium flex items-center">Subject</div>
                                    <div className="text-sm leading-[24px] font-medium flex items-center">Maximum Marks</div>
                                    <div className="text-sm leading-[24px] font-medium flex items-center">Marks Scored</div>
                                </div>

                                {/* Subject Rows Container (Scrollable if contents leak, perfectly sized for 8 items) */}
                                <div className="space-y-[6px]">
                                    {rows.map((_, index) => (
                                        <div key={index} className="grid grid-cols-3 gap-x-[12px] min-w-[600px]">
                                            {/* Subject Name Input */}
                                            <input
                                                type="text"
                                                placeholder="Subject1 Name"
                                                className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                            />
                                            {/* Maximum Marks Input */}
                                            <input
                                                type="text"
                                                className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                            />
                                            {/* Marks Scored Input */}
                                            <input
                                                type="text"
                                                className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Total Marks Section */}
                                <div className="grid grid-cols-3 gap-x-[12px] min-w-[600px] mt-[6px] items-center">
                                    <div className="text-sm font-medium text-right  h-6 flex items-center justify-end">
                                        Total Marks
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                    />
                                    <input
                                        type="text"
                                        className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                    />
                                </div>

                                {/* Bottom Metrics Section (Overall % & Achieved Grade) */}
                                <div className="grid grid-cols-2 space-x-[12px] mt-[19px] min-w-[600px]">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Overall %"
                                            className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Achieved Grade"
                                            className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                        />
                                    </div>
                                </div>

                            </div>


                            <div className=" col-span-full bg-[#F6F1E7] rounded-[16px] p-[10px_16px_16px_16px] sm:p-[10px_24px_24px_24px] relative text-[#0A0A0A] overflow-auto">

                                {/* Header Section */}
                                <div className="flex items-center space-x-[27px] mb-[16px] min-w-[600px]">
                                    <h2 className="text-sm leading-[24px] font-bold flex items-center whitespace-nowrap">
                                        Major Examination — Two
                                    </h2>
                                    {/* Date Picker Input */}
                                    <input
                                        type="text"
                                        placeholder="mm-yyyy"
                                        className="w-full max-w-[305px] h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                    />
                                </div>

                                {/* Table Headers */}
                                <div className="grid grid-cols-3 gap-x-[12px] min-w-[600px] mb-[5px]">
                                    <div className="text-sm leading-[24px] font-medium flex items-center">Subject</div>
                                    <div className="text-sm leading-[24px] font-medium flex items-center">Maximum Marks</div>
                                    <div className="text-sm leading-[24px] font-medium flex items-center">Marks Scored</div>
                                </div>

                                {/* Subject Rows Container (Scrollable if contents leak, perfectly sized for 8 items) */}
                                <div className="space-y-[6px]">
                                    {rows.map((_, index) => (
                                        <div key={index} className="grid grid-cols-3 gap-x-[12px] min-w-[600px]">
                                            {/* Subject Name Input */}
                                            <input
                                                type="text"
                                                placeholder="Subject1 Name"
                                                className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                            />
                                            {/* Maximum Marks Input */}
                                            <input
                                                type="text"
                                                className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                            />
                                            {/* Marks Scored Input */}
                                            <input
                                                type="text"
                                                className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Total Marks Section */}
                                <div className="grid grid-cols-3 gap-x-[12px] min-w-[600px] mt-[6px] items-center">
                                    <div className="text-sm font-medium text-right  h-6 flex items-center justify-end">
                                        Total Marks
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                    />
                                    <input
                                        type="text"
                                        className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                    />
                                </div>

                                {/* Bottom Metrics Section (Overall % & Achieved Grade) */}
                                <div className="grid grid-cols-2 space-x-[12px] mt-[19px] min-w-[600px]">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Overall %"
                                            className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Achieved Grade"
                                            className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                        />
                                    </div>
                                </div>

                            </div>


                            <div className=" col-span-full bg-[#F6F1E7] rounded-[16px] p-[10px_16px_16px_16px] sm:p-[10px_24px_24px_24px] relative text-[#0A0A0A] overflow-auto">

                                {/* Header Section */}
                                <div className="flex items-center space-x-[27px] mb-[16px] min-w-[600px]">
                                    <h2 className="text-sm leading-[24px] font-bold flex items-center whitespace-nowrap">
                                        Major Examination — Three
                                    </h2>
                                    {/* Date Picker Input */}
                                    <input
                                        type="text"
                                        placeholder="mm-yyyy"
                                        className="w-full max-w-[305px] h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                    />
                                </div>

                                {/* Table Headers */}
                                <div className="grid grid-cols-3 gap-x-[12px] min-w-[600px] mb-[5px]">
                                    <div className="text-sm leading-[24px] font-medium flex items-center">Subject</div>
                                    <div className="text-sm leading-[24px] font-medium flex items-center">Maximum Marks</div>
                                    <div className="text-sm leading-[24px] font-medium flex items-center">Marks Scored</div>
                                </div>

                                {/* Subject Rows Container (Scrollable if contents leak, perfectly sized for 8 items) */}
                                <div className="space-y-[6px]">
                                    {rows.map((_, index) => (
                                        <div key={index} className="grid grid-cols-3 gap-x-[12px] min-w-[600px]">
                                            {/* Subject Name Input */}
                                            <input
                                                type="text"
                                                placeholder="Subject1 Name"
                                                className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                            />
                                            {/* Maximum Marks Input */}
                                            <input
                                                type="text"
                                                className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                            />
                                            {/* Marks Scored Input */}
                                            <input
                                                type="text"
                                                className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Total Marks Section */}
                                <div className="grid grid-cols-3 gap-x-[12px] min-w-[600px] mt-[6px] items-center">
                                    <div className="text-sm font-medium text-right  h-6 flex items-center justify-end">
                                        Total Marks
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                    />
                                    <input
                                        type="text"
                                        className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                    />
                                </div>

                                {/* Bottom Metrics Section (Overall % & Achieved Grade) */}
                                <div className="grid grid-cols-2 space-x-[12px] mt-[19px] min-w-[600px]">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Overall %"
                                            className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Achieved Grade"
                                            className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300"
                                        />
                                    </div>
                                </div>

                            </div>

                            <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Academic Transcript</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Single PDF, max 6 MB</span></label>

                            <button className="text-sm leading-[24px] font-medium text-[#000000] flex items-center gap-[8px] rounded-[24px] border border-solid border-[#5E17EB] hover:bg-[#5E17EB]/10 transition-all duration-300 rounded-[24px] h-[40px]  bg-[#FFFFFF] min-w-[201px] px-[16px] justify-center cursor-pointer w-fit">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_645_10297)">
                                        <path d="M3.33301 8H12.6663" stroke="#5E17EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8 3.33325V12.6666" stroke="#5E17EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_645_10297">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                Add Another Academic Year</button>
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

export default AcademicPerformance
