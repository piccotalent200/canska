import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center gap-1  ">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2.5">
            {isLast ? (
              // Active / Last Item (Non-clickable, matching Figma weight)
              <span className="line-clamp-1 font-medium text-sm leading-4 text-white">
                {item.label}
              </span>
            ) : (
              // Link Items (Semi-transparent, hover states)
              <Link
                href={item.href}
                className="line-clamp-1 font-normal text-sm leading-4 text-[#FFFFFFB2] hover:text-white transition-colors duration-200 hover:underline"
              >
                {item.label}
              </Link>
            )}

            {/* Separator Arrow (Hidden after the last item) */}
            {!isLast && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_595_4868)">
                  <path d="M4.5 9L7.5 6L4.5 3" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_595_4868">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            )}
          </div>
        );
      })}
    </nav>
  )
}

export default Breadcrumb
