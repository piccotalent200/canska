import Link from "next/link";
import React from "react";

const navItems = [
  {
    name: "Privacy Policy",
    href: "/legal/privacy-policy",
    slugKey: "privacy-policy",
  },
  { name: "Terms of Use", href: "/legal/terms", slugKey: "terms" },
  {
    name: "Child Safety Policy",
    href: "/legal/child-safety",
    slugKey: "child-safety",
  },
  {
    name: "Accessibility Statement",
    href: "/legal/accessibility",
    slugKey: "accessibility",
  },
  {
    name: "Data Security Notice",
    href: "/legal/data-security",
    slugKey: "data-security",
  },
  {
    name: "Website Disclaimer",
    href: "/legal/disclaimer",
    slugKey: "disclaimer",
  },
];

const AsideSection = ({ slug }) => {
  return (
    <>
      <nav className="z-[10] flex overflow-auto max-md:sticky max-md:top-[80px] max-md:bg-white max-md:p-[8px_16px] md:flex-col gap-1 md:hidden">
        {navItems.map((item) => {
          const isActive = slug === item.slugKey;
          return (
            <Link
              key={item.slugKey}
              href={item.href}
              className={`whitespace-nowrap flex items-center w-full h-[44px] px-[24px] border border-[#6717E81A]  rounded-[12px] text-[16px] font-medium tracking-[-0.16px] transition-colors duration-200 ${
                isActive
                  ? "bg-[#6717E8] text-white"
                  : "bg-transparent text-[#0A0A0A] hover:bg-slate-50 "
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <aside className="w-full md:w-[272px] shrink-0 space-y-[32px] lg:space-y-[48px] md:sticky md:top-[100px] h-fit">
        <nav className="z-[10] flex overflow-auto max-md:sticky max-md:top-[80px] max-md:bg-white max-md:p-[8px_16px] md:flex-col gap-1 max-md:hidden">
          {navItems.map((item) => {
            const isActive = slug === item.slugKey;
            return (
              <Link
                key={item.slugKey}
                href={item.href}
                className={`whitespace-nowrap flex items-center w-full h-[44px] px-[24px] border border-[#6717E81A]  rounded-[12px] text-[16px] font-medium tracking-[-0.16px] transition-colors duration-200 ${
                  isActive
                    ? "bg-[#6717E8] text-white"
                    : "bg-transparent text-[#0A0A0A] hover:bg-slate-50 "
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Contact Box */}
        <div className="w-full bg-white border border-[#D9CFBC] rounded-[16px] p-[20px] flex flex-col gap-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1078_3313)">
              <path
                d="M12.4987 1.66669H4.9987C4.55667 1.66669 4.13275 1.84228 3.82019 2.15484C3.50763 2.4674 3.33203 2.89133 3.33203 3.33335V16.6667C3.33203 17.1087 3.50763 17.5326 3.82019 17.8452C4.13275 18.1578 4.55667 18.3334 4.9987 18.3334H14.9987C15.4407 18.3334 15.8646 18.1578 16.1772 17.8452C16.4898 17.5326 16.6654 17.1087 16.6654 16.6667V5.83335L12.4987 1.66669Z"
                stroke="#C4842A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.668 1.66669V5.00002C11.668 5.44205 11.8436 5.86597 12.1561 6.17853C12.4687 6.49109 12.8926 6.66669 13.3346 6.66669H16.668"
                stroke="#C4842A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33464 7.5H6.66797"
                stroke="#C4842A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3346 10.8333H6.66797"
                stroke="#C4842A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3346 14.1667H6.66797"
                stroke="#C4842A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1078_3313">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p className="text-[14px] font-medium leading-[22px] #6B6457">
            Questions? Contact us via the details on the Site or write to our
            compliance team.
          </p>
        </div>
      </aside>
    </>
  );
};

export default AsideSection;
