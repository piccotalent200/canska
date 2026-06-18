import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const steps = [
  {
    id: "01",
    title: "Passport Photo",
    description:
      "Read the Passport Photo Specifications. The student, along with their parent(s) or guardian(s), must have their photos taken at a professional studio at least one week before submitting this application. Each person should have a digital copy ready for upload where specifically required.",
    icon: (props) => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M10.875 3H7.125L5.25 5.25H3C2.60218 5.25 2.22064 5.40804 1.93934 5.68934C1.65804 5.97064 1.5 6.35218 1.5 6.75V13.5C1.5 13.8978 1.65804 14.2794 1.93934 14.5607C2.22064 14.842 2.60218 15 3 15H15C15.3978 15 15.7794 14.842 16.0607 14.5607C16.342 14.2794 16.5 13.8978 16.5 13.5V6.75C16.5 6.35218 16.342 5.97064 16.0607 5.68934C15.7794 5.40804 15.3978 5.25 15 5.25H12.75L10.875 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12C10.2426 12 11.25 10.9926 11.25 9.75C11.25 8.50736 10.2426 7.5 9 7.5C7.75736 7.5 6.75 8.50736 6.75 9.75C6.75 10.9926 7.75736 12 9 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    isActive: false,
  },
  {
    id: "02",
    title: "Scan All Documents",
    description:
      "Gather all related documents such as certificates and clippings. Scan each document at 300 dpi for high-quality images. Before uploading, check that scanned copies are legible and within the permitted file size to avoid issues during uploading and evaluation.",
    icon: (props) => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 7.5V5.25L11.25 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H7.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 1.5V4.5C10.5 4.89782 10.658 5.27936 10.9393 5.56066C11.2206 5.84196 11.6022 6 12 6H15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 10.5C11.6022 10.5 11.2206 10.658 10.9393 10.9393C10.658 11.2206 10.5 11.6022 10.5 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 10.5C15.3978 10.5 15.7794 10.658 16.0607 10.9393C16.342 11.2206 16.5 11.6022 16.5 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 16.5C15.3978 16.5 15.7794 16.342 16.0607 16.0607C16.342 15.7794 16.5 15.3978 16.5 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16.5C11.6022 16.5 11.2206 16.342 10.9393 16.0607C10.658 15.7794 10.5 15.3978 10.5 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    isActive: false,
  },
  {
    id: "03",
    title: "Let the Student Complete",
    description:
      "This application is not intended to be completed entirely by a parent or guardian. Please allow the student to complete as much of it as possible. Avoid overstating the student's strengths, as this may hinder an accurate assessment and the development of an effective strategy to improve their profile after enrollment.",
    icon: (props) => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 11.25H4.5C3.70435 11.25 2.94129 11.5661 2.37868 12.1287C1.81607 12.6913 1.5 13.4544 1.5 14.25V15.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.7288 12.3975L11.421 12.111"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.421 10.389L10.7288 10.1017"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.639 9.17101L12.3517 8.47876"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.639 13.329L12.3517 14.022"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.361 9.17101L14.6483 8.47876"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6475 14.022L14.361 13.329"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.579 10.389L16.272 10.1017"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.579 12.111L16.272 12.3983"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 13.5C14.7426 13.5 15.75 12.4926 15.75 11.25C15.75 10.0074 14.7426 9 13.5 9C12.2574 9 11.25 10.0074 11.25 11.25C11.25 12.4926 12.2574 13.5 13.5 13.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.75 8.25C8.40685 8.25 9.75 6.90685 9.75 5.25C9.75 3.59315 8.40685 2.25 6.75 2.25C5.09315 2.25 3.75 3.59315 3.75 5.25C3.75 6.90685 5.09315 8.25 6.75 8.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    isActive: false,
  },
  {
    id: "04",
    title: "Take Your Time",
    description:
      "This application is comprehensive — 18 Sections with varying levels of detail. Completing it thoroughly may take approximately two to three weeks and that's OK! The quality of information is more important than speed. So, please DO NOT rush.",
    icon: (props) => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_612_352)">
          <path
            d="M3.75 16.5H14.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 1.5H14.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.75 16.5V13.371C12.7499 12.9732 12.5918 12.5917 12.3105 12.3105L9 9L5.6895 12.3105C5.40818 12.5917 5.25008 12.9732 5.25 13.371V16.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.25 1.5V4.629C5.25008 5.02679 5.40818 5.40826 5.6895 5.6895L9 9L12.3105 5.6895C12.5918 5.40826 12.7499 5.02679 12.75 4.629V1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_612_352">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    isActive: false,
  },
  {
    id: "05",
    title: "Complete All Sections",
    description:
      "Make sure every section is completed thoroughly and accurately. This helps assessors evaluate the student profile meticulously and make judgements based on a clear understanding of the student profile.",
    icon: (props) => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.25 12.75L3.75 14.25L6.75 11.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.25 5.25L3.75 6.75L6.75 3.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.75 4.5H15.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.75 9H15.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.75 13.5H15.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    isActive: false,
  },
  {
    id: "06",
    title: "Don't Use AI Tools",
    description:
      "Every answer must be genuinely your own and not generated by AI tools such as ChatGPT. This application has a built-in AI Text Detector that can recognise non-human writing patterns. You may use AI only to correct spelling, check grammar, and improve answers.",
    icon: (props) => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 6V3H6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 6H4.5C3.67157 6 3 6.67157 3 7.5V13.5C3 14.3284 3.67157 15 4.5 15H13.5C14.3284 15 15 14.3284 15 13.5V7.5C15 6.67157 14.3284 6 13.5 6Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.5 10.5H3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 10.5H16.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.25 9.75V11.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.75 9.75V11.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    isActive: false,
  },
  {
    id: "07",
    title: "Double-Check for Errors",
    description:
      "Before submitting, carefully review your responses to correct any mistakes, missing information, or incorrect documents. A closing check ensures your submission is exhaustive, truthful, and ready for elaborate assessment.",
    icon: (props) => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 8.25L7.5 9.75L10.5 6.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.75 15.75L12.525 12.525"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    isActive: false,
  },
  {
    id: "08",
    title: "Provide Valid Information",
    description:
      "Any untrue or misleading information — whether intentional or not — will result in immediate disqualification from the assessment. It may also eliminate the applicant from further assessments and negatively impact their university admissions, internship, and scholarship opportunities globally.",
    icon: (props) => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_612_21)">
          <path
            d="M15 9.74997C15 13.5 12.375 15.375 9.255 16.4625C9.09162 16.5178 8.91415 16.5152 8.7525 16.455C5.625 15.375 3 13.5 3 9.74997V4.49997C3 4.30106 3.07902 4.11029 3.21967 3.96964C3.36032 3.82899 3.55109 3.74997 3.75 3.74997C5.25 3.74997 7.125 2.84997 8.43 1.70997C8.58889 1.57422 8.79102 1.49963 9 1.49963C9.20898 1.49963 9.41111 1.57422 9.57 1.70997C10.8825 2.85747 12.75 3.74997 14.25 3.74997C14.4489 3.74997 14.6397 3.82899 14.7803 3.96964C14.921 4.11029 15 4.30106 15 4.49997V9.74997Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 6V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12H9.0075"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_612_21">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    isActive: false,
  },
  {
    id: "09",
    title: "If You're Unsure",
    description:
      "If you are unsure what to answer for a question, please contact us via email for assistance before submitting your application. It will help make sure your responses are detailed, true, and complete, avoiding unnecessary delays.",
    icon: (props) => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_612_21)">
          <path
            d="M15 9.74997C15 13.5 12.375 15.375 9.255 16.4625C9.09162 16.5178 8.91415 16.5152 8.7525 16.455C5.625 15.375 3 13.5 3 9.74997V4.49997C3 4.30106 3.07902 4.11029 3.21967 3.96964C3.36032 3.82899 3.55109 3.74997 3.75 3.74997C5.25 3.74997 7.125 2.84997 8.43 1.70997C8.58889 1.57422 8.79102 1.49963 9 1.49963C9.20898 1.49963 9.41111 1.57422 9.57 1.70997C10.8825 2.85747 12.75 3.74997 14.25 3.74997C14.4489 3.74997 14.6397 3.82899 14.7803 3.96964C14.921 4.11029 15 4.30106 15 4.49997V9.74997Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 6V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12H9.0075"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_612_21">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    isActive: false,
  },
];

const footerCardsData = [
  {
    title: "File Upload Specifications",
    description:
      "Accepted files: PDF, JPG, and MP4. Each PDF and JPG must not exceed 3 MB. MP4 files can be up to 200 MB and a maximum of 4 minutes. Conversion tools — PDFs: ilovepdf.com, smallpdf.com · JPGs: imageresizer.com, reduceimages.com · MP4s: xconvert.com, flixier.com.",
    icon: "/img/file-text.svg",
  },
  {
    title: "Keep Your Info Updated",
    description:
      "Promptly update any changes to the information and/or documents you've uploaded. Review and update your data and documents prior to submitting. Outdated information will impact the student profile and delay assessment.",
    icon: "/img/refresh.svg",
  },
  {
    title: "Data Privacy Notice",
    description:
      "Your information is treated with the highest level of confidentiality. It is used exclusively to examine the student profile, is encrypted, securely stored, and will never be disclosed or shared with any third parties — in full compliance with our stringent privacy policy.",
    icon: "/img/lock.svg",
  },
];

const QuadApplicationMOdal = ({ isOpen, setIsOpen, closeModal }) => {
  const [activeStepId, setActiveStepId] = useState("01");
  const [isInfoTerms, setIsInfoTerms] = useState(false);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment} className="font-dm">
        <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#0A0A0ACC] z-[999]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[999] w-screen" data-lenis-prevent>
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[1080px] transform overflow-hidden rounded-[24px] bg-white text-left align-middle shadow-[0px_25px_50px_-12px_#3A166066] transition-all">
                  <div className="w-full max-w-[1080px] bg-[#FDFBF7] rounded-[24px]  shadow-[0px_25px_50px_-12px_rgba(58,22,96,0.4)] overflow-hidden flex flex-col">
                    {/* Header Section */}
                    <div className="relative p-6 md:p-[40px_48px_44px] bg-gradient-to-b from-[#5E17EB] to-[#6F2DAE] text-white flex flex-col justify-between">
                      <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 md:top-8 md:right-[22px] w-8 h-8 rounded-full hover:opacity-95 cursor-pointer"
                        aria-label="Close"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="16" cy="16" r="16" fill="#38069A" />
                          <path
                            d="M10.4 23L9 21.6L14.6 16L9 10.4L10.4 9L16 14.6L21.6 9L23 10.4L17.4 16L23 21.6L21.6 23L16 17.4L10.4 23Z"
                            fill="white"
                          />
                        </svg>
                      </button>

                      <div className="max-w-[967px]">
                        {/* Top Label */}
                        <p className="text-[12px] leading-[17px] font-medium tracking-[3.52px] uppercase mb-[12px]">
                          Please Read Carefully — Before You Begin
                        </p>

                        {/* Main Heading */}
                        <h1 className="text-3xl md:text-[48px] font-normal leading-tight md:leading-[48px] tracking-[-1.2px] mb-[28px]">
                          The &quot;Quad&quot; Application
                        </h1>

                        {/* Header Body Description */}
                        <p className="text-[14px] md:text-[15px] font-light leading-relaxed md:leading-[24px] text-[#FFFFFF]">
                          This application is comprehensive and consolidates
                          everything needed for a thorough assessment of the
                          student&apos;s background, talents, and achievements.
                          Please read every section below, take your time, and
                          provide accurate, truthful information — the quality
                          of your responses directly shapes the outcome.
                        </p>
                      </div>
                    </div>

                    {/* Content Body Section */}
                    <div className="p-6 md:p-[21px_48px_48px] flex flex-col">
                      {/* Section Title */}
                      <h2 className="text-2xl md:text-[32px] leading-[48px] font-medium text-[#0A0A0A] tracking-wide mb-[28px]">
                        What you need to do
                      </h2>

                      {/* Stepper Timeline Wrapper */}
                      <div className="relative flex flex-col gap-6  md:pl-[16px]">
                        {/* Vertical Gradient Timeline Line */}
                        <div className="absolute left-[24px] md:left-[26px] top-[0px] bottom-[0px] w-[1px] bg-gradient-to-b from-[#6F2DAE]/40 via-[#D4AF37]/40 to-[#6F2DAE]/40" />

                        {steps.map((step) => {
                          const IconComponent = step.icon;
                          const isCurrentlyActive = activeStepId === step.id;
                          return (
                            <div
                              onMouseEnter={() => setActiveStepId(step.id)}
                              key={step.id}
                              className="relative flex items-start gap-4 md:gap-6 group "
                            >
                              {/* Step Left Floating Icon */}
                              <div
                                className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-[16px] flex items-center justify-center border transition-all duration-300 ${
                                  isCurrentlyActive
                                    ? "bg-[#5E17EB] border-[#6F2DAE] shadow-[0px_1px_2px_0px_#0000000D] text-white"
                                    : "bg-[#FFFFFF] border-[#6F2DAE40] shadow-[0px_1px_2px_0px_#0000000D] text-[#5E17EB]"
                                }`}
                              >
                                <IconComponent size={18} strokeWidth={2} />
                              </div>

                              {/* Step Info Content Card */}
                              <div
                                className={`flex-1 bg-white p-5 md:p-[15.8px_19.8px] rounded-[16px] border transition-all duration-300 ${
                                  isCurrentlyActive
                                    ? "border-[#6F2DAE4D] shadow-[0px_8px_30px_0px_#6F2DAE14]"
                                    : "border-[#6F2DAE1A]"
                                }`}
                              >
                                {/* Header Row */}
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="text-[18px] font-bold text-[#D4AF37] leading-[18px]">
                                    {step.id}
                                  </span>
                                  <h3 className="text-[14px] font-medium text-[#0A0A0A] leading-[24px]">
                                    {step.title}
                                  </h3>
                                </div>

                                {/* Description Paragraph */}
                                <p className="text-[14px] text-[#0A0A0A] font-normal leading-[21px] tracking-normal md:text-left">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-[60px]">
                        {footerCardsData.map((card, idx) => {
                          return (
                            <div
                              key={idx}
                              className="bg-[#FFFFFF] border border-[#6F2DAE1A] rounded-[16px] p-[16px] sm:p-[20px] flex flex-col items-start  shadow-none hover:shadow-xl transition-all duration-300"
                            >
                              {/* Isolated Rounded Top Icon Container badge */}
                              <div className="w-10 h-10 rounded-[12px] bg-[#FCEFD480] flex items-center justify-center mb-[12px]">
                                <img src={card.icon} alt="card.title" />
                              </div>

                              {/* Text Layout */}
                              <div className="flex flex-col gap-[6px]">
                                <h4 className="text-[14px] font-normal text-[#0A0A0A]  leading-[20px]">
                                  {card.title}
                                </h4>
                                <p className="text-[12px] text-[#0A0A0AA6] font-normal leading-[20px] text-justify md:text-left">
                                  {card.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="p-6 md:p-[26px_48px] bg-white mb-[40px] flex md:items-center justify-between gap-[16px] max-md:flex-col">
                      <label
                        htmlFor="ackComplete"
                        className="text-sm leading-[22px] font-normal text-[#0A0A0AD9] cursor-pointer select-none flex items-start gap-[24px] max-w-[636px]"
                      >
                        <input
                          type="checkbox"
                          id="ackComplete"
                          checked={isInfoTerms}
                          onChange={(e) => setIsInfoTerms(e.target.checked)}
                          className="w-5 h-5 rounded accent-[#6F2DAE] border-gray-300 text-[#6F2DAE] cursor-pointer hidden peer"
                        />
                        <div className="rounded-[2px] border border-solid border-[#6F2DAE26] w-[18px] h-[18px] min-w-[18px] peer-checked:[&>img]:block peer-checked:bg-[#6750A4] bg-white flex justify-center items-center mt-[4px] w-fit">
                          <img
                            src="/img/checkbox-tick.svg"
                            alt=""
                            className="hidden"
                          />
                        </div>
                        <span>
                          I have read and understood all the instructions above.
                          I agree to provide accurate, thorough, and truthful
                          information throughout this application.
                        </span>
                      </label>

                      <button
                        type="button"
                        className="w-full sm:w-auto h-[48px] px-[28px] bg-[#5E17EB] hover:bg-[#5E17EB]/90 text-white rounded-full font-medium text-base leading-[24px] tracking-wide transition-all whitespace-nowrap cursor-pointer flex gap-[8px] items-center justify-center"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_622_137)">
                            <path
                              d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.75 9L8.25 10.5L11.25 7.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_622_137">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Begin Application
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.33337 8H12.6667"
                            stroke="white"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 3.33325L12.6667 7.99992L8 12.6666"
                            stroke="white"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default QuadApplicationMOdal;
