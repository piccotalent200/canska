import React, { Suspense } from 'react'
import Faq from '@/Components/Faq'
import ForParentsSkeleton from '@/utilities/Loader/ForParentsSkeleton'

const FaqPage = () => {
  return (
    <>
    <Suspense fallback={<ForParentsSkeleton />}>
      <Faq/>
    </Suspense> 
    </>
  )
}

export default FaqPage
