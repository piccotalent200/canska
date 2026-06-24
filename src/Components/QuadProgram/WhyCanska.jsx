"use client";
import React from 'react'
import Image from 'next/image';
import Breadcrumb from '../Reusable/Breadcrumb';
import Link from 'next/link';
import { useState } from "react";
import { Tabs } from "flowbite-react";

const breadcrumbLinks = [
  { label: 'Home', href: '/' },
  { label: 'Why Canska?', href: '/why-canska' }
];


const customTabsTheme = {
  tablist: {
    base: "flex flex-wrap items-center gap-2 p-[16px_56px] bg-[rgba(251,250,255,0.9)] border-y border-[#EDE7FB] backdrop-blur-[12px] overflow-x-auto",
    tabitem: {
      base: "p-0 !bg-transparent hover:!bg-transparent",
    },
  },
};

const featureBlocks = [
  {
    id: '01',
    title: 'Strategic Information Arbitrage',
    subtitle: 'Insider-level clarity on what elite universities actually reward versus what they publicly disclose',
    description: 'This allows parents to stop wasting resources on low-impact extracurriculars that do not move the needle and instead focus on high-yield activities. By providing this clarity, Canska acts as a filter that separates high applicant from common academic noise, guaranteeing that every hour of a student\'s time is a calculated investment toward prestigious admissions and specific scholarships.'
  },
  {
    id: '02',
    title: 'Digital Portfolio',
    subtitle: 'A universal currency for talent, verified and portable across the world',
    description: 'In an era where credentials can be very easily fabricated, this "provenance" is the most valuable asset a student could own. The program tracks an unignorable trail of growth that really proves original thought and leadership over a decade. This allows a student from any geographic location to compete on an even playing field with peers from the world\'s most expensive university preparatory schools and public schools.'
  },
  {
    id: '03',
    title: 'Official Navigator',
    subtitle: 'Professional-grade scrutiny for every application, essay, and financial aid form',
    description: 'Recognizing that a technical error on a document can derail a decade of hard work, Canska provides professional-grade scrutiny for every application, essay, and financial aid form. This tactical support removes the friction of moving across borders, ensuring that the student\'s transition to a top 50 university is handled with the same precision as a corporate merger or a high-stakes legal filing.'
  },
  {
    id: '04',
    title: 'Intellectual Incubator',
    subtitle: 'Shifts the student\'s mindset from "Consumer of information" to a "Creator of value"',
    description: 'Through specialized innovation and project evaluations, the mentorship pushes students to build Sovereign Assets: real-world solutions, research on tech platforms that demonstrate applied experience. This shift is very crucial for securing the world\'s most prestigious scholarships, which increasingly prioritize "Social and Intellectual Entrepreneurship" over mere academic compliance or high standardized test scores.'
  },
  {
    id: '05',
    title: 'Risk Mitigation Hedge',
    subtitle: 'Engineers a student\'s profile to target full-ride scholarships worth up to US$400,000',
    description: 'The Quad mentorship transforms education from a massive family liability into a managed investment fund. This proactive financial engineering allows parents to protect their wealth while ensuring their children receive the highest quality mentorship available globally, effectively buying merit-based hundred-thousand-dollar discounts through strategic early childhood talent development.'
  },
  {
    id: '06',
    title: 'Synchronous Elite Mentorship',
    subtitle: 'Decouples high-level expertise from the limitations of live scheduling and geography.',
    description: 'Through the use of recorded videos and strategic analytics, the mentorship program ensures that a student in a remote town can leverage Sovereign Thinking alongside a student in a major global hub. This model prioritizes the deepness of professional analysis over the mere duration of a call, providing students with a "strategic playbook" they can review and implement with surgical precision for overall skill development through the Canska Quad platform.'
  },
  {
    id: '07',
    title: 'Global Benchmarking Engine',
    subtitle: 'Measure your skills against international standards rather than just local curriculum',
    description: 'Through Competition Alerts and external assessments, Canska ensures that a student\'s "Spike" is tested in high-stakes global arenas. This constant external validation builds the competitive intelligence necessary to stand out in a global pool of applicants, ensuring that the student is not just in the array pool but ready for the world stage of highly competitive university admissions and scholarships.'
  },
  {
    id: '08',
    title: 'Custodian of Intellectual Vitality',
    subtitle: 'Encourages "Deep Learning" that goes far beyond academic qualifications',
    description: 'The program tracks curiosity and independent research, documenting the inner life of a scholar. This documentation is highly valued by admissions officers of institutions like the Ivy League, who want students with a genuine thirst and proven love for learning. Canska ensures this intellectual vitality is not just a claim made on an essay, but a documented fact in the Digital Portfolio system for university admissions and scholarships.'
  },
  {
    id: '09',
    title: 'Structured Accountability Matrix',
    subtitle: 'Shifts the burden of progress tracking from parents to a professional system',
    description: 'By setting clear action plans and milestones, Canska removes the emotional friction usually found in high-achieving households. This program ensures that the twelve-year roadmap is followed with discipline, providing regular feedback loops that correct any strategic drifting. This professionalization of the early childhood developmental journey allows parents to remain supportive while the mentorship system handles the "policing of excellence".'
  },
  {
    id: '10',
    title: 'High-Status Signalling Brand',
    subtitle: 'The label of a "Canska Student" carries the weight of discipline and exclusive preparation',
    description: 'Much like a Varsity jacket, the association with Canska signals to universities and professional networks that the student has been subjected to the highest standards of development. This prestige opens doors to elite university admissions, scholarships, internships, and high-growth networks that are often closed to those without the right institutional "signals", creating a lifelong advantage that extends well beyond university graduations.'
  },
  {
    id: '11',
    title: 'Modular Strategic Scaling',
    subtitle: 'Customize investment levels as the student\'s curiosity "Spike" becomes more defined.',
    description: 'Whether a student needs an "Innovation Audit" for a science project or a thorough Competition Evaluation for a global challenger, the modular fee structure ensures that the right expertise is available on-demand. This flexibility prevents the developmental journey from being bottlenecked by a lack of specialized guidance, ensuring that the student can "scale" their impact as quickly as their talent allows.'
  },
  {
    id: '12',
    title: 'Digital Matchmaking Strategist',
    subtitle: 'Identifies specific university departments and scholarship funds that are a "Strategic Fit"',
    description: 'Rather than a shotgun approach to applications, the program uses data to find where a student\'s "spike" would be highly valued. This increases the probability of both university admissions and high-value scholarship opportunities, guaranteeing that the student\'s application lands on the table of an admissions officer who is specifically looking for their personal growth trajectory and documented skillset.'
  },
  {
    id: '13',
    title: 'Psychological Certainty',
    subtitle: 'Quick Call and high-access consulting for high-stakes decisions',
    description: 'In the moments of peak stress such as choosing between three universities or finalizing a major scholarship essay, having instantaneous access to a world-class strategist is invaluable. This responsiveness ensures that no opportunity is lost due to an absence of information or a slow reaction, providing parents with the peace of mind that only professional-grade support could deliver on time.'
  },
  {
    id: '14',
    title: 'Cross-Cultural Competency Training',
    subtitle: 'Prepares students to navigate diverse institutional landscapes',
    description: 'Through the Global Networking aspect of the program, students interact with international standards and peers, developing the "portability" required for a global profession. The program ensures that the student is not just academically prepared, but socially and culturally fluent in the languages of global business, science, and policy, making them truly global and ready for anything in an increasingly interconnected educational and professional world.'
  },
  {
    id: '15',
    title: 'Narrative Architect',
    subtitle: 'Synthesizes a decade of diverse achievements into a single, compelling portfolio',
    description: 'When it comes time for admissions and scholarship essays, Canska doesn\'t formulate a persona, it discloses one using the data from the digital portfolio. This results in an authenticity that is extremely impossible to fake and highly persuasive to admissions offices and committees who are increasingly adept at spotting "packaged" students who lack a documented history of personal growth in the past ten years.'
  },
  {
    id: '16',
    title: 'Resilience Trainer',
    subtitle: 'The Mentoring Firm feedback model builds emotional maturity for elite-level pressure',
    description: 'By subjecting students to high standards of evaluation and professional critiques, the program prepares them for the rigors of adulthood. Students learn that a "rejection" in a competition or a critique on a project is merely a data point for improvements. This builds a "Growth Mindset" that is very important for long-term success, ensuring that the student enters university with the high emotional maturity required to handle elite-level academic pressure, professional growth, and personal development.'
  },
  {
    id: '17',
    title: 'Data-Driven Analytics Center',
    subtitle: 'Strategic reports more akin to a corporate audit than a school report card.',
    description: 'These diagnostics use pattern recognition to identify a student\'s strengths and weaknesses with clinical precision, to make swift Strategic Course Correction long before a student reaches the high-pressure years of high school. Parents receive objective, actionable data that empowers them to make informed decisions about their child\'s time, resources, learning pace, growth environment, and long-term legacy.'
  },
  {
    id: '18',
    title: 'Prestige Network Access',
    subtitle: 'Connects students and parents to a global community of high achievers.',
    description: 'Enrolling in the program is an entry into an elite "In-Group" where standards of excellence are the norm. This environment fosters a Positive Peer Effect where students are motivated by the achievements of their global cohort. For parents, it provides a community of like-minded Chief Investment Officers who are equally committed to the long-term engineering of their children\'s academic, professional, and personal achievements.'
  },
  {
    id: '19',
    title: 'Technological Enabler',
    subtitle: 'Teaches students to navigate high-tech platforms and manage their digital presence',
    description: 'By interacting with the Canska platform, students develop Digital Fluency: the ability to curate, present, and protect their personal data in a digital-first world. This skill is increasingly critical for university life and future careers, and Canska ensures that its students are years ahead of their peers in mastering the tools of modern professional collaboration.'
  },
  {
    id: '20',
    title: 'Legacy Engineering Program',
    subtitle: 'Ensures the child\'s talent is recognized globally—foundation for a life of extraordinary impact.',
    description: 'Canska provides the tools for parents to ensure that their child\'s talent is not just recognized but celebrated on the world\'s most prestigious stages. It is a commitment to a future where a student is debt-free, globally mobile, and highly influential. By choosing Canska, a parent is not just helping their child get into college; they are building the foundation for a life of extraordinary impact, ensuring that their child\'s potential is fully realized and their legacy is secured.'
  }
];

const WhyCanska = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderTabTitle = (number, text, index) => {
    const isActive = activeTab === index;
    return (
      <div className={`flex items-center gap-2.5 p-[10px_20px] rounded-[999px] cursor-pointer transition-all duration-200  border border-solid  ${isActive
            ? "bg-[#5E17EB] border-[#5E17EB] shadow-[0_4px_6px_-4px_rgba(94,23,235,0.25),0_10px_15px_-3px_rgba(94,23,235,0.25)] text-[#FFFFFF] " // Active Badge (Yellow)
            : "bg-[#FFFFFF] text-[#0A0A0ABF] border-[#EDE7FB] rounded-[999px]" // Inactive Badge (Light Purple)
            }`}>
        <span
          className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold transition-all duration-200 ${isActive
            ? "bg-[#FFB433] text-[#2D0B70]" // Active Badge (Yellow)
            : "bg-[#F4F1FE] text-[#5E17EB]" // Inactive Badge (Light Purple)
            }`}
        >
          {number}
        </span>
        <span>{text}</span>
      </div>
    );
  };

  return (

    <div className='font-dm'>
      <section className="relative w-full flex items-center overflow-hidden bg-[url('/img/why-canska-hero-bg.jpg')] bg-cover bg-center  p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[90px_61px]">

        {/* Gradient Overlay 1: Left-to-Right Depth */}
        <div
          className="absolute inset-0 w-full h-full top-0 left-0 z-10"
          style={{
            background: 'linear-gradient(90deg, rgba(45, 11, 112, 0.70) 0%, rgba(45, 11, 112, 0) 50%, rgba(45, 11, 112, 0) 100%)'
          }}
        />

        {/* Gradient Overlay 2: Vertical Ambient Glow */}
        <div
          className="absolute inset-0 w-full h-full top-0 left-0 z-20"
          style={{
            background: 'linear-gradient(90deg, rgba(45, 11, 112, 0.85) 0%, rgba(45, 11, 112, 0.60) 50%, rgba(45, 11, 112, 0.30) 100%)'
          }}
        />

        {/* Decorative Blur Object (Top Right) */}
        <div className="absolute w-full h-full -top-[30px] left-[1146px] bg-[#FFB43326] blur-[64px] rounded-full z-30 pointer-events-none" />

        {/* Main Content Container */}
        <div className="relative z-40 w-full flex flex-col gap-[34px]">

          <Breadcrumb items={breadcrumbLinks} />

          {/* Info Block */}
          <div className="max-w-[852px] flex flex-col gap-[20px]">

            {/* Subtitle / Tagline */}
            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-4">
              -Human Capital Incubator
            </span>

            {/* Main Heading */}
            <h1 className="text-white text-5xl md:text-[64px] font-extrabold leading-[64px] tracking-[-1.6px]">
              Why <span className="text-[#FFB433]"> Canska?</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-white text-[18px] font-medium leading-7 text-left">
              Canska is not a school, a tutoring platform, or an academic counselling service. It is a human
              capital incubator for the next generation of students. In the competitive world, Canska
              operates as a high-precision bridge between childhood capabilities and global successes.
              Rather than providing fragmented academic support, Canska approaches childhood
              development with the discipline and far-sightedness of an investment fund.
            </p>

          </div>
        </div>
      </section>


      <div className="w-full py-6">
        <Tabs
          variant="pills"
          theme={customTabsTheme}
          onActiveTabChange={(tab) => setActiveTab(tab)}
        >
          <Tabs.Item active title={renderTabTitle("01", "Why Canska?", 0)}>
            <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">

              {/* Top Banner Image with Rounded Corners and Gradient Overlay */}
              <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                <Image
                  src="/img/whycanska-banner.svg"
                  alt="Graduating students throwing caps against city skyline"
                  fill
                  priority
                  className="object-cover object-center absolute w-full h-full"
                />
                <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Why Canska?</h1>
                {/* Deep Violet Overlay Layer matching the aesthetic */}
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
              </div>

              <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[54px] max-w-[896px]'>Canska views the years from age 8 to 19 as a critical and finite lifecycle window during which identity, capability, and
                positioning must be intentionally engineered. Within this window, Canska builds the strategic infrastructure necessary to
                cultivate measurable excellence, manufacture merit, document credible provenance, and ultimately secure admissions at
                the world's most prestigious institutions and high-value scholarships. Being "well-rounded" is no longer sufficient to enter
                top-tier global universities. Canska responds to this reality by focusing on the deliberate cultivation of what it defines as
                a "sovereign talent" portfolio.</p>

              {/* Feature Blocks Stack */}
              <div className="flex flex-col gap-[20px] mb-[40px] xl:mb-[69px]">
                {featureBlocks.map((block) => (
                  <div
                    key={block.id}
                    className="bg-white border border-[#5E17EB4D] rounded-3xl p-6 md:p-[40px_40px_24px_40px] flex flex-col md:flex-row gap-6 md:gap-10 items-start transition-all duration-300 hover:shadow-md shadow-[0px_20px_60px_0px_#5E17EB1A]"
                  >
                    {/* Number Indicator Component */}
                    <div className="flex flex-col items-start flex-shrink-0 lg:min-w-[186px] ">
                      <span className="text-[72px] font-[900] text-[#FFB433] leading-[72px] tracking-tight">
                        {block.id}
                      </span>
                      <div className="w-[48px] h-[3px] bg-[#5E17EB] mt-3" />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col">
                      <h2 className="text-xl md:text-2xl leading-[32px] font-[800] text-[#0A0A0A] mb-4">
                        {block.title}
                      </h2>

                      <h3 className="text-sm md:text-base leading-[25px] font-medium text-[#0A0A0A] mb-3">
                        {block.subtitle}
                      </h3>

                      {/* Dividing Rule Line */}
                      <div className="w-full h-[1px] bg-[#5E17EB] mb-7" />

                      <p className="text-sm md:text-[14px] text-[#0A0A0A] leading-[25px] text-justify md:text-left font-medium">
                        {block.description}
                      </p>
                    </div>

                  </div>
                ))}
              </div>


              <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[56px] flex items-center bg-[#5E17EB] text-white rounded-[24px] relative overflow-hidden">
                {/* Decorative Blur Object (Top Right) */}
                <div className="absolute w-[400px] h-[400px] -top-[12px] -left-[200px] bg-[#FFFFFF1A] blur-[64px] rounded-full z-30 pointer-events-none" />
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">

                  {/* Left Column: Context Texts */}
                  <div className="flex flex-col max-w-[880px] gap-[12px]">

                    {/* Section Marker */}
                    <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[16px]">
                      Next Up
                    </span>

                    {/* Heading with styled dynamic context highlight */}
                    <h2 className="max-w-[926px] text-4xl sm:text-5xl md:text-[36px] font-bold leading-[nomral] md:leading-[40px] tracking-[-1.92px]">
                      Continue to <span className=" text-[#FFB433]">University Prep</span>
                    </h2>

                    {/* Context Body */}
                    <p className="max-w-[576px] text-white/80 text-base font-normal leading-[26px]">
                      From the world's top 50 universities to scholarship architecture and visa precision
                      — a complete preparation system that turns ambition into acceptance letters and
                      full-ride awards.
                    </p>
                  </div>

                  {/* Right Column: CTA Pill Action Component */}
                  <div className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0">
                    <Link
                      href="/quad-lesson"
                      className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] min-w-[232px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group "
                    >
                      <span className="flex-1 text-left">Read University Prep</span>
                      <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#2D0B70" />
                        </svg>

                      </span>
                    </Link>
                  </div>

                </div>
              </section>

            </section>
          </Tabs.Item>

          <Tabs.Item title={renderTabTitle("02", "Why Start at Age 8?", 1)}>
            <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">

              {/* Top Banner Image with Rounded Corners and Gradient Overlay */}
              <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                <Image
                  src="/img/whycanska-banner.svg"
                  alt="Graduating students throwing caps against city skyline"
                  fill
                  priority
                  className="object-cover object-center absolute w-full h-full"
                />
                <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Why Start at Age 8?</h1>
                {/* Deep Violet Overlay Layer matching the aesthetic */}
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
              </div>

              <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[54px] max-w-[896px]'>Canska views the years from age 8 to 19 as a critical and finite lifecycle window during which identity, capability, and
                positioning must be intentionally engineered. Within this window, Canska builds the strategic infrastructure necessary to
                cultivate measurable excellence, manufacture merit, document credible provenance, and ultimately secure admissions at
                the world's most prestigious institutions and high-value scholarships. Being "well-rounded" is no longer sufficient to enter
                top-tier global universities. Canska responds to this reality by focusing on the deliberate cultivation of what it defines as
                a "sovereign talent" portfolio.</p>

              {/* Feature Blocks Stack */}
              <div className="flex flex-col gap-[20px] mb-[40px] xl:mb-[69px]">
                {featureBlocks.map((block) => (
                  <div
                    key={block.id}
                    className="bg-white border border-[#5E17EB4D] rounded-3xl p-6 md:p-[40px_40px_24px_40px] flex flex-col md:flex-row gap-6 md:gap-10 items-start transition-all duration-300 hover:shadow-md shadow-[0px_20px_60px_0px_#5E17EB1A]"
                  >
                    {/* Number Indicator Component */}
                    <div className="flex flex-col items-start flex-shrink-0 lg:min-w-[186px] ">
                      <span className="text-[72px] font-[900] text-[#FFB433] leading-[72px] tracking-tight">
                        {block.id}
                      </span>
                      <div className="w-[48px] h-[3px] bg-[#5E17EB] mt-3" />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col">
                      <h2 className="text-xl md:text-2xl leading-[32px] font-[800] text-[#0A0A0A] mb-4">
                        {block.title}
                      </h2>

                      <h3 className="text-sm md:text-base leading-[25px] font-medium text-[#0A0A0A] mb-3">
                        {block.subtitle}
                      </h3>

                      {/* Dividing Rule Line */}
                      <div className="w-full h-[1px] bg-[#5E17EB] mb-7" />

                      <p className="text-sm md:text-[14px] text-[#0A0A0A] leading-[25px] text-justify md:text-left font-medium">
                        {block.description}
                      </p>
                    </div>

                  </div>
                ))}
              </div>


              <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[56px] flex items-center bg-[#5E17EB] text-white rounded-[24px] relative overflow-hidden">
                {/* Decorative Blur Object (Top Right) */}
                <div className="absolute w-[400px] h-[400px] -top-[12px] -left-[200px] bg-[#FFFFFF1A] blur-[64px] rounded-full z-30 pointer-events-none" />
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">

                  {/* Left Column: Context Texts */}
                  <div className="flex flex-col max-w-[880px] gap-[12px]">

                    {/* Section Marker */}
                    <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[16px]">
                      Next Up
                    </span>

                    {/* Heading with styled dynamic context highlight */}
                    <h2 className="max-w-[926px] text-4xl sm:text-5xl md:text-[36px] font-bold leading-[nomral] md:leading-[40px] tracking-[-1.92px]">
                      Continue to <span className=" text-[#FFB433]">University Prep</span>
                    </h2>

                    {/* Context Body */}
                    <p className="max-w-[576px] text-white/80 text-base font-normal leading-[26px]">
                      From the world's top 50 universities to scholarship architecture and visa precision
                      — a complete preparation system that turns ambition into acceptance letters and
                      full-ride awards.
                    </p>
                  </div>

                  {/* Right Column: CTA Pill Action Component */}
                  <div className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0">
                    <Link
                      href="/quad-lesson"
                      className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] min-w-[232px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group "
                    >
                      <span className="flex-1 text-left">Read University Prep</span>
                      <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#2D0B70" />
                        </svg>

                      </span>
                    </Link>
                  </div>

                </div>
              </section>

            </section>
          </Tabs.Item>

          <Tabs.Item title={renderTabTitle("03", "Why Portfolio?", 2)}>
            <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">

              {/* Top Banner Image with Rounded Corners and Gradient Overlay */}
              <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                <Image
                  src="/img/whycanska-banner.svg"
                  alt="Graduating students throwing caps against city skyline"
                  fill
                  priority
                  className="object-cover object-center absolute w-full h-full"
                />
                <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Why Portfolio?</h1>
                {/* Deep Violet Overlay Layer matching the aesthetic */}
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
              </div>

              <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[54px] max-w-[896px]'>Canska views the years from age 8 to 19 as a critical and finite lifecycle window during which identity, capability, and
                positioning must be intentionally engineered. Within this window, Canska builds the strategic infrastructure necessary to
                cultivate measurable excellence, manufacture merit, document credible provenance, and ultimately secure admissions at
                the world's most prestigious institutions and high-value scholarships. Being "well-rounded" is no longer sufficient to enter
                top-tier global universities. Canska responds to this reality by focusing on the deliberate cultivation of what it defines as
                a "sovereign talent" portfolio.</p>

              {/* Feature Blocks Stack */}
              <div className="flex flex-col gap-[20px] mb-[40px] xl:mb-[69px]">
                {featureBlocks.map((block) => (
                  <div
                    key={block.id}
                    className="bg-white border border-[#5E17EB4D] rounded-3xl p-6 md:p-[40px_40px_24px_40px] flex flex-col md:flex-row gap-6 md:gap-10 items-start transition-all duration-300 hover:shadow-md shadow-[0px_20px_60px_0px_#5E17EB1A]"
                  >
                    {/* Number Indicator Component */}
                    <div className="flex flex-col items-start flex-shrink-0 lg:min-w-[186px] ">
                      <span className="text-[72px] font-[900] text-[#FFB433] leading-[72px] tracking-tight">
                        {block.id}
                      </span>
                      <div className="w-[48px] h-[3px] bg-[#5E17EB] mt-3" />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col">
                      <h2 className="text-xl md:text-2xl leading-[32px] font-[800] text-[#0A0A0A] mb-4">
                        {block.title}
                      </h2>

                      <h3 className="text-sm md:text-base leading-[25px] font-medium text-[#0A0A0A] mb-3">
                        {block.subtitle}
                      </h3>

                      {/* Dividing Rule Line */}
                      <div className="w-full h-[1px] bg-[#5E17EB] mb-7" />

                      <p className="text-sm md:text-[14px] text-[#0A0A0A] leading-[25px] text-justify md:text-left font-medium">
                        {block.description}
                      </p>
                    </div>

                  </div>
                ))}
              </div>


              <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[56px] flex items-center bg-[#5E17EB] text-white rounded-[24px] relative overflow-hidden">
                {/* Decorative Blur Object (Top Right) */}
                <div className="absolute w-[400px] h-[400px] -top-[12px] -left-[200px] bg-[#FFFFFF1A] blur-[64px] rounded-full z-30 pointer-events-none" />
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">

                  {/* Left Column: Context Texts */}
                  <div className="flex flex-col max-w-[880px] gap-[12px]">

                    {/* Section Marker */}
                    <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[16px]">
                      Next Up
                    </span>

                    {/* Heading with styled dynamic context highlight */}
                    <h2 className="max-w-[926px] text-4xl sm:text-5xl md:text-[36px] font-bold leading-[nomral] md:leading-[40px] tracking-[-1.92px]">
                      Continue to <span className=" text-[#FFB433]">University Prep</span>
                    </h2>

                    {/* Context Body */}
                    <p className="max-w-[576px] text-white/80 text-base font-normal leading-[26px]">
                      From the world's top 50 universities to scholarship architecture and visa precision
                      — a complete preparation system that turns ambition into acceptance letters and
                      full-ride awards.
                    </p>
                  </div>

                  {/* Right Column: CTA Pill Action Component */}
                  <div className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0">
                    <Link
                      href="/quad-lesson"
                      className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] min-w-[232px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group "
                    >
                      <span className="flex-1 text-left">Read University Prep</span>
                      <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#2D0B70" />
                        </svg>

                      </span>
                    </Link>
                  </div>

                </div>
              </section>

            </section>
          </Tabs.Item>

          <Tabs.Item title={renderTabTitle("04", "Portfolio Building", 3)}>
            <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">

              {/* Top Banner Image with Rounded Corners and Gradient Overlay */}
              <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                <Image
                  src="/img/whycanska-banner.svg"
                  alt="Graduating students throwing caps against city skyline"
                  fill
                  priority
                  className="object-cover object-center absolute w-full h-full"
                />
                <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Portfolio Building</h1>
                {/* Deep Violet Overlay Layer matching the aesthetic */}
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
              </div>

              <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[54px] max-w-[896px]'>Canska views the years from age 8 to 19 as a critical and finite lifecycle window during which identity, capability, and
                positioning must be intentionally engineered. Within this window, Canska builds the strategic infrastructure necessary to
                cultivate measurable excellence, manufacture merit, document credible provenance, and ultimately secure admissions at
                the world's most prestigious institutions and high-value scholarships. Being "well-rounded" is no longer sufficient to enter
                top-tier global universities. Canska responds to this reality by focusing on the deliberate cultivation of what it defines as
                a "sovereign talent" portfolio.</p>

              {/* Feature Blocks Stack */}
              <div className="flex flex-col gap-[20px] mb-[40px] xl:mb-[69px]">
                {featureBlocks.map((block) => (
                  <div
                    key={block.id}
                    className="bg-white border border-[#5E17EB4D] rounded-3xl p-6 md:p-[40px_40px_24px_40px] flex flex-col md:flex-row gap-6 md:gap-10 items-start transition-all duration-300 hover:shadow-md shadow-[0px_20px_60px_0px_#5E17EB1A]"
                  >
                    {/* Number Indicator Component */}
                    <div className="flex flex-col items-start flex-shrink-0 lg:min-w-[186px] ">
                      <span className="text-[72px] font-[900] text-[#FFB433] leading-[72px] tracking-tight">
                        {block.id}
                      </span>
                      <div className="w-[48px] h-[3px] bg-[#5E17EB] mt-3" />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col">
                      <h2 className="text-xl md:text-2xl leading-[32px] font-[800] text-[#0A0A0A] mb-4">
                        {block.title}
                      </h2>

                      <h3 className="text-sm md:text-base leading-[25px] font-medium text-[#0A0A0A] mb-3">
                        {block.subtitle}
                      </h3>

                      {/* Dividing Rule Line */}
                      <div className="w-full h-[1px] bg-[#5E17EB] mb-7" />

                      <p className="text-sm md:text-[14px] text-[#0A0A0A] leading-[25px] text-justify md:text-left font-medium">
                        {block.description}
                      </p>
                    </div>

                  </div>
                ))}
              </div>


              <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[56px] flex items-center bg-[#5E17EB] text-white rounded-[24px] relative overflow-hidden">
                {/* Decorative Blur Object (Top Right) */}
                <div className="absolute w-[400px] h-[400px] -top-[12px] -left-[200px] bg-[#FFFFFF1A] blur-[64px] rounded-full z-30 pointer-events-none" />
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">

                  {/* Left Column: Context Texts */}
                  <div className="flex flex-col max-w-[880px] gap-[12px]">

                    {/* Section Marker */}
                    <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[16px]">
                      Next Up
                    </span>

                    {/* Heading with styled dynamic context highlight */}
                    <h2 className="max-w-[926px] text-4xl sm:text-5xl md:text-[36px] font-bold leading-[nomral] md:leading-[40px] tracking-[-1.92px]">
                      Continue to <span className=" text-[#FFB433]">University Prep</span>
                    </h2>

                    {/* Context Body */}
                    <p className="max-w-[576px] text-white/80 text-base font-normal leading-[26px]">
                      From the world's top 50 universities to scholarship architecture and visa precision
                      — a complete preparation system that turns ambition into acceptance letters and
                      full-ride awards.
                    </p>
                  </div>

                  {/* Right Column: CTA Pill Action Component */}
                  <div className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0">
                    <Link
                      href="/quad-lesson"
                      className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] min-w-[232px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group "
                    >
                      <span className="flex-1 text-left">Read University Prep</span>
                      <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#2D0B70" />
                        </svg>

                      </span>
                    </Link>
                  </div>

                </div>
              </section>

            </section>
          </Tabs.Item>
        </Tabs>
      </div>



    </div>
  )
}

export default WhyCanska
