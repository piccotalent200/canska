import React from "react";

const termsOfUseData = [
  {
    id: 1,
    title: "1) Eligibility and Acceptance",
    content: "By using this Site you confirm that you are legally capable of entering into a binding agreement under applicable laws[cite: 49]. If you are using the Site on behalf of an organisation, you confirm authority to bind that organisation[cite: 50]. The Company reserves the right to update these Terms at any time[cite: 51]. Continued use after updates constitutes acceptance[cite: 51]."
  },
  {
    id: 2,
    title: "2) Description of Services",
    content: "The Site provides educational resources, web learning materials, assessments, training tools, and related services for educational and informational purposes[cite: 54]. All services are provided on an \"as is\" and \"as available basis[cite: 55]. The Company reserves the right to modify, suspend, or discontinue any part of the Site at any time[cite: 55]."
  },
  {
    id: 3,
    title: "3) User Registration",
    content: "Certain features require users to create an account[cite: 58]. When registering you agree to provide accurate, current, and complete information[cite: 58]. If the Company reasonably believes any information provided is incorrect or outdated, it reserves the right to suspend or terminate the account without prior notice[cite: 59]."
  },
  {
    id: 4,
    title: "4) User Accounts and Security",
    content: "Each account is intended for use by a single individual only[cite: 61]. Sharing or transferring accounts is stringently prohibited[cite: 61]. You are entirely responsible for safeguarding your login credentials and all activities under your account[cite: 62]."
  },
  {
    id: 5,
    title: "5) Membership and Subscriptions",
    content: "The Site may offer paid memberships or subscription services[cite: 64]. Unless otherwise specified, a membership remains valid for twelve months from activation[cite: 64]. The Company reserves the right to change plans, pricing, and features, with reasonable notice where possible[cite: 65]."
  },
  {
    id: 6,
    title: "6) Payments and Refunds",
    content: "Payments for memberships, products, or services are subject to the terms presented at purchase[cite: 67]. Unless otherwise stated, fees paid for digital services or memberships are generally non refundable[cite: 68]. Refunds may be issued at the discretion of the Company or where required by applicable law[cite: 69]."
  },
  {
    id: 7,
    title: "7) Acceptable Use",
    content: "You agree to use the Site only for lawful, personal purposes[cite: 72]. Users must not reproduce, distribute, or commercially exploit website content without permission; use automated tools such as bots or scripts; interfere with operation or security; or upload unlawful or harmful content[cite: 73, 74]. Violations will result in termination and legal action[cite: 74, 75]."
  },
  {
    id: 8,
    title: "8) Intellectual Property Rights",
    content: "All content available on the Site is owned by or licensed to the Company and protected by applicable intellectual property laws[cite: 80]. Users may access the web content only for personal, educational, and non-commercial purposes[cite: 81]. Reproduction, distribution, modification, or commercial use without prior written permission is stringently prohibited[cite: 82]."
  },
  {
    id: 9,
    title: "9) User Submitted Content",
    content: "If you submit feedback, comments, suggestions, or other materials to the Company, you grant the Company a worldwide, non-exclusive, royalty free licence to use, reproduce, publish, and distribute such content for genuine business or commercial purposes[cite: 83]."
  },
  {
    id: 10,
    title: "10) Third Party Links",
    content: "The Site may contain links to external websites operated by third parties[cite: 84]. These links are provided for information or convenience only[cite: 85]. The Company does not control and is not responsible for the content, policies, or practices of such websites[cite: 85]."
  },
  {
    id: 11,
    title: "11) Privacy and Data Protection",
    content: "Your use of the Site is subject to the Privacy Policy and Data Protection Statement which explain how personal data is collected, processed, stored, used, and protected[cite: 91]."
  },
  {
    id: 12,
    title: "12) Disclaimer of Warranties",
    content: "The Site and its services are provided on an \"as is\" and \"as available\" basis[cite: 92]. To the fullest extent permitted by law, the Company disclaims all warranties whether express or implied including warranties of merchantability, suitability for a particular purpose, accuracy, and non-infringement[cite: 93]."
  },
  {
    id: 13,
    hasSectionIcon: true,
    title: "13) Limitation of Liability",
    content: "To the maximum extent permitted by law, the Company shall not be liable for any indirect, incidental, or consequential damages arising from the use of the Site or web services[cite: 94]. Nothing in these Terms excludes liability where such exclusion is not permitted by applicable law[cite: 95]."
  },
  {
    id: 14,
    title: "14) Termination of Access",
    content: "The Company may suspend or terminate user access if these Terms are violated or if user activity may harm the Site, the Company, or other users[cite: 96]. Upon termination, your right to access the Site and all services will immediately end[cite: 97, 98]."
  },
  {
    id: 15,
    title: "15) Governing Law and Jurisdiction",
    content: "These Terms are governed by the laws of the Republic of India[cite: 99]. Any disputes arising from the use of the Site shall be subject to the jurisdiction of the competent courts located in the state of Tamil Nadu[cite: 100]."
  },
  {
    id: 16,
    hasSectionIcon: true,
    title: "16) Severability",
    content: "If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, that provision shall be interpreted consistently with applicable law and the remaining provisions shall continue in full force and effect[cite: 103]."
  },
  {
    id: 17,
    title: "17) Entire Agreement",
    content: "These Terms together with the Privacy Policy and related policies constitute the complete agreement between the user and the Company regarding the use of the Site[cite: 105]."
  },
  {
    id: 18,
    hasSectionIcon: true,
    title: "18) Digital Content Licensing",
    content: "Educational materials including course modules, assessments, downloadable resources, and training content are licensed to users for personal educational use only[cite: 108]. The licence is limited, non-exclusive, non-transferable, and revocable[cite: 109]."
  },
  {
    id: 19,
    title: "19) Academic Integrity",
    content: "Users must complete assessments honestly and without unauthorised assistance[cite: 110]. The Company reserves the right to nullify results, suspend accounts, or revoke certificates where academic misconduct is identified[cite: 110]."
  },
  {
    id: 20,
    title: "20) Screen Recording and Content Capture",
    content: "Users must not record, capture, reproduce, or distribute video lessons, training materials, or assessment content through screen recording devices or similar methods without prior written permission[cite: 113]."
  },
  {
    id: 21,
    hasSectionIcon: true,
    title: "21) Automated Access and AI Use",
    content: "Users must not use artificial intelligence systems, automated scripts, scraping tools, or similar technologies to extract, reproduce, or analyse educational content from the Site without explicit authorisation[cite: 114]."
  },
  {
    id: 22,
    title: "22) Certificate Validity",
    content: "Certificates issued by the Company represent completion of specific learning activities[cite: 121]. Such certificates do not constitute professional accreditation unless expressly stated[cite: 122]."
  },
  {
    id: 23,
    title: "23) Platform Security",
    content: "Users are strictly prohibited from attempting to probe, test, bypass, or compromise the Site's security measures, including vulnerability scanning, unauthorised access attempts, or system intrusion[cite: 123]."
  },
  {
    id: 24,
    hasSectionIcon: true,
    title: "24) Service Availability",
    content: "The Company may conduct maintenance, updates, or infrastructure improvements that may temporarily affect access to the Site[cite: 124]. Reasonable efforts will minimise service interruptions[cite: 125]."
  },
  {
    id: 25,
    title: "25) Contact Information",
    content: "Any questions regarding these Terms may be directed to the Company using the contact information provided on the Site[cite: 126, 127]."
  }
];

const Terms = () => {
  return (
    <article className="flex-1">
      <div className="space-y-[16px] mb-[40px]">
        <h1 className="text-[40px] md:text-[57.6px] font-normal leading-tight md:leading-[60px] tracking-[-0.576px] text-[#0E1B2C]">
          Terms of<span className="text-[#E8A23A]"> Use</span>
        </h1>
        <p className="text-[16px] md:text-[18px] font-normal leading-[29px] text-[#0A0A0A] max-w-[768px] mb-[40px]">These Terms of Use govern your access to and use of the website and web services provided by Canska Education Services Pvt. Ltd.
        </p>
        <div className="w-full h-[1px] bg-[linear-gradient(90deg,#D9CFBC_50%,rgba(217,207,188,0)_50%)]"></div>
      </div>

      <div className="space-y-[40px] mb-[64px]">
        {termsOfUseData.map((section) => (
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

export default Terms;
