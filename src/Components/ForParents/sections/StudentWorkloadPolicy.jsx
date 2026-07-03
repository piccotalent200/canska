import ScrollAnimatedElement from '@/Components/Reusable/ScrollAnimatedElement'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const StudentWorkloadPolicy = () => {
  return (
     <>
        <section className="w-full p-[20px_16px_60px_16px] sm:p-[40px_32px_80px_32px] lg:p-[64px_61px_99px] bg-[#FAFAFC]">
            <ScrollAnimatedElement direction="up" delay={0.1}>
                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                    <Image
                        src="/img/student-workload-policy-banner.svg"
                        alt="Admissions Insights"
                        fill
                        priority
                        className="object-cover object-center absolute w-full h-full"
                    />
                    <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Student Workload Policy</h1> 
                    <div className='absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply'></div>
                </div>

                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[42px]'>
                    At Canska we don't view workload as a hurdle to be jumped — but as a resource to be managed. Life-Work Integration over Life-Work Balance.
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
                            The Foundation of Purpose-Driven Load
                        </h1>

                        <p className="font-medium text-base text-white/90 leading-[27px]">
                            Load is justified only by clear purpose tied to the Spike or values.
                        </p>

                        <hr className="border-white/10 my-4" />

                        <div className="font-medium text-sm text-[#FFFFFF] leading-[25px] space-y-4">
                            <p>
                                Canska refuses busywork. Every assigned task, every lesson, every project must be defended by a clear purpose: does it build the Spike, develop core values, or sustain academic foundations? If none — it is cut. The result: a workload that feels meaningful, not heavy, even at advanced levels of rigor.
                            </p>

                        </div>
                    </div>

                    <main className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">


                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between col-start-1 col-end-3">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    The Pillars of the Policy
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Structural integrity, weekend protection, differentiated scaling, safety scaffolding.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        The Canska Workload Policy rests on four pillars: structural daily limits, protected weekends, age-differentiated scaling, and continuous safety scaffolding. Together these prevent burnout, preserve childhood, and ensure the rigour students experience strengthens them rather than crushing them.
                                    </p>

                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    1. The Structural Integrity Limit
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Hard caps on daily focus minutes — protect mental health, energy, and joy.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        Each age phase has a documented daily focus-minute cap — Seekers 60–90 minutes, Makers 120–150 minutes, Risers 180–210 minutes, Flyers 240–270 minutes. These are hard caps, not soft targets. Mentors do not override them; parents do not extend them. Mental health, energy, and joy are protected by the integrity of these limits.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-brandDark mb-4">
                                    2. The No-Homework Weekends
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-brandDark/80">
                                    Weekends are for family, rest, and self-directed play. Always.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-brandDark">
                                    <p>
                                        Saturdays and Sundays carry zero structured Canska assignments. The weekend belongs to family time, rest, sport, art for art's sake, and self-directed play. Research consistently shows that the brain's deepest consolidation happens during true rest — and Canska respects the science.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    3. Differentiated Scaling and Load Levelling
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Workload personalised by age, capacity, and life context — never one-size-fits-all.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        A child recovering from an illness, navigating a family transition, or peaking for a major competition has different capacity than a child in steady state. Canska mentors continuously level-set the workload based on the child's age, current capacity, and life context — eliminating the destructive assumption that all students of a given age should carry identical loads.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-brandDark mb-4">
                                    4.  Protecting the Builder through Safety Scaffolding
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-brandDark/80">
                                    Mentor support, peer pods, parental check-ins — students never carry weight alone.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-brandDark">
                                    <p>
                                        When the workload intensifies — Flyers phase, scholarship season, exam blocks — the safety scaffolding tightens around the student. Mentor calls become more frequent, peer pods activate, parental check-ins are formalised. No Canska student is allowed to carry heavy weight in isolation; the architecture quietly redistributes the load.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    The Yellow Flag System
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Early warning indicators trigger intervention before burnout.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        Canska's analytics watch for the early warning signs: missed deadlines, drop in lesson velocity, change in journal sentiment, reduction in voluntary projects. When indicators turn yellow, the mentor initiates a structured check-in — not a punishment, but a recalibration — preventing yellow flags from becoming red ones.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-brandDark mb-4">
                                    Digital Wellness Guardrails
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-brandDark/80">
                                    Screen-time discipline, deep-work windows, dopamine hygiene.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-brandDark">
                                    <p>
                                        Canska teaches students to architect their relationship with screens. Specific deep- work windows are device-free; specific recovery windows are device-permitted but content-curated. Notifications are silenced during learning; dopamine hygiene — clean breaks between dopamine-rich content and study — is taught explicitly from the Makers phase onward.
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
                            The Emotional Connect: Why We Limit the Load
                        </h1>

                        <p className="font-medium text-base text-white/90 leading-[27px]">
                            Children are humans first. The Spike is built on a happy, healthy person — never the reverse.
                        </p>

                        <hr className="border-white/10 my-4" />

                        <div className="font-medium text-sm text-[#FFFFFF] leading-[25px] space-y-4">
                            <p>
                                Some programs build elite students by hollowing out the human. Canska refuses. The Spike is built on a foundation of joy, rest, friendship, and curiosity — never on its destruction. The day a student's eyes go dull is the day Canska intervenes, regardless of where the application calendar sits.
                            </p>

                        </div>
                    </div>

                    <main className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">


                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    The Canska Perspective
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Excellence without exhaustion. Mastery without misery. It is possible.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        The conventional wisdom says elite outcomes require punishing inputs. Canska's perspective, born from a decade of evidence: excellence without exhaustion is achievable through structure, sequence, and steady cadence over years — not through brutal intensity over months. Mastery without misery is the program's quiet revolution.
                                    </p>

                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    The Student Promise
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    We promise to protect your child's spark — even from our own program.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        The most important promise Canska makes to every parent: we will protect your child's spark, even when our own program is the threat to it. If the curriculum, the workload, or the mentor begins to dim your child's natural light, we slow down, recalibrate, or pause — because the spark is what makes everything that follows possible.
                                    </p>
                                </div>
                            </div>
                        </section>


                    </main>

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
                                    Continue to  <span className=" text-[#FFB433]"> About Us</span>
                                </h2>

                                <p className="lg:max-w-[576px] text-white/80 text-[15px] font-normal leading-[22px]">
                                    Real questions, plain answers — about the Quad program, your user account, and how we protect your privacy.
                                </p>
                            </div>

                            {/* Right Column: CTA Pill Action Component */}
                            <div className="flex-shrink-0 flex  gap-[12px] self-start md:self-auto pt-4 md:pt-0 max-lg:w-full max-lg:justify-start lg:items-end">
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group"
                                >
                                    <span className="flex-1 text-left">Read Abouts Us</span>
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

export default StudentWorkloadPolicy
