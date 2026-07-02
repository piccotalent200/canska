import React from 'react';

const Shimmer = ({ className = '' }) => (
  <div className={`animate-pulse bg-linear-to-r from-[#e8e0fa] via-[#f4f1fe] to-[#e8e0fa] bg-size-[400%_100%] rounded ${className}`} />
);

const HeroSkeleton = () => (
  <section className="relative w-full overflow-hidden bg-[#2D0B70] p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[100px_61px_105px]">
    <div className="flex items-center gap-2 mb-8">
      <Shimmer className="h-4 w-12 rounded-full opacity-40" />
      <Shimmer className="h-3 w-3 rounded-full opacity-30" />
      <Shimmer className="h-4 w-24 rounded-full opacity-40" />
    </div>
    <div className="max-w-213 flex flex-col gap-5">
      <Shimmer className="h-3 w-48 rounded-full opacity-40" />
      <Shimmer className="h-14 w-72 md:w-105 rounded-lg opacity-50" />
      <div className="flex flex-col gap-2">
        <Shimmer className="h-4 w-full max-w-175 rounded opacity-40" />
        <Shimmer className="h-4 w-[80%] max-w-140 rounded opacity-40" />
        <Shimmer className="h-4 w-[60%] max-w-105 rounded opacity-40" />
      </div>
    </div>
  </section>
);

const TabBarSkeleton = () => (
  <div className="sticky top-20 z-20 flex items-center gap-2 p-4 sm:p-[16px_32px] lg:p-[16px_56px] bg-[rgba(251,250,255,0.9)] border-y border-[#EDE7FB] backdrop-blur-md overflow-x-auto">
    {[80, 112, 120, 128].map((w, i) => (
      <div
        key={i}
        className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border shrink-0 ${
          i === 0 ? 'border-[#5E17EB] bg-[#5E17EB]' : 'border-[#EDE7FB] bg-white'
        }`}
      >
        <Shimmer className={`w-6 h-6 rounded-full shrink-0 ${i === 0 ? 'opacity-60' : 'opacity-30'}`} />
        <Shimmer
          className={`h-4 rounded-full shrink-0 ${i === 0 ? 'opacity-60' : 'opacity-30'}`}
          style={{ width: `${w}px` }}
        />
      </div>
    ))}
  </div>
);

const ContentGroup = () => (
  <div className="space-y-5 mb-10">
    {/* Full-width gradient card */}
    <div className="w-full bg-linear-to-br from-[#2D0B70] via-[#5E17EB] to-[#4A11C0] rounded-3xl p-6 sm:p-10">
      <Shimmer className="w-9 h-9 rounded-xl mb-4 opacity-50" />
      <Shimmer className="h-8 w-3/4 rounded-lg mb-4 opacity-60" />
      <Shimmer className="h-4 w-full max-w-lg rounded mb-1 opacity-40" />
      <Shimmer className="h-4 w-[70%] rounded mb-4 opacity-40" />
      <div className="border-t border-white/10 pt-4 space-y-3">
        <Shimmer className="h-3.5 w-full rounded opacity-30" />
        <Shimmer className="h-3.5 w-[90%] rounded opacity-30" />
        <Shimmer className="h-3.5 w-[75%] rounded opacity-30" />
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {[0, 1].map((i) => (
        <div key={i} className="bg-white border border-[#5E17EB]/40 rounded-3xl p-6 sm:p-8 flex flex-col gap-4">
          <Shimmer className="h-6 w-3/5 rounded" />
          <Shimmer className="h-4 w-full rounded" />
          <Shimmer className="h-4 w-[85%] rounded" />
          <div className="border-t border-[#EDE7FB] pt-4 space-y-2.5">
            <Shimmer className="h-3.5 w-full rounded" />
            <Shimmer className="h-3.5 w-[90%] rounded" />
            <Shimmer className="h-3.5 w-[80%] rounded" />
            <Shimmer className="h-3.5 w-[65%] rounded" />
          </div>
        </div>
      ))}
    </div>
  </div>
);


const ContentSkeleton = () => (
  <div className="p-[20px_16px_60px_16px] sm:p-[40px_32px_80px_32px] lg:p-[64px_61px_99px] bg-[#FAFAFC]">
    <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-6 bg-[#2D0B70]/20">
      <Shimmer className="absolute inset-0 rounded-3xl opacity-60" />
      <div className="absolute bottom-8 left-12">
        <Shimmer className="h-10 w-48 rounded-lg opacity-50" />
      </div>
    </div>

    <div className="flex flex-col gap-2 mb-10 max-w-3xl">
      <Shimmer className="h-4 w-full rounded" />
      <Shimmer className="h-4 w-[90%] rounded" />
      <Shimmer className="h-4 w-[70%] rounded" />
    </div>

    <ContentGroup />
    <ContentGroup />
    <ContentGroup />
  </div>
);

const ForParentsSkeleton = () => (
  <div className="font-dm">
    <HeroSkeleton />
    <TabBarSkeleton />
    <ContentSkeleton />
  </div>
);

export default ForParentsSkeleton;
