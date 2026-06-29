import React from 'react'
import Image from 'next/image'

const ParentalCommitment = () => {
  return (
    <>
      <section className="w-full p-[20px_16px_60px_16px] sm:p-[40px_32px_80px_32px] lg:p-[64px_61px_99px] bg-[#FAFAFC]">
        <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
            <Image
                src="/img/the-strategic-value-banner.svg"
                alt="Graduating students throwing caps against city skyline"
                fill
                priority
                className="object-cover object-center absolute w-full h-full"
            />
            <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Parental Commitment</h1> 
        </div>

        <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[42px]'>
            Parenthood is the architecture of the heart — depth before height, presence over performance, legacy over likes. The real return is measured in values, resilience, and a life of significance.
        </p>
      </section>
    </>
  )
}

export default ParentalCommitment
