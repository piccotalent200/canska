import React from 'react'
import HeroComponent from './HeroComponent'
import SectionIndicator from './SectionIndicator'
import PortfolioOverviewComponent from './PortfolioOverviewComponent'
import StudentPortfolioShowcase from './StudentPortfolioShowcase'
import UniversityEvaluationCriteria from './UniversityEvaluationCriteria'
import StudyAbroadBenefits from './StudyAbroadBenefits'
import UGCostComparison from './UGCostComparison'
import ScholarshipJourney from './ScholarshipJourney'
import SustainabilityImpact from './SustainabilityImpact'
import StudentSuccessStory from './StudentSuccessStory'
import OutcomeComparison from './OutcomeComparison'
import ContactComponent from './ContactComponent'
import ScholarshipMentorshipProgram from './ScholarshipMentorshipProgram'
import EarlyPlanningAwareness from './EarlyPlanningAwareness'
import QuadProgramRoadmap from './QuadProgramRoadmap'
import Marathon from './Marathon'
import TreeGrowthCalculator from './TreeGrowthCalculator'

const NewHomeComponent = () => {
    return (
        <div className='font-dm'>
            <SectionIndicator />
            <div id="hero">
                <HeroComponent />
            </div>
            <div id="marathon">
                <Marathon />
            </div>
            <div id="tree-growth">
                <TreeGrowthCalculator />
            </div>
            <div id="scholarship-mentorship">
                <ScholarshipMentorshipProgram />
            </div>
            <div id="early-planning">
                <EarlyPlanningAwareness />
            </div>
            <div id="quad-program">
                <QuadProgramRoadmap />
            </div>

            <div id="portfolio-overview">
                <PortfolioOverviewComponent />
            </div>
            <div id="student-portfolio">
                <StudentPortfolioShowcase />
            </div>
            <div id="university-evaluation">
                <UniversityEvaluationCriteria />
            </div>
            <div id="study-abroad">
                <StudyAbroadBenefits />
            </div>
            <div id="cost-comparison">
                <UGCostComparison />
            </div>
            <div id="scholarship-journey">
                <ScholarshipJourney />
            </div>
            <div id="outcome-comparison">
                <OutcomeComparison />
            </div>
            <div id="success-story">
                <StudentSuccessStory />
            </div>
            <div id="sustainability">
                <SustainabilityImpact />
            </div>
            <div id="contact">
                <ContactComponent />
            </div>
        </div>
    )
}

export default NewHomeComponent