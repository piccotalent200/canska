import React from "react";
import Link from "next/link";

const accessibilityStatement = [
  {
    id: 1,
    title: "WCAG 2.2 Level AA Conformance",
    content: "The website has been designed and developed to conform as closely as possible to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA, issued by the World Wide Web Consortium (W3C). These guidelines aim to make content more accessible and usable for people with a wide range of abilities."
  },
  {
    id: 2,
    title: "Our Accessibility Practices",
    content: "We implement best practices including: semantic HTML to ensure content is correctly structured and compatible with assistive technologies such as screen readers; meaningful alternative text for images; sufficient colour contrast between text and background elements; full keyboard navigation across the website; responsive layouts that work across different devices and screen sizes; Cascading Style Sheets to control visual presentation while keeping content structure clear; and relative sizing for text and interface elements so users can adjust font sizes without loss of functionality."
  },
  {
    id: 3,
    title: "Continuous Improvement",
    content: "We frequently review and improve the accessibility of our website as standards evolve and new technologies become available. While we strive to ensure all content meets accessibility standards, some third-party content or legacy material may not yet fully conform to these web accessibility guidelines."
  },
  {
    id: 4,
    title: "Reporting an Issue",
    content: "If you encounter any accessibility barriers while using our website, please contact us so that we can investigate and address the issue where possible."
  },
];

const AccessibilityStatement = () => {
  return (
    <article className="flex-1">
      <div className="space-y-[16px] mb-[40px]">
        <h1 className="text-[40px] md:text-[57.6px] font-normal leading-tight md:leading-[60px] tracking-[-0.576px] text-[#0E1B2C]">
          Accessibility   <span className="text-[#E8A23A]">Statement</span>
        </h1>
        <p className="text-[16px] md:text-[18px] font-normal leading-[29px] text-[#0A0A0A] max-w-[768px] mb-[40px]">We are fully committed to ensuring that our website is accessible to the widest possible audience, including people with visual, auditory, motor, cognitive, reading, and learning disabilities.
        </p>
        <div className="w-full h-[1px] bg-[linear-gradient(90deg,#D9CFBC_50%,rgba(217,207,188,0)_50%)]"></div>
      </div>

      <div className="space-y-[40px] mb-[64px]">
        {accessibilityStatement.map((section) => (
          <div
            key={section.id}
            className="flex flex-col md:flex-row gap-4 md:gap-0 items-start"
          >
            {/* Header Left Column */}
            <div className="w-full md:w-[293px] shrink-0 pr-4 flex gap-[10px]">
              <h3 className="text-[16.5px] font-normal leading-[27px] tracking-[-0.2px] text-[#0E1B2C]">
                {section.title}
              </h3>
            </div>

            {/* Description Right Column */}
            <div className="flex-1">
              <p className="text-[16px] font-normal leading-[28px] text-[#0E1B2C]">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-[#0E1B2C] rounded-[16px] p-6 md:p-[32px_32px_55px_32px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <span className="block text-[11px] leading-[16px] font-bold tracking-[3.08px] text-[#E8A23A] uppercase">
            Last updated - June 2026
          </span>
          <h4 className="text-[20px] md:text-[24px] font-medium leading-[32px] tracking-[-0.24px] text-[#F5F0E6]">
            Need clarity on a clause?
          </h4>
        </div>

        <Link
          href="/contact-us"
          className="inline-flex items-center justify-between gap-3 bg-[#5E17EB] border border-[#5E17EB] text-white px-8 h-[54px] rounded-full hover:bg-[#4d10c7] transition-all duration-200 group w-full md:w-auto"
        >
          <span className="text-[15.7px] font-medium tracking-wide">
            Contact Compliance
          </span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12l4-4-4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default AccessibilityStatement;
