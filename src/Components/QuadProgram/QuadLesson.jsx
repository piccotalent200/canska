import Image from 'next/image';
import React from 'react'
import Breadcrumb from '../Reusable/Breadcrumb';
import Link from 'next/link';

const QuadLesson = () => {

    const breadcrumbLinks = [
        { label: 'Home', href: '/' },
        { label: 'The Quad Program', href: '/programs/quad' },
        { label: 'The Quad Lesson Verticals', href: '/programs/quad/verticals' }
    ];

    const metrics = [
        { value: '12', label: 'Verticals' },
        { value: '3', label: 'Years' },
        { value: '365', label: 'Days / Year' }
    ];

    const phases = [
        {
            name: 'Seekers',
            link: '#seekers',
            color: '#3B82F6', // Blue
            ages: 'Ages 8, 9, and 10',
            tagline: 'Curiosity and Discovery',
        },
        {
            name: 'Makers',
            link: '#makers',
            color: '#10B981', // Green
            ages: 'Ages 11, 12, and 13',
            tagline: '"Spike" Mastery and Projects',
        },
        {
            name: 'Risers',
            link: '#risers',
            color: '#F97316', // Orange
            ages: 'Ages 14, 15, and 16',
            tagline: 'Competitions and Validations',
            bgImage: '/photo-1606761568499-6d2451b23c66.jpg' // Optional background image track shown behind Risers in visual mockup
        },
        {
            name: 'Flyers',
            link: '#flyers',
            color: '#5E17EB', // Violet
            ages: 'Ages 17, 18, and 19',
            tagline: 'Leadership and Real-World Readiness',
        }
    ];


    const verticalsData = [
        {
            phase: 'Seekers',
            title: 'The Literacy Triad',
            image: '/img/the-literacy-triad.svg',
            description: 'Students develop mastery of communication through expressive reading, creative writing, and self-confident public speaking. Reading builds comprehension and critical thinking, writing strengthens imagination and structured expression, while speaking develops presence and persuasion. Together, these literacy skills enable children to understand ideas deeply, articulate thoughts clearly, and influence others effectively.',
        },
        {
            phase: 'Seekers',
            title: 'The Literacy Triad',
            image: '/img/the-literacy-triad.svg',
            description: 'Students develop mastery of communication through expressive reading, creative writing, and self-confident public speaking. Reading builds comprehension and critical thinking, writing strengthens imagination and structured expression, while speaking develops presence and persuasion. Together, these literacy skills enable children to understand ideas deeply, articulate thoughts clearly, and influence others effectively.',
        },
        {
            phase: 'Seekers',
            title: 'Learning Languages',
            image: '/img/learning-languages.svg',
            description: 'Students begin acquiring a second language through storytelling, conversation, songs, cultural exploration, and vocabulary development. Emphasis is placed on listening, pronunciation, comprehension, and communication rather than memorisation alone. By engaging with new cultures and various outlooks, learners strengthen intellectual flexibility and develop the foundations for language mastery and global citizenship.',
        },
        {
            phase: 'Seekers',
            title: 'Financial Literacy',
            image: '/img/Financial-literacy.svg',
            description: 'Students explore the basics of value, exchange, saving, budgeting, and responsible decision-making. Through interactive activities and real-world examples, they learn the difference between needs and wants, the importance of delayed gratification, and the fundamentals of earnings and managing funds. These lessons establish healthy financial habits for life while fostering safe and confident financial choices lifelong.',
        },
        {
            phase: 'Seekers',
            title: 'Scientific Experiments',
            image: '/img/scientific-experiments.svg',
            description: 'Students cultivate curiosity by investigating real-world wonders through observation, experimentation, and discovery. Hands-on activities introduce the scientific method, encouraging learners to ask questions, form hypotheses, test thoughts, and analyse outcomes. This process develops logical reasoning, evidence-based thinking, and a lifelong appreciation for understanding how the natural world essentially operates.',
        },
        {
            phase: 'Seekers',
            title: 'Coding and Logic Puzzles',
            image: '/img/coding-and-logic-puzzles.svg',
            description: 'Students build computational thinking through block-based programming, strategic games, and challenging logic exercises. They learn sequencing, pattern recognition, problem decomposition, debugging, and algorithmic reasoning. By understanding how systems follow set of instructions, learners strengthen analytical aptitude, persistence, and creativity while developing a strong foundation for future technological fluency.',
        },
        {
            phase: 'Seekers',
            title: 'The Competitive Start',
            image: '/img/the-competitive-start.svg',
            description: 'Students are gently introduced to structured academic challenges through Olympiads, quizzes, and skill- based competitions.Beyond content grasp, emphasis is placed on preparation, resilience, sportsmanship, and healthy responses to success and failure.These experiences help students build self - confidence, embrace challenges, and view competition as an opportunity for academic progress and self - improvement skills.',
        },
        {
            phase: 'Seekers',
            title: 'Musical and Sports Basics',
            image: '/img/musical-and-sports-basics.svg',
            description: 'Students experience the core disciplines of music and sport as pathways to growth, teamwork, and perseverance. Learning instruments develops rhythm, coordination, and focus, while sports activities build strength, dexterity, and collaboration. Through practice and performance, students understand that excellence emerges from regular effort, consistency, patience, and determination over time through dedicated practice.',
        },
        {
            phase: 'Seekers',
            title: 'Physical Autonomy',
            image: '/img/physical-autonomy.svg',
            description: 'Students gain practical independence by learning essential life skills that promote self-sufficiency and responsibility. Activities include gardening, cycling, personal grooming, basic household tasks, and environmental care. Through consistent practice, students build confidence, ownership, and an understanding that small daily actions contribute to long-term personal development, shared responsibilities, and family compassion.',
        },
        {
            phase: 'Seekers',
            title: 'Mindful Movement',
            image: '/img/mindful-movement.svg',
            description: 'Students develop body awareness, attention, and emotional regulation through yoga, breathing techniques, stretching, and mindful movements. These practices improve flexibility, balance, concentration, and stress management while helping students recognise and regulate their thoughts and feelings. The result is greater self-control, resilience, and readiness for learning and performance in everyday social settings.',
        },
        {
            phase: 'Seekers',
            title: 'Safety and Social Empathy',
            image: '/img/safety-and-social-empathy.svg',
            description: 'Students develop body awareness, attention, and emotional regulation through yoga, breathing techniques, stretching, and mindful movements. These practices improve flexibility, balance, concentration, and stress management while helping students recognise and regulate their thoughts and feelings. The result is greater self-control, resilience, and readiness for learning and performance in everyday social settings.',
        },
        {
            phase: 'Seekers',
            title: 'Social Systems and World Awareness',
            image: '/img/social-systems-and-world-awareness.svg',
            description: 'Students discover how local communities, ecosystems, economies, governments, and technologies function as interconnected systems. Through projects, discussions, and observation, they learn to recognise patterns, relationships, and consequences within complex environments. This broader outlook encourages critical thinking,conversant decision-making, and a deeper understanding of our interrelated universal world.',
        }
    ];


    const verticalsDataMakers = [
        {
            phase: 'Makers',
            title: 'The "Spike" Launchpad',
            image: '/img/spike-launchpad.svg',
            description: 'Students move beyond theory into end-to-end execution by identifying and developing three curiosity-driven "Spikes" — whether a product, service, digital platform, creative project, or technical solution. Through ideation, iteration, launch, and reflection, they develop a makers instinct, entrepreneurial confidence, and the persistence required to overcome real-world problems through meaningful creation and sustained impact.',
        },
        {
            phase: 'Makers',
            title: 'Multimodal Expression',
            image: '/img/multimodal-expression.svg',
            description: 'Building on the Literacy Triad, students strengthen their ability to influence, persuade, and inspire. They learn advanced storytelling, persuasive rhetoric, structured debate, presentation design, digital communication, and adaptive messaging across different mediums. This transforms communication from a basic academic skill into a powerful tool for leadership, collaboration, and public impact in real-world contexts today.',
        },
        {
            phase: 'Makers',
            title: 'Systems Thinking and Reasoning',
            image: '/img/systems-thinking-reasoning.svg',
            description: 'Students learn to think by understanding how systems, decisions, and consequences interact. Through study exercises, games, simulations, and dilemmas, they strengthen judgment, long-term intelligence, pattern recognition, and analytical reasoning. These experiences help students make thoughtful decisions rather than reactive ones while developing the intellectual maturity required for research, innovation, and leadership.',
        },
        {
            phase: 'Makers',
            title: 'Creative Digital Design',
            image: '/img/creative-digital-design.svg',
            description: 'Students explore the basics of value, exchange, saving, budgeting, and responsible decision-making. Through interactive activities and real-world examples, they learn the difference between needs and wants, the importance of delayed gratification, and the fundamentals of earnings and managing funds. These lessons establish healthy financial habits for life while fostering safe and confident financial choices lifelong.',
        },
        {
            phase: 'Makers',
            title: 'Kinetic Artistry',
            image: '/img/kinetic-artistry.svg',
            description: 'Students cultivate discipline, coordination, rhythm, and creative expression through formal dance exercises and musical performances. These arts serve as anchors for patience, attention, and repetition, teaching students that mastery develops through sustained effort and consistent practice long before public recognition or performance. They also foster confidence, creativity, emotional awareness, resilience,and growth.',
        },
        {
            phase: 'Makers',
            title: 'Foundational Coding',
            image: '/img/foundational-coding.svg',
            description: 'Students transition from block-based reasoning to functional programming and digital creation. By learning scripting, web development, automation, and interface design, they gain the ability to build within digital environments rather than merely consume them. Coding is treated as a modern literacy that powers creativity, innovation, and technical capability in an increasingly digital world across diverse professional fields.',
        },
        {
            phase: 'Makers',
            title: 'The Competitive Spirit',
            image: '/img/the-competitive-spirit.svg',
            description: 'Students engage in structured academic, athletic, and strategic competition designed to build resilience, discipline, and high-performance habits. Olympiads, tournaments, debates, and team-based challenges teach students how to prepare under pressure, recover from setbacks, collaborate effectively, and pursue excellence without binding themselves to outcomes while developing adaptability, confidence, and perseverance.',
        },
        {
            phase: 'Makers',
            title: 'Linguistic Foundations',
            image: '/img/linguistic-foundations.svg',
            description: 'Students deepen second-language skills through conversational immersion, cultural understanding, storytelling, and practical communication. Main emphasis is placed on pronunciation, comprehension, and cultural context rather than memorisation alone. By learning to think through different linguistic frameworks, students develop cognitive flexibility and broader awareness across multicultural and professional environments.',
        },
        {
            phase: 'Makers',
            title: 'The Self-Sustenance Suite',
            image: '/img/self-sustenance.svg',
            description: 'Students strengthen practical independence through essential life mechanics such as cooking, gardening, maintenance, organisation, personal care, and environmental responsibility. These experiences build competence, confidence,and independence while reinforcing the perception that responsible everyday habits form the foundation of young adult capability and self-reliance in both personal and professional settings.',
        },
        {
            phase: 'Makers',
            title: 'Holistic Wellness',
            image: '/img/holistic-wellness.svg',
            description: 'As students navigate the physical, emotional, and hormonal changes of adolescence, they develop regular habits that strengthen long-term wellbeing. Through mindfulness, yoga, exercise, nutrition awareness, sleep literacy, and emotional regulation practices, students learn how to manage stress, improve focus, and maintain balance between overall performance, setback, and recovery through sustainable daily personal-care.',
        },
        {
            phase: 'Makers',
            title: 'Financial Foundations',
            image: '/img/financial-foundations.svg',
            description: 'Students begin decoding the mechanics of value creation, money management, and financial decision-making. Lessons introduce budgeting, earnings, expenses, delayed gratification, assets, liabilities, investing concepts, and responsible consumption. By understanding how value is generated and preserved, students develop disciplined financial habits, savings, and a healthier relationship with wealth and responsibility.',
        },
        {
            phase: 'Makers',
            title: 'Digital and Emotional IQ',
            image: '/img/digital-emotional.svg',
            description: 'Students learn to navigate increasingly complex digital and social ecosystems with intelligence, awareness, and maturity. Lessons include digital security, cybersecurity, online identity protection, emotional regulation, collaboration, conflict resolution, and social awareness. By strengthening both digital judgment and emotional intelligence, students become more capable leaders, collaborators, and responsible digital citizens.',
        }
    ];


    return (
        <div className='font-dm'>
            <section className="relative w-full bg-[#1F232E] overflow-hidden flex flex-col justify-between isolation-isolate ">

                {/* Background Mosaic Images Layer (Right Side / 50% opacity setup) */}
                <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none z-0 hidden md:grid grid-cols-2 grid-rows-2 gap-1 p-2">
                    <div>

                    </div>
                    <div>
                        <img src="/img/quad-lesson.svg" alt="" className='w-full' />
                    </div>
                </div>


                {/* Main Container Content */}
                <div className="relative z-20 w-full flex flex-col gap-[24px] h-full justify-between p-[77px_48px_56px]">

                    {/* Primary Brand Color Gradient Bleed Overlay */}
                    <div
                        className="absolute inset-y-0 left-0 w-full h-full top-0 z-1 pointer-events-none mix-blend-multiply md:mix-blend-normal"
                        style={{
                            background: 'linear-gradient(90deg, #5E17EB 0%, rgba(68, 18, 167, 0.8) 50%, rgba(94, 23, 235, 0.2) 100%)'
                        }}
                    />

                    {/* Navigation Layer */}
                    <div className="w-full relative z-[1]">
                        <Breadcrumb items={breadcrumbLinks} />
                    </div>

                    {/* Hero Context Blocks */}
                    <div className="w-full flex flex-col lg:flex-row justify-between items-end gap-8 lg:gap-16 relative z-[1]">
                        <div className="flex flex-col gap-5 max-w-[760px]">
                            <span className="text-[#FFB433] text-[11px] font-semibold tracking-[2.42px] uppercase leading-4">
                                — The 12-Year Scholarship Incubator
                            </span>
                            <h1 className="text-white text-5xl sm:text-7xl md:text-[88px] font-semibold leading-[86px] tracking-[-2.64px]">
                                The Quad Program <br />
                                <span className="text-[#FFB433]">Sample Lesson Verticals.</span>
                            </h1>
                        </div>

                        <div className="max-w-[460px]">
                            <p className="text-white/80 text-base font-normal leading-[26px]">
                                Across <span className="text-[#FFB433] font-bold">Seekers</span>,{' '}
                                <span className="text-[#FFB433] font-bold">Makers</span>,{' '}
                                <span className="text-[#FFB433] font-bold">Risers</span> and{' '}
                                <span className="text-[#FFB433] font-bold">Flyers</span>, students master 12 major and
                                minor verticals each year — a curriculum that moves from foundational discovery to advanced
                                application and adult readiness.
                            </p>
                        </div>
                    </div>

                </div>


                {/* Cards Row Wrapper Component */}
                <div className="w-full p-[60px_48px_50px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px]">
                        {phases.map((phase, idx) => (
                            <div
                                key={idx}
                                className="group relative flex flex-col justify-between p-[19.8px] min-h-[160px] bg-white/[0.05] border border-white/15 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.08] hover:border-white/30 hover:-translate-y-1 cursor-pointer"
                            >
                                {/* Micro Ambient Image background layout matching mockup structure on hover blocks */}
                                {phase.bgImage && (
                                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 z-0">
                                        <Image src={phase.bgImage} alt="" fill className="object-cover" />
                                    </div>
                                )}

                                <Link href={phase.link} className="relative z-10 flex flex-col gap-1">
                                    {/* Phase Title & Dot Indicator Element */}
                                    <div className="flex justify-between items-center w-full">
                                        <h3
                                            className="text-[26px] font-semibold tracking-[-0.52px] leading-[40px]"
                                            style={{ color: phase.color }}
                                        >
                                            {phase.name}
                                        </h3>
                                        <div
                                            className="w-2 h-2 rounded-full"
                                            style={{ backgroundColor: phase.color }}
                                        />
                                    </div>

                                    {/* Target Age Range Marker */}
                                    <span className="text-white text-sm leading-[18px] font-medium tracking-[1.2px] uppercase pt-3">
                                        {phase.ages}
                                    </span>

                                    {/* Tagline Indicator Content */}
                                    <span className="text-white/80 text-sm leading-[16px] italic font-normal pt-1">
                                        {phase.tagline}
                                    </span>
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>




            </section>

            <section className="w-full  p-[56px_48px] bg-[#FAFAFC] scroll-mt-[80px]" id="seekers" >
                <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16 mb-[56px]">

                    <div className="flex-1 w-full relative min-h-[500px] lg:min-h-[762px] rounded-[24px] overflow-visible z-10 group">

                        {/* Main Container Image Canvas */}
                        <div className="absolute inset-0 rounded-[24px] overflow-hidden">
                            <Image
                                src="/img/seeker-phase-apple.svg"
                                alt="Seekers Phase - Apple resting on stack of library books"
                                fill
                                priority
                                className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* Linear Dark Vignette Contrast Layer Gradient Spec */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1F232E]/85 via-[#1F232E]/25 to-transparent z-10" />
                        </div>

                        {/* Top Indicator Accent Tag */}
                        <div className="absolute top-6 left-6 z-20 flex items-center gap-3 rounded-full">
                            <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
                            <span className="text-white text-xs md:text-sm font-bold tracking-[1.1px] uppercase leading-[17px]">
                                Phase 1 of 4
                            </span>
                        </div>

                        {/* Bottom Branding & Target Demographic Context Blocks */}
                        <div className="absolute bottom-[24px] left-[24px] right-[24px] z-20 flex flex-col gap-2">
                            <span className="text-[#3B82F6] text-sm font-bold tracking-[1.2px] uppercase leading-none">
                                Ages 8, 9, and 10
                            </span>
                            <h3 className="text-white text-5xl sm:text-7xl lg:text-[88px] font-semibold tracking-[-2.64px] leading-[0.9]">
                                Seekers
                            </h3>
                        </div>

                        {/* Floating 'Major Focus' Overlap Card Badge */}
                        <div className="absolute -bottom-[22px] right-4 lg:right-[-64px] z-30 bg-white border border-[#E8E3D8] rounded-[16px] p-[15.8px] w-full max-w-[232.6px] h-[77.1px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] flex flex-col justify-center gap-[3.5px]">
                            <span className="text-[#3B82F6] text-[11px] font-semibold tracking-[1.1px] uppercase leading-[17px]">
                                Major Focus
                            </span>
                            <span className="text-[#1F232E] text-[18px] font-semibold tracking-[-0.36px] leading-[22px]">
                                Curiosity and Discovery
                            </span>
                        </div>
                    </div>


                    <div className="flex-1 w-full  flex flex-col justify-center pt-8 lg:pt-0">

                        {/* Section Subheading Tag */}
                        <span className="text-[#3B82F6] text-sm font-medium leading-[16px] tracking-[1.1px] uppercase mb-3 block">
                            — Phase Overview
                        </span>

                        {/* Primary Identity Headline Statement */}
                        <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-[-1.62px] leading-[55px] text-[#1F232E] mb-6">
                            Awaken <span className="text-[#3B82F6] italic font-medium">curiosity</span> & character.
                        </h2>

                        {/* Detailed Paragraph Block Context */}
                        <p className="text-[#0A0A0A] text-base font-medium leading-[26px] text-left mb-[32px]">
                            The Seekers Phase is designed to awaken curiosity, character, competence, and self-confidence.
                            Through communication, scientific inquiry, creative expression, practical life skills, emotional
                            intelligence, and well-organised exploration, students develop the foundational habits and
                            mindsets required to become independent learners, thinkers, responsible citizens, and future
                            leaders in an increasingly competitive world.
                        </p>

                        {/* Dividing Structural Metric Rule Line */}
                        <div className="w-full h-[1px] bg-[#E8E3D8] mb-6" />

                        {/* Core Numerical Metrics Matrix Grid */}
                        <div className="grid grid-cols-3 gap-4">
                            {metrics.map((metric, idx) => (
                                <div key={idx} className="flex flex-col gap-1">
                                    <span className="text-3xl sm:text-4xl lg:text-[34px] font-semibold tracking-[-0.68px] leading-[51px] text-[#3B82F6]">
                                        {metric.value}
                                    </span>
                                    <span className="text-[11px] leading-[16px] font-normal tracking-[1.1px] uppercase text-[#1F232E8C]">
                                        {metric.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-5 isolation-isolate">
                    {verticalsData.map((vertical, index) => (
                        <div
                            key={index}
                            className="box-sizing-border flex flex-col items-start p-0 gap-0 isolation-isolate bg-white border border-[#E8E3D8] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow h-fit duration-300 group"
                        >

                            <div className="relative w-full h-[199.63px] flex flex-col justify-center items-start isolation-isolate overflow-hidden ">
                                {/* Media Element Asset */}
                                <Image
                                    src={vertical.image}
                                    alt={vertical.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out z-0"
                                />

                                {/* Linear Gradient spec overlay (rgba mapping) */}
                                <div
                                    className="absolute inset-0 z-10 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(0deg, rgba(31, 35, 46, 0.65) 0%, rgba(31, 35, 46, 0.1) 50%, rgba(31, 35, 46, 0) 100%)'
                                    }}
                                />

                                {/* Pill Phase Indicator Badge Block */}
                                <div className="absolute top-[12px] left-[12px] z-20 flex flex-col items-start px-[10px] py-[4px] bg-[#3B82F6] rounded-full">
                                    <span className="text-white text-[10px] font-semibold tracking-[1px] uppercase leading-[15px]">
                                        {vertical.phase}
                                    </span>
                                </div>

                                {/* Bottom Fixed Text Block Canvas Layer */}
                                <div className="absolute bottom-[11.85px] left-[12px] right-[11.6px] z-20 flex flex-col items-start">
                                    <h3 className="w-full line-clamp-1 text-white text-[17px] font-semibold tracking-[-0.255px] leading-[22px]">
                                        {vertical.title}
                                    </h3>
                                </div>
                            </div>


                            <div className="w-full flex-1 flex flex-col justify-between p-[19.135px_20px_20.01px] bg-white">
                                {/* Context Block Core Copy */}
                                <div className="w-full">
                                    <p className="w-full text-[#0A0A0A] text-[14px] font-normal leading-[22px] align-middle text-left antialiased">
                                        {vertical.description}
                                    </p>
                                </div>

                                {/* Card Footer Interaction Action Bar */}
                                <div className="w-full pt-4 mt-4 border-t border-[#E8E3D8] flex flex-row justify-between items-center">
                                    {/* Taxonomy Label Pillar */}
                                    <span className="text-[10px] font-semibold tracking-[1px] uppercase leading-[15px] text-[#1F232E80]">
                                        Vertical
                                    </span>

                                    {/* Interactive Anchor Element */}
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-[5.99px] group/link text-[#3B82F6] hover:text-[#2563EB] transition-colors duration-200 hover:underline"
                                    >
                                        <span className="text-[11px] font-semibold tracking-[1.1px] uppercase leading-[16px]">
                                            Explore in The Quad
                                        </span>
                                        <span className="text-[11px] font-semibold tracking-[1.1px] uppercase leading-[16px] transform group-hover/link:translate-x-1 transition-transform duration-200">
                                            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M-0.000171863 4.67498V3.47598H5.84083L2.94783 0.835976L3.78383 -2.3663e-05L7.69983 3.68498V4.45498L3.78383 8.13998L2.94783 7.29298L5.81883 4.67498H-0.000171863Z" fill="#3B82F6" />
                                            </svg>

                                        </span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>


            <section className="w-full  p-[56px_48px] bg-[#FFFFFF] scroll-mt-[80px]" id="seekers">
                <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16 mb-[56px]">

                    <div className="flex-1 w-full relative min-h-[500px] lg:min-h-[762px] rounded-[24px] overflow-visible z-10 group">

                        {/* Main Container Image Canvas */}
                        <div className="absolute inset-0 rounded-[24px] overflow-hidden">
                            <Image
                                src="/img/maker-phase.svg"
                                alt="maker Phase"
                                fill
                                priority
                                className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* Linear Dark Vignette Contrast Layer Gradient Spec */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1F232E]/85 via-[#1F232E]/25 to-transparent z-10" />
                        </div>

                        {/* Top Indicator Accent Tag */}
                        <div className="absolute top-6 left-6 z-20 flex items-center gap-3 rounded-full">
                            <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                            <span className="text-white text-xs md:text-sm font-bold tracking-[1.1px] uppercase leading-[17px]">
                                Phase 2 of 4
                            </span>
                        </div>

                        {/* Bottom Branding & Target Demographic Context Blocks */}
                        <div className="absolute bottom-[24px] left-[24px] right-[24px] z-20 flex flex-col gap-2">
                            <span className="text-[#10B981] text-sm font-bold tracking-[1.2px] uppercase leading-none">
                                Ages 11, 12, and 13
                            </span>
                            <h3 className="text-white text-5xl sm:text-7xl lg:text-[88px] font-semibold tracking-[-2.64px] leading-[0.9]">
                                Makers
                            </h3>
                        </div>

                        {/* Floating 'Major Focus' Overlap Card Badge */}
                        <div className="absolute -bottom-[22px] right-4 lg:right-[-64px] z-30 bg-white border border-[#E8E3D8] rounded-[16px] p-[15.8px] w-full max-w-[232.6px] min-h-[77.1px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] flex flex-col justify-center gap-[3.5px]">
                            <span className="text-[#10B981] text-[11px] font-semibold tracking-[1.1px] uppercase leading-[17px]">
                                Major Focus
                            </span>
                            <span className="text-[#1F232E] text-[18px] font-semibold tracking-[-0.36px] leading-[22px]">
                                "Spike" Mastery and Projects
                            </span>
                        </div>
                    </div>


                    <div className="flex-1 w-full  flex flex-col justify-center pt-8 lg:pt-0">

                        {/* Section Subheading Tag */}
                        <span className="text-[#10B981] text-sm font-medium leading-[16px] tracking-[1.1px] uppercase mb-3 block">
                            — Phase Overview
                        </span>

                        {/* Primary Identity Headline Statement */}
                        <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-[-1.62px] leading-[55px] text-[#1F232E] mb-6">
                            Turn curiosity into <span className="text-[#10B981] italic font-medium">skill.</span>
                        </h2>

                        {/* Detailed Paragraph Block Context */}
                        <p className="text-[#0A0A0A] text-base font-medium leading-[26px] text-left mb-[32px]">
                            The Makers Phase transforms curiosities into skills through creation, experimentation, and
                            execution. Students begin moving from guided exploration toward independent production by building projects, solving real-world problems, strengthening technical eloquence, and
                            developing personal responsibility. This phase emphasises initiative, resilience, strategic thinking, and confidence to convert ideas into tangible outcomes.
                        </p>

                        {/* Dividing Structural Metric Rule Line */}
                        <div className="w-full h-[1px] bg-[#E8E3D8] mb-6" />

                        {/* Core Numerical Metrics Matrix Grid */}
                        <div className="grid grid-cols-3 gap-4">
                            {metrics.map((metric, idx) => (
                                <div key={idx} className="flex flex-col gap-1">
                                    <span className="text-3xl sm:text-4xl lg:text-[34px] font-semibold tracking-[-0.68px] leading-[51px] text-[#10B981]">
                                        {metric.value}
                                    </span>
                                    <span className="text-[11px] leading-[16px] font-normal tracking-[1.1px] uppercase text-[#1F232E8C]">
                                        {metric.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-5 isolation-isolate">
                    {verticalsDataMakers.map((vertical, index) => (
                        <div
                            key={index}
                            className="box-sizing-border flex flex-col items-start p-0 gap-0 isolation-isolate bg-white border border-[#E8E3D8] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow h-fit duration-300 group"
                        >

                            <div className="relative w-full h-[199.63px] flex flex-col justify-center items-start isolation-isolate overflow-hidden ">
                                {/* Media Element Asset */}
                                <Image
                                    src={vertical.image}
                                    alt={vertical.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out z-0"
                                />

                                {/* Linear Gradient spec overlay (rgba mapping) */}
                                <div
                                    className="absolute inset-0 z-10 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(0deg, rgba(31, 35, 46, 0.65) 0%, rgba(31, 35, 46, 0.1) 50%, rgba(31, 35, 46, 0) 100%)'
                                    }}
                                />

                                {/* Pill Phase Indicator Badge Block */}
                                <div className="absolute top-[12px] left-[12px] z-20 flex flex-col items-start px-[10px] py-[4px] bg-[#10B981] rounded-full">
                                    <span className="text-white text-[10px] font-semibold tracking-[1px] uppercase leading-[15px]">
                                        {vertical.phase}
                                    </span>
                                </div>

                                {/* Bottom Fixed Text Block Canvas Layer */}
                                <div className="absolute bottom-[11.85px] left-[12px] right-[11.6px] z-20 flex flex-col items-start">
                                    <h3 className="w-full line-clamp-1 text-white text-[17px] font-semibold tracking-[-0.255px] leading-[22px]">
                                        {vertical.title}
                                    </h3>
                                </div>
                            </div>


                            <div className="w-full flex-1 flex flex-col justify-between p-[19.135px_20px_20.01px] bg-white">
                                {/* Context Block Core Copy */}
                                <div className="w-full">
                                    <p className="w-full text-[#0A0A0A] text-[14px] font-normal leading-[22px] align-middle text-left antialiased">
                                        {vertical.description}
                                    </p>
                                </div>

                                {/* Card Footer Interaction Action Bar */}
                                <div className="w-full pt-4 mt-4 border-t border-[#E8E3D8] flex flex-row justify-between items-center">
                                    {/* Taxonomy Label Pillar */}
                                    <span className="text-[10px] font-semibold tracking-[1px] uppercase leading-[15px] text-[#1F232E80]">
                                        Vertical
                                    </span>

                                    {/* Interactive Anchor Element */}
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-[5.99px] group/link text-[#3B82F6] hover:text-[#2563EB] transition-colors duration-200 hover:underline"
                                    >
                                        <span className="text-[11px] font-semibold tracking-[1.1px] uppercase leading-[16px]">
                                            Explore in The Quad
                                        </span>
                                        <span className="text-[11px] font-semibold tracking-[1.1px] uppercase leading-[16px] transform group-hover/link:translate-x-1 transition-transform duration-200">
                                            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M-0.000171863 4.67498V3.47598H5.84083L2.94783 0.835976L3.78383 -2.3663e-05L7.69983 3.68498V4.45498L3.78383 8.13998L2.94783 7.29298L5.81883 4.67498H-0.000171863Z" fill="#3B82F6" />
                                            </svg>

                                        </span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default QuadLesson
