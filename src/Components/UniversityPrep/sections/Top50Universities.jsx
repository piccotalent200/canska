'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement';
import { universityData } from '@/utilities/constants';

const Top50Universities = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const subTabsRef = useRef(null);

    const tabs = [
        { id: '01', num: '01', label: 'Rank 1-10' },
        { id: '02', num: '02', label: 'Rank 11-20' },
        { id: '03', num: '03', label: 'Rank 21-30' },
        { id: '04', num: '04', label: 'Rank 31-40' },
        { id: '05', num: '05', label: 'Rank 41-50' },
        { id: '06', num: '06', label: 'Rank 51-60' },
    ];

    // Main Tab State (Synced with URL)
    const urlTab = searchParams.get('rankTab');
    const initialTab = urlTab ? parseInt(urlTab, 10) : 0;
    const [activeSubTab, setActiveSubTab] = useState(initialTab);
    const [itemOffset, setItemOffset] = useState(0);

    // Inner Pagination State (Limit 5 items per page)
    const itemsPerPage = 5;
    const tabStartIndex = activeSubTab * 10;
    const tabEndIndex = tabStartIndex + 10;
    const currentTabUniversities = universityData.slice(tabStartIndex, tabEndIndex);
    const displayedUniversities = currentTabUniversities.slice(itemOffset, itemOffset + itemsPerPage);
    const pageCount = Math.ceil(currentTabUniversities.length / itemsPerPage);

    // Global Rank Calculations for the Result Tracker text
    const displayStartRank = tabStartIndex + itemOffset + 1;
    const displayEndRank = Math.min(tabStartIndex + itemOffset + itemsPerPage, universityData.length);
   

    useEffect(() => {
        if (urlTab !== null) {
            const parsed = parseInt(urlTab, 10);
            if (!isNaN(parsed) && parsed >= 0 && parsed < tabs.length) {
                setActiveSubTab(parsed);
            }
        }
    }, [urlTab, tabs.length]);

    // Reset pagination to page 1 whenever the main tab category changes
    const handleSubTabChange = (index) => {
        setActiveSubTab(index);
        setItemOffset(0);

        const params = new URLSearchParams(searchParams.toString());
        params.set('rankTab', index.toString());
        router.push(`${pathname}?${params.toString()}`, { scroll: false });

        if (subTabsRef.current) {
            const yOffset = -160;
            const yPosition = subTabsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % currentTabUniversities.length;
        setItemOffset(newOffset);

        if (subTabsRef.current) {
            const yOffset = -160;
            const yPosition = subTabsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };

    const renderTabTitle = (number, text, index) => {
        const isActive = activeSubTab === index;
        return (
            <div className={`flex flex-row items-center gap-2.5 h-[46px] px-5 rounded-full transition-all duration-200 shrink-0 font-bold text-[13.8px] cursor-pointer border border-transparent ${isActive
                    ? 'bg-[#5E17EB] text-white shadow-sm'
                    : 'bg-white text-[rgba(10,10,10,0.75)]  border-[#EDE7FB] hover:border-[#5E17EB]/40'
                }`}>
                <span
                    className="flex items-center justify-center w-6 h-6 rounded-full text-[12px] font-extrabold relative"
                    style={{ backgroundColor: isActive ? '#FFB433' : '#F4F1FE' }}
                >
                    <span style={{ color: isActive ? '#2D0B70' : '#5E17EB' }}>
                        {number}
                    </span>
                </span>
                <span>{text}</span>
            </div>
        );
    };

    return (
        <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">
            <ScrollAnimatedElement direction="up" delay={0.1}>
                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                    <Image
                        src="/img/whycanska-banner.svg"
                        alt="Graduating students throwing caps"
                        fill
                        priority
                        className="object-cover object-center absolute w-full h-full"
                    />
                    <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>TOP 50 Universities</h1>
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                </div>
                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-2 max-w-[896px]'>
                    Discover the unique value propositions, scholarship opportunities, and portfolio attributes of the world's top 50 universities and colleges.
                </p>
            </ScrollAnimatedElement>

            {/* Main Content Area Container */}
            <div className="w-full font-dm" ref={subTabsRef}>
                <div className="sticky top-[160px] z-10 bg-[rgba(251,250,255,0.9)] backdrop-blur-2xl py-3  flex flex-col gap-4">
                    <div className="whitespace-nowrap overflow-x-auto no-scrollbar flex items-center gap-[21px]">
                        {tabs.map((tab, tabIdx) => (
                            <button
                                key={tab.id}
                                onClick={() => handleSubTabChange(tabIdx)}
                                className="focus:outline-none bg-transparent border-0 p-0 m-0"
                            >
                                {renderTabTitle(tab.num, tab.label, tabIdx)}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
                        <div className="text-sm leading-[20px] font-bold text-black">
                            Showing rank {displayStartRank}-{displayEndRank} of {universityData.length}
                        </div>
                    </div>
                </div>

                {/* Listing Content Cards Grid Stack */}
                <div className="flex flex-col gap-[20px] mt-2 mb-[40px] xl:mb-[69px] scroll-mt-72">
                    {displayedUniversities.map((uni) => (
                        <article
                            key={uni.id}
                            id={uni.id}
                            className="scroll-mt-72 rounded-2xl border border-[#5E17EB66] bg-white p-[24px_24px_34px_24px] text-[#0A0A0A]"
                        >
                            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                                <div className="flex h-12 w-12 flex-col self-start items-center justify-center rounded-xl border border-[#D4AF3780] bg-[#D4AF3726] shadow-[2px_2px_2px_rgba(0,0,0,0.1)]">
                                    <span className="text-[9px] font-extrabold leading-none tracking-[1.35px] text-[#D4AF37]">
                                        RANK
                                    </span>
                                    <span className="text-base font-bold leading-6 text-[#D4AF37]">
                                        {uni.rank}
                                    </span>
                                </div>

                                <div className="flex h-[69px] w-[220px] items-center justify-center rounded-xl border border-[#EAE2FC] bg-white px-4">
                                    <div className="relative h-13 w-full flex items-center justify-center">
                                        <Image
                                            src={uni.logoSrc}
                                            alt={`${uni.name} Logo`}
                                            width={200}
                                            height={52}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center">
                                    <h2 className="text-2xl font-medium leading-5 text-[#0A0A0A]">
                                        {uni.name}
                                    </h2>
                                    <Link
                                        href={uni.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center gap-[10px] text-sm font-normal leading-5 text-[#5E17EB] hover:underline"
                                    >
                                        Official site
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.75 0.75H2.41667C1.97464 0.75 1.55072 0.925595 1.23816 1.23816C0.925595 1.55072 0.75 1.97464 0.75 2.41667V12.4167C0.75 12.8587 0.925595 13.2826 1.23816 13.5952C1.55072 13.9077 1.97464 14.0833 2.41667 14.0833H12.4167C12.8587 14.0833 13.2826 13.9077 13.5952 13.5952C13.9077 13.2826 14.0833 12.8587 14.0833 12.4167V9.08333M7.41667 7.41667L14.0833 0.75M9.91667 0.75H14.0833V4.91667" stroke="#5E17EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-[26px] rounded-xl bg-[#5E17EB1A] px-[13px] py-2.5">
                                <p className="text-sm font-bold leading-[23px]">
                                    {uni.highlight}
                                </p>
                            </div>

                            <div className="mt-[17px] pt-[23px] border-t border-solid border-[#EDE7FB]">
                                <p className="text-sm font-medium leading-[22px] text-[#0A0A0A]">
                                    {uni.description}
                                </p>
                            </div>
                        </article>
                    ))}


                {/* Pagination matching your design circles layout */}
                <ReactPaginate
                    previousLabel={null}
                    nextLabel={null}
                    breakLabel="..."
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    forcePage={Math.floor(itemOffset / itemsPerPage)}
                    containerClassName="flex items-center justify-center gap-5"
                    pageClassName="block"
                    pageLinkClassName="flex items-center cursor-pointer justify-center w-7 h-7 rounded-full bg-[#F4F1FE] text-[#5E17EB] text-xs font-bold transition-all duration-200 hover:bg-[#5E17EB]/10"
                    activeLinkClassName="!bg-[#5E17EB] !text-[#FFFFFF] shadow-sm"
                    breakClassName="text-gray-400 font-bold px-1"
                    disabledClassName="opacity-40 pointer-events-none"
                />
                </div>


            </div>

            {/* Next Up / CTA Section */}
            <ScrollAnimatedElement direction="up" delay={0.15}>
                <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[56px] flex items-center bg-[#5E17EB] text-white rounded-[24px] relative overflow-hidden">
                    <div className="absolute w-[400px] h-[400px] -top-[12px] -left-[200px] bg-[#FFFFFF1A] blur-[64px] rounded-full z-30 pointer-events-none" />
                    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
                        <div className="flex flex-col max-w-[880px] gap-[12px]">
                            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[16px]">
                                Next Up
                            </span>
                            <h2 className="max-w-[926px] text-4xl sm:text-5xl md:text-[36px] font-bold leading-normal tracking-[-1.92px]">
                                Continue to <span className=" text-[#FFB433]">For Parents</span>
                            </h2>
                            <p className="max-w-[576px] text-white/80 text-base font-normal leading-[26px]">
                                Parenting is the ultimate long-term investment...
                            </p>
                        </div>
                        <div className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0">
                            <Link
                                href="/quad-lesson"
                                className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] min-w-[201px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group"
                            >
                                <span className="flex-1 text-left">Read For Parents</span>
                                <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                                    <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#2D0B70" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>
            </ScrollAnimatedElement>

        </section>
    );
};

export default Top50Universities;