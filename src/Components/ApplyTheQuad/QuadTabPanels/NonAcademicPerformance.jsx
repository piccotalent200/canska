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


const NonAcademicPerformance = () => {

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
                            Non-Academic Performance
                        </h1>
                        <div className="w-[64px] h-[64px] rounded-[16px] bg-[#6F2DAE1A] flex items-center justify-center text-[#5E17EB]">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.7647 16.7917C10.668 16.4167 10.4726 16.0746 10.1988 15.8008C9.92504 15.527 9.58289 15.3316 9.20798 15.2349L2.56173 13.5211C2.44834 13.4889 2.34854 13.4206 2.27748 13.3266C2.20642 13.2325 2.16797 13.1179 2.16797 13C2.16797 12.8821 2.20642 12.7675 2.27748 12.6734C2.34854 12.5794 2.44834 12.5111 2.56173 12.4789L9.20798 10.764C9.58276 10.6674 9.92482 10.4721 10.1986 10.1985C10.4724 9.92495 10.6678 9.58303 10.7647 9.20832L12.4786 2.56207C12.5104 2.44823 12.5786 2.34794 12.6728 2.2765C12.767 2.20505 12.882 2.16638 13.0002 2.16638C13.1184 2.16638 13.2334 2.20505 13.3276 2.2765C13.4217 2.34794 13.49 2.44823 13.5218 2.56207L15.2346 9.20832C15.3313 9.58323 15.5267 9.92537 15.8005 10.1992C16.0743 10.4729 16.4164 10.6684 16.7913 10.7651L23.4376 12.4778C23.5519 12.5093 23.6526 12.5775 23.7245 12.6718C23.7963 12.7661 23.8352 12.8814 23.8352 13C23.8352 13.1185 23.7963 13.2338 23.7245 13.3282C23.6526 13.4225 23.5519 13.4906 23.4376 13.5222L16.7913 15.2349C16.4164 15.3316 16.0743 15.527 15.8005 15.8008C15.5267 16.0746 15.3313 16.4167 15.2346 16.7917L13.5207 23.4379C13.4889 23.5517 13.4207 23.652 13.3265 23.7235C13.2323 23.7949 13.1173 23.8336 12.9991 23.8336C12.8809 23.8336 12.7659 23.7949 12.6717 23.7235C12.5776 23.652 12.5093 23.5517 12.4775 23.4379L10.7647 16.7917Z" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21.667 3.25V7.58333" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M23.8333 5.41666H19.5" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.33301 18.4167V20.5833" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.41667 19.5H3.25" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                    </div>
                </div>

                <div className=" bg-white border border-[#6F2DAE1A] rounded-[24px] p-6 md:p-[20px_20px_24px] flex flex-col">

                    <div>
                        <h3 className="text-[20px] leading-[28px] font-medium mb-3 text-[#0A0A0A] tracking-wide">Activities & Hobbies</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Baking</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been baking, and how often do you bake?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Cooking</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been cooking, and how often do you cook?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Coin Collecting</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been collecting coins, and how many do you have?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Stamp Collecting</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been collecting stamps, and how many do you have?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">DIY Project</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been eGaming, and how often do you play?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Gardening</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been gardening, and how often do you garden?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>


                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">eGaming</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been eGaming, and how often do you play?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Gardening</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been gardening, and how often do you garden?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>


                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Puzzles</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been baking, and how often do you bake?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Vlogging</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been baking, and how often do you bake?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>


                        </div>
                    </div>

                </div>



                <div className=" bg-white border border-[#6F2DAE1A] rounded-[24px] p-6 md:p-[20px_20px_24px] flex flex-col">

                    <div>
                        <h3 className="text-[20px] leading-[28px] font-medium mb-3 text-[#0A0A0A] tracking-wide">Creative Activities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Writing Essays</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been writing essays, and how often?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Writing Stories</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been writing stories, and how often?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Writing Poems</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been writing poems, and how often?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Writing Songs</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been collecting stamps, and how many do you have?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Singing</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been singing, and how often do you sing?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Dancing</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been dancing, and how often do you dance?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>


                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Drawing</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been drawing, and how often do you draw?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Calligraphy</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long and how often do you usually do calligraphy?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>


                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Drama / Skit</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long have you been doing drama or skit, and how often?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Photography</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long and how often do you do photography?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                              <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Videography</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long and how often do you do videography?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

                            </div>

                            <div className="bg-white border border-[#6F2DAE1A] rounded-[16px] p-6 md:p-[20px_24px_20px]">

                                <div className='mb-[18px]'>
                                    <label className="block text-[16px] leading-[24px] font-bold text-[#0A0A0AD9] mb-[8px]">Origami</label>
                                    <div className="flex gap-[8px] items-center">
                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Excellent
                                        </label>

                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Good
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Average
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            Fair
                                        </label>


                                        <label className="text-sm leading-[14px] font-medium text-[#0A0A0AD9] flex items-center gap-[8px] cursor-pointer border border-solid border-[#6F2DAE26] rounded-[999px] p-[5px_8px]">
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
                                            None
                                        </label>


                                    </div>
                                </div>

                                <div className='mb-[14px]'>
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">How long and how often do you do origami or papercraft?</label>
                                    <input placeholder="2 years; once a week" type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#0A0A0A99] transition-all duration-300" />
                                </div>

                                <div className="mb-[24px]">
                                    <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Explanation</label>
                                    <textarea className='border border-solid border-[#6F2DAE26] p-[24px_16px] rounded-[12px] text-sm leading-[24px] font-normal placeholder:text-[#0A0A0A99] h-[105px] resize-none w-full hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] outline-none' placeholder='100 words (e.g., Do you follow recipes, or do you experiment?)' name="" id=""></textarea>
                                </div>

                                <label htmlFor="Birth" className="col-span-full border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                                    <input id="Birth" className="hidden" type="file" /><div className="w-5 h-5 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></div><span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Upload Photos</span><span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Up to 6 JPG, max 3 MB each</span></label>

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

export default NonAcademicPerformance
