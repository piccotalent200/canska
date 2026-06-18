"use client";

const RuleItem = ({
  label,
  isValid = false,
  hasValue = false,
}) => {
  const strokeColor = isValid
    ? "stroke-[#139207]" // Green
    : hasValue
    ? "stroke-[#F5070B]" // Red
    : "stroke-[#0A0A0A99]"; // Default Gray

  const textColor = isValid
    ? "text-[#139207]"
    : hasValue
    ? "text-[#F5070B]"
    : "text-[#0A0A0A99]";

  return (
    <div className="flex items-center gap-2">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_265_4040)">
          <path
            d="M6.99984 12.8334C10.2215 12.8334 12.8332 10.2217 12.8332 7.00002C12.8332 3.77836 10.2215 1.16669 6.99984 1.16669C3.77818 1.16669 1.1665 3.77836 1.1665 7.00002C1.1665 10.2217 3.77818 12.8334 6.99984 12.8334Z"
            className={`${strokeColor} transition-colors duration-200`}
            strokeWidth="1.16667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 4.66669V7.00002"
            className={`${strokeColor} transition-colors duration-200`}
            strokeWidth="1.16667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 9.33331H7.00583"
            className={`${strokeColor} transition-colors duration-200`}
            strokeWidth="1.16667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>

      <span
        className={`text-xs leading-[16px] font-normal transition-colors duration-200 ${textColor}`}
      >
        {label}
      </span>
    </div>
  );
};

export default RuleItem;
