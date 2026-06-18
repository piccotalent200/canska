import React from 'react'
import Image from 'next/image';
import Breadcrumb from '../Reusable/Breadcrumb';
import Link from 'next/link';

const breadcrumbLinks = [
  { label: 'Home', href: '/' },
  { label: 'The Quad Program', href: '/programs/quad' }
];

const featureBlocks = [
  {
    id: '01',
    title: 'The Vision of Early Excellence',
    subtitle: 'Canska introduces the world\'s first 12-year scholarship incubation program for students starting at age eight.',
    description: 'By shifting the focus from high-stress, eleventh-hour admission applications to a decade-long progression of strategic growth, the Quad Program prepares students for the world\'s Top 50 universities. This longitudinal approach ensures that every student builds an "unignorable" portfolio. By prioritizing systematic mentorship and professional assessments, Canska transforms childhood curiosity into a significant financial asset, effectively eliminating the need for future student loans, removing uncertainty, and reducing long-term parental stress.'
  },
  {
    id: '02',
    title: 'Understanding the Quad Structure',
    subtitle: 'The Quad Program is logically divided into four separate three-year phases: Seekers, Makers, Risers, and Flyers.',
    description: 'Each phase serves a unique developmental purpose aligned with key cognitive milestones. This structured runway allows students to move beyond traditional rote learning toward genuine mastery and intellectual knowledge. By segmenting the 12-year journey, Canska guarantees that progress is premeditated, measurable, and sustainable. This architecture prevents the common "burnout" seen in competitive schooling by distributing the workload of elite university admissions over a decade of organised, consistent, controllable, and highly focused development.'
  },
  {
    id: '03',
    title: 'The Seekers Phase: Ages 8, 9, and 10',
    subtitle: 'Build a robust academic foundation while cultivating distinctive curiosity.',
    description: 'Students are exposed to a wide variety of lenses, actively identifying latent interests directly aligned with strategic career pathways. This phase is about discovery without the burden of academic pressure. By using targeted gamified structures and interactive frameworks, Canska nurtures natural leanings. This proactive "Spike" identification ensures that future specialization builds on genuine, organic passion—creating a story that feels more authentic rather than "manufactured".'
  },
  {
    id: '04',
    title: 'The Makers Phase: Ages 11, 12, and 13',
    subtitle: 'Transition from exploration to tangible skill mastery through deeper subject immersion.',
    description: 'During these middle years, the program emphasises deeper subject immersion and the pursuit of early achievements. Students begin converting their curiosity into "Proof of Work" through structured micro-lessons and projects. This phase bridges the gap between childhood play and professional-grade performance. By documenting these early accomplishments, students establish a verifiable history of commitment, which is an important differentiator when applying to prestigious global universities and high-value scholarships.'
  },
  {
    id: '05',
    title: 'The Risers Phase: Ages 14, 15, and 16',
    subtitle: 'Accelerate the unique "Spike" and establish a strong digital presence.',
    description: 'In these primary high school years, the Quad Program narrows its focus to competitions, innovation, research, leadership, and most importantly measurable impact. Students are driven to take on roles that demonstrate self-initiative and problem-solving within their mastery fields. This phase is significant for strategic positioning, guaranteeing that the student\'s portfolio aligns perfectly with competitive university criteria. The objective is to move beyond being a high-achiever to becoming a recognised leader in a very specific niche.'
  },
  {
    id: '06',
    title: 'The Flyers Phase: Ages 17, 18, and 19',
    subtitle: 'Execute the high-stakes admissions and scholarship procurement.',
    description: 'During these final years, students package a decade of growth into a world-class portfolio. The focus remains on refining leadership narratives and ensuring all achievements are verifiable and high-impact. Canska mentors guide students through the complexities of international university applications, leveraging the "unignorable" history built since age eight. The ultimate objective of this phase is securing scholarships ranging from US$60,000 to $40,000, guaranteeing a debt-free transition from high school into elite global higher education institutions.'
  },
  {
    id: '07',
    title: 'Harnessing Volumetric Microlearning',
    subtitle: '10-minute lessons that fit seamlessly into existing routines.',
    description: 'At the heart of the Quad Program is the principle of volumetric microlearning. This high-frequency, low-friction lesson system leverages consistent bursts of learning to yield massive cumulative knowledge over 12 years. By breaking very complex subjects into digestible units, Canska maintains student engagement and prevents content fatigue. This scientifically grounded approach ensures that learning is not a difficult chore but a manageable practice, empowering the steady accumulation of skills across 24 major and minor lesson verticals each year.'
  },
  {
    id: '08',
    title: 'Balancing Major and Minor Lesson Verticals',
    subtitle: '12 major and 12 minor lesson verticals for every age group.',
    description: 'Students are required to choose three mandatory major and three minor lessons every day from a massive lesson pool. This dual-track system ensures that while a student hones their primary "Spike", they also maintain a broad, interdisciplinary perspective. This breadth of knowledge is highly valued by top-tier universities, as it demonstrates intellectual flexibility. The aptitude to pivot between core subjects and supplementary topics fosters a well-rounded yet specialised profile.'
  },
  {
    id: '09',
    title: 'The Power of Student Autonomy',
    subtitle: 'Total freedom in lesson selection within the marketplace ecosystem.',
    description: 'Unlike traditional education models with fixed paths, the Quad Program is non-linear and student-directed. This autonomy reduces educational fatigue and sustains long-term motivation. When a student chooses their own learning path, every click reflects genuine intent, providing cleaner data for talent assessment. By following their learning curiosity, students become self-directed learners who take ownership of their academic journey, a quality that is important for success in rigorous university environments.'
  },
  {
    id: '11',
    title: 'Active Scaffolding and Predictive Nudges',
    subtitle: 'AI-powered "Skill Nudges" connect passions to weak subjects.',
    description: 'If a student evades mathematics but loves space, the system presents maths through the lens of rocketry mechanics. This technique uses a student\'s existing passions to connect the skill gaps to more difficult concepts, rebuilding confidence and reducing frustration. By Level 3 (Mastery), these nudges become more interdisciplinary, guiding students to recognise patterns across arts, maths, science, and humanities. This approach ensures that no subject becomes a permanent barrier to the student\'s overall development and mastery.'
  },
  {
    id: '12',
    title: 'The Hybrid Assessment Model',
    subtitle: 'A sophisticated blend of artificial intelligence and human mentorship.',
    description: 'AI provides immediate, data-driven pulse reports on assessments, while human mentors provide contextual understanding and qualitative guidance. This dual-layered approach safeguards students receive both swiftness and depth in their feedback. Mentors help students understand the "why" behind their mistakes, fostering empathy and suppleness. This hybrid model guarantees that every assessment is a developmental instrument rather than a high-stakes assessment obstacle, prioritising the student\'s emotional and intellectual growth over a decade.'
  },
  {
    id: '13',
    title: 'Rethinking Mistakes and Failures',
    subtitle: 'A low-pressure, growth-oriented environment without "failure".',
    description: 'Incorrect responses are viewed as valuable learning prospects rather than big setbacks. Students are encouraged to engage with their mistakes very constructively, using them as stepping stones toward deeper understanding. Both the AI and human mentors identify and explain mistakes clearly, helping students avoid similar mistakes in the future. By removing the fear of penalty, Canska fosters a confident, resilient mindset that values the learning process over correct answers and perfect scores.'
  },
  {
    id: '14',
    title: 'Diversity in Assessment Formats',
    subtitle: 'Submit expressive responses via text, images, audio, or video.',
    description: 'To cater to different learning styles, the Quad Program utilises assorted assessment formats. Beyond multiple-choice and short-answer questions, students could submit expressive responses via text, images, audio, or video uploads. This flexibility permits learners to articulate their understanding using their personal strengths, whether they are visual, verbal, or creative. This multimodal feedback loop ensures that the system captures an accurate reflection of the student\'s comprehension.'
  },
  {
    id: '15',
    title: 'The Quad Score for Parents',
    subtitle: 'A dynamic dashboard reflecting long-term patterns rather than static grades.',
    description: 'Parents can monitor their child\'s development through a dynamic "Quad Score" on a personalised dashboard. Unlike traditional grades that offer a stationary snapshot of performance, the Quad Score reflects long-term patterns in learning, engagement, and improvement. It is divided across various sections, providing a detailed view of where a student consistently excels over time. This transparency empowers parents to stay meaningfully involved without the heaviness of school-style examinations. The score serves as a data-driven growth map, highlighting the formation of the student\'s "Spike".'
  },
  {
    id: '16',
    title: 'Life Skills Beyond the Classroom',
    subtitle: 'Crucial life skills, digital presence, and self-sufficient leadership.',
    description: 'While securing scholarships is a key objective, the Quad Program is equally committed to teaching crucial life skills. Students learn "life mechanics", digital presence, and self-sufficient leadership throughout their 12-year program period. These proficiencies are designed to shape them for the rest of their lives, ensuring they are prepared for the professional world. By fostering critical thinking, resilience, and adaptability, Canska guarantees that students are not just successful applicants but very confident, high-functioning individuals capable of navigating an ever-changing global landscape.'
  },
  {
    id: '17',
    title: 'Building an Unignorable Portfolio',
    subtitle: '12 years of consistent, documented growth and achievement.',
    description: 'A crucial differentiator of the Quad Program is the creation of a longitudinal portfolio that serves as "Proof of Work". Most university admissions officers find it impossible to ignore a student who could demonstrate 12 years of consistent, documented growth and achievement. This portfolio is not just a resume; it is a core narrative of persistence and "Spike" mastery. By prioritising the documentation of projects, reflections, and assessments since age eight, Canska guarantees that every student stands out as a unique, high-value candidate.'
  },
  {
    id: '18',
    title: 'Managing Global Admissions Criteria',
    subtitle: 'An agile model adapting to evolving global admissions criteria.',
    description: 'Whether universities shift to test-optional policies or change their focus toward specific leadership traits, Canska\'s "Spike" mastery remains relevant. The program safeguards that a student\'s skills are highly portable across international borders, preparing them for top-tier institutions in the USA, UK, and beyond. This adaptability is powered by AI that monitors global trends, guaranteeing that the content marketplace and mentorship strategies of Canska are always at the cutting edge of global educational standards.'
  },
  {
    id: '19',
    title: 'Financial Independence for Parents',
    subtitle: 'Eliminating student loans through full-ride scholarship engineering.',
    description: 'The financial impact of the Quad Program is transformative for parents. By targeting scholarships ranging from US$60,000 to $400,000 full-ride awards, Canska aims to completely eliminate the necessity for student loans. This strategic financial planning reduces the immense stress often associated with elite higher education. The program essentially treats a student\'s talent as a capital fund, where small daily investments in learning yield considerable returns in the form of debt-free education at some of the world\'s most prestigious top 50 universities and colleges.'
  },
  {
    id: '20',
    title: 'A Future of Reflective Leaders',
    subtitle: 'Self-directed, philosophical, and confident global leaders.',
    description: 'Ultimately, the Quad Program prepares students to be self-directed, philosophical, and confident leaders. By fostering a philosophy of continuous development, curiosity, and "unlearning" out-of-date perspectives, Canska prepares the next generation to solve complex global problems. Students learn that learning is a lifelong expedition, not a destination. They graduate from the Quad program not only with admission offers and scholarships but with a profound understanding of their own personal potential, ready to contribute meaningfully to the world with resilience, intellectual depth, and mastery.'
  }
];

const QuadProgram = () => {
  return (

    <div className='font-dm'>
      <section className="relative w-full flex items-center overflow-hidden bg-[url('/img/quad-program-hero-bg.svg')] bg-cover bg-center  p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[90px_61px]">

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
            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-4">
              — The 12-Year Scholarship Incubator
            </span>

            {/* Main Heading */}
            <h1 className="text-white text-5xl md:text-[64px] font-extrabold leading-[64px] tracking-[-1.6px]">
              The Quad <span className="text-[#FFB433]">Program</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-white text-base font-normal leading-6 text-left">
              Canska presents the world's first 12-year scholarship incubation program specifically architected for
              students aged eight and above. By replacing high-pressure last-minute university admission applications
              with a decade of planned growth, the Quad Program secures admission to the global Top 50 universities.
              Through its four distinct phases — <span>Seekers, Makers, Risers, and Flyers</span> —
              the program fosters a unique "Spike" of mastery, transforming childhood curiosity into a verifiable
              digital portfolio and securing scholarships worth between <span>US$60,000 and US$400,000</span>.
            </p>

          </div>
        </div>
      </section>

      <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_66px] bg-[#FAFAFC]">

        {/* Top Banner Image with Rounded Corners and Gradient Overlay */}
        <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[64px]">
          <Image
            src="/img/graduation-banner.svg"
            alt="Graduating students throwing caps against city skyline"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Deep Violet Overlay Layer matching the aesthetic */}
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
        </div>

        {/* Feature Blocks Stack */}
        <div className="flex flex-col gap-[20px]">
          {featureBlocks.map((block) => (
            <div
              key={block.id}
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

                <h3 className="text-sm md:text-base leading-[25px] font-medium text-[#0A0A0ACC] mb-4">
                  {block.subtitle}
                </h3>

                {/* Dividing Rule Line */}
                <div className="w-full h-[1px] bg-[#5E17EB] mb-5" />

                <p className="text-sm md:text-[14px] text-[#0A0A0A] leading-[25px] text-justify md:text-left font-medium">
                  {block.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </section>

      <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[77px_61px] flex items-center bg-[linear-gradient(135deg,_#5E17EB_0%,_#3B0B9D_100%)] text-white">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">

          {/* Left Column: Context Texts */}
          <div className="flex flex-col max-w-[880px] gap-[15px]">

            {/* Section Marker */}
            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[17px]">
              — Next
            </span>

            {/* Heading with styled dynamic context highlight */}
            <h2 className="max-w-[926px] text-4xl sm:text-5xl md:text-[64px] font-semibold leading-[1.05] tracking-[-1.92px]">
              Continue to <span className="italic text-[#FFB433] font-medium">The Quad Lesson Verticals</span>
            </h2>

            {/* Context Body */}
            <p className="max-w-[856px] text-white/80 text-base font-normal leading-[26px]">
              Across <span className="text-[#FFB433] font-bold">Seekers</span>,{' '}
              <span className="text-[#FFB433] font-bold">Makers</span>,{' '}
              <span className="text-[#FFB433] font-bold">Risers</span> and{' '}
              <span className="text-[#FFB433] font-bold">Flyers</span>, students master 12 major and
              minor verticals each year — a curriculum that moves from foundational discovery to advanced
              application and adult readiness.
            </p>
          </div>

          {/* Right Column: CTA Pill Action Component */}
          <div className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0">
            <Link
              href="/quad-lesson"
              className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#1F232E] px-[25.8px] py-[13.8px] min-w-[258px] h-[50.6px] rounded-full font-semibold text-sm tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group shadow-sm"
            >
              <span className="flex-1 text-left">Read Quad Lesson Verticals</span>
              <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#1F232E" />
                </svg>

              </span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}

export default QuadProgram
