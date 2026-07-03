import ScrollAnimatedElement from '@/Components/Reusable/ScrollAnimatedElement'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


const parenthoodContent = [
    {
        title: "Building Beyond the Visible",
        subtitle: "Much of the work is unseen — bedtime conversations, repeated lessons, quiet sacrifices that compound.",
        paragraphs: [
            "In construction, the most critical elements are often invisible. Foundations lie beneath the ground, reinforcements sit within walls, and essential systems function quietly out of sight. Without them, nothing can stand strong.",
            "Parenthood follows the same principle. The work that really shapes a child is found in consistency and care. It is in daily routines, meaningful conversations, quiet patience, and steady guidance. These moments may not attract attention, yet they build the innermost strength and stability of a human being.",
            "Just as structures are designed to withstand pressure, children are nurtured to face life with resilience. What truly lasts is always built with intention and care."
        ]
    },
    {
        title: "The Investment: Depth Before Height",
        subtitle: "Roots before reach. A deep foundation supports a tall future.",
        paragraphs: [
            "A child rushed to achieve in primary school is a child whose roots are shallow. We invert the pressure: build deep roots — emotional, intellectual, physical, ethical — and the height takes care of itself. The trees that storms cannot topple are the trees with deep roots, planted patiently over years."
        ]
    },
    {
        title: "The Currency of Presence",
        subtitle: "Presence is the irreplaceable currency. Attention spent now pays for decades.",
        paragraphs: [
            "Time becomes the most valuable investment. Priorities shift, and personal pursuits repeatedly make way for caregiving. This is not a loss, but a meaningful reallocation. Success is not always about moving faster. Often, it lies in being steady and present for the moments that shape a child's future.",
            "Presence builds trust. Trust creates security. Security allows confidence to grow."
        ]
    },
    {
        title: "The Weight of Responsibility",
        subtitle: "Carry it consciously, share it wisely, set it down sometimes but never let it go.",
        paragraphs: [
            "Every structure must meet high standards because lives depend on it. In the same way, children totally depend on the stability of those raising them. Words, actions, and decisions quietly shape their understanding of the world.",
            "Parents often absorb stress so their children feel safe. They simplify complexity and set boundaries, not to limit freedom, but to prepare for it. This is responsibility in its most meaningful form."
        ]
    },
    {
        title: "The Evolution of Identity",
        subtitle: "Parents grow alongside the child and that growth is part of the return.",
        paragraphs: [
            "Parenthood does not reduce who you are. It expands you. Ambitions evolve, and the idea of success grows to include influence, example, and emotional legacy. Growth may not always be comfortable, but it is deeply constructive."
        ]
    },
    {
        title: "The Return: Wealth Redefined",
        subtitle: "Wealth is meaningful relationships, ethical impact, and the legacy of a child who lives well.",
        paragraphs: [
            "In business, returns are usually measured through numbers. In parenthood, they are experienced through moments that cannot be quantified."
        ]
    },
    {
        title: "The First Light",
        subtitle: "The first instincts you wire in shape the way they see every sunrise.",
        paragraphs: [
            "A child's first smile of recognition, first meaningful word, or first instinct to seek comfort in you represents a deep connection. These small yet powerful milestones show that the foundation is strong.",
            "They remind us that love does not divide, it multiplies."
        ]
    },
    {
        title: "Values in Motion",
        subtitle: "Values aren't lectured — they're lived. Children inherit what we practice.",
        paragraphs: [
            "Over time, the real return becomes visible. You see your child act with honesty, show kindness without being told, and face challenges with courage. Values once taught through everyday interactions become part of who they are."
        ]
    },
    {
        title: "Emotional Capacity",
        subtitle: "Build emotional muscle so the child can hold joy and sorrow without breaking.",
        paragraphs: [
            "Parenthood strengthens emotional deepness. Empathy grows through understanding. Patience develops through practice. Resilience builds through navigating uncertainty.",
            "No formal training can replicate this transformation. It refines perspective and gives a stronger sense of purpose."
        ]
    },
    {
        title: "A Living Legacy",
        subtitle: "Legacy is not what you leave behind — it's what you leave inside them.",
        paragraphs: [
            "As time passes, dependence turns into independence. Conversations become deeper, and guidance evolves into mutual respect. Children carry forward lessons, adapt them to changing times, and build upon them.",
            "Legacy is no longer an abstract idea. It becomes noticeable in their choices, character, and contribution."
        ]
    },
    {
        title: "A Shared Vision of the Future",
        subtitle: "Co-create the next decade with your child — direction matters more than destination.",
        paragraphs: [
            "At Canska, we build spaces for communities that are still taking shape. Homes that will witness celebrations, very quiet moments, and new beginnings.",
            "In a similar way, parents shape individuals who will carry values, strength, and compassion into the future. Both forms of building require foresight, patience, and belief in tomorrow."
        ]
    },
    {
        title: "Honour in the Unseen Work",
        subtitle: "The unseen work is the highest work. Canska honours it with structure, science, and care.",
        paragraphs: [
            "Much of what sustains society happens silently. The engineer planning late into the night. The parent supporting a child after a difficult day. The effort may go unnoticed, but its impact is long-lasting.",
            "Parenthood may not appear in financial statements or receive public recognition, but its influence carries forward through generations.",
            "The architecture of the heart is not visible on a skyline. It certainly lives within people, communities, and cultures — and it remains the most enduring structure of all."
        ]
    }
];

const TheRealROI = () => {
    return (
        <>
            <section className="w-full p-[20px_16px_60px_16px] sm:p-[40px_32px_80px_32px] lg:p-[64px_61px_99px] bg-[#FAFAFC]">
                <ScrollAnimatedElement direction="up" delay={0.1}>
                    {/* Top Banner Image with Rounded Corners and Gradient Overlay */}
                    <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                        <Image
                            src="/img/the-real-roi-banner.svg"
                            alt="Graduating students throwing caps against city skyline"
                            fill
                            priority
                            className="object-cover object-center absolute w-full h-full"
                        />
                        <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>The Real ROI</h1>
                        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                    </div>

                    <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[42px] max-w-[896px]'>
                        Parenthood is the architecture of the heart — depth before height, presence over performance, legacy over likes. The real return is measured in values, resilience, and a life of significance.
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
                            The Architecture of the Heart: Why We Build for the Future
                        </h1>

                        <p className="font-medium text-base text-white/90 leading-[27px]">
                            We don't raise children for resumes; we raise them for resilience, generosity, and the long road of being human.
                        </p>

                        <hr className="border-white/10 my-4" />

                        <div className="font-medium text-sm text-[#FFFFFF] leading-[25px] space-y-4">
                            <p>
                                At Canska, building for longevity begins with a simple yet powerful question. Will it endure, serve, and remain relevant decades from now? Infrastructure, at its best, reflects confidence in the future. It assumes that communities will grow, families will come together, and lives will unfold within thoughtfully created spaces.
                            </p>
                            <p>
                                Yet, there is one form of building that surpasses all others.
                            </p>
                            <p>
                                Parenthood is the ultimate long term investment. It is complex, demanding, and deeply personal. Its returns cannot be measured in financial terms, but in character, continuity, and a love that extends far beyond a lifetime. This is the true architecture of the heart.
                            </p>
                        </div>
                    </div>

                    <main className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    Building Beyond the Visible
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Much of the work is unseen — bedtime conversations, repeated lessons, quiet sacrifices that compound.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        In construction, the most critical elements are often invisible. Foundations lie beneath the ground, reinforcements sit within walls, and essential systems function quietly out of sight. Without them, nothing can stand strong.
                                    </p>
                                    <p>
                                        Parenthood follows the same principle. The work that really shapes a child is found in consistency and care. It is in daily routines, meaningful conversations, quiet patience, and steady guidance. These moments may not attract attention, yet they build the innermost strength and stability of a human being.
                                    </p>
                                    <p>
                                        Just as structures are designed to withstand pressure, children are nurtured to face life with resilience. What truly lasts is always built with intention and care.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    The Currency of Presence
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Presence is the irreplaceable currency. Attention spent now pays for decades.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        Time becomes the most valuable investment. Priorities shift, and personal pursuits repeatedly make way for caregiving. This is not a loss, but a meaningful reallocation. Success is not always about moving faster. Often, it lies in being steady and present for the moments that shape a child’s future.
                                    </p>
                                    <p>
                                        Presence builds trust. Trust creates security. Security allows confidence to grow.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-brandDark mb-4">
                                    The Investment: Depth Before Height
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-brandDark/80">
                                    Roots before reach. A deep foundation supports a tall future.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-brandDark">
                                    <p>
                                        A child rushed to achieve in primary school is a child whose roots are shallow. We invert the pressure: build deep roots — emotional, intellectual, physical, ethical — and the height takes care of itself. The trees that storms cannot topple are the trees with deep roots, planted patiently over years.
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
                            The Weight of Responsibility
                        </h1>

                        <p className="font-medium text-base text-white/90 leading-[27px]">
                            Carry it consciously, share it wisely, set it down sometimes — but never let it go.
                        </p>

                        <hr className="border-white/10 my-4" />

                        <div className="font-medium text-sm text-[#FFFFFF] leading-[25px] space-y-4">
                            <p>
                                Every structure must meet high standards because lives depend on it. In the same way, children totally depend on the stability of those raising them. Words, actions, and decisions quietly shape their understanding of the world.
                            </p>
                            <p>
                                Parents often absorb stress so their children feel safe. They simplify complexity and set boundaries, not to limit freedom, but to prepare for it. This is responsibility in its most meaningful form.
                            </p>

                        </div>
                    </div>

                    <main className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    The Evolution of Identity
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Parents grow alongside the child — and that growth is part of the return.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        Parenthood does not reduce who you are. It expands you. Ambitions evolve, and the idea of success grows to include influence, example, and emotional legacy. Growth may not always be comfortable, but it is deeply constructive.
                                    </p>

                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    The Return: Wealth Redefined
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Wealth is meaningful relationships, ethical impact, and the legacy of a child who lives well.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        In business, returns are usually measured through numbers. In parenthood, they are experienced through moments that cannot be quantified
                                    </p>

                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-brandDark mb-4">
                                    The First Light
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-brandDark/80">
                                    The first instincts you wire in shape the way they see every sunrise.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-brandDark">
                                    <p>
                                        A child’s first smile of recognition, first meaningful word, or first instinct to seek comfort in you represents a deep connection. These small yet powerful milestones show that the foundation is strong. They remind us that love does not divide, it multiplies.
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
                            Values in Motion
                        </h1>

                        <p className="font-medium text-base text-white/90 leading-[27px]">
                            Values aren't lectured — they're lived. Children inherit what we practice.
                        </p>

                        <hr className="border-white/10 my-4" />

                        <div className="font-medium text-sm text-[#FFFFFF] leading-[25px] space-y-4">
                            <p>
                                Over time, the real return becomes visible. You see your child act with honesty, show kindness without being told, and face challenges with courage. Values once taught through everyday interactions become part of who they are.
                            </p>

                        </div>
                    </div>

                    <main className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    Emotional Capacity
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Build emotional muscle so the child can hold joy and sorrow without breaking.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        Parenthood strengthens emotional deepness. Empathy grows through understanding. Patience develops through practice. Resilience builds through navigating uncertainty.

                                    </p>
                                    <p>

                                        No formal training can replicate this transformation. It refines perspective and gives a stronger sense of purpose.
                                    </p>

                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-[#0A0A0A] mb-4">
                                    A Living Legacy
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-[#0A0A0A]">
                                    Legacy is not what you leave behind — it's what you leave inside them.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-[#0A0A0A] space-y-4">
                                    <p>
                                        As time passes, dependence turns into independence. Conversations become deeper, and guidance evolves into mutual respect. Children carry forward lessons, adapt them to changing times, and build upon them.
                                    </p>
                                    <p>

                                        Legacy is no longer an abstract idea. It becomes noticeable in their choices, character, and contribution.
                                    </p>

                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#5E17EB]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="font-extrabold text-xl sm:text-[22px] leading-[28px] text-brandDark mb-4">
                                    A Shared Vision of the Future
                                </h2>
                                <p className="font-medium text-base leading-[24px] text-brandDark/80">
                                    Co-create the next decade with your child — direction matters more than destination.
                                </p>
                                <hr className="border-[#EDE7FB] my-4 block" />
                                <div className="font-medium text-sm leading-[25px] text-brandDark">
                                    <p>
                                        At Canska, we build spaces for communities that are still taking shape. Homes that will witness celebrations, very quiet moments, and new beginnings. In a similar way, parents shape individuals who will carry values, strength, and compassion into the future.
                                    </p>
                                    <p>
                                        Both forms of building require foresight, patience, and belief in tomorrow.
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
                            Honour in the Unseen Work
                        </h1>

                        <p className="font-medium text-base text-white/90 leading-[27px]">
                            The unseen work is the highest work. Canska honours it with structure, science, and care.
                        </p>

                        <hr className="border-white/10 my-4" />

                        <div className="font-medium text-sm text-[#FFFFFF] leading-[25px] space-y-4">
                            <p>
                                Much of what sustains society happens silently. The engineer planning late into the night. The parent supporting a child after a difficult day. The effort may go unnoticed, but its impact is long-lasting.
                            </p>
                            <p>
                                Parenthood may not appear in financial statements or receive public recognition, but its influence carries forward through generations.
                            </p>

                            <p>

                                The architecture of the heart is not visible on a skyline. It certainly lives within people, communities, and cultures.
                            </p>
                            <p>
                                And it remains the most enduring structure of all.
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
                               Continue to   <span className=" text-[#FFB433]">About us</span>
                            </h2>

                            <p className="lg:max-w-[576px] text-white/80 text-[15px] font-normal leading-[22px]">
                               Real questions, plain answers — about the Quad program, your user account, and how we protect your privacy.
                            </p>
                        </div>

                        {/* Right Column: CTA Pill Action Component */}
                        <div className="flex-shrink-0 flex max-sm:flex-col gap-[12px] self-start md:self-auto pt-4 md:pt-0 max-lg:w-full max-lg:justify-start">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group"
                            >
                                <span className="flex-1 text-left">Read About us</span>
                                <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                                    <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#2D0B70" />
                                    </svg>
                                </span>
                            </Link>
                            <Link
                                href="/create-account"
                                className="inline-flex items-center gap-2.5 bg-[#00000000] text-[#FFFFFF] px-[25.8px] py-[13.8px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#FFFFFF4D] transition-all duration-200 group border border-solid border-[#FFFFFF4D]"
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

export default TheRealROI
