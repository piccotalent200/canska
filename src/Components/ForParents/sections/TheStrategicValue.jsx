import ScrollAnimatedElement from '@/Components/Reusable/ScrollAnimatedElement'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const TheStrategicValue = () => {
    return (
        <>
            <section className="w-full p-[20px_16px_60px_16px] sm:p-[40px_32px_80px_32px] lg:p-[64px_61px_99px] bg-[#FAFAFC]">
                <ScrollAnimatedElement direction="up" delay={0.1}>
                    <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                        <Image
                            src="/img/the-strategic-value-banner.svg"
                            alt="Graduating students throwing caps against city skyline"
                            fill
                            priority
                            className="object-cover object-center absolute w-full h-full"
                        />
                        <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>The Strategic Value</h1>
                        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                    </div>

                    <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[42px]'>
                        The Canska program fee signifies a profound paradigm shift in how we approach the development of human potential. Rather than viewing school education as a series of disconnected annual costs, Canska frames the program fee as an all-inclusive capital investment in a twelve year architectural journey. This is a big commitment to building a life of significance, designed to support a student from their earliest formative years through the complexities of elite university admissions and into their career debut.
                    </p>
                </ScrollAnimatedElement>


                <div className="mx-auto space-y-5 mb-[40px] last:mb-0">
                    <div className="w-full bg-gradient-to-br from-[#2D0B70] via-[#5E17EB] to-[#4A11C0] rounded-[24px] p-6 sm:p-10 text-white relative overflow-hidden">
                        <div className="mb-4">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.9" clipPath="url(#clip0_984_2853)">
                                    <path d="M24 4.5C23.2044 4.5 22.4413 4.81607 21.8787 5.37868C21.3161 5.94129 21 6.70435 21 7.5V16.5C21 17.2956 21.3161 18.0587 21.8787 18.6213C22.4413 19.1839 23.2044 19.5 24 19.5C24.3978 19.5 24.7794 19.658 25.0607 19.9393C25.342 20.2206 25.5 20.6022 25.5 21V22.5C25.5 23.2956 25.1839 24.0587 24.6213 24.6213C24.0587 25.1839 23.2956 25.5 22.5 25.5C22.1022 25.5 21.7206 25.658 21.4393 25.9393C21.158 26.2206 21 26.6022 21 27V30C21 30.3978 21.158 30.7794 21.4393 31.0607C21.7206 31.342 22.1022 31.5 22.5 31.5C24.8869 31.5 27.1761 30.5518 28.864 28.864C30.5518 27.1761 31.5 24.8869 31.5 22.5V7.5C31.5 6.70435 31.1839 5.94129 30.6213 5.37868C30.0587 4.81607 29.2956 4.5 28.5 4.5H24Z" stroke="#FFB433" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.5 4.5C6.70435 4.5 5.94129 4.81607 5.37868 5.37868C4.81607 5.94129 4.5 6.70435 4.5 7.5V16.5C4.5 17.2956 4.81607 18.0587 5.37868 18.6213C5.94129 19.1839 6.70435 19.5 7.5 19.5C7.89782 19.5 8.27936 19.658 8.56066 19.9393C8.84196 20.2206 9 20.6022 9 21V22.5C9 23.2956 8.68393 24.0587 8.12132 24.6213C7.55871 25.1839 6.79565 25.5 6 25.5C5.60218 25.5 5.22064 25.658 4.93934 25.9393C4.65804 26.2206 4.5 26.6022 4.5 27V30C4.5 30.3978 4.65804 30.7794 4.93934 31.0607C5.22064 31.342 5.60218 31.5 6 31.5C8.38695 31.5 10.6761 30.5518 12.364 28.864C14.0518 27.1761 15 24.8869 15 22.5V7.5C15 6.70435 14.6839 5.94129 14.1213 5.37868C13.5587 4.81607 12.7956 4.5 12 4.5H7.5Z" stroke="#FFB433" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_984_2853">
                                        <rect width="36" height="36" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>

                        <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-[30px] leading-snug sm:leading-[36px] tracking-tight mb-4">
                            The Twelve Year Mentorship Arc
                        </h1>

                        <p className="font-medium text-base text-white/90 leading-[27px]">
                            A consistent mentor across the decade — strategic, structured, never seasonal.
                        </p>

                        <hr className="border-white/10 my-4" />

                        <div className="font-medium text-sm text-[#FFFFFF] leading-[25px] space-y-4">
                            <p>
                                The most significant component of the program fee is the continuity of the mentorship. In traditional models, students usually cycle through a revolving door of teachers and counsellors who only see a snapshot of their lives. Canska breaks this cycle by offering a decade plus of structured mentorship. This long term pathway allows mentors to act as lead architects who accurately understand the student’s intellectual level, character, aptitude, interest, passion, thought processing, and emotional resilience.

                            </p>
                            <p>

                                By starting early, the fee funds a proactive strategy rather than a reactive one. Mentors can identify latent strengths in a student’s profile years before they become critical for applications. This allows for the slow and steady hardening of the student's academic and personal foundation, ensuring that when they eventually reach the high pressure environment of their senior years, they aren't scrambling to build a persona. Instead, they are simply revealing a masterpiece that has been under construction for over a decade. That’s what will help them get into top universities and secure scholarships.
                            </p>

                        </div>
                    </div>

                    <main className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">


                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    The Digital Portfolio as High-Fidelity Infrastructure
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    An asset built quarter-by-quarter — verifiable, portable, and unfakeable.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        A cornerstone of the Canska ecosystem is the professionally curated digital portfolio. In a global admissions landscape where perfect grades are the baseline, the portfolio serves as the student’s principal differentiator. The program fee covers the high level technical and narrative expertise required to document a student’s journey in real time.

                                    </p>
                                    <p>

                                        This portfolio is far more than a digital databank. It is a sophisticated, evidence based showcase of leadership experiences, independent research, competitive victories, and community impact. It serves as a significant asset for top 50 university applications, providing admissions officers with a clear, multidimensional silhouette of the student’s value. The fee ensures that every project, competition, and leadership role is captured and presented with a level of polish that reflects the student’s true potential.
                                    </p>

                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    Strategic Admissions and the Scholarship Yield
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Targeting full-ride awards transforms tuition into negative cost — an inverted investment.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        The Canska ecosystem also functions as a sophisticated advisory for top 50 university admissions. Navigating the elite academic institutions needs a deep understanding of subject selection, extracurricular strategy, and strong personal branding. The program provides application support, from the initial planning, interview prep, and acceptance.

                                    </p>
                                    <p>

                                        One of the most tangible returns on this investment is the scholarship guidance. By aligning a student's portfolio with specific merit based awards, Canska helps families unlock funding opportunities ranging from $60,000 to $400,000. For most families, the scholarship yield alone far exceeds the initial program fee, transforming the cost of the program into a net financial gain. This specialised guidance ensures that students are not only applying to the best universities in the world but are doing so with a financial strategy that honours their decade of academic growth and extracurricular credentials.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-brandDark mb-4">
                                    Competition Strategy and Profile Validation
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-brandDark/80 mb-6">
                                    Olympiads, hackathons, awards — third-party validations of every claim in the portfolio.
                                </p>
                                <div className="font-medium text-sm leading-[25px] text-brandDark">
                                    <p>
                                        The Canska ecosystem enables a robust culture of excellence through national and international competitions. Students are encouraged and instructed to participate in academic and co-curricular challenges that push their boundaries. These competitions are essential "stress tests" for the student’s profile, providing external validation of their skills, passion, creativity, adaptability, and perseverance.

                                    </p>
                                    <p>

                                        When a student earns an international distinction or a cash prize, it provides a neutral, third party endorsement that carries enormous weight in the eyes of an admissions committee. The fee covers the strategic identification of these opportunities and the coaching required to succeed at the highest levels. This mentorship process doesn't just strengthen the university profile; it builds the student's internal confidence system, teaching them how to compete and win on a global stage.
                                    </p>
                                </div>
                            </div>
                        </section>


                    </main>

                </div>


                <div className="mx-auto space-y-5 mb-[40px] last:mb-0">

                    <div className="w-full bg-gradient-to-br from-[#2D0B70] via-[#5E17EB] to-[#4A11C0] rounded-[24px] p-6 sm:p-10 text-white relative overflow-hidden">
                        <div className="mb-4">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.9" clipPath="url(#clip0_984_2853)">
                                    <path d="M24 4.5C23.2044 4.5 22.4413 4.81607 21.8787 5.37868C21.3161 5.94129 21 6.70435 21 7.5V16.5C21 17.2956 21.3161 18.0587 21.8787 18.6213C22.4413 19.1839 23.2044 19.5 24 19.5C24.3978 19.5 24.7794 19.658 25.0607 19.9393C25.342 20.2206 25.5 20.6022 25.5 21V22.5C25.5 23.2956 25.1839 24.0587 24.6213 24.6213C24.0587 25.1839 23.2956 25.5 22.5 25.5C22.1022 25.5 21.7206 25.658 21.4393 25.9393C21.158 26.2206 21 26.6022 21 27V30C21 30.3978 21.158 30.7794 21.4393 31.0607C21.7206 31.342 22.1022 31.5 22.5 31.5C24.8869 31.5 27.1761 30.5518 28.864 28.864C30.5518 27.1761 31.5 24.8869 31.5 22.5V7.5C31.5 6.70435 31.1839 5.94129 30.6213 5.37868C30.0587 4.81607 29.2956 4.5 28.5 4.5H24Z" stroke="#FFB433" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.5 4.5C6.70435 4.5 5.94129 4.81607 5.37868 5.37868C4.81607 5.94129 4.5 6.70435 4.5 7.5V16.5C4.5 17.2956 4.81607 18.0587 5.37868 18.6213C5.94129 19.1839 6.70435 19.5 7.5 19.5C7.89782 19.5 8.27936 19.658 8.56066 19.9393C8.84196 20.2206 9 20.6022 9 21V22.5C9 23.2956 8.68393 24.0587 8.12132 24.6213C7.55871 25.1839 6.79565 25.5 6 25.5C5.60218 25.5 5.22064 25.658 4.93934 25.9393C4.65804 26.2206 4.5 26.6022 4.5 27V30C4.5 30.3978 4.65804 30.7794 4.93934 31.0607C5.22064 31.342 5.60218 31.5 6 31.5C8.38695 31.5 10.6761 30.5518 12.364 28.864C14.0518 27.1761 15 24.8869 15 22.5V7.5C15 6.70435 14.6839 5.94129 14.1213 5.37868C13.5587 4.81607 12.7956 4.5 12 4.5H7.5Z" stroke="#FFB433" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_984_2853">
                                        <rect width="36" height="36" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>

                        <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-[30px] leading-snug sm:leading-[36px] tracking-tight mb-4">
                            A Holistic and Results-Focused Ecosystem
                        </h1>

                        <p className="font-medium text-base text-white/90 leading-[27px]">
                            Curriculum + mentorship + analytics + community — engineered to compound.
                        </p>

                        <hr className="border-white/10 my-4" />

                        <div className="font-medium text-sm text-[#FFFFFF] leading-[25px] space-y-4">
                            <p>
                                Ultimately, the Canska mentorship ecosystem delivers a holistic environment designed for maximum impact. It fully eliminates the fragmentation of the traditional educational experience by consolidating mentorship, portfolio building, and strategic advisory into one unified project. This ensures that every hour of the student's time and every dollar of the parent's investment is working in textbook harmony toward a single goal: the realisation of the student’s highest possible academic and professional future.

                            </p>
                            <p>

                                We believe that the most expensive way to educate a child is to do it without a plan. The Canska ecosystem is the cost of that plan, providing the peace of mind that comes from knowing the foundation is solid, the blueprint is accurate, and the final structure will be simply magnificent.
                            </p>

                        </div>
                    </div>

                 

                </div>




                <ScrollAnimatedElement direction="up" delay={0.15}>
                    <section className="w-full p-[20px_16px_56px_16px] sm:p-[29px_32px_56px_32px] lg:p-[56px] flex items-center bg-[#5E17EB] text-white rounded-[24px] relative overflow-hidden">
                        {/* Decorative Blur Object (Top Right) */}
                        <div className="absolute w-[400px] h-[400px] -top-[12px] -left-[200px] bg-[#FFFFFF1A] blur-[64px] rounded-full z-30 pointer-events-none" />
                        <div className="w-full flex flex-col lg:flex-row justify-between items-start md:items-center gap-8 lg:gap-12">

                            <div className="flex flex-col lg:max-w-[880px] gap-[12px]">
                                <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[16px]">
                                    Next Up
                                </span>

                                <h2 className="lg:max-w-[926px] text-4xl sm:text-5xl md:text-[36px] font-bold leading-normal md:leading-[40px] tracking-[-1.92px]">
                                    Continue to  <span className=" text-[#FFB433]"> Frequently Asked Questions</span>
                                </h2>

                                <p className="lg:max-w-[576px] text-white/80 text-[15px] font-normal leading-[22px]">
                                    Real questions, plain answers — about the Quad program, your user account, and how we protect your privacy.
                                </p>
                            </div>

                            {/* Right Column: CTA Pill Action Component */}
                            <div className="flex-shrink-0 flex max-sm:flex-col gap-[12px] self-start md:self-auto pt-4 md:pt-0 max-lg:w-full max-lg:justify-start lg:items-end flex-col">
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group"
                                >
                                    <span className="flex-1 text-left">Read Frequently Asked Questions</span>
                                    <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                                        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#2D0B70" />
                                        </svg>
                                    </span>
                                </Link>
                                <Link
                                    href="/create-account"
                                    className="w-fit inline-flex items-center gap-2.5 bg-[#00000000] text-[#FFFFFF] px-[25.8px] py-[13.8px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#FFFFFF4D] transition-all duration-200 group border border-solid border-[#FFFFFF4D]"
                                >
                                    <span className="flex-1 text-left">Create Account</span>
                                    <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_885_2853)">
                                                <path d="M4.66602 4.66675H11.3327V11.3334" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M4.66602 11.3334L11.3327 4.66675" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_885_2853">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </span>
                                </Link>
                            </div>

                        </div>
                    </section>
                </ScrollAnimatedElement>
            </section>


        </>
    )
}

export default TheStrategicValue
