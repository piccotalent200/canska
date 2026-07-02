import WhyChooseCanska from '@/Components/WhyChooseCanska'
import ForParentsSkeleton from '@/utilities/Loader/ForParentsSkeleton'
import React, { Suspense } from 'react'

const WhyCanskaPage = () => {
  return (
   <Suspense fallback={<ForParentsSkeleton />}>
   <WhyChooseCanska />
   </Suspense>
  )
}

export default WhyCanskaPage
