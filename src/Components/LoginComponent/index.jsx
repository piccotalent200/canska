"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastMessage } from "@/api/serversideaction/toast";

const LoginComponent = () => {
  const router = useRouter();

  // Form state management
  const [studentNo, setStudentNo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    const newErrors = {};
    if (!studentNo.trim()) {
      newErrors.studentNo = "Student number is required";
    }

    if (!username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setIsLoading(true);
    ToastMessage({ type: "success", message: "Welcome back! Login successful."});
  };

  return (
    <>
      <div className="w-full min-h-screen bg-[#5E17EB] flex flex-col items-center justify-center font-dm select-none">
        <div className=" p-[40px_16px] lg:p-[42px_42px] grow flex flex-col items-center justify-center">
          {/* Top Badge Container */}
          <div className="flex items-center gap-[12px] mb-[12px] tracking-widest text-center uppercase max-sm:flex-col ">
            {/* World's First */}
            <span className="bg-[#FFB433F2] text-[#1F232E] p-[6px_12px] rounded-full flex items-center justify-center text-[11px] leading-[16px] font-bold tracking-[1.76px]">
              World's First
            </span>
            {/* Scholarship Incubator */}
            <span className="bg-[#FFFFFF] text-[#12151E] border border-solid border-[#FFFFFF] p-[6px_12px] rounded-full flex items-center justify-center text-[11px] leading-[16px] font-bold tracking-[1.76px]">
              Scholarship Incubator
            </span>
          </div>

          {/* Main Authentication Box (Rectangle 2) */}
          <div className="w-full max-w-[1096px] bg-white shadow-[5px_4px_4px_4px_#0000001A] rounded-[24px] overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] grow">
            <div className="relative min-h-[350px] lg:min-h-full w-full hidden sm:block flex items-center justify-center">
              <img
                src="/img/students.svg"
                alt="Students sitting together"
                className="w-full h-full object-cover absolute"
              />
            </div>

            {/* Right Hand Column: Form Fields Wrapper */}
            <div className="w-full h-full flex flex-col justify-between text-left">
              <div className="w-full p-[24px_16px_14px] sm:p-[40px_16px_14px] lg:p-[42px_16px_14px]">
                <div className="w-full max-w-[450px] mx-auto">
                  {/* Title Header */}
                  <h1 className="text-3xl sm:text-[40px] leading-[60px] font-normal  tracking-tight text-[#0A0A0A] mb-[17px]">
                    Welcome to Canska
                  </h1>

                  {/* Forms Layout */}
                  <form
                    autoComplete="off"
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-[24px]"
                  >
                    {/* Student Number Input */}
                    <div className="flex flex-col space-y-[8px]">
                      <label className="text-sm leading-[16px] font-medium text-[#0A0A0AD9]">
                        Student No
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your student number"
                        value={studentNo}
                        onChange={(e) => {
                          setStudentNo(e.target.value.trim());
                          setErrors((p) => ({ ...p, studentNo: "" }));
                        }}
                        className={`w-full h-[46px] px-4 bg-white border border-[#6F2DAE66] rounded-xl outline-hidden text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300 ${errors.studentNo ? "border-[#F5070B] hover:border-[#F5070B] focus:border-[#F5070B] focus:shadow-[0px_1px_2px_2px_#F5070B33]" : "border-[#6F2DAE26] hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D]"}`}
                      />
                      {errors.studentNo && (
                        <p className="text-xs leading-4 font-medium text-[#F5070B]">{errors.studentNo}</p>
                      )}
                    </div>

                    {/* Username Input */}
                    <div className="flex flex-col space-y-[8px]">
                      <label className="text-sm leading-[16px] font-medium text-[#0A0A0AD9]">
                        User Name
                      </label>
                      <input
                        type="text"
                        name="login_username"
                        autoComplete="new-password"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value.trim());
                          setErrors((p) => ({ ...p, username: "" }));
                        }}
                        className={`w-full h-[46px] px-4 bg-white border border-[#6F2DAE66] rounded-xl outline-hidden text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300 ${errors.username ? "border-[#F5070B] hover:border-[#F5070B] focus:border-[#F5070B] focus:shadow-[0px_1px_2px_2px_#F5070B33]" : "border-[#6F2DAE26] hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D]"}`}
                      />
                      {errors.username && (
                        <p className="text-xs leading-4 font-medium text-[#F5070B]">{errors.username}</p>
                      )}
                    </div>

                    {/* Password Input with Toggle */}
                    <div className="flex flex-col space-y-[8px] relative">
                      <label className="text-sm leading-[16px] font-medium text-[#0A0A0AD9]">
                        Password
                      </label>
                      <div className="relative w-full">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="login_password"
                          autoComplete="new-password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value.trim());
                            setErrors((p) => ({ ...p, password: "" }));
                          }}
                          className={`w-full h-[46px] px-4 bg-white border border-[#6F2DAE66] rounded-xl outline-hidden text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300 ${errors.password ? "border-[#F5070B] hover:border-[#F5070B] focus:border-[#F5070B] focus:shadow-[0px_1px_2px_2px_#F5070B33]" : "border-[#6F2DAE26] hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D]"}`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0A0A0A] transition-colors cursor-pointer"
                        >
                          {showPassword ? (
                            <img src="/img/show.svg" alt="show" />
                          ) : (
                            <img src="/img/hide.svg" alt="hide" />
                          )}
                        </button>
                        
                      </div>
                      {errors.password && (
                        <p className="text-xs leading-4 font-medium text-[#F5070B]">{errors.password}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={() => handleSubmit()}
                      type="submit"
                      className="w-full h-12 mt-[27px] bg-[linear-gradient(90deg,_#5E17EB_0%,_#350D85_100%)] hover:bg-[linear-gradient(90deg,_#350D85_0%,_#5E17EB_100%)] text-[18px] leading-[24px] text-white font-bold rounded-full flex items-center justify-center gap-[10px]  transition-all cursor-pointer"
                    >
                      Let's Go
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M12 19L19 12L12 5"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>

              {/* Bottom Security Box Notice */}
              <div className=" bg-[#F6F1E7] p-[20px_16px] sm:p-[20px_25px]">
                <span className="text-[12px] leading-[20px] font-bold text-[#F11313]">
                  Security Notice:
                </span>
                <p className="text-[12px] leading-[20px] font-normal text-[#0A0A0A]">
                  Enter your username and password precisely as created,
                  including correct letter case, numbers, and special
                  characters. For security, the system uses progressive
                  lockouts. After five failed login attempts, access is
                  temporarily locked for thirty minutes, followed by longer
                  lockouts for repetitive failures. Multi factor authentication
                  is required using an authenticator app, registered devices, or
                  backup codes. If access is lost, account recovery is available
                  through verified email, phone, or identity checks. Recovery
                  requests may include a security review. All login and recovery
                  activity is logged for protection.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[16px] justify-between p-[30px_64px] border-t border-solid border-[#D9D9D9]/50 w-full">
          <p className="text-xs leading-[18px] font-normal text-[#FFFFFFCC]">
            © 2026 Canska Education Services Pvt. Ltd. All Rights Reserved.
          </p>

          <ul className="flex gap-[20px] items-center">
            <li>
              <a
                href=""
                className="text-xs leading-[18px] font-normal text-[#FFFFFFCC] hover:text-white"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-xs leading-[18px] font-normal text-[#FFFFFFCC] hover:text-white"
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
