'use client'
import React, { useState } from 'react';

const RegistrationSuccess = () => {
  const [studentId] = useState('20260938251936');
  const [copied, setCopied] = useState(false);

  const handleCopyId = async () => {
    try {
      await navigator.clipboard.writeText(studentId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  return (

    <div className="min-h-[calc(100vh-80px)] w-full bg-[#FDFBF7] flex items-center justify-center p-4 lg:p-[45px] font-dm">
      
      {/* Outer Content Card frame matching exact borders & soft dual drop-shadow */}
      <div className="relative w-full max-w-[1096px] bg-white border border-solid border-[#6F2DAE33] shadow-[2px_2px_2px_#0000001A] rounded-[24px] p-6 sm:p-10 md:p-[44px] flex flex-col items-center overflow-hidden">

        {/* Decorative Graphic Element Group (Joyful Student & Clipboard Header) */}
        <div className="relative w-full flex justify-center mb-2">
          {/* Celebrating Student Vector positioning equivalent */}
          <div className="absolute left-0 sm:left-6 lg:left-[80px] top-12 hidden md:block w-[134px] h-[243px] pointer-events-none select-none max-lg:hidden">
            <img
              src="/img/celebrating-student.png"
              alt="Celebrating Student Graphic"
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Top Clipboard Checklist Status Icon */}
          <div className="w-[72px] h-[72px] flex items-center justify-center select-none shrink-0">
            <img
              src="/img/registration-form.svg"
              alt="Registration Status Icon"
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback built using crisp svg if local asset fails
                e.target.style.display = 'none';
                e.currentTarget.innerHTML = `
                  <div class="w-16 h-16 bg-[#5E17EB]/10 rounded-full flex items-center justify-center text-[#5E17EB]">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                  </div>
                `;
              }}
            />
          </div>
        </div>

        {/* Text Content Headers Group */}
        <div className="text-center max-w-[597px] z-10">
          <h1 className="text-3xl sm:text-4xl md:text-[48px] font-normal leading-[normal] md:leading-[60px] text-[#5E17EB] mb-[17px]">
            Registration submitted!
          </h1>
          <p className="text-base sm:text-lg md:text-[20px] font-normal leading-[30px] text-[#0A0A0A] mb-[42px]">
            Your account has been created. Please verify your email address to activate your account and access the Quad Program.
          </p>
        </div>

        {/* Purple Accent Container: Student ID + Clipboard Copy Module */}
        <div className="z-[1] w-full max-w-[720px] shadow-[5px_5px_5px_#0000001A] bg-[#5E17EB] rounded-[24px] border border-solid border-[#6F2DAE40] p-5 sm:p-6 md:p-[24px_30px_24px_24px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-transform duration-300">
          <div className="flex flex-col text-white">
            <span className="text-sm sm:text-base font-medium leading-[30px] text-[#FFFFFF]">
              Your student ID
            </span>
            <span className="text-2xl md:text-[24px] font-medium leading-[30px] text-[#FFFFFF] break-all select-all">
              {studentId}
            </span>
          </div>

          <button
            onClick={handleCopyId}
            type="button"
            className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#C29F2E] transition-all text-[#0A0A0A] text-base font-medium leading-[24px] px-[24px] h-[48px] rounded-full shrink-0 flex items-center justify-center gap-2 min-w-[123px] cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5M11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11C9 9.89543 9.89543 9 11 9Z" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        {/* Sand Tinted Custom Notification Footnote Box */}
        <div className="w-full max-w-[720px] bg-[#D4AF371A] border border-dashed border-[#6F2DAE40] rounded-[24px] p-5 md:p-[24px] mt-3 flex flex-col items-center gap-[14px]">
          {/* Header Action Row tag */}
          <div className="flex items-center justify-center gap-2 text-[#121A2B]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3334 2.66669H2.66671C1.93033 2.66669 1.33337 3.26364 1.33337 4.00002V12C1.33337 12.7364 1.93033 13.3334 2.66671 13.3334H13.3334C14.0698 13.3334 14.6667 12.7364 14.6667 12V4.00002C14.6667 3.26364 14.0698 2.66669 13.3334 2.66669Z" stroke="#5E17EB" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.6667 4.66669L8.68671 8.46669C8.48089 8.59564 8.24292 8.66403 8.00004 8.66403C7.75716 8.66403 7.51919 8.59564 7.31337 8.46669L1.33337 4.66669" stroke="#5E17EB" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <span className="font-bold text-base leading-5 text-[#121A2B]">
              Next Step
            </span>
          </div>

          {/* Explicit core helper text details */}
          <p className="text-sm sm:text-base font-medium leading-[20px] text-center text-[#0A0A0AD9]">
            A verification link has been sent to Rajesh.kumar@gmail.com. Click the link in the email to activate your account. Check your spam folder if you don't see it within a few minutes.
          </p>
        </div>

      </div>
    </div>
  )
}

export default RegistrationSuccess