import React from 'react'
import Image from 'next/image';
import Breadcrumb from '../Reusable/Breadcrumb';
import Link from 'next/link';
import ScrollAnimatedElement from '../Reusable/ScrollAnimatedElement';

const breadcrumbLinks = [
  { label: 'Home', href: '/' },
  { label: 'The Quad Program', href: '/quad-program' },
  { label: 'Why Quad Program', href: '/why-quad-program' }
];

const featureBlocks = [
  {
    id: '01',
    title: 'Reclaiming the Joy of Childhood',
    subtitle: 'The current education system feels like a relentless race toward a single finish line.',
    description: 'By starting at age 8 the "Quad" removes the ticking clock that haunts most parents. Instead of cramming a decade of growth into twelve months of counselling, we spread development across a 144-month horizon, allowing your child to actually be a child, to explore, to learn, to fail, and to play without the fear that a single afternoon off will ruin their future. We replace the hysterical sprint with a steady, careful "marathon" toward a goal that is systematically and purposefully built over time.'
  },
  {
    id: '02',
    title: 'Zero Student Debt = No Financial Burden',
    subtitle: 'The cost of a global education is the elephant in the room for every ambitious family.',
    description: 'It is a weight that keeps parents up at night, wondering if they will have to drain their retirement or saddle their child with decades of debt. The "Quad" program is designed to solve that problem. By engineering a portfolio that earns a full-ride scholarship, we are not just getting your child into a top university, we are safeguarding your family\'s finances. We work to ensure that their degree is a gift to their future not a "debt" that should be paid every month for several years, limiting their growth and opportunities.'
  },
  {
    id: '03',
    title: 'The End of Admission Panic',
    subtitle: 'Alleviates grade 11 anxiety by systematically documenting a child\'s growth over years, making applications a formality.',
    description: 'By the time admissions deadlines arrive, the Canska student already holds a decade of verifiable evidence: projects, awards, reflections, recommendations. The application becomes a formality of presenting an existing portfolio, not an emergency assembly of last-minute padding. Families experience grade 11 as a calm, strategic year, not the year everything goes wrong.'
  },
  {
    id: '04',
    title: 'Building a True Personal Identity',
    subtitle: 'Focuses on students discovering their passions and purpose, creating authentic profiles that admissions officers value.',
    description: 'Authentic identity cannot be manufactured in six months. Through 12 years of self-directed exploration, mentor-guided reflection, and accumulated proof-of-work, every Canska student develops a profile that feels lived in rather than packaged. Admissions officers—increasingly trained to spot synthetic profiles—recognize the difference instantly and reward it generously.'
  },
  {
    id: '05',
    title: 'Mastering the "Communication Triad"',
    subtitle: 'Develops essential deep reading, clear writing, and confident speaking skills consistently over many years.',
    description: 'Most students arrive at university interviews unable to articulate their own ideas under pressure. Canska\'s Communication Triad—deep reading, clear writing, confident speaking—is practiced weekly from age eight. By the Flyers phase, students command language with the ease of practiced professionals, making essays compelling, interviews magnetic, and recommendations easier to write.'
  },
  {
    id: '06',
    title: 'A Mentor Who Truly Knows Them',
    subtitle: 'Provides a dedicated mentor who understands the child\'s long-term growth arc, offering stability and emotional reassurance.',
    description: 'Strategic decisions made by a stranger in three months will always be inferior to decisions made by a trusted mentor who has watched the student grow for a decade. The continuity of one Canska mentor across 12 years creates relational depth that no last-minute consultant can replicate, and that depth becomes the secret advantage at every critical inflection point.'
  },
  {
    id: '07',
    title: 'Documenting a Legacy of Early Growth',
    subtitle: 'Creates a digital portfolio of a child\'s achievements, providing a tangible record of growth and building lifelong confidence.',
    description: 'Every quarter of growth is captured: projects shipped, competitions entered, reflections written, mentors consulted. The accumulating digital portfolio becomes a living legacy useful for university applications, but more importantly, a permanent record the student can revisit at twenty-five, forty, or sixty, knowing they were shaped by a documented decade of intentional effort.'
  },
  {
    id: '08',
    title: 'Escaping the Exam Rat Race',
    subtitle: 'Offers an alternative to high-stakes testing by focusing on holistic and portfolio-based university admissions.',
    description: 'While peers reduce their lives to test-prep marathons, Canska students invest in spiky portfolios that earn admissions on multidimensional criteria. Standardized tests are still taken—but built quietly over years rather than crammed in panic. The student arrives at the test with confidence and arrives at the application with a portfolio no exam score alone could ever produce.'
  },
  {
    id: '09',
    title: 'Engineering a "Spike" of Excellence',
    subtitle: 'Helps children identify and develop a unique area of exceptional talent and impact.',
    description: 'Top universities reward depth over breadth. Canska identifies a student\'s natural Spike during the Seekers phase, validates it during the Makers phase, scales it during the Risers phase, and showcases it during the Flyers phase. By graduation, the Canska graduate is not a generalist—they are world-class in one specific, documented, defensible area of mastery.'
  },
  {
    id: '10',
    title: 'Protection Against a Changing World',
    subtitle: 'Teaches crucial "Systems Thinking" and adaptability for a rapidly evolving job market through real-world projects.',
    description: 'The careers of 2040 do not exist yet. Canska prepares students not for specific jobs but for the timeless skills that survive every disruption: systems thinking, learning velocity, ethical reasoning, cross-domain transfer. Each year of the program adds another layer of cognitive adaptability, producing graduates who can pivot into industries that haven\'t been invented.'
  },
  {
    id: '11',
    title: 'Global Mobility as a Standard',
    subtitle: 'Facilitates international study by addressing financial and logistical hurdles, fostering a global mindset.',
    description: 'International study is no longer the privilege of the wealthy few. Canska\'s scholarship engineering, language preparation, cultural immersion, and visa support combine to make global mobility the default outcome—not a moonshot. Students graduate at home in multiple cultures, ready to study, work, and lead anywhere on the planet.'
  },
  {
    id: '12',
    title: 'Developing Emotional Resilience',
    subtitle: 'Builds grit and resilience through challenges within the program, preparing students for independence and setbacks.',
    description: 'Resilience is not a personality trait; it is a muscle, built through repeated, calibrated exposure to difficulty. The Quad\'s competition strategy, public-speaking demands, and project deadlines provide a controlled environment in which students fail, recover, and grow stronger. By the time the world delivers its real setbacks, the Canska student already knows how to metabolize them productively.'
  },
  {
    id: '13',
    title: 'The Power of a Peer Guild',
    subtitle: 'Connects children with a global network of ambitious peers, fostering future collaborations and a supportive social circle.',
    description: 'Canska\'s 2500-student global cohort becomes a lifelong professional and personal network. Friendships forged in the Makers phase grow into co-founder relationships in the Flyers phase, then into business partnerships in the years after. The peer guild is one of the program\'s quietest but most valuable long-term assets.'
  },
  {
    id: '14',
    title: 'Creating Real-World Impact',
    subtitle: 'Encourages "Proprietary Projects" that have immediate real-world significance, transforming students into active societal participants.',
    description: 'Canska students don\'t just study the world; they change it. Through proprietary capstone projects, they launch products, lead campaigns, publish research, build software, or organize initiatives that touch hundreds or thousands of people. By graduation, the student\'s portfolio includes not just achievements but measurable contributions to society.'
  },
  {
    id: '15',
    title: 'Your Peace of Mind',
    subtitle: 'Relieves parental stress by entrusting strategic growth planning to experts, allowing parents to focus on nurturing their child.',
    description: 'Parenting in the elite-admissions era is exhausting precisely because no one knows what to do. Canska gives every family a defensible 12-year architecture—clear priorities, structured cadences, transparent metrics—so parents can stop strategizing and start nurturing. The peace of mind that comes from knowing the long-term plan is sound is, for many families, the program\'s most underrated gift.'
  }
];

const WhyQuadProgram = () => {
  return (

    <div className='font-dm'>
      <section className="relative w-full flex items-center overflow-hidden bg-[url('/img/why-quad-program-hero-bg.svg')] bg-cover bg-center  p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[90px_61px_140px]">

        {/* Gradient Overlay 1: Left-to-Right Depth */}
        <div
          className="absolute inset-0 w-full h-full top-0 left-0 z-10"
          style={{
            background: 'linear-gradient(90deg, rgba(45, 11, 112, 0.85) 0%, rgba(45, 11, 112, 0.6) 50%, rgba(45, 11, 112, 0.3) 100%)'
          }}
        />

        {/* Gradient Overlay 2: Vertical Ambient Glow */}
        <div
          className="absolute inset-0 w-full h-full top-0 left-0 z-20"
          style={{
            background: 'linear-gradient(0deg, #5E17EB 0%, rgba(130, 94, 214, 0.5) 50%, rgba(212, 175, 55, 0) 100%)'
          }}
        />

        {/* Decorative Blur Object (Top Right) */}
        <div className="absolute w-full h-full -top-[30px] left-[1146px] bg-[rgba(94,44,212,0.1)] blur-[32px] rounded-full z-20 pointer-events-none" />

        {/* Main Content Container */}
        <div className="relative z-30 w-full flex flex-col gap-[34px]">

          <Breadcrumb items={breadcrumbLinks} />

          {/* Info Block */}
          <div className="max-w-[852px] flex flex-col gap-[20px]">

            {/* Subtitle / Tagline */}
            <ScrollAnimatedElement delay={0.1}>
              <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-4">
               — The 12-Year Scholarship Incubator
              </span>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement delay={0.2}>
              <h1 className="text-white text-5xl md:text-[64px] font-extrabold leading-[64px] tracking-[-1.6px]">
                Why <span className="text-[#FFB433]">“Quad”</span> Program
              </h1>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement delay={0.3}>
              <p className="text-white text-base font-normal leading-6 text-left">
               The <span className="font-bold">"Quad"</span> program offers a long-term, holistic approach to child development, moving beyond traditional education to prepare children for future success at top universities and in life. It aims to reduce stress and financial burdens for families while preserving the joy of childhood.
              </p>
            </ScrollAnimatedElement>

          </div>
        </div>
      </section>

      <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_66px] bg-[#FAFAFC]">

        {/* Top Banner Image with Rounded Corners and Gradient Overlay */}
        <ScrollAnimatedElement delay={0.2}>
          <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[64px]">
            <Image
              src="/img/why-quad-program.svg"
              alt="Graduating students throwing caps against city skyline"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Deep Violet Overlay Layer matching the aesthetic */}
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
          </div>
        </ScrollAnimatedElement>

        {/* Feature Blocks Stack */}
        <div className="flex flex-col gap-[20px]">
          {featureBlocks.map((block, index) => (
            <ScrollAnimatedElement key={block.id} delay={0.1 + index * 0.12}>
              <div
                className="bg-white border border-[#EBEAED] rounded-3xl p-6 md:p-[40px_40px_24px_40px] flex flex-col md:flex-row gap-6 md:gap-10 items-start transition-all duration-300 hover:shadow-md"
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

                <h3 className="text-sm md:text-base leading-[25px] font-medium text-[#0A0A0A] mb-4">
                  {block.subtitle}
                </h3>

                {/* Dividing Rule Line */}
                <div className="w-full h-[1px] bg-[#5E17EB] mb-5" />

                <p className="text-sm md:text-[14px] text-[#0A0A0A] leading-[25px] text-justify md:text-left font-medium">
                  {block.description}
                </p>
              </div>

              </div>

            </ScrollAnimatedElement>
          ))}
        </div>

      </section>

      
    </div>
  )
}

export default WhyQuadProgram
