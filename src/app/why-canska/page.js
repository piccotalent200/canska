import WhyChooseCanska from '@/Components/WhyChooseCanska'
import React, { Suspense } from 'react'

const WhyCanskaPage = () => {
  return (
   <Suspense fallback={<div>Loading...</div>}>
   <WhyChooseCanska />
   </Suspense>
  )
}

export default WhyCanskaPage
