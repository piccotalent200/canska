'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import ScrollAnimatedElement from '../Reusable/ScrollAnimatedElement';

const Addons = () => {
  const outcomes = [
    "A coherent and competitive academic and personal profile",
    "Development of a competitive portfolio that validates distinction",
    "Admissions to Top 50 global universities and colleges",
    "International scholarship success through targeted positioning",
    "Strong academic performance supported by effective strategies",
    "Recognition in academic, research, and innovation competitions",
    "Advanced communication, analysing, and presentation skills",
    "Core research, innovation, and solution-driven competencies",
    "Successful adaptation to international academic environments",
    "Long term career preparedness and global employability"
  ];

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Trigger animation once
        }
      },
      { threshold: 0.1 } // Triggers when 10% of the section is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatsData = [
    { letter: "A", text: "Portfolio Review + Text Report" },
    { letter: "B", text: "Portfolio Review + Text Report + Audio Analysis" },
    { letter: "C", text: "Portfolio Review + Text Report + Video Analysis" },
    { letter: "D", text: "Portfolio Review + Text Report + Live Voice Call" },
    { letter: "E", text: "Portfolio Review + Text Report + Live Video Call" }
  ];

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations instantly when the page/component mounts
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'discovery', label: 'Discovery', color: '#EAA83A' },
    { id: 'academic', label: 'Academic', color: '#581CFF' },
    { id: 'growth', label: 'Growth', color: '#31A24C' },
    { id: 'cognitive', label: 'Cognitive', color: '#581CFF' },
    { id: 'leadership', label: 'Leadership', color: '#581CFF' },
    { id: 'technology', label: 'Technology', color: '#581CFF' },
    { id: 'competition', label: 'Competition', color: '#581CFF' },
    { id: 'project', label: 'Project', color: '#581CFF' },
    { id: 'branding', label: 'Branding', color: '#581CFF' },
    { id: 'portfolio', label: 'Portfolio', color: '#581CFF' },
    { id: 'internship', label: 'Internship', color: '#581CFF' },
    { id: 'global', label: 'Global', color: '#581CFF' },
    { id: 'mentorship', label: 'Mentorship', color: '#581CFF' },
    { id: 'admission', label: 'Admission', color: '#581CFF' },
    { id: 'scholarship', label: 'Scholarship', color: '#581CFF' },
    { id: 'visa', label: 'Visa services', color: '#581CFF' },
    { id: 'parent', label: 'Parent Services', color: '#581CFF' }
  ];

  const [activeCategory, setActiveCategory] = useState('discovery');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Create intersection observer section trackers
  const sectionRefs = {
    discovery: useRef(null),
    academic: useRef(null),
    growth: useRef(null),
  };

  // Safe programmatic scroll calculation taking the sticky header offset into consideration
  const scrollToSection = (id) => {
    setDropdownOpen(false);
    const element = sectionRefs[id]?.current;
    if (element) {
      const offset = 90; // Height clearance for sticky menu bar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveCategory(id);
    }
  };

  // Scrollspy logic: Automatically update active pill highlight as user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (const [id, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const top = ref.current.offsetTop;
          const height = ref.current.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveCategory(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>  
      {/* SECTION 1: HERO BANNER */}
      <ScrollAnimatedElement className="w-full" duration={0.6} yOffset={25}>
        <section className="font-dm relative bg-[url('/img/addon-banner-bg.svg')] bg-cover p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[90px_61px] text-white flex items-center justify-center overflow-x-hidden">
          
          <div className="absolute bg-[url('/img/addon-overlay.svg')] bg-cover inset-0 w-full h-full z-1"></div>
          
          {/* Main Section Container */}
          <div className="relative w-full overflow-hidden flex flex-col justify-between">          

            {/* Grid Wrapper for Content and Floating Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full z-10">
              
              {/* Left Side Content Column */}
              <div className="flex flex-col justify-center space-y-6 md:space-y-8">
                
                {/* Subtitle / Eyebrow Text */}
                <div className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-4">
                  <span>—</span>
                  <span>Add-on Services Ecosystem</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-white text-5xl md:text-[64px] font-extrabold leading-[64px] tracking-[-1.6px]">
                  One unified <br />
                  <span className="text-[#FFB433]">growth pathway</span> <br />
                  for every student.
                </h1>

                {/* Paragraph Description */}
                <p className="text-white text-[18px] font-normal leading-7 text-left">
                  A comprehensive, long-term student development framework — not a collection 
                  of standalone services, but a structured pathway shaped by diagnostic 
                  assessments, mentorship, and defined milestones.
                </p>

                {/* Action Call to Buttons */}
                <div className="flex flex-wrap gap-4 items-center pt-2">
                  {/* Explore Services Button */}
                  <a href='javascript:void(0)' className="hover:scale-[1.02] inline-flex items-center justify-center bg-[#581CFF] hover:bg-[#4712E0] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-200 shadow-lg shadow-purple-900/30 group">
                    Explore all services
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                  </a>
                  
                  {/* Free Evaluation Button */}
                  <a href='javascript:void(0)' className="hover:scale-[1.02] inline-flex items-center justify-center border border-[#FFB433] hover:border-white text-white hover:text-white font-medium px-6 py-3.5 rounded-full text-sm transition-all duration-200">
                    Get a Free Evaluation
                  </a>
                </div>

                {/* Footer Stats Section */}
                <div className="w-full border-t border-white/15 pt-8 mt-12 md:mt-16 z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 max-w-3xl">
                    {/* Stat 1 */}
                    <div>
                      <div className="text-2xl md:text-[34px] font-bold text-[#FFB433]">Many</div>
                      <div className="text-[11px] uppercase tracking-wider text-white/60 font-normal mt-1">Service Categories</div>
                    </div>
                    {/* Stat 2 */}
                    <div>
                      <div className="text-2xl md:text-[34px] font-bold text-white">Holistic</div>
                      <div className="text-[11px] uppercase tracking-wider text-white/60 font-normal mt-1">Individual Services</div>
                    </div>
                    {/* Stat 3 */}
                    <div>
                      <div className="text-2xl md:text-[34px] font-bold text-white">5–25 Days</div>
                      <div className="text-[11px] uppercase tracking-wider text-white/60 font-normal mt-1">Working Days Delivery</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Side Image Collage Column */}
              <div className="relative flex flex-row justify-center items-center gap-6">
                <div> <img src="/img/addon-banner-img2.svg" alt="" /> </div>
                <div className='flex flex-col gap-6'>
                  <img src="/img/addon-banner-img3.svg" alt="" />
                  <img src="/img/addon-banner-img4.svg" alt="" />
                </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollAnimatedElement>  

      {/* SECTION 2: ECOSYSTEM OUTCOMES WITH SEQUENTIAL REVEAL */}
      <section ref={containerRef} className="font-dm bg-white text-[#111319] p-[40px_16px] md:p-[40px_32px] lg:p-[64px_61px] flex items-center justify-center">
        <ScrollAnimatedElement className="w-full" duration={0.6} yOffset={25}>        
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            
            {/* Left Side: Content Section */}
            <div className="lg:col-span-6 space-y-6 md:space-y-8 lg:sticky lg:top-12">
              
              {/* Eyebrow / Tagline */}
              <div className="text-[10px] sm:text-[11px] leading-[14px] sm:leading-[16px] font-semibold text-[#5E17EB] uppercase mb-4 md:mb-[24px]">
                <span>—</span>
                <span>Ecosystem Outcomes</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-normal tracking-tight text-[#1F232E] leading-tight lg:leading-16 max-w-54xl">
                A long–term mentorship, <br />
                <span className="text-[#5E17EB]">not standalone services.</span>
              </h2>

              {/* Description Paragraphs */}
              <div className="text-[#1F232E]/70 text-sm md:text-base leading-relaxed font-light">
                <p className='mb-4'>
                  Rather than operating as a collection of standalone services, this ecosystem
                  functions as a structured and guided developmental pathway. Each student
                  progresses through a personalised journey shaped by diagnostic assessments,
                  mentorship, and defined milestones. This approach emphasises purposeful
                  pathways, consistent growth, and comprehensive readiness for university
                  admissions and future academic success.
                </p>
                <p>
                  This service ecosystem empowers students to achieve outcomes such as
                  admission to globally competitive universities, securing scholarships,
                  participating in international competitions and enrichment programmes,
                  building compelling digital portfolios and leadership profiles, enhancing
                  communication and analytical skills, and developing the confidence and
                  readiness required to excel in international academic environments.
                </p>
              </div>
            </div>

            {/* Right Side: List Section with Delayed Cascade Animations */}
            <div className="lg:col-span-6 w-full border-t border-gray-100/80 lg:border-t-0">
              <ul className="divide-y divide-gray-100/90">
                {outcomes.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center space-x-4 py-4 md:py-4 first:pt-2 lg:first:pt-0 last:pb-4 mb-3 transition-all duration-700 ease-out"
                    style={{
                      transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                    }}
                  >
                    {/* Custom Bullets */}
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#5E17EB]" aria-hidden="true" />
                    
                    {/* List Content */}
                    <span className="text-[#0A0A0A] text-sm font-medium tracking-wide">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </ScrollAnimatedElement>
      </section>

      
      <section className="font-dm  bg-[#FAF8F3] py-0.5 w-full grid grid-cols-1 lg:grid-cols-2 font-sans overflow-hidden">
      
        {/* LEFT COLUMN: Content (Pure White Background) */}
        <div className="bg-white flex items-center justify-center p-[40px_16px] md:p-[40px_24px] lg:p-[64px_30px]">
          <div 
            className="w-full space-y-6 md:space-y-8 transition-all duration-1000 ease-out"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center space-x-2 text-sm font-bold tracking-widest text-[#5E17EB] hover:text-[#4A0FC7] uppercase transition-colors duration-300  group">
              <span>—</span>
              <span>Delivery</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-[64px] font-normal tracking-tight text-[#1F232E]  leading-16 max-w-54xl transition-colors duration-500 ">
              Five formats. <br />
              <span className="text-[#5E17EB]">Your choice.</span>
            </h2>

            {/* Description */}
            <p className="text-[#1F232E]/70 hover:text-[#1F232E]/90 text-sm md:text-base leading-relaxed font-light transition-colors duration-300 ">
              All services are processed and delivered by a team of qualified professionals through 
              comprehensive portfolio assessments, research, report generation, plan development, 
              and execution. Each service follows a defined delivery process — assessment, 
              planning, and execution.
            </p>

            {/* Important Callout Box */}
            <div className="border-l-[4px] border-[#5E17EB] bg-[#5E17EB1A] p-5 rounded-r-xl space-y-1">
              <span className="text-[#1F232E] text-[11px] font-bold tracking-wider uppercase block">
                Important
              </span>
              <p className="text-[#0A0A0A] text-[13px] leading-relaxed">
                This process cannot be expedited. Please purchase services at least 30 days before a 
                submission deadline — or as early as possible.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Format Cards (Off-White Background) */}
        <div className="bg-[#FAF8F3] flex items-center justify-center p-[40px_0_40px_16px] md:p-[40px_0_40px_32px] lg:p-[64px_0_64px_64px] border-t lg:border-t-0 lg:border-l border-gray-100">
          <div className="w-full space-y-4">
            {formatsData.map((format, index) => (
              <div
                key={format.letter}
                className="font-dm  border border-[#E8E3D8] rounded-[16px_0_0_16px] p-4 sm:p-5 flex items-center space-x-5  transition-all ease-out"
                style={{
                  transitionDuration: '800ms',
                  transitionDelay: isLoaded ? `${index * 150}ms` : '0ms',
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateX(0)' : 'translateX(40px)'
                }}
              >
                {/* Badge Circular Box */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1F232E] flex items-center justify-center shadow-inner">
                  <span className="text-[#FFB433] text-[26px] font-bold">
                    {format.letter}
                  </span>
                </div>

                {/* Text Meta Container */}
                <div className="space-y-0.5">
                  <span className="text-[#5E17EB] text-[11px] font-bold tracking-wider uppercase block">
                    Method
                  </span>
                  <p className="text-[#1F232E] text-[18px] font-bold tracking-tight">
                    {format.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <div className="bg-[#FAF9F6] text-[#111319] min-h-screen font-sans antialiased relative">
      
        {/* HEADER PRESENTATION BLOCK */}
        <header className="max-w-7xl mx-auto px-6 pt-12 pb-6">
          <span className="text-[#581CFF] text-xs font-bold uppercase tracking-widest block mb-3">— Service Categories</span>
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#111319] leading-[1.1]">
            Every step of the <br />
            <span className="text-[#581CFF]">student journey</span> — supported.
          </h1>
        </header>

        {/* STICKY BAR MENU: Stays locked at viewport top */}
        <nav className="sticky top-[80px] z-50 bg-[#FAF9F6]/95 backdrop-blur-md  transition-all duration-200">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
            
            {/* Responsive dynamic navigation pills menu (horizontal scrollable on mobile screen tracks) */}
            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth pr-4 mask-image">
              {categories.map((cat) => {
                const isImplemented = ['discovery', 'academic', 'growth'].includes(cat.id);
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => isImplemented && scrollToSection(cat.id)}
                    disabled={!isImplemented}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 whitespace-nowrap uppercase ${
                      isActive 
                        ? 'bg-[#111319] text-white' 
                        : isImplemented 
                          ? 'bg-white border border-gray-200 text-gray-700 hover:border-gray-400' 
                          : 'bg-gray-100/70 border border-transparent text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Trigger All Services Dropdown Button */}
            <div className="relative flex-shrink-0">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-[#581CFF] hover:bg-[#4312D1] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all flex items-center space-x-2"
              >
                <span>All Services</span>
                <svg className={`w-3 h-3 transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
              </button>

              {/* FLOATING ACTION DROPDOWN: Matching image item configuration */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl py-3 z-50 max-h-[480px] overflow-y-auto divide-y divide-gray-50">
                  {categories.map((cat) => {
                    const isImplemented = ['discovery', 'academic', 'growth'].includes(cat.id);
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        disabled={!isImplemented}
                        onClick={() => scrollToSection(cat.id)}
                        className={`w-full px-4 py-2.5 flex items-center justify-between text-left transition-colors ${
                          isActive ? 'bg-orange-50/60 text-[#EAA83A]' : isImplemented ? 'hover:bg-slate-50 text-gray-700' : 'text-gray-300 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isImplemented ? cat.color : '#CBD5E1' }} />
                          <span className="text-xs font-semibold tracking-wide">{cat.label}</span>
                        </div>
                        {isImplemented && <span className="text-[10px] bg-gray-100 text-gray-500 font-bold px-1.5 py-0.5 rounded">Active</span>}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

          </div>
        </nav>

        {/* ECOSYSTEM CONTENT CONTAINER */}
        <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-24 md:space-y-32">

          {/* SECTION 1: DISCOVERY SERVICES */}
          <section ref={sectionRefs.discovery} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            
            {/* Left Block: Image Card Container */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] w-full border border-gray-100 group shadow-md">
              <img src="image_f941e9.jpg" className="w-full h-full object-cover transform object-left-top" alt="Discovery Framework" />
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-2 rounded-xl text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
              </div>
              <div className="absolute bottom-4 left-4 bg-[#111319]/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                <span className="text-xs font-bold text-white tracking-widest uppercase">Find Your Direction</span>
              </div>
            </div>

            {/* Right Block: Content Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-[#EAA83A] text-xs font-bold uppercase tracking-wider flex items-center space-x-2">
                <span>✦</span><span>Service Category</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#111319]">Discovery Services</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Helping students gain clarity about their academic directions, interests, and long-term educational paths through diagnostic assessments, mentorship, and structured evaluation.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-gray-700 pt-2">
                {['General Student Counselling', 'Academic Portfolio Assessment', 'Extracurricular Skills Evaluation', 'Talent and Progressive Analysis', 'Personalised Student Roadmap', 'Long-Term Academic Strategy Plan'].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2.5 py-1.5 border-b border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EAA83A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>


          {/* SECTION 2: ACADEMIC SERVICES (Inverted Row Layout) */}
          <section ref={sectionRefs.academic} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            
            {/* Left Block Content Info (Displays first on desktop grids) */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="text-[#581CFF] text-xs font-bold uppercase tracking-wider flex items-center space-x-2">
                <span>✦</span><span>Service Category</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#111319]">Academic Services</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Designed to strengthen intellectual performance, independent learning, and academic excellence through personalized guidance, analytical thinking, and research capability.
              </p>
              <div className="space-y-2 pt-2">
                {[
                  { name: 'Curriculum Selection', age: '14–18+' },
                  { name: 'Subject Selection', age: '14–18+' },
                  { name: 'Independent Learning Development', age: '14–18+' },
                  { name: 'Analytical Thinking Preparation', age: '14–18+' },
                  { name: 'Research Competence Expansion', age: '14–18+' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 text-xs font-semibold text-gray-700">
                    <div className="flex items-center space-x-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#581CFF]" />
                      <span>{item.name}</span>
                    </div>
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-gray-500 font-mono text-[10px]">{item.age}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Block Image Card Container */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] w-full border border-gray-100 group order-1 lg:order-2 shadow-md">
              <img src="image_f941e9.jpg" className="w-full h-full object-cover transform object-center" alt="Academic Performance" />
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-2 rounded-xl text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.232.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.232.477-4.5 1.253" /></svg>
              </div>
              <div className="absolute bottom-4 left-4 bg-[#111319]/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                <span className="text-xs font-bold text-white tracking-widest uppercase">Strengthen Intellectual Performance</span>
              </div>
            </div>
          </section>


          {/* SECTION 3: GROWTH SERVICES */}
          <section ref={sectionRefs.growth} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            
            {/* Left Block Image Card Container */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] w-full border border-gray-100 group shadow-md">
              <img src="image_f941e9.jpg" className="w-full h-full object-cover transform object-bottom" alt="Mindset Growth" />
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-2 rounded-xl text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div className="absolute bottom-4 left-4 bg-[#111319]/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                <span className="text-xs font-bold text-white tracking-widest uppercase">Build Mindset, Confidence, Resilience</span>
              </div>
            </div>

            {/* Right Block Content Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-[#31A24C] text-xs font-bold uppercase tracking-wider flex items-center space-x-2">
                <span>✦</span><span>Service Category</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#111319]">Growth Services</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Focuses on building the mindset, confidence, communication ability, and emotional resilience required for long-term personal and academic achievement.
              </p>
              <div className="space-y-2 pt-2">
                {[
                  { name: 'Growth Mindset Development', age: '14–18+' },
                  { name: 'Personal Accountability Systems', age: '14–18+' },
                  { name: 'Self-Confidence Coaching Framework', age: '14–18+' },
                  { name: 'Interpersonal & Emotional Intelligence', age: '14–18+' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 text-xs font-semibold text-gray-700">
                    <div className="flex items-center space-x-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#31A24C]" />
                      <span>{item.name}</span>
                    </div>
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-gray-500 font-mono text-[10px]">{item.age}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </main>

        {/* Inject custom global CSS adjustments safely */}
        <style jsx global>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>

    </>
  );
};

export default Addons;