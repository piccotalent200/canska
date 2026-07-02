import Legal from '@/Components/Legal'
import React from 'react'

const PrivacyPolicyPage = async ({ params }) => {
  const { slug } = await params;
  return (
    <>
    <Legal slug={slug} />
    </>
  )
}

export default PrivacyPolicyPage