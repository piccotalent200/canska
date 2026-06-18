'use client';

import React from 'react';
import Select, { components } from 'react-select';

// 1. Create a Custom Dropdown Indicator using your SVG
const CustomDropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M4 6L8 10L12 6" 
                    stroke="#1E1E1E" 
                    strokeWidth="1.6" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        </components.DropdownIndicator>
    );
};

const FormSelect = ({ label, options, value, onChange, instanceId }) => {
    const customSelectStyles = {
        control: (provided, state) => ({
            ...provided,
            height: '46px',
            borderRadius: '12px',
            borderColor: state.isFocused ? '#6F2DAE' : '#6F2DAE26',
            boxShadow: state.isFocused ? '0px 1px 2px 2px #0000000D' : 'none',
            backgroundColor: '#FFFFFF',
            paddingLeft: '16px',
            paddingRight: '16px',
            fontSize: '14px',
            color: '#0A0A0A',
            '&:hover': {
                borderColor: '#6F2DAE',
            },
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out'
        }),

        menu: (provided, state) => ({
            ...provided,
            border: '1px solid #6F2DAE26',
            boxShadow: 'none'
        }),

        option: (provided, state) => ({
            ...provided,
            fontSize: '14px',
            backgroundColor: state.isSelected
                ? '#6F2DAE40'
                : state.isFocused
                    ? '#6F2DAE0D'
                    : '#FFFFFF',
            color: state.isSelected ? '#0A0A0A' : '#0A0A0A',
            '&:active': {
                backgroundColor: '#6F2DAE',
            }
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#0A0A0A',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#9CA3AF',
        }),
        // 2. Added dropdownIndicator & valueContainer style resets to ensure alignment
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: 0, // Clears default react-select padding around the icon
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: 0, // Clears layout conflicts with your inner control paddings
        }),
        indicatorSeparator: () => ({
            display: "none",
        }),
    };

    return (
        <Select
            instanceId={instanceId ?? label}
            options={options}
            value={value}
            onChange={onChange}
            styles={customSelectStyles}
            isSearchable={false}
            // 3. Inject the custom indicator component here
            components={{ DropdownIndicator: CustomDropdownIndicator }}
        />
    );
}

export default FormSelect;