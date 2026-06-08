import React from 'react'

const Footer = () => {
  return (
    <footer className="font-dm border-t border-solid border-[#FFFFFF33] bg-[#1F232E] text-[#FFFFFFA6] font-sans antialiased text-sm select-none px-4 sm:px-6 md:px-8 lg:px-[61px] pt-12 sm:pt-16 md:pt-20 lg:pt-[81px] pb-6 lg:pb-[24px]">
      {/* Top Section: Branding & Links */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-8">

        {/* Brand Column */}
        <div className="lg:col-span-4 mb-8 md:mb-0">
          <div className="flex items-center space-x-2 mb-4 md:mb-6">
            <img src="/img/footer-logo.svg" alt="Canska Logo" className="h-8 md:h-auto" />
          </div>

          <p className="text-sm md:text-[14px] leading-[20px] md:leading-[22px] font-normal text-[#FFFFFFA6] mb-6 md:mb-[24px] pr-0 md:pr-4">
            The world's first scholarship-mentoring program. Building outstanding student portfolios for top-50 university admissions and US$60K–US$400K+ scholarships.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 pt-2">
            {['IG', 'LI', 'YT', 'X', 'FB'].map((social) => (
              <a
                key={social}
                href={`#${social.toLowerCase()}`}
                className="w-8 h-8 md:w-[36px] md:h-[36px] min-w-8 md:min-w-[36px] rounded-full border border-[#FFFFFF33] flex items-center justify-center text-[10px] md:text-[11px] leading-[14px] md:leading-[16px] font-normal text-[#FFFFFF] hover:text-white hover:border-white transition-colors duration-200"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Links Columns Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 md:col-span-2 lg:col-span-8 lg:pl-8 xl:pl-12">

          {/* Program Column */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-[#FFB433] uppercase text-sm md:text-base leading-[14px] md:leading-[16px] font-bold mb-4 md:mb-[16px] flex items-center">
              <span className="mr-2">—</span> PROGRAM
            </h3>
            <ul className="space-y-2 md:space-y-[10px]">
              {['Apply to The Quad', 'Why Quad Program', 'Top-50 Universities', 'Why Canska', 'Why Start at Age 8', 'Application Flow'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition-colors duration-200 text-sm leading-[19px] md:leading-[21px] font-normal text-[#FFFFFFB2] block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio Column */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-[#FFB433] uppercase text-sm md:text-base leading-[14px] md:leading-[16px] font-bold mb-4 md:mb-[16px] flex items-center">
              <span className="mr-2">—</span> PORTFOLIO
            </h3>
            <ul className="space-y-2 md:space-y-[10px]">
              {['Portfolio Building', 'Why Portfolio', 'University Admissions', 'Scholarship Support', 'Student Visa'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition-colors duration-200 text-sm leading-[19px] md:leading-[21px] font-normal text-[#FFFFFFB2] block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-[#FFB433] uppercase text-sm md:text-base leading-[14px] md:leading-[16px] font-bold mb-4 md:mb-[16px] flex items-center">
              <span className="mr-2">—</span> SUPPORT
            </h3>
            <ul className="space-y-2 md:space-y-[10px]">
              {['Parent Resources', 'FAQs', 'About Canska', 'Contact Us', 'Sitemap', 'Legal'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition-colors duration-200 text-sm leading-[19px] md:leading-[21px] font-normal text-[#FFFFFFB2] block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

     

      {/* Bottom Section: Copyright & IP Notice */}
      <div className="mx-auto pt-6 md:pt-[24px] mt-8 md:mt-[56px] border-t border-solid border-[#FFFFFF1A] text-[11px] text-[#FFFFFFA6]">

        {/* Copyright and Legal Links */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-[30px]">
          <p className='text-sm leading-[18px] font-normal text-[#FFFFFFCC]'>© 2026 Canska Education Services Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#privacy" className="text-sm leading-[18px] font-normal text-[#FFFFFFCC] hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="text-sm leading-[18px] font-normal text-[#FFFFFFCC] hover:text-white transition-colors">Terms</a>
          </div>
        </div>

        {/* Intellectual Property Notice */}
          <h4 className="text-[#FFFFFFB2] font-bold uppercase leading-[16px] text-[11px] md:text-[14px] mb-4 md:mb-[20px]">
            Intellectual Property Notice
          </h4>
          <p className="text-[11px] md:text-sm leading-[15px] md:leading-[16px] font-medium text-[#FFFFFF73]">
           All content on this website, including logos, brand names, trade names, trademarks, text, images, graphics, audio, video, and animations, is the exclusive copyrighted and trademarked property of Canska Education Services Pvt. Ltd. and is entirely protected under international intellectual property laws. Any unauthorised copying, reproduction, reposting, alteration, transfer, publication, distribution, or sale of the information on this website is strictly forbidden and will be treated as a serious legal violation. The use of any logos, brand names, trademarks, or other protected content without written legal authorisation from Canska Education Services Pvt. Ltd. is stringently prohibited. All intellectual property rights, including copyrights, trademarks, patents, patent rights, and technical innovations, are fully reserved. Nothing on this website consents any license, express or implied, to use the intellectual property of Canska Education Services Pvt. Ltd. Violators, whether acting intentionally or unintentionally, will be pursued to the fullest extent of state, national, and international law. An official legal action will be taken without any exceptions.
          </p>

      </div>
    </footer>
  )
}

export default Footer