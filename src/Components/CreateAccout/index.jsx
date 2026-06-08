"use client";

import { useState } from "react";
import FormSelect from "../Reusable/FormSelect";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { FormDatePicker } from "../Reusable/FormDatePicker";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const identityOptions = [
  { value: "parent", label: "Parent" },
  { value: "student", label: "Student" },
  { value: "guardian", label: "Guardian" },
];

const titleOptions = [
  { value: "mr", label: "Mr" },
  { value: "mrs", label: "Mrs" },
  { value: "ms", label: "Ms" },
  { value: "dr", label: "Dr" },
];

const SECURITY_POLICIES = [
  {
    id: "lockout-policy",
    title: "3-Strike Lockout Policy",
    description: "After 3 failed logins your account locks for 30 minutes.",
    // Custom SVG Shield Icon
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6666 10.8335C16.6666 15.0002 13.7499 17.0835 10.2833 18.2919C10.1017 18.3534 9.90453 18.3505 9.72492 18.2835C6.24992 17.0835 3.33325 15.0002 3.33325 10.8335V5.00021C3.33325 4.7792 3.42105 4.56724 3.57733 4.41096C3.73361 4.25468 3.94557 4.16688 4.16659 4.16688C5.83325 4.16688 7.91658 3.16688 9.36658 1.90021C9.54313 1.74938 9.76771 1.6665 9.99992 1.6665C10.2321 1.6665 10.4567 1.74938 10.6333 1.90021C12.0916 3.17521 14.1666 4.16688 15.8333 4.16688C16.0543 4.16688 16.2662 4.25468 16.4225 4.41096C16.5788 4.56724 16.6666 4.7792 16.6666 5.00021V10.8335Z"
          stroke="#6F2DAE"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 10.0002L9.16667 11.6668L12.5 8.3335"
          stroke="#6F2DAE"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "hashed-storage",
    title: "One-Way Hashed Storage",
    description: "Credentials stored using Argon2 / bcrypt — zero plaintext.",
    // Custom SVG Padlock Icon
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8333 9.1665H4.16667C3.24619 9.1665 2.5 9.9127 2.5 10.8332V16.6665C2.5 17.587 3.24619 18.3332 4.16667 18.3332H15.8333C16.7538 18.3332 17.5 17.587 17.5 16.6665V10.8332C17.5 9.9127 16.7538 9.1665 15.8333 9.1665Z"
          stroke="#6F2DAE"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83325 9.1665V5.83317C5.83325 4.7281 6.27224 3.66829 7.05364 2.88689C7.83504 2.10549 8.89485 1.6665 9.99992 1.6665C11.105 1.6665 12.1648 2.10549 12.9462 2.88689C13.7276 3.66829 14.1666 4.7281 14.1666 5.83317V9.1665"
          stroke="#6F2DAE"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "identity-verification",
    title: "Manual Identity Verification",
    description: "Recovery via government-issued ID matching.",
    // Custom SVG Key Icon
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.3332 2.25014C10.7185 1.89286 11.2245 1.69434 11.7499 1.69434C12.2753 1.69434 12.7813 1.89286 13.1666 2.25014L17.7499 6.83348C18.1072 7.21872 18.3057 7.72473 18.3057 8.25014C18.3057 8.77556 18.1072 9.28157 17.7499 9.66681L14.6666 12.7501C14.2813 13.1074 13.7753 13.306 13.2499 13.306C12.7245 13.306 12.2185 13.1074 11.8332 12.7501L7.2499 8.16681C6.89262 7.78157 6.69409 7.27556 6.69409 6.75014C6.69409 6.22473 6.89262 5.71872 7.2499 5.33348L10.3332 2.25014Z"
          stroke="#6F2DAE"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6667 5.8335L14.1667 8.3335"
          stroke="#6F2DAE"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.83341 8.8335L2.15508 14.5118C1.8425 14.8243 1.66684 15.2482 1.66675 15.6902V17.5002C1.66675 17.7212 1.75455 17.9331 1.91083 18.0894C2.06711 18.2457 2.27907 18.3335 2.50008 18.3335H5.00008C5.22109 18.3335 5.43306 18.2457 5.58934 18.0894C5.74562 17.9331 5.83341 17.7212 5.83341 17.5002V16.6668C5.83341 16.4458 5.92121 16.2339 6.07749 16.0776C6.23377 15.9213 6.44573 15.8335 6.66675 15.8335H7.50008C7.72109 15.8335 7.93306 15.7457 8.08934 15.5894C8.24562 15.4331 8.33341 15.2212 8.33341 15.0002V14.1668C8.33341 13.9458 8.42121 13.7339 8.57749 13.5776C8.73377 13.4213 8.94573 13.3335 9.16675 13.3335H9.31008C9.75207 13.3334 10.1759 13.1577 10.4884 12.8452L11.1667 12.1668"
          stroke="#6F2DAE"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const CreateAccount = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  // Controlled form states
  const [username, setUsername] = useState("");
  const [retypeUsername, setRetypeUsername] = useState("");
  const [email, setEmail] = useState("");
  const [retypeEmail, setRetypeEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // About Yourself
  const [iamA, setIamA] = useState({ value: "parent", label: "Parent" });
  const [title, setTitle] = useState({ value: "mr", label: "Mr" });
  const [fullName, setFullName] = useState("");
  const [nationality, setNationality] = useState("");
  const [profession, setProfession] = useState("");
  const [mobile, setMobile] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [landline, setLandline] = useState("");

  // About the Student
  const [studentTitle, setStudentTitle] = useState({
    value: "mr",
    label: "Mr",
  });
  const [studentFullName, setStudentFullName] = useState("");
  const [studentDob, setStudentDob] = useState("");
  const [studentNationality, setStudentNationality] = useState("");
  const [studentBoardOfEducation, setStudentBoardOfEducation] = useState("");
  const [studentClassYearGrade, setStudentClassYearGrade] = useState("");
  const [studentSchoolName, setStudentSchoolName] = useState("");
  const [studentSchoolAddress, setStudentSchoolAddress] = useState("");
  const [studentSchoolWebsite, setStudentSchoolWebsite] = useState("");

  // Billing Address
  const [billingApartmentName, setBillingApartmentName] = useState("");
  const [billingApartmentNo, setBillingApartmentNo] = useState("");
  const [billingStreetRoad, setBillingStreetRoad] = useState("");
  const [billingAreaZone, setBillingAreaZone] = useState("");
  const [billingCityTown, setBillingCityTown] = useState("");
  const [billingDistrictRegion, setBillingDistrictRegion] = useState("");
  const [billingStateProvince, setBillingStateProvince] = useState("");
  const [billingCountry, setBillingCountry] = useState("");
  const [billingPostZipCode, setBillingPostZipCode] = useState("");
  const [isMailingSame, setIsMailingSame] = useState(true);

  // Mailing Address
  const [mailingApartmentName, setMailingApartmentName] = useState("");
  const [mailingApartmentNo, setMailingApartmentNo] = useState("");
  const [mailingStreetRoad, setMailingStreetRoad] = useState("");
  const [mailingAreaZone, setMailingAreaZone] = useState("");
  const [mailingCityTown, setMailingCityTown] = useState("");
  const [mailingDistrictRegion, setMailingDistrictRegion] = useState("");
  const [mailingStateProvince, setMailingStateProvince] = useState("");
  const [mailingCountry, setMailingCountry] = useState("");
  const [mailingPostZipCode, setMailingPostZipCode] = useState("");

  // Security Questions
  const [secretAnswer1, setSecretAnswer1] = useState("");
  const [secretAnswer2, setSecretAnswer2] = useState("");

  // Acknowledge
  const [isOver18, setIsOver18] = useState(true);
  const [isInfoComplete, setIsInfoComplete] = useState(false);
  const [isTruthful, setIsTruthful] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptEmails, setAcceptEmails] = useState(false);
  const [bookmarkSite, setBookmarkSite] = useState(false);

  // 2. Handle the button click
  const handleVerify = (e) => {
    e.preventDefault();

    const correctCode = "123456";

    if (verificationCode === correctCode) {
      toast.success("Verification code sent.", {
        className: "custom-toast-success",
        icon: false,
      });
      setIsVerified(true);
    } else {
      toast.error("Please enter and confirm a valid email", {
        className: "custom-toast-error",
        icon: (<img src="/img/warning.svg" />)
      });
    }
  };

  const handleSubmit = () => {
    router.push("/registration-success");
  };

  return (
    <>
      <div className=" font-dm min-h-screen bg-[#FDFBF7] text-[#0A0A0A] py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 max-w-[1135px] mx-auto w-full">
          {/* Header Section */}
          <header className="text-center space-y-2">
            <span className="block tracking-[3.6px] font-bold text-xs leading-[16px] uppercase text-[#6F2DAE]">
              Create Account
            </span>
            <h1 className="text-4xl md:text-6xl font-normal md:leading-[60px] tracking-tight text-[#0A0A0A]">
              Welcome to the{" "}
              <span className="text-[#6F2DAE] font-medium">Quad</span>
            </h1>
          </header>

          {/* Information Notice Box */}
          <div className="bg-[#6F2DAE0D] border border-dashed border-[#6F2DAE40] rounded-2xl p-6 md:p-[34px_40px]">
            <p className="text-base leading-[30px] font-medium text-[#0A0A0A] mb-[24px]">
              The user account creation is simple and easy to complete.
              <br className="hidden md:inline" />
              Already a registered user? or Wish to make changes to your user
              account?{" "}
              <a
                href="/login"
                className="text-[#6F2DAE] underline hover:text-[#5E17EB] transition-colors"
              >
                Log‑In
              </a>
            </p>
            <p className="text-[#0A0A0A] font-normal leading-[16px] text-xs md:text-sm mb-[12px]">
              A user account is required to apply to the Quad Program, complete
              the application, pay the assessment fee, enroll in the program,
              buy add-on services, view purchase history, ensure secure
              payments, protect privacy, and maintain robust safety protocols.
            </p>
            <p className="text-[#0A0A0AD9] font-normal leading-[16px] text-xs md:text-sm">
              We recommend registering a separate user account for each student.
              Please ensure each username and password is unique and different
              for every account.
            </p>
          </div>

          <div className="space-y-[40px] lg:space-y-[50px]">
            {/* Username & Password */}
            <div className="bg-white rounded-3xl border border-solid border-[#6F2DAE1A]  p-6 md:p-[34px_40px] ">
              <div className="border-b border-[#6F2DAE1A] border-solid pb-[24px] mb-[24px]">
                <h2 className="text-[30px] leading-[26px] font-normal text-[#0A0A0A] mb-[8px]">
                  Username & Password
                </h2>
                <p className="text-sm leading-[20px] font-normal text-[#0A0A0ACC]">
                  Strong, unique credentials are your best defense against
                  unauthorised access.
                </p>
              </div>

              <div>
                {/* Two-Column Responsive Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 mb-[26px]">
                  {/* Left Column: Username Fields & System Constraints */}
                  <div className="space-y-[20px]">
                    <div>
                      {/* Create Username */}
                      <div className="space-y-[10px] relative">
                        <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                          Create Username
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Velzet24$Aimo68!"
                          value={username}
                          autoComplete="off"
                          onChange={(e) => setUsername(e.target.value)}
                          className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                        />
                      </div>

                      {/* Username Rules Box */}
                      <div className="bg-[#F6F1E7] rounded-xl p-4 space-y-[10px] mt-[16px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px]">
                          <RuleItem label="14–28 characters" />
                          <RuleItem label="Uppercase A–Z" />
                          <RuleItem label="Lowercase a–z" />
                          <RuleItem label="Numbers 0–9" />
                          <RuleItem label="2 specials (! @ # $ % & ? /)" />
                          <RuleItem label="Sample Username: Velzet24$Aimo68!" />
                        </div>
                        <p className="text-xs leading-[16px] font-normal text-[#0A0A0A99]">
                          Memorise your username or use a password manager. The
                          username can’t be changed. Never disclose or share
                          your username via email or messaging apps.
                        </p>
                      </div>
                    </div>

                    {/* Retype Username */}
                    <div className="space-y-[10px] relative">
                      <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                        Retype Username
                      </label>
                      <input
                        type="text"
                        placeholder="Retype username"
                        value={retypeUsername}
                        onChange={(e) => setRetypeUsername(e.target.value)}
                        className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                      />
                      <p className="text-xs leading-[16px] font-medium text-[#F5070B]">
                        Usernames do not match
                      </p>
                    </div>

                    {/* Valid Email */}
                    <div className="space-y-[10px] relative">
                      <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                        Valid Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                      />
                    </div>

                    {/* Retype Email */}
                    <div className="space-y-[10px] relative">
                      <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                        Retype Email
                      </label>
                      <input
                        type="email"
                        placeholder="Retype email"
                        value={retypeEmail}
                        onChange={(e) => setRetypeEmail(e.target.value)}
                        className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Right Column: Password Fields & Informational Box */}
                  <div className="space-y-[20px]">
                    <div>
                      {/* Create Password */}
                      <div className="space-y-[10px] relative">
                        <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                          Create Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            placeholder="e.g., G%w5Z&p7D$h3Y?"
                            value={password}
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0A0A0A] transition-colors"
                          >
                            {showPassword ? (
                              <img src="/img/show.svg" alt="show" />
                            ) : (
                              <img src="/img/hide.svg" alt="show" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Password Rules Box */}
                      <div className="bg-[#F6F1E7] rounded-xl p-4 space-y-[10px] mt-[16px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px]">
                          <RuleItem label="14–28 characters" isValid="true" />
                          <RuleItem label="Uppercase A–Z" isValid="true" />
                          <RuleItem label="Lowercase a–z" />
                          <RuleItem label="Numbers 0–9" />
                          <RuleItem label="4 specials (! @ # $ % & ? /)" />
                        </div>
                        <p className="text-xs leading-[16px] font-normal text-[#0A0A0A99]">
                          Memorise your password or use a password manager.
                          Please change it{" "}
                          <span className="font-bold">every 6 months</span>.
                          Never disclose or share your password via email or
                          messaging apps.
                        </p>
                      </div>
                    </div>

                    <div>
                      {/* Retype Password */}
                      <div className="space-y-[10px] relative">
                        <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                          Retype Password
                        </label>
                        <input
                          type="password"
                          placeholder="Retype password"
                          value={retypePassword}
                          onChange={(e) => setRetypePassword(e.target.value)}
                          className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                        />
                        <p className="text-xs leading-[16px] font-medium text-[#139207]">
                          Passwords match
                        </p>
                      </div>

                      {/* Educational Context Field */}
                      <div className="bg-[#F6F1E7] rounded-[12px] p-[12px_18px] mt-[16px]">
                        <p className="text-xs leading-[16px] font-normal text-[#0A0A0A99]">
                          Why these rules matter? A username or password
                          shouldn’t be easily linked to your real identity, as
                          it is usually the first piece of information a hacker
                          needs. Strong, unique login credentials are your best
                          defense against unauthorised account access. The more
                          complex and random your login credentials are, the
                          safer your user account will be.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Operations / Verification Buttons Section */}
                <div className="flex flex-col sm:flex-row items-center justify-start gap-[16px] sm:gap-[24px]">
                  <button
                    type="button"
                    className="w-full sm:w-auto h-[50px] px-6 bg-[#5E17EB] hover:bg-[#5E17EB]/90 text-white rounded-full font-medium
                   text-base leading-[24px] tracking-wide transition-all whitespace-nowrap cursor-pointer"
                  >
                    Send &quot;Verification Code&quot;
                  </button>

                  <div className="flex flex-col max-sm:w-full sm:flex-row gap-[16px] sm:gap-[20px] items-center">
                    <input
                      type="text"
                      placeholder="3 2 3 2 3 2"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      className="w-full sm:w-[144px] h-[46px] text-center border border-[#6F2DAE26] rounded-xl tracking-widest leading-[18px] font-normal text-sm placeholder:text-[#9CA3AF] outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] px-[28px] transition-all duration-300"
                    />

                    {!isVerified ? (
                      <button
                        type="button" // Changed to 'button' unless you explicitly want to submit a form
                        onClick={handleVerify}
                        className="w-full sm:w-auto h-12 px-8 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white rounded-full font-medium text-base leading-[24px] tracking-wide transition-all cursor-pointer"
                      >
                        Verify
                      </button>
                    ) : (
                      <div className="text-base leading-[24px] font-medium text-[#139207] flex gap-[8px] items-center min-w-[106px]">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_479_24346)">
                            <path
                              d="M18.3334 9.2333V9.99997C18.3324 11.797 17.7505 13.5455 16.6745 14.9848C15.5986 16.4241 14.0862 17.477 12.3629 17.9866C10.6396 18.4961 8.7978 18.4349 7.11214 17.8121C5.42648 17.1894 3.98729 16.0384 3.00922 14.5309C2.03114 13.0233 1.56657 11.24 1.68481 9.4469C1.80305 7.65377 2.49775 5.94691 3.66531 4.58086C4.83288 3.21482 6.41074 2.26279 8.16357 1.86676C9.91641 1.47073 11.7503 1.65192 13.3918 2.3833M18.3334 3.3333L10.0001 11.675L7.50009 9.17497"
                              stroke="#139207"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_479_24346">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Verified
                      </div>
                    )}
                  </div>
                </div>

                <p className="mt-[20px] text-xs leading-[16px] font-normal text-[#000000]">
                  Code is valid for 10 minutes only. Check your spam folder. 
                  <a
                    href=""
                    className="font-medium text-[#5E17EB] hover:underline"
                  >
                    Get a new code.
                  </a>
                </p>
              </div>
            </div>

            {/* About Yourself */}
            <div className="bg-white rounded-3xl border border-solid border-[#6F2DAE1A]  p-6 md:p-[34px_40px]">
              {/* Paragraph Header with Horizontal Border line */}
              <div className="border-b border-[#6F2DAE1A] border-solid pb-[24px] mb-[24px]">
                <h2 className="text-[30px] leading-[26px] font-normal text-[#0A0A0A]">
                  About Yourself
                </h2>
              </div>

              {/* Input Fields Grid layout matching image_b6a565.png */}
              <div
                className="space-y-[32px]"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[54px] gap-y-[20px]">
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      I am a
                    </label>

                    {/* Reusable Select components */}
                    <FormSelect
                      label="I am a"
                      options={identityOptions}
                      value={iamA}
                      onChange={setIamA}
                    />
                  </div>

                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Title
                    </label>
                    <FormSelect
                      label="Title"
                      options={titleOptions}
                      value={title}
                      onChange={setTitle}
                    />
                  </div>

                  {/* Field: Full Name */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="First and Last Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Field: Nationality */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Nationality
                    </label>
                    <input
                      type="text"
                      placeholder="Nationality"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Field: Profession */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Profession
                    </label>
                    <input
                      type="text"
                      placeholder="Profession"
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Field: Mobile */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      placeholder="00 + Country Code + Mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Field: WhatsApp */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="00 + Country Code + Mobile"
                      value={whatsApp}
                      onChange={(e) => setWhatsApp(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Field: Landline */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Landline
                    </label>
                    <input
                      type="tel"
                      placeholder="00 + Country Code + Area + Landline"
                      value={landline}
                      onChange={(e) => setLandline(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Privacy Footnote Paragraph */}
                <div>
                  <p className="text-[12px] leading-[18px] text-[#0A0A0AD9] font-normal ">
                    It is our service policy to request your contact information
                    for the sole purpose of communication. The information you
                    provide us will be treated as highly confidential and will
                    not be disclosed or shared externally as per our{" "}
                    <a
                      href="#"
                      className="text-[#5E17EB] hover:text-[#5E17EB] underline transition-colors "
                    >
                      privacy policy
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* About the Student */}
            <div className="bg-white rounded-3xl border border-solid border-[#6F2DAE1A] p-6 md:p-[34px_40px]">
              {/* Paragraph Header with Horizontal Border line */}
              <div className="border-b border-[#6F2DAE1A] border-solid pb-[24px] mb-[24px]">
                <h2 className="text-[30px] leading-[26px] font-normal text-[#0A0A0A]">
                  About the Student
                </h2>
              </div>

              {/* Input Fields Grid layout matching image_b5365d.png */}
              <div
                className="space-y-[32px]"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[54px] gap-y-[20px]">
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Title
                    </label>
                    <input
                      type="text"
                      placeholder="First and Last Name"
                      value={studentFullName}
                      onChange={(e) => setStudentTitle(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="First and Last Name"
                      value={studentFullName}
                      onChange={(e) => setStudentFullName(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Row 2: Date of Birth & Nationality */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Date of Birth
                    </label>
                    <FormDatePicker
                      label="Date of Birth"
                      value={studentDob}
                      onChange={setStudentDob}
                      placeholder="dd - mm - yyyy"
                    />
                  </div>

                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Nationality
                    </label>
                    <input
                      type="text"
                      placeholder="Nationality"
                      value={studentNationality}
                      onChange={(e) => setStudentNationality(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Row 3: Board of Education & Class / Year / Grade */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Board of Education
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., IB, CBSE, ICSE, Cambridge"
                      value={studentBoardOfEducation}
                      onChange={(e) =>
                        setStudentBoardOfEducation(e.target.value)
                      }
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Class / Year / Grade
                    </label>
                    <input
                      type="text"
                      placeholder="Grade"
                      value={studentClassYearGrade}
                      onChange={(e) => setStudentClassYearGrade(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Row 4: School Name & School Address */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      School Name
                    </label>
                    <input
                      type="text"
                      placeholder="School Name"
                      value={studentSchoolName}
                      onChange={(e) => setStudentSchoolName(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      School Address
                    </label>
                    <input
                      type="text"
                      placeholder="Street, City, Country"
                      value={studentSchoolAddress}
                      onChange={(e) => setStudentSchoolAddress(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Row 5: School Website */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      School Website
                    </label>
                    <input
                      type="url"
                      placeholder="https://"
                      value={studentSchoolWebsite}
                      onChange={(e) => setStudentSchoolWebsite(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div className="bg-white rounded-3xl border border-solid border-[#6F2DAE1A] p-6 md:p-[34px_40px]">
              {/* Paragraph Header with Subtext matching image_a8fbba.png */}
              <div className="border-b border-[#6F2DAE1A] border-solid pb-[24px] mb-[24px] space-y-1">
                <h2 className="text-[30px] leading-[36px] font-normal text-[#0A0A0A]">
                  Billing Address
                </h2>
                <p className="text-sm leading-[20px] font-normal text-gray-500">
                  As per your valid credit or debit card billing address.
                </p>
              </div>

              {/* Input Fields Grid layout matching grid spacing precisely */}
              <div
                className="space-y-[24px]"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[54px] gap-y-[20px]">
                  {/* Row 1: Apartment / House Name & Apartment / House No */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Apartment / House Name
                    </label>
                    <input
                      type="text"
                      value={billingApartmentName}
                      onChange={(e) => setBillingApartmentName(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Apartment / House No
                    </label>
                    <input
                      type="text"
                      value={billingApartmentNo}
                      onChange={(e) => setBillingApartmentNo(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Row 2: Street / Road & Area / Zone */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Street / Road
                    </label>
                    <input
                      type="text"
                      value={billingStreetRoad}
                      onChange={(e) => setBillingStreetRoad(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Area / Zone
                    </label>
                    <input
                      type="text"
                      value={billingAreaZone}
                      onChange={(e) => setBillingAreaZone(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Row 3: City / Town & District / Region */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      City / Town
                    </label>
                    <input
                      type="text"
                      value={billingCityTown}
                      onChange={(e) => setBillingCityTown(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      District / Region
                    </label>
                    <input
                      type="text"
                      value={billingDistrictRegion}
                      onChange={(e) => setBillingDistrictRegion(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Row 4: State / Province & Country */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      State / Province
                    </label>
                    <input
                      type="text"
                      value={billingStateProvince}
                      onChange={(e) => setBillingStateProvince(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Country
                    </label>
                    <input
                      type="text"
                      value={billingCountry}
                      onChange={(e) => setBillingCountry(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Row 5: Post / Zip Code (Standalone on left column column side) */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Post / Zip Code
                    </label>
                    <input
                      type="text"
                      value={billingPostZipCode}
                      onChange={(e) => setBillingPostZipCode(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Footer Option: Checkbox confirmation field matching brand colors */}
                <div className="flex items-center space-x-3">
                  <label
                    htmlFor="sameAddress"
                    className="text-sm leading-[20px] font-normal text-[#0A0A0A] cursor-pointer select-none flex items-center gap-[12px]"
                  >
                    <input
                      type="checkbox"
                      id="sameAddress"
                      checked={isMailingSame}
                      onChange={(e) => setIsMailingSame(e.target.checked)}
                      className="w-5 h-5 rounded accent-[#6F2DAE] border-gray-300 text-[#6F2DAE] cursor-pointer hidden peer"
                    />
                    <div className="rounded-[2px] border border-solid border-[#6F2DAE26] w-[18px] h-[18px] min-w-[18px] peer-checked:[&>img]:block peer-checked:bg-[#6750A4] bg-white flex justify-center items-center">
                      <img
                        src="/img/checkbox-tick.svg"
                        alt=""
                        className="hidden"
                      />
                    </div>
                    Mailing address is the same as billing address
                  </label>
                </div>
              </div>
            </div>

            {/* Mailing Address */}
            <div className="bg-white rounded-3xl border border-solid border-[#6F2DAE1A] p-6 md:p-[34px_40px]">
              {/* Header section matching image_a86cf4.png layout */}
              <div className="border-b border-[#6F2DAE1A] border-solid pb-[24px] mb-[24px]">
                <h2 className="text-[30px] leading-[26px] font-normal text-[#0A0A0A]">
                  Mailing Address
                </h2>
              </div>

              {/* Input Fields Grid layout */}
              <div onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[54px] gap-y-[20px]">
                  {/* Row 1: Apartment / House Name & Apartment / House No */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Apartment / House Name
                    </label>
                    <input
                      type="text"
                      value={mailingApartmentName}
                      onChange={(e) => setMailingApartmentName(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Apartment / House No
                    </label>
                    <input
                      type="text"
                      value={mailingApartmentNo}
                      onChange={(e) => setMailingApartmentNo(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Row 2: Street / Road & Area / Zone */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Street / Road
                    </label>
                    <input
                      type="text"
                      value={mailingStreetRoad}
                      onChange={(e) => setMailingStreetRoad(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Area / Zone
                    </label>
                    <input
                      type="text"
                      value={mailingAreaZone}
                      onChange={(e) => setMailingAreaZone(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Row 3: City / Town & District / Region */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      City / Town
                    </label>
                    <input
                      type="text"
                      value={mailingCityTown}
                      onChange={(e) => setMailingCityTown(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      District / Region
                    </label>
                    <input
                      type="text"
                      value={mailingDistrictRegion}
                      onChange={(e) => setMailingDistrictRegion(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Row 4: State / Province & Country */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      State / Province
                    </label>
                    <input
                      type="text"
                      value={mailingStateProvince}
                      onChange={(e) => setMailingStateProvince(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Country
                    </label>
                    <input
                      type="text"
                      value={mailingCountry}
                      onChange={(e) => setMailingCountry(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Row 5: Post / Zip Code */}
                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Post / Zip Code
                    </label>
                    <input
                      type="text"
                      value={mailingPostZipCode}
                      onChange={(e) => setMailingPostZipCode(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Security Questions */}
            <div className="bg-white rounded-3xl border border-solid border-[#6F2DAE1A] p-6 md:p-[34px_40px]">
              {/* Section Sub-Header Context Block */}
              <div className="border-b border-[#6F2DAE1A] border-solid pb-[24px] mb-[24px] space-y-1">
                <h2 className="text-[30px] leading-[36px] font-normal text-[#0A0A0A]">
                  Security Questions
                </h2>
                <p className="text-sm leading-[20px] font-normal text-[#0A0A0A99] max-w-[608px] w-full">
                  If you forget your username and/or password, you will need
                  these answers to recover your account. Memorise or write them
                  down.
                </p>
              </div>

              {/* Form Content Wrapper Block */}
              <div
                className="space-y-[20px]"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 gap-y-[20px]">
                  {/* Question Segment 1: Static Label & Secret Answer Input */}
                  <div className="space-y-[10px] relative">
                    <span className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Security Question 1
                    </span>
                    <div className="w-full h-[46px] px-4 bg-[#FFFFFF] border border-[#6F2DAE1A] rounded-xl flex items-center select-none pointer-events-none">
                      <span className="text-sm text-[#0A0A0A] font-normal">
                        What are your three favourite colours?
                      </span>
                    </div>
                  </div>

                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Secret Answer 1
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Olive Green, Mustard Yellow, Muddy Gray"
                      value={secretAnswer1}
                      onChange={(e) => setSecretAnswer1(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>

                  {/* Question Segment 2: Static Label & Secret Answer Input */}
                  <div className="space-y-[10px] relative">
                    <span className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Security Question 2
                    </span>
                    <div className="w-full h-[46px] px-4 bg-[#FFFFFF] border border-[#6F2DAE1A] rounded-xl flex items-center select-none pointer-events-none">
                      <span className="text-sm text-[#0A0A0A] font-normal">
                        Who are three of your childhood friends?
                      </span>
                    </div>
                  </div>

                  <div className="space-y-[10px] relative">
                    <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">
                      Secret Answer 2
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Kavya, Sneha, Meera"
                      value={secretAnswer2}
                      onChange={(e) => setSecretAnswer2(e.target.value)}
                      className="w-full h-[46px] px-4 bg-white border border-[#6F2DAE26] rounded-xl outline-hidden hover:border-[#6F2DAE] focus:border-[#6F2DAE] focus:shadow-[0px_1px_2px_2px_#0000000D] text-sm leading-[18px] font-normal placeholder:text-[#9CA3AF] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Warning Footnote Alert Box */}
                <div className="p-[16px_18px] bg-[#F6F1E7] rounded-[12px] ">
                  <p className="text-[12px] leading-[18px] text-[#0A0A0ACC] font-normal">
                    To fully protect your user account, please remember the
                    answers to the above security questions. Do not share your
                    answers with anyone for whatever reason. If you forget your
                    username and/or password, you will need these answers to
                    recover your account. So, please memorise your answers or
                    write them down and keep them in a secure place.
                  </p>
                </div>
              </div>
            </div>

            {/* Acknowledge */}
            <div className="w-full">
              <div className="bg-white rounded-3xl border border-solid border-[#6F2DAE1A] p-6 md:p-[34px_40px] mb-[32px]">
                <div className="border-b border-[#6F2DAE1A] border-solid pb-[24px] mb-[24px]">
                  <h2 className="text-[30px] leading-[36px] font-normal text-[#0A0A0A]">
                    Acknowledge
                  </h2>
                </div>

                <div className="space-y-[12px]">
                  {/* Item 1: Highlighted Row */}
                  <div
                    className={`${isOver18 ? "bg-[#FCF8F1]" : ""}  rounded-xl p-[10px_14px] -mx-[14px]`}
                  >
                    <label
                      htmlFor="ackAge"
                      className="text-sm leading-[20px] font-normal text-[#0A0A0A] cursor-pointer select-none flex items-center gap-[12px]"
                    >
                      <input
                        type="checkbox"
                        id="ackAge"
                        checked={isOver18}
                        onChange={(e) => setIsOver18(e.target.checked)}
                        className="w-5 h-5 rounded accent-[#6F2DAE] border-gray-300 text-[#6F2DAE] cursor-pointer hidden peer"
                      />
                      <div className="rounded-[2px] border border-solid border-[#6F2DAE26] w-[18px] h-[18px] min-w-[18px] peer-checked:[&>img]:block peer-checked:bg-[#6750A4] bg-white flex justify-center items-center">
                        <img
                          src="/img/checkbox-tick.svg"
                          alt=""
                          className="hidden"
                        />
                      </div>
                      <span>I am over 18 years of age.</span>
                    </label>
                  </div>

                  {/* Item 2 */}

                  <div
                    className={`${isInfoComplete ? "bg-[#FCF8F1]" : ""}  rounded-xl p-[10px_14px] -mx-[14px]`}
                  >
                    <label
                      htmlFor="ackComplete"
                      className="text-sm leading-[20px] font-normal text-[#0A0A0A] cursor-pointer select-none flex items-center gap-[12px]"
                    >
                      <input
                        type="checkbox"
                        id="ackComplete"
                        checked={isInfoComplete}
                        onChange={(e) => setIsInfoComplete(e.target.checked)}
                        className="w-5 h-5 rounded accent-[#6F2DAE] border-gray-300 text-[#6F2DAE] cursor-pointer hidden peer"
                      />
                      <div className="rounded-[2px] border border-solid border-[#6F2DAE26] w-[18px] h-[18px] min-w-[18px] peer-checked:[&>img]:block peer-checked:bg-[#6750A4] bg-white flex justify-center items-center">
                        <img
                          src="/img/checkbox-tick.svg"
                          alt=""
                          className="hidden"
                        />
                      </div>
                      <span>
                        The information I have filled is complete and true to
                        the best of my knowledge.
                      </span>
                    </label>
                  </div>

                  {/* Item 3 */}
                  <div
                    className={`${isTruthful ? "bg-[#FCF8F1]" : ""}  rounded-xl p-[10px_14px] -mx-[14px]`}
                  >
                    <label
                      htmlFor="ackTruthful"
                      className="text-sm leading-[20px] font-normal text-[#0A0A0A] cursor-pointer select-none flex items-center gap-[12px]"
                    >
                      <input
                        type="checkbox"
                        id="ackTruthful"
                        checked={isTruthful}
                        onChange={(e) => setIsTruthful(e.target.checked)}
                        className="w-5 h-5 rounded accent-[#6F2DAE] border-gray-300 text-[#6F2DAE] cursor-pointer hidden peer"
                      />
                      <div className="rounded-[2px] border border-solid border-[#6F2DAE26] w-[18px] h-[18px] min-w-[18px] peer-checked:[&>img]:block peer-checked:bg-[#6750A4] bg-white flex justify-center items-center">
                        <img
                          src="/img/checkbox-tick.svg"
                          alt=""
                          className="hidden"
                        />
                      </div>
                      <span>
                        I haven't knowingly or unknowingly filled incorrect or
                        false information.
                      </span>
                    </label>
                  </div>

                  {/* Item 4 */}
                  <div
                    className={`${acceptTerms ? "bg-[#FCF8F1]" : ""}  rounded-xl p-[10px_14px] -mx-[14px]`}
                  >
                    <label
                      htmlFor="ackTerms"
                      className="text-sm leading-[20px] font-normal text-[#0A0A0A] cursor-pointer select-none flex items-center gap-[12px]"
                    >
                      <input
                        type="checkbox"
                        id="ackTerms"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="w-5 h-5 rounded accent-[#6F2DAE] border-gray-300 text-[#6F2DAE] cursor-pointer hidden peer"
                      />
                      <div className="rounded-[2px] border border-solid border-[#6F2DAE26] w-[18px] h-[18px] min-w-[18px] peer-checked:[&>img]:block peer-checked:bg-[#6750A4] bg-white flex justify-center items-center">
                        <img
                          src="/img/checkbox-tick.svg"
                          alt=""
                          className="hidden"
                        />
                      </div>
                      <span>
                        I read and accept the{" "}
                        <a href="#" className="text-[#5E17EB] hover:underline">
                          privacy policy
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-[#5E17EB] hover:underline">
                          terms of use
                        </a>
                        .
                      </span>
                    </label>
                  </div>

                  {/* Item 5 */}
                  <div
                    className={`${acceptEmails ? "bg-[#FCF8F1]" : ""}  rounded-xl p-[10px_14px] -mx-[14px]`}
                  >
                    <label
                      htmlFor="ackEmails"
                      className="text-sm leading-[20px] font-normal text-[#0A0A0A] cursor-pointer select-none flex items-center gap-[12px]"
                    >
                      <input
                        type="checkbox"
                        id="ackEmails"
                        checked={acceptEmails}
                        onChange={(e) => setAcceptEmails(e.target.checked)}
                        className="w-5 h-5 rounded accent-[#6F2DAE] border-gray-300 text-[#6F2DAE] cursor-pointer hidden peer"
                      />
                      <div className="rounded-[2px] border border-solid border-[#6F2DAE26] w-[18px] h-[18px] min-w-[18px] peer-checked:[&>img]:block peer-checked:bg-[#6750A4] bg-white flex justify-center items-center">
                        <img
                          src="/img/checkbox-tick.svg"
                          alt=""
                          className="hidden"
                        />
                      </div>
                      <span>I accept to receive communication e-mails.</span>
                    </label>
                  </div>

                  {/* Item 6 */}
                  <div
                    className={`${bookmarkSite ? "bg-[#FCF8F1]" : ""}  rounded-xl p-[10px_14px] -mx-[14px]`}
                  >
                    <label
                      htmlFor="ackBookmark"
                      className="text-sm leading-[20px] font-normal text-[#0A0A0A] cursor-pointer select-none flex items-center gap-[12px]"
                    >
                      <input
                        type="checkbox"
                        id="ackBookmark"
                        checked={bookmarkSite}
                        onChange={(e) => setBookmarkSite(e.target.checked)}
                        className="w-5 h-5 rounded accent-[#6F2DAE] border-gray-300 text-[#6F2DAE] cursor-pointer hidden peer"
                      />
                      <div className="rounded-[2px] border border-solid border-[#6F2DAE26] w-[18px] h-[18px] min-w-[18px] peer-checked:[&>img]:block peer-checked:bg-[#6750A4] bg-white flex justify-center items-center">
                        <img
                          src="/img/checkbox-tick.svg"
                          alt=""
                          className="hidden"
                        />
                      </div>
                      <span>Bookmark Canska.com as my favourite.</span>
                    </label>
                  </div>

                  {/* Action Banner */}
                  <div className="mt-[64px]">
                    <div className="bg-[#5E17EB] rounded-2xl p-6 md:p-[24px_40px_24px_24px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div className="space-y-1 text-white">
                        <h3 className="text-xl md:text-[20px] font-normal leading-[28px]">
                          Once registered, we'll email you an account activation
                          link.
                        </h3>
                        <p className="text-sm leading-[20px] font-normal text-[#FFFFFFE5]">
                          You'll be able to purchase services after your account
                          is fully activated.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="bg-[#D1AC38] hover:bg-[#C09B2E] transition-colors text-[#3A1660] text-base font-semibold leading-[24px] px-[32px] h-[56px] rounded-full shrink-0 flex items-center justify-center font-outfit cursor-pointer"
                      >
                        Register & Pay
                      </button>
                    </div>
                  </div>

                  <p className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C]">
                    Complete all required fields, verify email, and accept the
                    acknowledgements to register.
                  </p>
                </div>
              </div>

              {/* Target Grid Wrapper Block */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
                {SECURITY_POLICIES.map((policy) => (
                  <div
                    key={policy.id}
                    className="bg-white border border-solid border-[#6F2DAE1A] rounded-2xl p-6 min-h-[149.6px] flex flex-col justify-start transition-all duration-300 hover:shadow-[0px_4px_12px_rgba(111,45,174,0.05)]"
                  >
                    {/* Visual Vector Container Element */}
                    <div className="w-[20px] h-[20px] flex items-center justify-start text-[#6F2DAE] mb-3">
                      {policy.icon}
                    </div>

                    {/* Typography Content Wrapper */}
                    <div className="space-y-1">
                      <h4 className="text-base font-semibold leading-6 text-[#0A0A0A]">
                        {policy.title}
                      </h4>
                      <p className="text-sm font-normal leading-5 text-[#0A0A0A99]">
                        {policy.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const RuleItem = ({ label, isValid = false }) => {
  const strokeColor = isValid ? "stroke-[#139207]" : "stroke-[#0A0A0A99]";

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
          {/* Main Circle */}
          <path
            d="M6.99984 12.8334C10.2215 12.8334 12.8332 10.2217 12.8332 7.00002C12.8332 3.77836 10.2215 1.16669 6.99984 1.16669C3.77818 1.16669 1.1665 3.77836 1.1665 7.00002C1.1665 10.2217 3.77818 12.8334 6.99984 12.8334Z"
            className={`${strokeColor} transition-colors duration-200`}
            strokeWidth="1.16667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Exclamation point line */}
          <path
            d="M7 4.66669V7.00002"
            className={`${strokeColor} transition-colors duration-200`}
            strokeWidth="1.16667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Exclamation point dot */}
          <path
            d="M7 9.33331H7.00583"
            className={`${strokeColor} transition-colors duration-200`}
            strokeWidth="1.16667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_265_4040">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>

      {/* Optional: You can also turn the text green or keep it muted gray */}
      <span
        className={`text-xs leading-[16px] font-normal transition-colors duration-200 ${isValid ? "text-[#139207]" : "text-[#0A0A0A99]"}`}
      >
        {label}
      </span>
    </div>
  );
};
export default CreateAccount;
