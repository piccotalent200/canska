"use client";

/**
 * Reusable labeled input field.
 * Props: label, placeholder, value, onChange, error, success, id, inputProps
 * Note: type is intentionally omitted — all inputs use type="text" to avoid
 * browser-native validation UI on tel/number fields.
 */
const FormField = ({
  label,
  placeholder = "",
  value,
  onChange,
  error,
  success,
  id,
  inputProps = {},
}) => {
  return (
    <div className="space-y-[10px] relative">
      {label && (
        <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
          {label}
        </label>
      )}
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        className={`w-full h-[46px] px-4 bg-white border rounded-xl outline-hidden text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300 ${
          error
            ? "border-[#F5070B] hover:border-[#F5070B] focus:border-[#F5070B] focus:shadow-[0px_1px_2px_2px_#F5070B33]"
            : "border-[#6F2DAE26] hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D]"
        }`}
        {...inputProps}
      />
      {error && (
        <p className="text-xs leading-[16px] font-medium text-[#F5070B]">{error}</p>
      )}
      {!error && success && (
        <p className="text-xs leading-[16px] font-medium text-[#139207]">{success}</p>
      )}
    </div>
  );
};

export default FormField;
