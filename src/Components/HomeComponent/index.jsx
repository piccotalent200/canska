import React from 'react'
import UniversityAspirationComponent from './UniversityAspirationComponent'
import CrucialYearsComponent from './CrucialYearsComponent'
import WhatCanskaDoComponent from './WhatCanskaDoComponent'
import WhatsProblemComponent from './WhatsProblemComponent'
import HeroComponent from './HeroComponent'
import HeroComponentBlue from './HeroComponentBlue'
import UniversityAspirationComponentBlue from './UniversityAspirationComponentBlue'
import HeroComponentNew from './HeroComponentNew'

const HomeComponents = () => {
  return (
    <>
      <HeroComponentNew />
      {/* <HeroComponent/> */}
      {/* <HeroComponentBlue/> */}
      <UniversityAspirationComponent />
      <CrucialYearsComponent />
      <WhatCanskaDoComponent />
      <WhatsProblemComponent />
    </>
  )
}

export default HomeComponents