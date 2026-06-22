import UniversityPrep from '@/Components/UniversityPrep'
import React from 'react'
import { Suspense } from "react";

const UniversityPrepPage = () => {
  return (
   <>
    <Suspense fallback={<div>Loading...</div>}>
      <UniversityPrep/>
    </Suspense>
   </>
  )
}

export default UniversityPrepPage
