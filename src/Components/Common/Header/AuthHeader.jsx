import Link from 'next/link'
import React from 'react'

const AuthHeader = () => {
  return (
     <header className="bg-[#5E17EB] border-b border-solid border-[#A378F8] flex items-center justify-center h-[83px] sticky top-0 z-[1]">
      <Link href="/">
        <img src="/img/canska-white.svg" alt="" />
      </Link>
    </header>
  )
}

export default AuthHeader