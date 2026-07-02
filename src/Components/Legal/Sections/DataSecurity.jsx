import React from "react";

const dataSecurityNoticeData = [
  {
    id: 1,
    hasSectionIcon: false,
    title: "Purpose of Data Processing",
    content: "We collect and process personal data to support our operations, manage our activities, and provide services that are necessary or requested[cite: 167]. Personal data will only be used for these purposes unless we provide advance notice of any additional use through official communication[cite: 168]."
  },
  {
    id: 2,
    hasSectionIcon: false,
    title: "Sharing with Service Providers",
    content: "We do not disclose personal data to unauthorised individuals or organisations[cite: 171]. Personal data may be shared with trusted third-party service providers where such disclosure is necessary for them to perform services on our behalf, including operational support, research activities, or service delivery[cite: 172]. Data may also be disclosed to funding bodies, regulatory authorities, or government agencies where required by applicable laws[cite: 173]."
  },
  {
    id: 3,
    hasSectionIcon: false,
    title: "No Marketing Sale",
    content: "We don't share, sell, trade, or otherwise disclose personal data to any organisation for marketing purposes or for financial or non-financial gain[cite: 174]."
  },
  {
    id: 4,
    hasSectionIcon: true, // Based on "S International Transfers" typo indicator
    title: "International Transfers",
    content: "Where personal data is transferred to third parties located in countries whose data protection laws may not provide the same level of protection as those in the United States of America or the European Economic Area, we implement appropriate technical, contractual, and organisational safeguards to ensure that personal data remains secure and adequately protected[cite: 176]."
  },
  {
    id: 5,
    hasSectionIcon: false,
    title: "Communications and Consent",
    content: "If you have provided consent to receive promotional or informational communications, we may occasionally contact you with updates regarding new services, activities, or relevant offerings from approved partners, as well as invitations to participate in surveys or educational research[cite: 179]. You may withdraw your consent and opt out at any time by following the unsubscribe instructions or contacting us[cite: 180]."
  },
  {
    id: 6,
    hasSectionIcon: false,
    title: "Your Rights",
    content: "You have the right to request access to the personal data we hold about you[cite: 183]. Subject to applicable laws, you may also have the right to request correction, updating, or deletion of your personal data where appropriate[cite: 184]."
  },
  {
    id: 7,
    hasSectionIcon: true,
    title: "Updates",
    content: "We may update this Data Protection Statement periodically[cite: 185]. The version in effect at the time your personal data is collected will govern how that data is processed[cite: 185]. For more information, please refer to our Privacy Policy[cite: 186]."
  }
];


const DataSecurity = () => {
  return (
    <article className="flex-1">
        <p className="uppercase tracking-[3.08px] mb-[12px] text-[11px] leading-[16px] font-normal text-[#C4842A]">Legal · 05</p>
      <div className="space-y-[16px] mb-[40px]">
        <h1 className="text-[40px] md:text-[57.6px] font-normal leading-tight md:leading-[60px] tracking-[-0.576px] text-[#0E1B2C]">
         Data Security  <span className="text-[#E8A23A]">Notice</span>
        </h1>
        <p className="text-[16px] md:text-[18px] font-normal leading-[29px] text-[#6B6457] max-w-[768px] mb-[40px]">How we collect, process, share, and protect personal data across our operations and services.
        </p>
        <div className="w-full h-[1px] bg-[linear-gradient(90deg,#D9CFBC_50%,rgba(217,207,188,0)_50%)]"></div>
      </div>

      <div className="space-y-[40px] mb-[64px]">
        {dataSecurityNoticeData.map((section) => (
          <div
            key={section.id}
            className="flex flex-col md:flex-row gap-4 md:gap-0 items-start"
          >
            {/* Header Left Column */}
            <div className="w-full md:w-[293px] shrink-0 pr-4 flex gap-[10px]">
                   <span className="text-[#E8A23A]">§</span>
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

export default DataSecurity;
