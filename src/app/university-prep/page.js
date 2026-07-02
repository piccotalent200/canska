import UniversityPrep from '@/Components/UniversityPrep'
import ForParentsSkeleton from '@/utilities/Loader/ForParentsSkeleton';
import React from 'react'
import { Suspense } from "react";

const UniversityPrepPage = () => {
  return (
   <>
    <Suspense fallback={<ForParentsSkeleton />}>
      <UniversityPrep/>
    </Suspense>
   </>
  )
}

export default UniversityPrepPage
