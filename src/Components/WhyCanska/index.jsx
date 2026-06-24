"use client";
import React, { useEffect } from 'react'
import Image from 'next/image';
import Breadcrumb from '../Reusable/Breadcrumb';
import Link from 'next/link';
import { useState } from "react";
import { Tabs } from "flowbite-react";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import ScrollAnimatedElement from '../Reusable/ScrollAnimatedElement';
const breadcrumbLinks = [
  { label: 'Home', href: '/' },
  { label: 'Why Canska?', href: '/why-canska' }
];


const customTabsTheme = {
  tablist: {
    base: "sticky top-[80px] z-[10] whitespace-nowrap !flex-nowrap flex items-center gap-2 p-[16px] sm:p-[16px_32px] lg:p-[16px_56px] bg-[rgba(251,250,255,0.9)] border-y border-[#EDE7FB] backdrop-blur-[12px] overflow-x-auto",
    tabitem: {
      base: "p-0 !bg-transparent hover:!bg-transparent",
    },
  },
};

const WhyCanskaContent = [
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


const WhyAtAgeEightContent = [
  {
    id: '01',
    title: 'Genuine Discovery',
    subtitle: 'Cultivate true interests and identify a natural "spike" without pressure for immediate achievement.',
    description: 'Starting at age eight allows a child to move beyond the frantic "resume padding" that plagues high school applicants. By exploring diverse interests without the pressure of immediate results, a student identifies their natural "spike" early. This organic discovery is the bedrock of a portfolio that eventually commands high-value scholarships, as admissions officers at the top 50 universities could easily distinguish long-term passion from eleventh-hour strategic "padding" up.'
  },
  {
    id: '02',
    title: 'Neuroplasticity',
    subtitle: 'Optimise linguistic and logical foundation buliding for advanced academic readines',
    description: 'Neuroplastinity is at a peak during the primary years, making in the natinum time for ingranticaret ingat faundations Mastering a second or third language by age twelve, or devstoping computational thinking through robotics, creates a "cognitive surplus This advanced baseline allows the student to tackle university-level research by age sixteen for scholarship committees at MIT er Oxford this long-term dedication serves as resi world prout of "inoullectual vitality (ustifying Tull-ride scholarships'
  },
  {
    id: '03',
    title: 'Compounding Effect',
    subtitle: 'Achieve unparalleled mastery through a decade of incremental akili acquisition',
    description: 'Just as financial mestrients grow over time, a decade of mcremental progress in a specific niche such as classical music or envirimmental advocacy, results in a level ut mastery that is unattainable for thuse starting at hourteen. This ten-thousand-hour trajectory transforms a student inta a gratial go-guttur When applying for schistships, being a world-class talent in a specific -Beld makes the candidate an undeniable saser ta a smiversity\'s elite cohort'
  },
  {
    id: '04',
    title: 'Trial and Error',
    subtitle: 'Bulld resilience and leam from failures in a low-stakes environment for personal statements',
    description: 'A shuttent who stets a amall community project at age twelve and sees it fall her ample time to terate acid sured try age alten. Thos narrative of long-term persistence is a goldmine for the Personal Statement Top 50 universities prize grit above inw Q. A portfolio documenting years of overcoming sbstazias demonstrates the emaliunal maturity required to handle the rigours of an ivy League education and the responsibility nemted to fully utilise a high-value scholarship'
  },
  {
    id: '05',
    title: 'International Benchmarking',
    subtitle: 'Progress through competition, gaming external validation for applications',
    description: 'By age tan, a student can begin participating in some local competitions, gradually moving in nalilonal and then ternational stages by mid-секолбку schont This prugression ensures that by the time shusferts apply for university adıressions and scholarships, thee personal pertfulios town areasty been vetted by highly reputable global organisations. This reduces the perceivert risk for admissions officers as the student has ansady provin they can compete and win against the best students'
  },
  {
    id: '06',
    title: 'Executive Presence',
    subtitle: 'Develop critical communication and leadership skills through long-term engagement',
    description: 'Ente universities look for Executive Presence, which is seldom developed in a two-year window. By starting at sight, a student learns to communicate with adults mentar younger peers, and confidently cavigule complex social ermenements through various extracurriculars. This decade of soft skill development results in an interviewee who is pisised articulate, and visionary significant advantage in high-stakes sharship interviews'
  },
  {
    id: '07',
    title: 'Depth over Breadth',
    subtitle: 'Foster a spiky profile"" through deep commitment to a select few pursuits',
    description: 'Early starters can fumus an Depth over Beadth fare casshaty While must applicants are busy joining tan different stutis in grade slaven, the early start student is narrowing their focus to one "Cepatane Project" that they have nurtured Tor ywars. The singulie deep focus is what creates the Spiky Proffie preferred by the top 50 universities. A US$400,000 scholarship is relciom given to a jack-of-all-trades it is awarded to the specialism'
  },
  {
    id: '08',
    title: 'Deep Faculty Mentorship',
    subtitle: 'Cultivata lasting rmationships with pratassurs for inthantial recommendations',
    description: 'A student wtro identifies a research interest early could spend years building sesociations with professors and industry professionals. lly age seventeen, they may have received a lettar of recommendation from wond-renowned scientist or CTO These Heavyweight Recorremendations are The eventual Talent Proof for scintarship committees. They signal that the student is already & respected member of the professional community makinig a ligt value schclarship a logical investment.'
  },
  {
    id: '09',
    title: 'Demonstrated Interest',
    subtitle: 'Build an autheritic, data-och engagement history with target institutiona',
    description: 'Top smiversities trail engagement and sunt attendance over years, not months. A student who has regstartly engaged with a university outreach events since childhood demonstrates a level of commitment that cannot be fabricated. This Legacy of intant particularly convincing for estitutional scholarships It shows the scholarship committee that the student heen\'t just chosen the school for its ranking, but for a deeply moted alignment with its mission'
  },
  {
    id: '10',
    title: 'Luxury of Time',
    subtitle: 'Master standardised tests gradually, freeing up later years the high-fnpact activities',
    description: 'Sitarting early provides the Luxury of time to fully meeter standardised testing without stress instead of cramming for the SAT or ACT in a panicked three-month window, the student could build the undertving reading and mathematical fouridations over a decade. This often ressats in "perfect scores achoved marty freeing up the fmal years of schoot for high impact leadership roles and msearch. For US$350,000 schedarships Theer top-porcantile scONIS as a gatsheeper metric'
  },
  {
    id: '11',
    title: 'Digital Footprint',
    subtitle: 'Create a professional online presence that verifies achievements and builds trust.',
    description: 'A decade of portfolio boilding allows for the creation of a huge Tigital Footprint that is professionat and highly impactful. Most admissions offices "Google" candidates smident who has spent years documenting their journey through a professional bing, a GitHub reposttong or a Youtube channel for social good presents a transparent record of personal growth. This "Veritable Hiamey promodas actul recwipra for the student\'s staima, butiding trust for over US$300,000 in financial aid.'
  },
  {
    id: '12',
    title: 'Strategic Curriculum Mapping',
    subtitle: 'Ensure rigurnus course selection aligns with target university requirements:',
    description: 'By Identifying the target university\'s requirements at age fourteers, parents and mentors can ensure the student takes the most rigorous courses sailable 10 Higher Levels or AP subjecte, its logical sequenice The cocumvents the "prerequisite trap that often prevents late-startere from reaching the highest lovers of academic rigour A transcript mar shoes a décade of snowballing chalenge is a big indicator for "Academic Excntence scholarships'
  },
  {
    id: '13',
    title: 'Financial Literacy',
    subtitle: 'Research funding profiles and tailor portfolios for optimal scholarship alignment.',
    description: 'Btwting at allow parents to research the specific francial sit policies of the tap 50 institutions, distinguishing betuwun need-blind need are and merit-heavy oreversities. This slows the student to tallar ther portfolio to the funding profile of their target institutions. For example student targets US$250,000 scholarship at a specific university, they can spend years building the precise leader-scholar profile that the university Prestonly rewards.'
  },
  {
    id: '14',
    title: 'Global Citizenship',
    subtitle: 'Develop transnational perspectives through sustained cultural immersion and engagement',
    description: 'Whether through sanguage study, international changes, or gohal valusteetsm, a twelve-year timeline allows these experiences to become a fundamental part of the student\'s identity, Top 50 universities truly value Transnational parspectives for their diverse cohorta A student who ca prove a decade of cross-cultural engagement is a prime candidate for Diversity and Leadership scholarships which often range from 5560.000 to Tull-tition coverage.'
  },
  {
    id: '15',
    title: 'Niche Hobbies',
    subtitle: 'Cultivata unique interests that become memorable ""apike factors for differentiation.',
    description: 'Whether it is high-level competitive frocing, rare instrument mastery, or orchid conservation, these quirky but profound interents main a student mamurable in a sea of high-achieving applicants being The Geef or "The Fencing Physiesst provides the manorality faster needed survive the round of scholarship selection. These unique hooks often link to specific departmental funda or special intarest scholarshipa.'
  },
  {
    id: '16',
    title: 'Philanthropic Entrepreneurship',
    subtitle: 'Evolve from volunteer to founder proving sustained social impact.',
    description: 'Beginning at age eight facilitates the gradual development of Philanthropic Entrepreneurship an important factor for US$400,000 full-nde achoarmips. Most teenagers rush to volunteering in their final year, but an early starter coullt evolve from a simple participant to a founder of a austainable initiallew over a decade. This longevity proves to admissions committees that the student\'s social impacta core personal value convincing donars to awwd the highest scholarship.'
  },
  {
    id: '17',
    title: 'Pre-emptive Professionalisation',
    subtitle: 'Bulld a robust network har internships arst collatiorative projects',
    description: 'Dy age sixteen a student who began their jourmey at eight can have a decade-long relationship with peens, mentors, alumn, and industry protesconals. These connections often lead to exclusive internshipe and collaborative projects thust serve as high-value portfoile boosters For the top:00 universities, this level of professional integration datinguishes a scholarship sandidate as someone already functioning at a graduate-level- making a US$250.000 scivolarship lewestment a safe het.'
  },
  {
    id: '18',
    title: 'Genuine Discovery & Application Burnout Prevention',
    subtitle: 'Cultivate true interests and identify a natural spike without pressure for immediate achievement / Maintain mental health',
    description: 'Starting at age eight allows a child to move beyond the frantic resume padding that plagues high school applicants. By exploring diverse interests without the pressure of immediate results, a student identifies their natural spike early. This organic discovery is the bedrock of a portfolio that eventually commands high value scholarships. By spreading the work of portfolio building over a decade the process becomes a real lifestyle rather than a chore. This ensures that the student reaches grade twelve with their mental health intact and their passion for learning undiminished. A happy high-achiever is far more likely to succeed in the grueling scholarship interview process. Ultimately starting at eight is about Peak Performance through sustainable growth, securing that US$400,000 scholarship with confidence.'
  }
];


const whyPortfolio = [
  {
    id: '01',
    title: 'Early Self-Discovery and Confidence',
    subtitle: 'Explore skills to find what excites you. Build confidence and develop competencies beyond the classroom.',
    description: 'Encouraging children to explore a variety of skills and interests early helps them discover their unique strengths and passions. This self-exploration not only fosters self-confidence but also nurtures a sense of identity and individuality, important for personal growth. By engaging with different activities -arts, sports, sciences, languages students develop competencies beyond traditional classroom subjects and discover their natural "spike".'
  },
  {
    id: '02',
    title: 'Improved Cognitive and Social Development',
    subtitle: 'Learn critical thinking and communication. Improve social skills through teamwork and leadership.',
    description: 'Developing skills early enhances cognitive abilities such as critical thinking, problem-solving, and creativity. It also fosters communication abilities, allowing children to express their thoughts clearly and persuasively. Engaging in group activities, sports, and team projects improves social skills by promoting cooperation, empathy, and leadership key qualities for personal and professional success in adulthood.'
  },
  {
    id: '03',
    title: 'Increased Resilience and Problem-Solving Abilities',
    subtitle: 'Develop mental strength by overcoming challenges. Creative thinking leads to innovative solutions.',
    description: 'Building skills involves overcoming various challenges and setbacks, helping children develop resilience and mental strength. This strength is critical not only for academic success but also for navigating real-world obstacles. Multi-skilled development also encourages innovative problem-solving by exposing children to varied perspectives and techniques, fostering the ability to think creatively and address complex issues.'
  },
  {
    id: '04',
    title: 'Better Decision-Making',
    subtitle: 'Make informed choices about education and careers. Avoid narrow specialisation for greater flexibility.',
    description: 'Early skill development equips children with the tools needed to make informed decisions about their education, careers, and personal lives. They learn to evaluate options, assess risks, and choose paths that align with their interests and abilities. This proactive approach reduces the risk of narrow specialisation and increases flexibility to adapt to changes a critical advantage in an unpredictable modern world.'
  },
  {
    id: '05',
    title: 'Adaptability to a Changing World',
    subtitle: 'Gain versatility for evolving job markets. Develop essential life skills for personal and professional success.',
    description: "In today's rapidly evolving world, adaptability is essential. By acquiring various skills early, children become more versatile and prepared for the unpredictable nature of future career markets. This adaptability ensures they can thrive in different environments and adapt to emerging trends. Furthermore, learning life skills communication, time management, emotional regulation helps in handling everyday challenges effectively."
  },
  {
    id: '06',
    title: 'Enhanced Career Opportunities',
    subtitle: 'Build a strong foundation with diverse skills. Network with mentors and professionals for future growth.',
    description: 'Acquiring diverse skills early creates a strong professional foundation. Employers value candidates with a wide range of competencies, making early skill builders more attractive in the job market. Multi-skill development also opens doors to networking opportunities by connecting children with mentors, peers, and professionals in various fields networks that can be instrumental for future career growth.'
  },
  {
    id: '07',
    title: 'Long-Term Well-Being',
    subtitle: 'Foster lifelong learning and personal fulfilment. Reduce stress through competence and adaptability.',
    description: 'Cultivating skills early instils a love for learning that lasts a lifetime. This continuous pursuit of knowledge promotes personal fulfilment, intellectual growth, and adaptability throughout life-leading to greater happiness and well-being. Mastering diverse skills also reduces feelings of inadequacy and stress in adulthood children grow up confident in their abilities to tackle various life challenges.'
  }
];


const portfolioBuilding = [
  {
    id: '01',
    title: 'Intellectual Vitality',
    subtitle: 'Self-directed learning beyond curriculum proactive pursuit of knowledge.',
    description: 'Demonstrates self-directed learning beyond the school curriculum, showing proactive pursuit of knowledge through online courses (Coursera, edX, MIT OpenCourseWare), independent research projects, attending lectures, reading widely, and engaging with academic communities. Top universities are looking for students who don\'t just consume information they create insight.'
  },
  {
    id: '02',
    title: 'Leadership Redefined',
    subtitle: 'Measurable influence and quantifiable impact, not just positional authority.',
    description: 'Modern admissions officers care less about being "president of the club" and more about measurable influence. What did you change? Who did you help? How many people benefited? The new leadership is about systems built, communities served, and ideas shipped captured with metrics. testimonials, and outcomes.'
  },
  {
    id: '03',
    title: 'International Benchmarking',
    subtitle: 'Validate skills against global standards through external recognition and awards.',
    description: 'Olympiads, hackathons, model UN delegations, music certifications (ABRSM, Trinity), international science fairs, and globally-recognised competitions provide third-party validation. They prove a student can perform at the top of a global pool not just at the top of a local class.'
  },
  {
    id: '04',
    title: 'Creative & Technical Capstone',
    subtitle: 'A long-term project synthesising interests into a tangible, impactful output.',
    description: 'A multi-year capstone project a research paper, an app, a documentary, a non-profit, a published book that combines the student\'s interests into a single tangible output. This is the centrepiece of the portfolio: irrefutable evidence of vision, persistence, and execution.'
  },
  {
    id: '05',
    title: 'Institutional Fit & Mission Alignment',
    subtitle: 'Curate the portfolio to resonate with a university\'s specific culture and priorities.',
    description: 'Each top university has a distinct culture and mission. Curating the portfolio to resonate with those priorities Stanford\'s entrepreneurial spirit, Oxford\'s tutorial rigour, MIT\'s technical depth increases both admission probability and scholarship targeting. Fit isn\'t fabrication; it\'s intentional alignment.'
  },
  {
    id: '06',
    title: 'Digital Identity',
    subtitle: 'A professional online presence validates achievements and showcases multimedia work.',
    description: 'A clean, professional digital identity personal website, GitHub, Linkedin, YouTube channel, research blog allows admissions officers to verify achievements and consume multimedia evidence of the student\'s work. In a Google-first world, the digital footprint is the first impression.'
  },
  {
    id: '07',
    title: 'Iterative Process',
    subtitle: 'Begin early, identify gaps, and refine with high-impact activities over time.',
    description: 'Portfolio building is iterative. Quarterly reviews identify gaps, pivot strategies, and add high-impact activities. Mentor feedback compresses learning cycles. The student treats their portfolio like a product measured, refined, shipped, iterated across the entire 12-year window.'
  }
];


const WhyCanska = () => {

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Convert string parameter to an integer safely, fallback to 0
  const urlTab = searchParams.get('activeTab');
  const initialTab = urlTab ? parseInt(urlTab, 10) : 0;

  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (urlTab !== null) {
      const parsed = parseInt(urlTab, 10);
      if (!isNaN(parsed)) setActiveTab(parsed);
    }
  }, [urlTab]);

  const handleTabChange = (index) => {
    setActiveTab(index);

    const params = new URLSearchParams(searchParams.toString());
    params.set('activeTab', index.toString());

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  console.log("activeTab", activeTab);

  const renderTabTitle = (number, text, index) => {
    const isActive = activeTab === index;
    return (
      <div className={`flex items-center gap-2.5 p-[10px_20px] rounded-[999px] cursor-pointer transition-all duration-200 border border-solid ${isActive
        ? "bg-[#5E17EB] border-[#5E17EB] shadow-[0_4px_6px_-4px_rgba(94,23,235,0.25),0_10px_15px_-3px_rgba(94,23,235,0.25)] text-[#FFFFFF] "
        : "bg-[#FFFFFF] text-[#0A0A0ABF] border-[#EDE7FB] rounded-[999px]"
        }`}>
        <span
          className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold transition-all duration-200 ${isActive
            ? "bg-[#FFB433] text-[#2D0B70]"
            : "bg-[#F4F1FE] text-[#5E17EB]"
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
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full flex items-center overflow-hidden bg-[url('/img/why-canska-hero-bg.jpg')] bg-cover bg-center p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[90px_61px]">
        {/* Gradient Overlay 1: Left-to-Right Depth */}
        <div
          className="absolute inset-0 w-full h-full top-0 left-0 z-10"
          style={{ background: 'linear-gradient(90deg, rgba(45, 11, 112, 0.70) 0%, rgba(45, 11, 112, 0) 50%, rgba(45, 11, 112, 0) 100%)' }}
        />
        {/* Gradient Overlay 2: Vertical Ambient Glow */}
        <div
          className="absolute inset-0 w-full h-full top-0 left-0 z-20"
          style={{ background: 'linear-gradient(90deg, rgba(45, 11, 112, 0.85) 0%, rgba(45, 11, 112, 0.60) 50%, rgba(45, 11, 112, 0.30) 100%)' }}
        />
        {/* Decorative Blur Object (Top Right) */}
        <div className="absolute w-full h-full -top-[30px] left-[1146px] bg-[#FFB43326] blur-[64px] rounded-full z-30 pointer-events-none" />

        {/* Main Content Container */}
        <div className="relative z-40 w-full flex flex-col gap-[34px]">
          <Breadcrumb items={breadcrumbLinks} />

          {/* Info Block wrapped in structural fade-up entry */}
          <ScrollAnimatedElement 
            className="max-w-[852px] flex flex-col gap-[20px]" 
            duration={0.6} 
            yOffset={25}
          >
            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-4">
              -Human Capital Incubator
            </span>
            <h1 className="text-white text-5xl md:text-[64px] font-extrabold leading-[64px] tracking-[-1.6px]">
              Why <span className="text-[#FFB433]"> Canska?</span>
            </h1>
            <p className="text-white text-[18px] font-medium leading-7 text-left">
              Canska is not a school, a tutoring platform, or an academic counselling service. It is a human
              capital incubator for the next generation of students. In the competitive world, Canska
              operates as a high-precision bridge between childhood capabilities and global successes.
              Rather than providing fragmented academic support, Canska approaches childhood
              development with the discipline and far-sightedness of an investment fund.
            </p>
          </ScrollAnimatedElement>
        </div>
      </section>

      {/* ================= TABS NAVIGATION SECTION ================= */}
      <div className="w-full">
        <Tabs
          variant="pills"
          theme={customTabsTheme}
          onActiveTabChange={handleTabChange}
          className='[&>div:last-child>div]:p-0 gap-0'
        >
          
          {/* TAB 01: WHY CANSKA? */}
          <Tabs.Item active={activeTab === 0} title={renderTabTitle("01", "Why Canska?", 0)}>
            <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">
              
              <ScrollAnimatedElement className="w-full" duration={0.5} yOffset={20}>
                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                  <Image
                    src="/img/whycanska-banner.svg"
                    alt="Graduating students throwing caps against city skyline"
                    fill
                    priority
                    className="object-cover object-center absolute w-full h-full"
                  />
                  <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Why Canska?</h1>
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                </div>
                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[54px] max-w-[896px]'>
                  Canska views the years from age 8 to 19 as a critical and finite lifecycle window during which identity, capability, and
                  positioning must be intentionally engineered...
                </p>
              </ScrollAnimatedElement>

              {/* Feature Blocks Staggered Loop Array */}
              <div className="flex flex-col gap-[20px] mb-[40px] xl:mb-[69px]">
                {WhyCanskaContent.map((block, index) => (
                  <ScrollAnimatedElement 
                    key={block.id} 
                    duration={0.5} 
                    delay={index * 0.08} 
                    yOffset={30}
                  >
                    <div className="bg-white border border-[#5E17EB4D] rounded-3xl p-6 md:p-[40px_40px_24px_40px] flex flex-col md:flex-row gap-6 md:gap-10 items-start transition-all duration-300 hover:shadow-md shadow-[0px_20px_60px_0px_#5E17EB1A]">
                      <div className="flex flex-col items-start flex-shrink-0 lg:min-w-[186px] ">
                        <span className="text-[72px] font-[900] text-[#FFB433] leading-[72px] tracking-tight">{block.id}</span>
                        <div className="w-[48px] h-[3px] bg-[#5E17EB] mt-3" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h2 className="text-xl md:text-2xl leading-[32px] font-[800] text-[#0A0A0A] mb-4">{block.title}</h2>
                        <h3 className="text-sm md:text-base leading-[25px] font-medium text-[#0A0A0A] mb-3">{block.subtitle}</h3>
                        <div className="w-full h-[1px] bg-[#5E17EB] mb-7" />
                        <p className="text-sm md:text-[14px] text-[#0A0A0A] leading-[25px] text-justify md:text-left font-medium">{block.description}</p>
                      </div>
                    </div>
                  </ScrollAnimatedElement>
                ))}
              </div>

              {/* Next Footer CTA */}
              <WhyCanskaCta />
            </section>
          </Tabs.Item>

          {/* TAB 02: WHY START AT AGE 8? */}
          <Tabs.Item active={activeTab === 1} title={renderTabTitle("02", "Why Start at Age 8?", 1)}>
            <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">
              
              <ScrollAnimatedElement className="w-full" duration={0.5} yOffset={20}>
                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                  <Image
                    src="/img/whycanska-banner.svg"
                    alt="Graduating students"
                    fill
                    priority
                    className="object-cover object-center absolute w-full h-full"
                  />
                  <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Why Start at Age 8?</h1>
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                </div>
                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[54px] max-w-[896px]'>
                  Starting at age eight allows a child to move beyond the frantic "resume padding" that plagues high school applicants...
                </p>
              </ScrollAnimatedElement>

              <div className="flex flex-col gap-[20px] mb-[40px] xl:mb-[69px]">
                {WhyAtAgeEightContent.map((block, index) => (
                  <ScrollAnimatedElement 
                    key={block.id} 
                    duration={0.5} 
                    delay={index * 0.08} 
                    yOffset={30}
                  >
                    <div className="bg-white border border-[#5E17EB4D] rounded-3xl p-6 md:p-[40px_40px_24px_40px] flex flex-col md:flex-row gap-6 md:gap-10 items-start transition-all duration-300 hover:shadow-md shadow-[0px_20px_60px_0px_#5E17EB1A]">
                      <div className="flex flex-col items-start flex-shrink-0 lg:min-w-[186px] ">
                        <span className="text-[72px] font-[900] text-[#FFB433] leading-[72px] tracking-tight">{block.id}</span>
                        <div className="w-[48px] h-[3px] bg-[#5E17EB] mt-3" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h2 className="text-xl md:text-2xl leading-[32px] font-[800] text-[#0A0A0A] mb-4">{block.title}</h2>
                        <h3 className="text-sm md:text-base leading-[25px] font-medium text-[#0A0A0A] mb-3">{block.subtitle}</h3>
                        <div className="w-full h-[1px] bg-[#5E17EB] mb-7" />
                        <p className="text-sm md:text-[14px] text-[#0A0A0A] leading-[25px] text-justify md:text-left font-medium">{block.description}</p>
                      </div>
                    </div>
                  </ScrollAnimatedElement>
                ))}
              </div>

              <WhyCanskaCta />
            </section>
          </Tabs.Item>

          {/* TAB 03: WHY PORTFOLIO? */}
          <Tabs.Item active={activeTab === 2} title={renderTabTitle("03", "Why Portfolio?", 2)}>
            <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">
              
              <ScrollAnimatedElement className="w-full" duration={0.5} yOffset={20}>
                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                  <Image
                    src="/img/whycanska-banner.svg"
                    alt="Graduating students"
                    fill
                    priority
                    className="object-cover object-center absolute w-full h-full"
                  />
                  <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Why Portfolio?</h1>
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                </div>
                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[54px] max-w-[896px]'>
                  Building a portfolio early is crucial for academic, career, and personal growth...
                </p>
              </ScrollAnimatedElement>

              <div className="flex flex-col gap-[20px] mb-[40px] xl:mb-[69px]">
                {whyPortfolio.map((block, index) => (
                  <ScrollAnimatedElement 
                    key={block.id} 
                    duration={0.5} 
                    delay={index * 0.08} 
                    yOffset={30}
                  >
                    <div className="bg-white border border-[#5E17EB4D] rounded-3xl p-6 md:p-[40px_40px_24px_40px] flex flex-col md:flex-row gap-6 md:gap-10 items-start transition-all duration-300 hover:shadow-md shadow-[0px_20px_60px_0px_#5E17EB1A]">
                      <div className="flex flex-col items-start flex-shrink-0 lg:min-w-[186px] ">
                        <span className="text-[72px] font-[900] text-[#FFB433] leading-[72px] tracking-tight">{block.id}</span>
                        <div className="w-[48px] h-[3px] bg-[#5E17EB] mt-3" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h2 className="text-xl md:text-2xl leading-[32px] font-[800] text-[#0A0A0A] mb-4">{block.title}</h2>
                        <h3 className="text-sm md:text-base leading-[25px] font-medium text-[#0A0A0A] mb-3">{block.subtitle}</h3>
                        <div className="w-full h-[1px] bg-[#5E17EB] mb-7" />
                        <p className="text-sm md:text-[14px] text-[#0A0A0A] leading-[25px] text-justify md:text-left font-medium">{block.description}</p>
                      </div>
                    </div>
                  </ScrollAnimatedElement>
                ))}
              </div>

              <WhyCanskaCta />
            </section>
          </Tabs.Item>

          {/* TAB 04: PORTFOLIO BUILDING */}
          <Tabs.Item active={activeTab === 3} title={renderTabTitle("04", "Portfolio Building", 3)}>
            <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">
              
              <ScrollAnimatedElement className="w-full" duration={0.5} yOffset={20}>
                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                  <Image
                    src="/img/whycanska-banner.svg"
                    alt="Graduating students"
                    fill
                    priority
                    className="object-cover object-center absolute w-full h-full"
                  />
                  <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Portfolio Building</h1>
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                </div>
                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[54px] max-w-[896px]'>
                  Portfolio Building for Elite Scholarships — seven pillars that turn a student profile into compelling, unfakeable proof of worth...
                </p>
              </ScrollAnimatedElement>

              <div className="flex flex-col gap-[20px] mb-[40px] xl:mb-[69px]">
                {portfolioBuilding.map((block, index) => (
                  <ScrollAnimatedElement 
                    key={block.id} 
                    duration={0.5} 
                    delay={index * 0.08} 
                    yOffset={30}
                  >
                    <div className="bg-white border border-[#5E17EB4D] rounded-3xl p-6 md:p-[40px_40px_24px_40px] flex flex-col md:flex-row gap-6 md:gap-10 items-start transition-all duration-300 hover:shadow-md shadow-[0px_20px_60px_0px_#5E17EB1A]">
                      <div className="flex flex-col items-start flex-shrink-0 lg:min-w-[186px] ">
                        <span className="text-[72px] font-[900] text-[#FFB433] leading-[72px] tracking-tight">{block.id}</span>
                        <div className="w-[48px] h-[3px] bg-[#5E17EB] mt-3" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h2 className="text-xl md:text-2xl leading-[32px] font-[800] text-[#0A0A0A] mb-4">{block.title}</h2>
                        <h3 className="text-sm md:text-base leading-[25px] font-medium text-[#0A0A0A] mb-3">{block.subtitle}</h3>
                        <div className="w-full h-[1px] bg-[#5E17EB] mb-7" />
                        <p className="text-sm md:text-[14px] text-[#0A0A0A] leading-[25px] text-justify md:text-left font-medium">{block.description}</p>
                      </div>
                    </div>
                  </ScrollAnimatedElement>
                ))}
              </div>

              <WhyCanskaCta />
            </section>
          </Tabs.Item>

        </Tabs>
      </div>
    </div>
  );
}

// Sub-Component to avoid repeating identical CTA blocks inside each Tab configuration
function WhyCanskaCta() {
  return (
    <ScrollAnimatedElement duration={0.6} yOffset={25}>
      <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[56px] flex items-center bg-[#5E17EB] text-white rounded-[24px] relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] -top-[12px] -left-[200px] bg-[#FFFFFF1A] blur-[64px] rounded-full z-30 pointer-events-none" />
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
          
          <div className="flex flex-col max-w-[880px] gap-[12px]">
            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[16px]">
              Next Up
            </span>
            <h2 className="max-w-[926px] text-4xl sm:text-5xl md:text-[36px] font-bold leading-normal md:leading-[40px] tracking-[-1.92px]">
              Continue to <span className="text-[#FFB433]">University Prep</span>
            </h2>
            <p className="max-w-[576px] text-white/80 text-base font-normal leading-[26px]">
              From the world's top 50 universities to scholarship architecture and visa precision
              — a complete preparation system that turns ambition into acceptance letters and full-ride awards.
            </p>
          </div>

          <div className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0">
            <Link
              href="/quad-lesson"
              className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] min-w-[232px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group"
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
    </ScrollAnimatedElement>
  )
}


export default WhyCanska
