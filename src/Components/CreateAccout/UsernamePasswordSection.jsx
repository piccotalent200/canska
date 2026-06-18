"use client";

import { useState } from "react";
import RuleItem from "./RuleItem";
import FormField from "./FormField";

const inputBase = "w-full h-[46px] px-4 bg-white border rounded-xl outline-hidden text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300";
const inputNormal = "border-[#6F2DAE26] hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D]";
const inputError = "border-[#F5070B] hover:border-[#F5070B] focus:border-[#F5070B] focus:shadow-[0px_1px_2px_2px_#F5070B33]";

const UsernamePasswordSection = ({
  username, setUsername,
  retypeUsername, setRetypeUsername,
  email, setEmail,
  retypeEmail, setRetypeEmail,
  password, setPassword,
  retypePassword, setRetypePassword,
  verificationCode, setVerificationCode,
  isVerified,
  onSendCode,
  onVerify,
  usernameRules,
  passwordRules,
  errors = {},
  setErrors = () => {},
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const usernameMatch = retypeUsername && username === retypeUsername;
  const usernameNoMatch = retypeUsername && username !== retypeUsername;
  const passwordMatch = retypePassword && password === retypePassword;
  const passwordNoMatch = retypePassword && password !== retypePassword;

  const emailValid = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
  const emailMatch = retypeEmail && email === retypeEmail && emailValid && !errors.retypeEmail;
  const emailNoMatch = retypeEmail && email !== retypeEmail;

  return (
    <div className="bg-white rounded-3xl border border-solid border-[#6F2DAE1A] p-6 md:p-[34px_40px]">
      <div className="border-b border-[#6F2DAE1A] border-solid pb-[24px] mb-[24px]">
        <h2 className="text-[30px] leading-[26px] font-normal text-[#0A0A0A] mb-[8px]">
          Username & Password
        </h2>
        <p className="text-sm leading-[20px] font-normal text-[#0A0A0ACC]">
          Strong, unique credentials are your best defense against unauthorised access.
        </p>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 mb-[26px]">
          {/* Username column */}
          <div className="space-y-[20px]">
            {/* Create Username */}
            <div>
              <div id="field-username" className="space-y-[10px] relative">
                <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                  Create Username
                </label>
                <input
                  type="text"
                  placeholder="e.g., Velzet24$Aimo68!"
                  value={username}
                  maxLength={28}
                  autoComplete="off"
                  onChange={(e) => { setUsername(e.target.value.trim()); setErrors((p) => ({ ...p, username: "" })); }}
                  className={`${inputBase} ${errors.username ? inputError : inputNormal}`}
                />
                {errors.username && (
                  <p className="text-xs leading-[16px] font-medium text-[#F5070B]">{errors.username}</p>
                )}
              </div>
              <div className="bg-[#F6F1E7] rounded-xl p-4 space-y-[10px] mt-[16px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px]">
                  <RuleItem label="14–28 characters" isValid={usernameRules?.length} hasValue={username.length > 0} />
                  <RuleItem label="Uppercase A–Z" isValid={usernameRules?.uppercase} hasValue={username.length > 0} />
                  <RuleItem label="Lowercase a–z" isValid={usernameRules?.lowercase} hasValue={username.length > 0} />
                  <RuleItem label="Numbers 0–9" isValid={usernameRules?.number} hasValue={username.length > 0} />
                  <RuleItem label="2 specials (! @ # $ % & ? /)" isValid={usernameRules?.specials} hasValue={username.length > 0} />
                  <RuleItem label="Sample Username: Velzet24$Aimo68!" />
                </div>
                <p className="text-xs leading-[16px] font-normal text-[#0A0A0A99]">
                  Memorise your username or use a password manager. The username can&apos;t be changed. Never disclose or share your username via email or messaging apps.
                </p>
              </div>
            </div>

            {/* Retype Username */}
            <div id="field-retypeUsername" className="space-y-[10px] relative">
              <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                Retype Username
              </label>
              <input
                type="text"
                placeholder="Retype username"
                value={retypeUsername}
                autoComplete="off"
                maxLength={28}
                onChange={(e) => { setRetypeUsername(e.target.value.trim()); setErrors((p) => ({ ...p, retypeUsername: "" })); }}
                className={`${inputBase} ${(errors.retypeUsername || usernameNoMatch) ? inputError : inputNormal}`}
              />
              {errors.retypeUsername && (
                <p className="text-xs leading-[16px] font-medium text-[#F5070B]">{errors.retypeUsername}</p>
              )}
              {!errors.retypeUsername && usernameNoMatch && (
                <p className="text-xs leading-[16px] font-medium text-[#F5070B]">Usernames do not match</p>
              )}
              {!errors.retypeUsername && usernameMatch && (
                <p className="text-xs leading-[16px] font-medium text-[#139207]">Usernames match</p>
              )}
            </div>

            {/* Email */}
            <div id="field-email">
              <FormField
                label="Valid Email"
                placeholder="you@example.com"
                value={email}
                onChange={(val) => { setEmail(val.trim()); setErrors((prev) => ({ ...prev, email: "" })); }}
                error={errors.email}
              />
            </div>

            {/* Retype Email */}
            <div id="field-retypeEmail">
              <FormField
                label="Retype Email"
                placeholder="Retype email"
                value={retypeEmail}
                onChange={(val) => { setRetypeEmail(val.trim()); setErrors((prev) => ({ ...prev, retypeEmail: "" })); }}
                error={errors.retypeEmail || (emailNoMatch ? "Emails do not match" : "")}
                success={emailMatch ? "Emails match" : ""}
              />
            </div>
          </div>

          {/* Password column */}
          <div className="space-y-[20px]">
            {/* Create Password */}
            <div>
              <div id="field-password" className="space-y-[10px] relative">
                <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                  Create Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="e.g., G%w5Z&p7D$h3Y?"
                    value={password}
                    autoComplete="new-password"
                    maxLength={28}
                    onChange={(e) => { setPassword(e.target.value.trim()); setErrors((p) => ({ ...p, password: "" })); }}
                    className={`${inputBase} pr-10 ${errors.password ? inputError : inputNormal}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0A0A0A] transition-colors cursor-pointer"
                  >
                    {showPassword ? <img src="/img/show.svg" alt="show" /> : <img src="/img/hide.svg" alt="hide" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs leading-[16px] font-medium text-[#F5070B]">{errors.password}</p>
                )}
              </div>
              <div className="bg-[#F6F1E7] rounded-xl p-4 space-y-[10px] mt-[16px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px]">
                  <RuleItem label="14–28 characters" isValid={passwordRules?.length} hasValue={password.length > 0} />
                  <RuleItem label="Uppercase A–Z" isValid={passwordRules?.uppercase} hasValue={password.length > 0} />
                  <RuleItem label="Lowercase a–z" isValid={passwordRules?.lowercase} hasValue={password.length > 0} />
                  <RuleItem label="Numbers 0–9" isValid={passwordRules?.number} hasValue={password.length > 0} />
                  <RuleItem label="4 specials (! @ # $ % & ? /)" isValid={passwordRules?.specials} hasValue={password.length > 0} />
                </div>
                <p className="text-xs leading-[16px] font-normal text-[#0A0A0A99]">
                  Memorise your password or use a password manager. Please change it{" "}
                  <span className="font-bold">every 6 months</span>. Never disclose or share your password via email or messaging apps.
                </p>
              </div>
            </div>

            {/* Retype Password */}
            <div>
              <div id="field-retypePassword" className="space-y-[10px] relative">
                <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                  Retype Password
                </label>
              <div className="relative">
                <input
                  type={showRetypePassword ? "text" : "password"}
                  placeholder="Retype password"
                  value={retypePassword}
                  autoComplete="new-password"
                  maxLength={28}
                  onChange={(e) => { setRetypePassword(e.target.value.trim()); setErrors((p) => ({ ...p, retypePassword: "" })); }}
                  className={`${inputBase} ${(errors.retypePassword || passwordNoMatch) ? inputError : inputNormal}`}
                />

                <button
                  type="button"
                  onClick={() => setShowRetypePassword(!showRetypePassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0A0A0A] transition-colors cursor-pointer"
                >
                    {showRetypePassword ? <img src="/img/show.svg" alt="show" /> : <img src="/img/hide.svg" alt="hide" />}
                </button>

              </div>
                {errors.retypePassword && (
                  <p className="text-xs leading-[16px] font-medium text-[#F5070B]">{errors.retypePassword}</p>
                )}
                {!errors.retypePassword && passwordNoMatch && (
                  <p className="text-xs leading-[16px] font-medium text-[#F5070B]">Passwords do not match</p>
                )}
                {!errors.retypePassword && passwordMatch && (
                  <p className="text-xs leading-[16px] font-medium text-[#139207]">Passwords match</p>
                )}
              </div>
              <div className="bg-[#F6F1E7] rounded-[12px] p-[12px_18px] mt-[16px]">
                <p className="text-xs leading-[16px] font-normal text-[#0A0A0A99]">
                  Why these rules matter? A username or password shouldn&apos;t be easily linked to your real identity, as it is usually the first piece of information a hacker needs. Strong, unique login credentials are your best defense against unauthorised account access. The more complex and random your login credentials are, the safer your user account will be.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verification */}
        <div id="field-verification" className="flex flex-col sm:flex-row items-start justify-start gap-[16px] sm:gap-[24px]">
          <div className="flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[24px] w-full">
            <button
              type="button"
              onClick={onSendCode}
              className="w-full sm:w-auto h-[50px] px-6 bg-[#5E17EB] hover:bg-[#5E17EB]/90 text-white rounded-full font-medium text-base leading-[24px] tracking-wide transition-all whitespace-nowrap cursor-pointer"
            >
              Send &quot;Verification Code&quot;
            </button>

            <div className="flex flex-col max-sm:w-full sm:flex-row gap-[16px] sm:gap-[20px] items-center">
              <input
                type="text"
                placeholder="3 2 3 2 3 2"
                value={verificationCode}
                autoComplete="off"
                disabled
                onChange={(e) => setVerificationCode(e.target.value)}
                className="w-full sm:w-[144px] h-[46px] text-center border border-[#6F2DAE26] rounded-xl tracking-widest leading-[18px] font-normal text-sm placeholder:text-[#9CA3AF] outline-hidden hover:border-[#6F2DAE] disabled:hover:border-[#6F2DAE26] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] px-[28px] transition-all duration-300 opacity-80"
              />
              {!isVerified ? (
                <button
                  type="button"
                  onClick={onVerify}
                  disabled={verificationCode.trim().length === 0}
                  className={`w-full sm:w-auto h-12 px-8 rounded-full font-medium text-base leading-[24px] transition-all ${
                    verificationCode.trim().length === 0
                      ? "bg-[#D4AF37]/50 text-white cursor-not-allowed"
                      : "bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white cursor-pointer"
                  }`}
                >
                  Verify
                </button>
              ) : (
                <div className="text-base leading-[24px] font-medium text-[#139207] flex gap-[8px] items-center min-w-[106px]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_479_24346)">
                      <path d="M18.3334 9.2333V9.99997C18.3324 11.797 17.7505 13.5455 16.6745 14.9848C15.5986 16.4241 14.0862 17.477 12.3629 17.9866C10.6396 18.4961 8.7978 18.4349 7.11214 17.8121C5.42648 17.1894 3.98729 16.0384 3.00922 14.5309C2.03114 13.0233 1.56657 11.24 1.68481 9.4469C1.80305 7.65377 2.49775 5.94691 3.66531 4.58086C4.83288 3.21482 6.41074 2.26279 8.16357 1.86676C9.91641 1.47073 11.7503 1.65192 13.3918 2.3833M18.3334 3.3333L10.0001 11.675L7.50009 9.17497" stroke="#139207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_479_24346"><rect width="20" height="20" fill="white" /></clipPath>
                    </defs>
                  </svg>
                  Verified
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="mt-[20px] text-xs leading-[16px] font-normal text-[#000000]">
          Code is valid for 10 minutes only. Check your spam folder.{" "}
          <a href="" className="font-medium text-[#5E17EB] hover:underline">Get a new code.</a>
        </p>
      </div>
    </div>
  );
};

export default UsernamePasswordSection;
