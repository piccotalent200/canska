"use client";

/**
 * Reusable styled checkbox row.
 * Props: id, checked, onChange, children (label content)
 */
const CheckboxItem = ({ id, checked, onChange, children }) => {
  return (
    <div className={`${checked ? "bg-[#FCF8F1]" : ""} rounded-xl p-[10px_14px] -mx-[14px]`}>
      <label
        htmlFor={id}
        className="text-sm leading-[20px] font-normal text-[#0A0A0A] cursor-pointer select-none flex items-center gap-[12px]"
      >
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-5 h-5 rounded accent-[#6F2DAE] border-gray-300 text-[#6F2DAE] cursor-pointer hidden peer"
        />
        <div className="rounded-[2px] border border-solid border-[#6F2DAE26] w-[18px] h-[18px] min-w-[18px] peer-checked:[&>img]:block peer-checked:bg-[#6750A4] bg-white flex justify-center items-center">
          <img src="/img/checkbox-tick.svg" alt="" className="hidden" />
        </div>
        <span>{children}</span>
      </label>
    </div>
  );
};

export default CheckboxItem;
