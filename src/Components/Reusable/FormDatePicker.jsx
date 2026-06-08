'use client';

import React from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

// 1. Extract your custom SVG to a clean sub-component
const CustomCalendarIcon = () => (
    <svg 
        width="13" 
        height="13" 
        viewBox="0 0 13 13" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M11.0128 1.09375H10.401V0H9.17737V1.09375H3.05912V0H1.83547V1.09375H1.22365C0.550642 1.09375 0 1.58594 0 2.1875V10.9375C0 11.5391 0.550642 12.0312 1.22365 12.0312H11.0128C11.6858 12.0312 12.2365 11.5391 12.2365 10.9375V2.1875C12.2365 1.58594 11.6858 1.09375 11.0128 1.09375ZM11.0128 10.9375H1.22365V3.82812H11.0128V10.9375Z" 
            fill="black"
        />
    </svg>
);

export function FormDatePicker({ label, value, onChange, placeholder = "dd - mm - yyyy" }) {
    return (
        <DatePicker
            /* Converts date string back to dayjs object instance */
            value={value ? dayjs(value) : null}
            /* Returns clean standard format back to parent state handler */
            onChange={(date, dateString) => onChange(dateString)}
            format="DD - MM - YYYY"
            placeholder={placeholder}
            allowClear={false}
            
            // 2. Inject your custom SVG icon using suffixIcon
            suffixIcon={<CustomCalendarIcon />}

            // Combined w-full with style overrides ensures 100% parent container alignment
            className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:!border-[#6F2DAE] focus:!border-[#6F2DAE] focus-within:!border-[#6F2DAE] focus-within:!shadow-[0px_1px_2px_2px_#0000000D] text-sm font-normal transition-all duration-300"
            style={{
                width: '100%',
            }}
        />
    );
}