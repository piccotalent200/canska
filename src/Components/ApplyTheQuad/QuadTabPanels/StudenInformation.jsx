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

const StudenInformation = () => {

    const [studentDob, setStudentDob] = useState("");
    const [title, setTitle] = useState({ value: "mr", label: "Mr" });

    return (
        <section className="space-y-[24px]">

            <section className=" bg-white border border-[#6F2DAE1A] rounded-[24px] p-6 md:p-[32px_41px] flex flex-col">
                {/* Main Title Section */}
                <div className="flex items-center justify-between border-b border-solid border-[#6F2DAE1A] pb-[6px] mb-[23px]">
                    <h1 className="text-2xl md:text-3xl leading-[40px] font-normal tracking-tight text-[#0A0A0A]">
                        Student Information
                    </h1>
                    <div className="w-[64px] h-[64px] rounded-[16px] bg-[#6F2DAE1A] flex items-center justify-center text-[#5E17EB]">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5832 22.75V20.5833C20.5832 19.4341 20.1266 18.3319 19.314 17.5192C18.5013 16.7065 17.3991 16.25 16.2498 16.25H9.74984C8.60057 16.25 7.49837 16.7065 6.68571 17.5192C5.87305 18.3319 5.4165 19.4341 5.4165 20.5833V22.75" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.9998 11.9167C15.3931 11.9167 17.3332 9.97657 17.3332 7.58333C17.3332 5.1901 15.3931 3.25 12.9998 3.25C10.6066 3.25 8.6665 5.1901 8.6665 7.58333C8.6665 9.97657 10.6066 11.9167 12.9998 11.9167Z" stroke="#6F2DAE" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Prompt / AI Notice Box */}
                <div className="bg-[#FFFDF5] border border-[#D4AF374D] bg-[#FCEFD466] rounded-[16px] p-[20px] flex gap-3 items-start">
                    <span className="">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0001 6.66665V3.33331H6.66675" stroke="#5A248C" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.9999 6.66669H4.99992C4.07944 6.66669 3.33325 7.41288 3.33325 8.33335V15C3.33325 15.9205 4.07944 16.6667 4.99992 16.6667H14.9999C15.9204 16.6667 16.6666 15.9205 16.6666 15V8.33335C16.6666 7.41288 15.9204 6.66669 14.9999 6.66669Z" stroke="#5A248C" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.66675 11.6667H3.33341" stroke="#5A248C" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.6667 11.6667H18.3334" stroke="#5A248C" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.5 10.8333V12.5" stroke="#5A248C" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.5 10.8333V12.5" stroke="#5A248C" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <div>
                        <h4 className="text-[14px] leading-[20px] font-semibold text-[#5A248C]">Don't Use AI Tools</h4>
                        <p className="text-[12px] leading-[16px] font-normal text-[#0A0A0AB2] mt-[4px]">
                            Every answer must be genuinely your own. Our built-in AI Text Detector identifies non-human responses. You may use AI to fix grammar or spelling.
                        </p>
                    </div>
                </div>
            </section>


            <section className=" bg-white border border-[#6F2DAE1A] rounded-[24px] p-6 md:p-[32px_41px] flex flex-col">
                <div>
                    <h3 className="text-[20px] leading-[28px] font-normal mb-4 text-[#0A0A0A] tracking-wide">Personal Data</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">First Name</label>
                            <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                        </div>
                        <div>
                            <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Last Name</label>
                            <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                            <p className="text-xs leading-[16px] font-medium text-[#F5070B] mt-[12px]">
                                Usernames do not match
                            </p>
                        </div>
                        <div>
                            <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Display Name</label>
                            <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                        </div>
                        <div>
                            <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Gender</label>
                            <FormSelect
                                label="Title"
                                options={titleOptions}
                                value={title}
                                onChange={setTitle}
                            />
                        </div>
                        <div>
                            <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Date of Birth</label>
                            <FormDatePicker
                                label="Date of Birth"
                                value={studentDob}
                                onChange={setStudentDob}
                                placeholder="dd - mm - yyyy"
                            />
                        </div>
                        <div>
                            <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Place of Birth</label>
                            <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                        </div>
                        <div>
                            <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">State / Province of Birth</label>
                            <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                        </div>
                        <div>
                            <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Country of Birth</label>
                            <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                        </div>
                        <div>
                            <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Nationality at Birth</label>
                            <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MAIN WORKSPACE BLOCK --- */}
            <section className=" bg-white border border-[#6F2DAE1A] rounded-[24px] p-6 md:p-[32px_41px] flex flex-col">

                <div className="mb-[40px]">
                    <h3 className="text-[20px] leading-[28px] font-normal mb-4 text-[#0A0A0A] tracking-wide">Identity Documents</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Birth Certificate No</label>
                            <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                        </div>
                        <div>
                            <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">National ID Card No</label>
                            <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                        </div>
                        <div>
                            <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Passport No</label>
                            <input type="text" className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300" />
                        </div>
                        <div>
                            <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Passport Date of Issue</label>
                            <FormDatePicker
                                label="Date of Birth"
                                value={studentDob}
                                onChange={setStudentDob}
                                placeholder="dd - mm - yyyy"
                            />
                        </div>
                        <div>
                            <label className="block text-[13px] leading-[20px] font-medium text-[#0A0A0AD9] mb-[7px]">Passport Date of Expiry</label>
                            <FormDatePicker
                                label="Date of Birth"
                                value={studentDob}
                                onChange={setStudentDob}
                                placeholder="dd - mm - yyyy"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-[16px]">
                    <h3 className="text-[20px] leading-[28px] font-normal mb-4 text-[#0A0A0A] tracking-wide">Upload Documents</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Birth Certificate upload box */}
                        <label htmlFor='Birth' className="border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                            <input id="Birth" type="file" className="hidden" />
                            <div className="w-5 h-5 mb-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Birth Certificate</span>
                            <span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Single PDF; max 3 MB</span>
                        </label>

                        {/* National ID upload box */}
                        <label htmlFor='NationalID' className="border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                            <input id="NationalID" type="file" className="hidden" />
                            <div className="w-5 h-5 mb-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">National ID Card</span>
                            <span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Single PDF; max 3 MB</span>
                        </label>

                        {/* Passport Bio Pages upload box */}
                        <label htmlFor='PassportBio' className="border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                            <input id="PassportBio" type="file" className="hidden" />
                            <div className="w-5 h-5 mb-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Passport (Biodata Pages)</span>
                            <span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Single PDF; max 3 MB</span>
                        </label>

                        {/* Passport Visas upload box */}
                        <label htmlFor='PassportVisas' className="border border-dashed border-[#6F2DAE40] hover:bg-[#6F2DAE40]/50 bg-[#6F2DAE0D] rounded-[16px] p-[24px_16px] flex flex-col items-center justify-center text-center cursor-pointer transition-colors group duration-300">
                            <input id="PassportVisas" type="file" className="hidden" />
                            <div className="w-5 h-5 mb-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.1666 6.66667L9.99992 2.5L5.83325 6.66667" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 2.5V12.5" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-[14px] leading-[20px] font-medium text-[#0A0A0A]">Passport (Visas & Stampings)</span>
                            <span className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C] mt-1">Single PDF; max 3 MB</span>
                        </label>
                    </div>
                </div>

                <div className="md:w-[calc(100%+40px)] bg-[#F6F1E7] border border-[#F6F1E7] rounded-[16px] p-[20px] flex items-center gap-[12px] md:-mx-[20px]">
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2976 15.4999L10.2976 4.99992C10.1667 4.76908 9.97702 4.57707 9.74776 4.44348C9.5185 4.30989 9.25791 4.2395 8.99257 4.2395C8.72723 4.2395 8.46664 4.30989 8.23738 4.44348C8.00812 4.57707 7.8184 4.76908 7.68757 4.99992L1.68757 15.4999C1.55533 15.7289 1.48599 15.9889 1.48658 16.2533C1.48716 16.5178 1.55765 16.7774 1.6909 17.0058C1.82416 17.2342 2.01543 17.4234 2.24534 17.554C2.47525 17.6847 2.73562 17.7523 3.00007 17.7499H15.0001C15.2632 17.7497 15.5217 17.6801 15.7495 17.5484C15.9773 17.4166 16.1665 17.2272 16.298 16.9993C16.4294 16.7713 16.4986 16.5127 16.4985 16.2495C16.4985 15.9864 16.4292 15.7278 16.2976 15.4999Z" stroke="#B8941F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 8.75V11.75" stroke="#B8941F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 14.75H9.0075" stroke="#B8941F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <p className="text-[12px] text-[#0A0A0AB2] leading-[16px] font-normal">
                        Accepted files: PDF, JPG, PG, MP4. PDF/JPG max 3 MB; MP4 up to 200 MB and 4 minutes. Need to convert? Try{" "}
                        <a href="#" className="hover:underline">ilovepdf.com</a>,{" "}
                        <a href="#" className="hover:underline">smallpdf.com</a>,{" "}
                        <a href="#" className="hover:underline">imageresizer.com</a>,{" "}
                        <a href="#" className="hover:underline">xconvert.com</a>.
                    </p>
                </div>

            </section>


            {/* --- ACTION FOOTER BAR --- */}
            <div className="flex  items-center justify-between gap-4 mt-[16px] bg-[#FDFBF7] sticky bottom-0 py-[16px]">
                <button type="button" className="border border-solid border-[#6F2DAE33] hover:bg-[#6F2DAE33] opacity-[0.4] pointer-events-none p-[12px_24px] taxt-base leading-[24px] font-medium text-[#0A0A0A] flex items-center justify-center gap-2 rounded-[999px] cursor-pointer transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99992 12.6666L3.33325 7.99992L7.99992 3.33325" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.6666 8H3.33325" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                   <span  className="max-md:hidden"> Previous</span>
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
                      <span  className="max-md:hidden"> Next Section </span> 
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.3335 8H12.6668" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 3.33325L12.6667 7.99992L8 12.6666" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </button>
                </div>
            </div>

        </section>
    )
}

export default StudenInformation
