import React from "react";

const websiteDisclaimerData = [
  {
    id: 1,
    title: "No Warranty of Accuracy",
    content: "We make no representations or warranties, express or implied, regarding the accuracy, completeness, reliability, or suitability of any information or content contained on this website[cite: 188]. All content may be updated, modified, or removed at any time without prior notice[cite: 189]. We accept no legal responsibility or liability for any text errors, omissions, or outdated information[cite: 190]."
  },
  {
    id: 2,
    title: "No Liability for Technical Issues",
    content: "We are not responsible for any damage to your computer system, device, software, or data arising from viruses, malware, spyware, or other harmful components that may result from accessing, using, browsing, or downloading materials from this website[cite: 192, 193]. We also accept no responsibility for any interruptions or discontinuation of the website's availability due to upgrades, server maintenance, technical issues, or content updates[cite: 194]."
  },
  {
    id: 3,
    title: "Personal, Non-Commercial Use",
    content: "You may view, download, or print materials from this website solely for personal, non-commercial use[cite: 196]. Any reproduction, redistribution, resale, or other use of the content for commercial purposes without advance written permission is strictly prohibited and may violate applicable intellectual property laws[cite: 197]."
  },
  {
    id: 4,
    title: "Intellectual Property",
    content: "All content on this website including text, graphics, images, files, and logos is protected by applicable copyright and intellectual property laws[cite: 201]. When downloading or printing materials, you must retain all copyright and proprietary notices[cite: 202]."
  },
  {
    id: 5,
    title: "Privacy of Personal Information",
    content: "Any personal information you provide to us including your name, date of birth, address, telephone number, or email address will be treated as highly confidential and handled in accordance with applicable privacy and data protection practices[cite: 203]. However, we reserve the right to use any comments, suggestions, ideas, concepts, or know-how contained in your communications for valid commercial purposes[cite: 204]."
  },
  {
    id: 6,
    title: "Prohibited Transmissions",
    content: "You are strictly prohibited from transmitting to this website any material that is unlawful, threatening, defamatory, abusive, obscene, violent, or otherwise objectionable[cite: 205]. We reserve the right to cooperate fully with law enforcement authorities or comply with legal orders requiring full disclosure of such information[cite: 206]."
  },
  {
    id: 7,
    title: "External Links",
    content: "This website may contain links to external websites for informational purposes[cite: 208]. We do not review, control, or endorse the content of such websites and are not responsible for their accuracy, availability, or practices[cite: 209]. Accessing third-party websites is done entirely at your own risk[cite: 210]."
  },
  {
    id: 8,
    title: "Changes to this Disclaimer",
    content: "We reserve the right to amend, modify, or update this disclaimer at any time without prior notice[cite: 212]. By continuing to use this website, you agree to be bound by the current version of this disclaimer[cite: 213]."
  }
];

const WebsiteDisclaimer = () => {
  return (
    <article className="flex-1">
      <div className="space-y-[16px] mb-[40px]">
        <h1 className="text-[40px] md:text-[57.6px] font-normal leading-tight md:leading-[60px] tracking-[-0.576px] text-[#0E1B2C]">
          Website    <span className="text-[#E8A23A]">Disclaimer</span>
        </h1>
        <p className="text-[16px] md:text-[18px] font-normal leading-[29px] text-[#6B6457] max-w-[768px] mb-[40px]">While we make every reasonable effort to ensure that information on this website is correct and up to date, all content is provided for general informational purposes only.
        </p>
        <div className="w-full h-[1px] bg-[linear-gradient(90deg,#D9CFBC_50%,rgba(217,207,188,0)_50%)]"></div>
      </div>

      <div className="space-y-[40px] mb-[64px]">
        {websiteDisclaimerData.map((section) => (
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

        <a
          href="/contact"
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
        </a>
      </div>
    </article>
  );
};

export default WebsiteDisclaimer;
