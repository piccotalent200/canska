'use client'
import React, { useRef } from 'react'
import { verticalsData, verticalsDataFlyers, verticalsDataMakers, verticalsDataRisers } from '@/utilities/constants'
import HeroSection from './sections/HeroSection'
import PhaseNavigation from './sections/PhaseNavigation'
import PhaseSection from './sections/PhaseSection'
import CtaSection from './sections/CtaSection'

const QuadLessonVerticals = () => {
    const seekersRef = useRef(null)
    const makersRef = useRef(null)
    const risersRef = useRef(null)
    const flyersRef = useRef(null)

    const sectionRefs = [seekersRef, makersRef, risersRef, flyersRef]
    

    return (
        <div className='font-dm'>
            <section className="relative w-full bg-[#1F232E] overflow-hidden flex flex-col justify-between isolation-isolate">
                <HeroSection />
                <PhaseNavigation sectionRefs={sectionRefs} />
            </section>

            {/* Seekers Phase */}
            <PhaseSection
                sectionRef={seekersRef}
                id="seekers"
                bgColor="#FAFAFC"
                accentColor="#3B82F6"
                phaseNumber={1}
                totalPhases={4}
                image="/img/seeker-phase-apple.svg"
                imageAlt="Seekers Phase - Apple resting on stack of library books"
                ages="Ages 8, 9, and 10"
                phaseName="Seekers"
                majorFocus="Curiosity and Discovery"
                subheading="Phase Overview"
                headline='Awaken <span style="color:#3B82F6;font-style:italic;font-weight:500">curiosity</span> &amp; character.'
                description="The Seekers Phase is designed to awaken curiosity, character, competence, and self-confidence. Through communication, scientific inquiry, creative expression, practical life skills, emotional intelligence, and well-organised exploration, students develop the foundational habits and mindsets required to become independent learners, thinkers, responsible citizens, and future leaders in an increasingly competitive world."
                verticalsData={verticalsData}
            />

            {/* Makers Phase */}
            <PhaseSection
                sectionRef={makersRef}
                id="makers"
                bgColor="#FFFFFF"
                accentColor="#10B981"
                phaseNumber={2}
                totalPhases={4}
                image="/img/maker-phase.svg"
                imageAlt="Maker Phase"
                ages="Ages 11, 12, and 13"
                phaseName="Makers"
                majorFocus='"Spike" Mastery and Projects'
                subheading="Phase Overview"
                headline='Turn curiosity into <span style="color:#10B981;font-style:italic;font-weight:500">skill.</span>'
                description="The Makers Phase transforms curiosities into skills through creation, experimentation, and execution. Students begin moving from guided exploration toward independent production by building projects, solving real-world problems, strengthening technical eloquence, and developing personal responsibility. This phase emphasises initiative, resilience, strategic thinking, and confidence to convert ideas into tangible outcomes."
                verticalsData={verticalsDataMakers}
            />

            {/* Risers Phase */}
            <PhaseSection
                sectionRef={risersRef}
                id="risers"
                bgColor="#FAF8F3"
                accentColor="#F97316"
                phaseNumber={3}
                totalPhases={4}
                image="/img/risers-phase.svg"
                imageAlt="Risers Phase"
                ages="Ages 14, 15, and 16"
                phaseName="Risers"
                majorFocus="Competitions and Validations"
                subheading="Phase Overview"
                headline='Validate skills with <span style="color:#F97316;font-style:italic;font-weight:500">real-world standards.</span>'
                description="The Risers Phase transforms disciplined learners into capable performers, strategic thinkers, and credible young professionals. Students begin operating within real-world standards by validating their major skills through competitions, projects, certifications, technical execution, and leadership duties. This phase emphasises practical thinking, mastery, resilience, credibility, and the aptitude to perform effectively under pressure."
                verticalsData={verticalsDataRisers}
            />

            {/* Flyers Phase */}
            <PhaseSection
                sectionRef={flyersRef}
                id="flyers"
                bgColor="#FFFFFF"
                accentColor="#5E17EB"
                phaseNumber={4}
                totalPhases={4}
                image="/img/flyers-phase.svg"
                imageAlt="Flyers Phase"
                ages="Ages 17, 18, and 19"
                phaseName="Flyers"
                majorFocus="Leadership and Real-World Readiness"
                subheading="Phase Overview"
                headline='Become an <span style="color:#5E17EB;font-style:italic;font-weight:500">independent</span> young adult.'
                description="The Flyers Phase guides students through their ultimate transition into self-reliance, leadership, and purpose-driven execution. As independent young adults, they refine their specialized skill sets, execute high-level capstone projects, and begin navigating professional or academic landscapes with total confidence. This final layer cements executive execution, long-term strategy, and personal accountability."
                verticalsData={verticalsDataFlyers}
                showFloatingBadge={false}
            />

            {/* CTA Section */}
            <CtaSection />
        </div>
    )
}

export default QuadLessonVerticals
