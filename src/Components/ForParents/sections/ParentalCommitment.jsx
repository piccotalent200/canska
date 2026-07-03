import ScrollAnimatedElement from '@/Components/Reusable/ScrollAnimatedElement'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const ParentalCommitment = () => {
  return (
    <>
      
      <section className="w-full p-[20px_16px_60px_16px] sm:p-[40px_32px_80px_32px] lg:p-[64px_61px_99px] bg-[#FAFAFC]">
            <ScrollAnimatedElement direction="up" delay={0.1}>
                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                    <Image
                        src="/img/parental-commitment-banner.svg"
                        alt="Admissions Insights"
                        fill
                        priority
                        className="object-cover object-center absolute w-full h-full"
                    />
                    <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Parental Commitment</h1> 
                    <div className='absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply'></div>
                </div>

                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[42px]'>
                    Mentorship and portfolio building are long-term projects. Children thrive with unified support — families are integral to the mission.
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
                            The Canska Philosophy: Building Together
                        </h1>

                        <p className="font-medium text-base text-white/90 leading-[27px]">
                            Mentors, parents, and students share one architecture — alignment compounds outcomes.
                        </p>

                        <hr className="border-white/10 my-4" />

                        <div className="font-medium text-sm text-[#FFFFFF] leading-[25px] space-y-4">
                            <p>
                                Canska is not a service that parents outsource to. It is an architecture that requires three players — mentor, parent, student — moving in coordinated rhythm. When all three align, the outcomes compound; when one drifts, the program degrades. The Canska philosophy treats parents as principal stakeholders, not passive customers.
                            </p>

                        </div>
                    </div>

                    <main className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">


                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    The Core Commitment
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Show up, follow through, trust the process — three commitments that change everything.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        The Canska program asks for three commitments from every parent: show up to the quarterly review without fail, follow through on the weekly cadence even when life intrudes, and trust the longitudinal process even when individual months feel slow. Families that honour these three commitments consistently produce the program's strongest outcomes.
                                    </p>

                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    Presence
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Attention beats advice. Be there even when there is nothing to say.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        Presence is the most underrated parental gift. A parent who sits beside a struggling child in silence transmits more security than a parent who lectures from across the room. Canska coaches parents to ration advice carefully and lavish presence generously — a discipline that pays dividends for decades.
                                        </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-brandDark mb-4">
                                    Alignment
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-brandDark/80">
                                    Public encouragement, private course-correction. Never the reverse.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-brandDark">
                                    <p>
                                        Public criticism wounds children long after the original concern has been forgotten. Canska's alignment protocol is simple: public praise, private correction. Course- correction conversations happen behind closed doors with care; encouragement happens in front of friends, family, and mentors generously.
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
                            Stewardship
                        </h1>

                        <p className="font-medium text-base text-white/90 leading-[27px]">
                            Steward the Spike — protect time, fund tools, manage friction.
                        </p>

                        <hr className="border-white/10 my-4" />

                        <div className="font-medium text-sm text-[#FFFFFF] leading-[25px] space-y-4">
                            <p>
                                Stewardship is the practical work of parenting: protecting deep-work hours from interruption, funding the tools the Spike requires (instruments, lab kits, conference fees), and clearing the operational friction (logistics, schedules, paperwork) that would otherwise consume the student's attention. Canska helps parents play this stewardship role with discipline.
                            </p>

                        </div>
                    </div>

                    <main className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">


                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    The Dialogue Protocol
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Weekly conversations on growth, not grades. Curious questions over corrections.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        Most family dinner conversations get stuck on grades, missed deadlines, and corrective directives. Canska's Dialogue Protocol structures weekly conversations around growth questions: "What surprised you this week? What did you struggle with? What are you curious about?" — replacing interrogation with genuine curiosity and rebuilding the relationship.
                                    </p>

                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    Operational Punctuality and Physical Readiness
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    On time, prepared, present — the small disciplines that signal seriousness.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        Showing up on time, in proper attire, with materials ready — these tiny rituals signal to the student that the work is serious, that the family respects the mentor's time, and that the program is a top-tier priority. Canska expects punctuality from every participant, parents included.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-brandDark mb-4">
                                    Digital Citizenship
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-brandDark/80">
                                    Model the digital behaviour you want — devices, hours, content, and tone.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-brandDark">
                                    <p>
                                        Children inherit digital habits from their parents. A parent who scrolls through dinner cannot credibly request the child put down the phone. Canska gives families a clear digital citizenship code — devices, hours, content, and tone — that parents model first and students follow.
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
                            The Return on Commitment (The ROI)
                        </h1>

                        <p className="font-medium text-base text-white/90 leading-[27px]">
                            Every minute parents invest amplifies what mentors and curriculum achieve.
                        </p>

                        <hr className="border-white/10 my-4" />

                        <div className="font-medium text-sm text-[#FFFFFF] leading-[25px] space-y-4">
                            <p>
                                The minutes a parent invests in quiet presence, structured dialogue, and disciplined stewardship are the minutes that amplify everything Canska's mentors and curriculum deliver. The most decisive variable in the program's outcomes is not the mentor's brilliance or the curriculum's depth — it is the parent's consistent commitment.
                            </p>

                        </div>
                    </div>

                    <main className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">


                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    Accountability and Governance
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Quarterly cadences, transparent metrics, structured reviews — like a board, not a chat.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        Canska runs the parent-student-mentor relationship with corporate-grade governance: quarterly review meetings with structured agendas, transparent metrics (quad score, completion rates, project deliverables), and signed-off forward plans. The family begins to feel less like a casual chat and more like a board running a long-term venture.
                                    </p>

                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    The Quarterly Review
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Three checkpoints a year for re-calibration, celebration, and course-correction.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        Every 90 days, the parent, student, and mentor meet for a structured 90-minute review. We celebrate what worked, diagnose what didn't, and recalibrate the next quarter's priorities. Twelve years of these reviews build a remarkable longitudinal record — and a family ritual that students will look back on with gratitude.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-brandDark mb-4">
                                    Restorative Partnerships
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-brandDark/80">
                                    When things go off-track, repair before redirect. Always.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-brandDark">
                                    <p>
                                        When tensions rise — between parent and student, between student and mentor — Canska's restorative protocol activates: name the tension, hear the perspectives, repair the relationship first, then redirect the work. Programs that skip the repair step often deliver short-term compliance and long-term resentment.
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
                            The Canska Handshake
                        </h1>

                        <p className="font-medium text-base text-white/90 leading-[27px]">
                            A symbolic and operational commitment between parent, mentor, and student.
                        </p>

                        <hr className="border-white/10 my-4" />

                        <div className="font-medium text-sm text-[#FFFFFF] leading-[25px] space-y-4">
                            <p>
                                On enrollment day, the parent, student, and mentor sign a three-way Canska Handshake document — symbolic but also operational. It outlines the cadence, the boundaries, the escalation paths, and the shared aspirations. The handshake is reviewed at every quarterly meeting — keeping the alliance fresh.
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
                                    Continue to  <span className=" text-[#FFB433]"> About Us</span>
                                </h2>

                                <p className="lg:max-w-[576px] text-white/80 text-[15px] font-normal leading-[22px]">
                                    Real questions, plain answers — about the Quad program, your user account, and how we protect your privacy.
                                </p>
                            </div>

                            {/* Right Column: CTA Pill Action Component */}
                            <div className="flex-shrink-0 flex gap-[12px] self-start md:self-auto pt-4 md:pt-0 max-lg:w-full max-lg:justify-start lg:items-end">
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

export default ParentalCommitment
