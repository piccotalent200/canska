import React from 'react'
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement'
import { steps } from '@/utilities/constants'

const SustainabilityImpact = () => {

  return (
    <section className="bg-[#FAF8F5] text-[#1A1D20] antialiased p-4 sm:p-6 md:p-8 lg:p-16 flex items-center justify-center">
      <ScrollAnimatedElement className="w-full mx-auto space-y-8 lg:space-y-12">

        {/* Header Section */}
        <ScrollAnimatedElement delay={0.1}>
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-6 space-y-3 max-w-full lg:max-w-[473px]">
              <ScrollAnimatedElement delay={0.2}>
                <span className="text-[14px] font-semibold leading-[20px] tracking-[2.5px] text-[#5819EB] uppercase block mb-4">
                  An Honest Note
                </span>
              </ScrollAnimatedElement>
              
              <ScrollAnimatedElement delay={0.3}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight lg:leading-[49px] font-bold tracking-tight text-neutral-900">
                  Print Less. <span className="text-[#5819EB]">Save More.</span>
                </h1>
              </ScrollAnimatedElement>
            </div>

            <ScrollAnimatedElement delay={0.4} className="lg:col-span-6 max-w-full lg:max-w-[575px] ms-auto">
              <p className="text-sm sm:text-base lg:text-[18px] text-[#616875] leading-[24px] sm:leading-[28px] lg:leading-[30px] font-normal">
                Every page you avoid printing is a step towards protecting our planet. You may have often seen the line,{' '}
                <span className="text-[#5819EB]">
                  &ldquo;Please consider the environment before printing this email.&rdquo;
                </span>{' '}
                But how often do we actually reflect on it? Printing has become a habit &mdash; but every sheet of paper comes at a cost to our forests, water, and energy resources.
              </p>
            </ScrollAnimatedElement>
          </header>
        </ScrollAnimatedElement>

        {/* Five-Column Responsive Grid with Horizontal Dividers */}
        <ScrollAnimatedElement delay={0.5} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-b border-neutral-200/80 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/80">
          {steps.map((step, index) => (
            <ScrollAnimatedElement
              key={step.id}
              delay={0.6 + (index * 0.1)}
              className="group p-4 sm:p-6 lg:p-8 flex flex-col justify-start transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-[1.02] hover:z-10 rounded-xl md:rounded-none cursor-default"
            >
              {/* Step ID */}
              <span className="text-2xl sm:text-3xl lg:text-[36px] leading-[32px] lg:leading-[40px] font-semibold text-[#5819EB] block transition-transform duration-300 group-hover:-translate-y-1 mb-4">
                {step.id}
              </span>

              {/* Step Title */}
              <h3 className="text-base sm:text-lg lg:text-[18px] leading-[24px] lg:leading-[28px] font-semibold text-[#1F242E] group-hover:text-[#5822E3] transition-colors duration-200 mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm sm:text-sm lg:text-[14px] text-[#616875] leading-[18px] sm:leading-[20px] lg:leading-[22px] font-normal group-hover:text-neutral-700 transition-colors duration-200">
                {step.description}
              </p>
            </ScrollAnimatedElement>
          ))}
        </ScrollAnimatedElement>

        {/* Footer Catchphrase / Summary Text */}
        <ScrollAnimatedElement delay={1.1}>
          <footer className="text-center">
            <p className="text-lg sm:text-xl lg:text-[24px] leading-[28px] lg:leading-[32px] font-semibold text-[#1F242E] tracking-tight">
              Think before you print. Small actions lead to big impact.
            </p>
          </footer>
        </ScrollAnimatedElement>

      </ScrollAnimatedElement>
    </section>
  )
}

export default SustainabilityImpact