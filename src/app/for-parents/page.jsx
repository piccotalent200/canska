import React, { Suspense } from 'react'
import ForParents from '../../Components/ForParents'

const ForParentsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ForParents/>
    </Suspense>
  )
}

export default ForParentsPage
