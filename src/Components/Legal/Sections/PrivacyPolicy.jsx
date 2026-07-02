import React from "react";

const policySections = [
  {
    id: 1,
    title: "1) Information We Collect",
    content:
      "We collect your personal information that you voluntarily provide when creating a user account, contacting us through the website, or using our web services. Personal information may include: full name, date of birth, email address, telephone number, postal address, account login details, and other information necessary to provide services or respond to inquiries. We may also collect technical information such as Internet Protocol addresses, browser type, device information, and website usage data when you access or use the Site.",
  },
  {
    id: 2,
    title: "2) How We Use Your Information",
    content:
      "The information we collect may be used to create and manage user accounts, provide requested services and support, respond to inquiries and communications, improve the performance and usability of the Site, analyse usage patterns and enhance user experience, communicate important notices regarding accounts or services, and conduct internal administrative activities and research. Promotional communications will only be sent if you have chosen or agreed to receive such information.",
  },
  {
    id: 3,
    title: "3) Account Activity and System Logs",
    content:
      "When you log into your user account, your activity may be recorded by our systems. This information helps us maintain account functionality, detect any technical issues, monitor Site security, and improve performance. User activity information remains private and is not made publicly available.",
  },
  {
    id: 4,
    title: "4) Cookies",
    content:
      "The Site may use cookies to improve functionality and user experience. A cookie is a small data file stored on your device that allows the website to recognise your browser and remember certain information. Most recent web browsers automatically accept cookies. You may modify your browser settings to refuse cookies or notify you when cookies are being used. However, certain features of the Site may not function properly if cookies are fully disabled.",
  },
  {
    id: 5,
    title: "5) Information Sharing and Disclosure",
    content:
      "We do not sell or share personal information to third parties. Personal information may be disclosed when required by applicable laws or legal processes, to comply with lawful requests from government authorities, to protect the rights, property, or safety of the Company, users, or the public, to investigate fraud, security issues, or misuse of the Site, or in connection with a merger, acquisition, restructuring, or sale of company assets.",
  },
  {
    id: 6,
    title: "6) International Data Storage",
    content:
      "Information collected through the Site may be stored or processed on servers located in different countries where the Company or its service providers maintain data storage facilities. By using the Site, you consent to such transfer and storage of information.",
  },
  {
    id: 7,
    title: "7) Account Closure and Data Retention",
    content:
      "You may close your user account at any time through the account settings available on the Site. Once a user account is closed, personal information associated with the account will be deleted or anonymised where reasonably possible. Certain information may be retained for a limited period where required for legal, regulatory, or security purposes.",
  },
  {
    id: 8,
    title: "8) Access and Correction of Personal Information",
    content:
      "Users may update or correct their user account information by logging into their account profile. If you wish to request access to personal information held by the Company or request correction of inaccurate information, you may contact us through the contact details provided on the Site.",
  },
  {
    id: 9,
    title: "9) Data Security",
    content:
      "The Company implements reasonable technical and organisational measures to protect personal information from unauthorised access, misuse, alteration, or loss. Data transmitted through the Site may be protected using secure encryption protocols. Despite these safeguards, no system of data transmission or storage can be guaranteed to be completely secure.",
  },
  {
    id: 10,
    title: "10) Children and Student Privacy",
    content:
      "Protecting student privacy is very important to us. User accounts for students should be created or supervised by a parent, guardian, or authorised educator. We don't intentionally collect personal information from children below the age permitted by applicable laws without appropriate parental or guardian involvement.",
  },
  {
    id: 11,
    title: "11) Email Communications",
    content:
      "Users may receive administrative emails related to their account, service updates, or important policy changes. Promotional communications will only be sent where consent has been given. Users may unsubscribe from promotional communications at any time.",
  },
  {
    id: 12,
    title: "12) Changes to Privacy Policy",
    content:
      "This Privacy Policy may be updated from time to time. Any significant changes will be communicated through the Site or through email notifications where appropriate. The version of the Privacy Policy in effect at the time the information is collected will govern how that user information is processed.",
  },
  {
    id: 13,
    title: "13) Contact Information",
    content:
      "If you have questions about this Privacy Policy or about how personal information is handled, you may contact the Company using the contact details available on the Site.",
  },
];

const PrivacyPolicy = () => {
  return (
    <article className="flex-1">
      <div className="space-y-[16px] mb-[40px]">
        <h1 className="text-[40px] md:text-[57.6px] font-normal leading-tight md:leading-[60px] tracking-[-0.576px] text-[#0E1B2C]">
          Privacy <span className="text-[#E8A23A]">Policy</span>
        </h1>
        <p className="text-[16px] md:text-[18px] font-normal leading-[29px] text-[#0A0A0A] max-w-[768px] mb-[70px]">
          How Canska Education Services Pvt. Ltd. collects, uses, stores, and
          protects your personal information obtained through this website.
        </p>
        <div className="w-full h-[1px] bg-[linear-gradient(90deg,#D9CFBC_50%,rgba(217,207,188,0)_50%)]"></div>
      </div>

      <div className="space-y-[40px] mb-[64px]">
        {policySections.map((section) => (
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

export default PrivacyPolicy;
