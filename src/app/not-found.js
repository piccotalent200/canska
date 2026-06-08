"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAF8F3] flex flex-col items-center justify-center px-[16px] text-center">
      {/* Logo */}
      <Link href="/" className="mb-[48px] cursor-pointer">
        <img src="/img/canska.svg" alt="Canska" className="h-[36px]" />
      </Link>
      <p className="text-[120px] sm:text-[180px] leading-none font-normal text-[#5E17EB] opacity-10 select-none absolute pointer-events-none">
        404
      </p>
      <div className="w-[72px] h-[72px] rounded-full bg-[#5E17EB]/10 flex items-center justify-center mb-[24px] relative z-10">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5E17EB"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h1 className="text-[28px] sm:text-[36px] leading-[34px] sm:leading-[44px] font-normal text-[#1F232E] mb-[12px] relative z-10">
        Page not found
      </h1>
      <p className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] font-normal text-[#1F232E]/60 max-w-[420px] mb-[36px] relative z-10">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-[12px] relative z-10">
        <Link
          href="/"
          className="bg-[#5E17EB] hover:bg-[#4300c9] transition-all duration-200 text-[#FFFFFF] text-sm font-bold px-[24px] py-[14px] rounded-[999px] flex items-center justify-center gap-[8px]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Home
        </Link>
        <Link
          href="/apply-quad"
          className="border-[2px] border-solid border-[#5E17EB] text-[#5E17EB] hover:bg-[#5E17EB]/5 transition-all duration-200 text-sm font-bold px-[24px] py-[14px] rounded-[999px] flex items-center justify-center"
        >
          Apply to The Quad
        </Link>
      </div>
    </main>
  );
}
