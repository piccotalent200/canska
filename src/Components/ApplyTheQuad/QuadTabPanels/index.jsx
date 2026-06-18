import { TabPanel, TabPanels } from '@headlessui/react'
import React from 'react'
import StudenInformation from './StudenInformation'
import ContactInformation from './ContactInformation'
import SocialMediaInformation from './SocialMediaInformation'
import LanguageInformation from './LanguageInformation'
import SchoolInformation from './SchoolInformation'
import AcademicPerformance from './AcademicPerformance'
import NonAcademicPerformance from './NonAcademicPerformance'

const QuadTabPanels = () => {
    return (
        <>
            <TabPanels>
                <TabPanel>
                    <StudenInformation />
                </TabPanel>

                <TabPanel>
                    <ContactInformation />
                </TabPanel>

                <TabPanel>
                    <SocialMediaInformation />
                </TabPanel>

                <TabPanel>
                    <LanguageInformation />
                </TabPanel>

                <TabPanel>
                    <SchoolInformation />
                </TabPanel>

                <TabPanel>
                    <AcademicPerformance />
                </TabPanel>

                <TabPanel>
                    <NonAcademicPerformance />
                </TabPanel>

            </TabPanels>
        </>
    )
}

export default QuadTabPanels
