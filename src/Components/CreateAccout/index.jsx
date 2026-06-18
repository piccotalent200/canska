"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import UsernamePasswordSection from "./UsernamePasswordSection";
import AboutYourselfSection from "./AboutYourselfSection";
import AboutStudentSection from "./AboutStudentSection";
import AddressSection from "./AddressSection";
import SecurityQuestionsSection from "./SecurityQuestionsSection";
import AcknowledgeSection from "./AcknowledgeSection";
import CheckboxItem from "./CheckboxItem";
import { useRouter } from "next/navigation";
import Link from "next/link";

const getUsernameRules = (value) => ({
  length: value.length >= 14 && value.length <= 28,
  uppercase: /[A-Z]/.test(value),
  lowercase: /[a-z]/.test(value),
  number: /[0-9]/.test(value),
  specials: (value.match(/[!@#$%&?/]/g) || []).length >= 2,
});

const getPasswordRules = (value) => ({
  length: value.length >= 14 && value.length <= 28,
  uppercase: /[A-Z]/.test(value),
  lowercase: /[a-z]/.test(value),
  number: /[0-9]/.test(value),
  specials: (value.match(/[!@#$%&?/]/g) || []).length >= 4,
});

const CreateAccount = () => {
  const router = useRouter()
  const [username, setUsername] = useState("");
  const [retypeUsername, setRetypeUsername] = useState("");
  const [email, setEmail] = useState("");
  const [retypeEmail, setRetypeEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // Error State
  const [errors, setErrors] = useState({});

  // About Yourself
  const [iamA, setIamA] = useState({ value: "parent", label: "Parent" });
  const [title, setTitle] = useState({ value: "mr", label: "Mr" });
  const [fullName, setFullName] = useState("");
  const [nationality, setNationality] = useState("");
  const [profession, setProfession] = useState("");
  const [mobile, setMobile] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [landline, setLandline] = useState("");
  
  // About Student
  const [studentTitle, setStudentTitle] = useState({ value: "mr", label: "Mr" });
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
  const [isMailingSame, setIsMailingSame] = useState(false);

  const [mailingApartmentName, setMailingApartmentName] = useState("");
  const [mailingApartmentNo, setMailingApartmentNo] = useState("");
  const [mailingStreetRoad, setMailingStreetRoad] = useState("");
  const [mailingAreaZone, setMailingAreaZone] = useState("");
  const [mailingCityTown, setMailingCityTown] = useState("");
  const [mailingDistrictRegion, setMailingDistrictRegion] = useState("");
  const [mailingStateProvince, setMailingStateProvince] = useState("");
  const [mailingCountry, setMailingCountry] = useState("");
  const [mailingPostZipCode, setMailingPostZipCode] = useState("");

  const [secretAnswer1, setSecretAnswer1] = useState("");
  const [secretAnswer2, setSecretAnswer2] = useState("");

  const [isOver18, setIsOver18] = useState(true);
  const [isInfoComplete, setIsInfoComplete] = useState(false);
  const [isTruthful, setIsTruthful] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptEmails, setAcceptEmails] = useState(false);
  const [bookmarkSite, setBookmarkSite] = useState(false);

  // useEffect
  useEffect(() => {
    if (!isMailingSame) return;
    setMailingApartmentName(billingApartmentName);
    setMailingApartmentNo(billingApartmentNo);
    setMailingStreetRoad(billingStreetRoad);
    setMailingAreaZone(billingAreaZone);
    setMailingCityTown(billingCityTown);
    setMailingDistrictRegion(billingDistrictRegion);
    setMailingStateProvince(billingStateProvince);
    setMailingCountry(billingCountry);
    setMailingPostZipCode(billingPostZipCode);
  }, [ isMailingSame, billingApartmentName, billingApartmentNo, billingStreetRoad, billingAreaZone, billingCityTown, billingDistrictRegion, billingStateProvince, billingCountry, billingPostZipCode ]);


  const handleMobileChange = (val) => {
    const numericValue = val.replace(/\D/g, "").slice(0, 16);
    setMobile(numericValue);
    setErrors((prev) => ({
      ...prev,
      mobile: "",
    }));
  };

  const handleWhatsAppChange = (val) => {
    const numericValue = val.replace(/\D/g, "").trim();
    setWhatsApp(numericValue);
  };

  const handleLandlineChange = (val) => {
    const numericValue = val.replace(/\D/g, "").trim();
    setLandline(numericValue);
  };

  console.log(mobile,"mobile1234")

  const handleSendCode = () => {
    const newErrors = {};
    const uRules = getUsernameRules(username);
    const pRules = getPasswordRules(password);
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

    if (!username.trim()) newErrors.username = "Username is required";
    else if (!Object.values(uRules).every(Boolean)) newErrors.username = "Username does not meet all requirements";
    if (!retypeUsername.trim()) newErrors.retypeUsername = "Please retype your username";
    else if (username !== retypeUsername) newErrors.retypeUsername = "Usernames do not match";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Enter a valid email address";
    if (!retypeEmail.trim()) newErrors.retypeEmail = "Please retype your email";
    else if (!emailRegex.test(retypeEmail)) newErrors.retypeEmail = "Enter a valid email address";
    else if (email && retypeEmail && email !== retypeEmail) newErrors.retypeEmail = "Emails do not match";
    if (!password.trim()) newErrors.password = "Password is required";
    else if (!Object.values(pRules).every(Boolean)) newErrors.password = "Password does not meet all requirements";
    if (!retypePassword.trim()) newErrors.retypePassword = "Please retype your password";
    else if (password !== retypePassword) newErrors.retypePassword = "Passwords do not match";
    setErrors((prev) => ({ ...prev, ...newErrors }));
    if (Object.keys(newErrors).length > 0) return;

    router.push("/email-verified");
  };

  const handleVerify = () => {
    const correctCode = "123456";
    if (verificationCode === correctCode) {
      toast.success("Email verified.", { className: "custom-toast-success", icon: false });
      setIsVerified(true);
      setErrors((prev) => ({ ...prev, verification: "" }));
    } else {
      toast.error("Please enter and confirm a valid email", {
        className: "custom-toast-error",
        icon: <img src="/img/warning.svg" />,
      });
    }
  };

  const scrollToField = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    const uRules = getUsernameRules(username);
    const pRules = getPasswordRules(password);

    // Username & Password
    if (!username.trim()) newErrors.username = "Username is required";
    else if (!Object.values(uRules).every(Boolean)) newErrors.username = "Username does not meet all requirements";
    if (!retypeUsername.trim()) newErrors.retypeUsername = "Please retype your username";
    else if (username !== retypeUsername) newErrors.retypeUsername = "Usernames do not match";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Enter a valid email address";
    if (!retypeEmail.trim()) newErrors.retypeEmail = "Please retype your email";
    else if (email !== retypeEmail) newErrors.retypeEmail = "Emails do not match";
    if (!password.trim()) newErrors.password = "Password is required";
    else if (!Object.values(pRules).every(Boolean)) newErrors.password = "Password does not meet all requirements";
    if (!retypePassword.trim()) newErrors.retypePassword = "Please retype your password";
    else if (password !== retypePassword) newErrors.retypePassword = "Passwords do not match";

    // About Yourself
    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    } else if (!/[a-zA-Z]/.test(fullName.trim())) {
      newErrors.fullName = "Enter a valid Full Name";
    }

    if (!nationality.trim()) newErrors.nationality = "Nationality is required";
    if (!profession.trim()) newErrors.profession = "Profession is required";

    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d+$/.test(mobile)) {
      newErrors.mobile = "Mobile number must contain only digits";
    } else if (mobile.length < 7 || mobile.length > 16) {
      newErrors.mobile = "Phone number must be 7–16 digits";
    } else if (/^(\d)\1+$/.test(mobile)) {
      newErrors.mobile = "Invalid phone number";
    } else if (/^0+$/.test(mobile)) {
      newErrors.mobile = "Invalid phone number";
    } else if (/^(\d{2,})\1+$/.test(mobile)) {
      newErrors.mobile = "Enter a valid phone number";
    } 

    // About Student
    if (!studentFullName.trim()) { 
      newErrors.studentFullName = "Student full name is required";
    } else if (studentFullName.trim().length < 3) {
      newErrors.studentFullName = "Student full name must be at least 3 characters";
    } else if (!/[a-zA-Z]/.test(studentFullName.trim())) {
      newErrors.studentFullName = "Enter a valid Student Name";
    }
    if (!studentDob) newErrors.studentDob = "Date of birth is required";
    if (!studentNationality.trim()) newErrors.studentNationality = "Nationality is required";
    if (!studentBoardOfEducation.trim()) newErrors.studentBoardOfEducation = "Board of education is required";
    if (!studentClassYearGrade.trim()) newErrors.studentClassYearGrade = "Class / Year / Grade is required";
    if (!studentSchoolName.trim()) {
       newErrors.studentSchoolName = "School name is required";
    } else if (!/[a-zA-Z]/.test(studentSchoolName.trim())) {
      newErrors.studentSchoolName = "Enter a valid School Name";
    }

    if (!studentSchoolAddress.trim()) newErrors.studentSchoolAddress = "School address is required";

    // Billing Address
    if (!billingStreetRoad.trim()) newErrors.billingStreetRoad = "Street / Road is required";
    if (!billingCityTown.trim()) newErrors.billingCityTown = "City / Town is required";
    if (!billingCountry.trim()) newErrors.billingCountry = "Country is required";
    if (!billingPostZipCode.trim()) newErrors.billingPostZipCode = "Post / Zip Code is required";

    // Mailing Address (only if different)
    if (!isMailingSame) {
      if (!mailingStreetRoad.trim()) newErrors.mailingStreetRoad = "Street / Road is required";
      if (!mailingCityTown.trim()) newErrors.mailingCityTown = "City / Town is required";
      if (!mailingCountry.trim()) newErrors.mailingCountry = "Country is required";
      if (!mailingPostZipCode.trim()) newErrors.mailingPostZipCode = "Post / Zip Code is required";
    }

    // Security Questions
    if (!secretAnswer1.trim()) newErrors.secretAnswer1 = "Answer is required";
    if (!secretAnswer2.trim()) newErrors.secretAnswer2 = "Answer is required";

    // Acknowledge
    if (!isOver18) newErrors.isOver18 = "You must be over 18 years of age";
    if (!isInfoComplete) newErrors.isInfoComplete = "Please confirm your information is complete";
    if (!isTruthful) newErrors.isTruthful = "Please confirm the information is truthful";
    if (!acceptTerms) newErrors.acceptTerms = "You must accept the privacy policy and terms of use";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstKey = Object.keys(newErrors)[0];
      scrollToField(`field-${firstKey}`);
      return;
    }
   
    router.push("/registration-success");
    
  };

  const usernameRules = getUsernameRules(username);
  const passwordRules = getPasswordRules(password);

  const billingFields = {
    apartmentName: billingApartmentName, apartmentNo: billingApartmentNo,
    streetRoad: billingStreetRoad, areaZone: billingAreaZone,
    cityTown: billingCityTown, districtRegion: billingDistrictRegion,
    stateProvince: billingStateProvince, country: billingCountry,
    postZipCode: billingPostZipCode,
  };
  const billingSetters = {
    setApartmentName: setBillingApartmentName, setApartmentNo: setBillingApartmentNo,
    setStreetRoad: setBillingStreetRoad, setAreaZone: setBillingAreaZone,
    setCityTown: setBillingCityTown, setDistrictRegion: setBillingDistrictRegion,
    setStateProvince: setBillingStateProvince, setCountry: setBillingCountry,
    setPostZipCode: setBillingPostZipCode,
  };
  const billingErrors = {
    streetRoad: errors.billingStreetRoad, cityTown: errors.billingCityTown,
    country: errors.billingCountry, postZipCode: errors.billingPostZipCode,
  };
  const billingFieldIds = {
    streetRoad: "field-billingStreetRoad", cityTown: "field-billingCityTown",
    country: "field-billingCountry", postZipCode: "field-billingPostZipCode",
  };

  const mailingFields = {
    apartmentName: mailingApartmentName, apartmentNo: mailingApartmentNo,
    streetRoad: mailingStreetRoad, areaZone: mailingAreaZone,
    cityTown: mailingCityTown, districtRegion: mailingDistrictRegion,
    stateProvince: mailingStateProvince, country: mailingCountry,
    postZipCode: mailingPostZipCode,
  };
  const mailingSetters = {
    setApartmentName: setMailingApartmentName, setApartmentNo: setMailingApartmentNo,
    setStreetRoad: setMailingStreetRoad, setAreaZone: setMailingAreaZone,
    setCityTown: setMailingCityTown, setDistrictRegion: setMailingDistrictRegion,
    setStateProvince: setMailingStateProvince, setCountry: setMailingCountry,
    setPostZipCode: setMailingPostZipCode,
  };
  const mailingErrors = {
    streetRoad: errors.mailingStreetRoad, cityTown: errors.mailingCityTown,
    country: errors.mailingCountry, postZipCode: errors.mailingPostZipCode,
  };
  const mailingFieldIds = {
    streetRoad: "field-mailingStreetRoad", cityTown: "field-mailingCityTown",
    country: "field-mailingCountry", postZipCode: "field-mailingPostZipCode",
  };

  const handleMailingSameChange = (checked) => {
    setIsMailingSame(checked);

    if (checked) {
      setMailingApartmentName(billingApartmentName);
      setMailingApartmentNo(billingApartmentNo);
      setMailingStreetRoad(billingStreetRoad);
      setMailingAreaZone(billingAreaZone);
      setMailingCityTown(billingCityTown);
      setMailingDistrictRegion(billingDistrictRegion);
      setMailingStateProvince(billingStateProvince);
      setMailingCountry(billingCountry);
      setMailingPostZipCode(billingPostZipCode);

      setErrors((prev) => ({
        ...prev,
        mailingStreetRoad: "",
        mailingCityTown: "",
        mailingCountry: "",
        mailingPostZipCode: "",
      }));
    } else {
      setMailingApartmentName("");
      setMailingApartmentNo("");
      setMailingStreetRoad("");
      setMailingAreaZone("");
      setMailingCityTown("");
      setMailingDistrictRegion("");
      setMailingStateProvince("");
      setMailingCountry("");
      setMailingPostZipCode("");
    }

  };

  return (
    <div className="font-dm min-h-screen bg-[#FDFBF7] text-[#0A0A0A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-10 max-w-[1135px] mx-auto w-full">

        <header className="text-center space-y-2">
          <span className="block tracking-[3.6px] font-bold text-xs leading-[16px] uppercase text-[#6F2DAE]">
            Create Account
          </span>
          <h1 className="text-4xl md:text-6xl font-normal md:leading-[60px] tracking-tight text-[#0A0A0A]">
            Welcome to the{" "}
            <span className="text-[#6F2DAE] font-medium">Quad</span>
          </h1>
        </header>

        <div className="bg-[#6F2DAE0D] border border-dashed border-[#6F2DAE40] rounded-2xl p-6 md:p-[34px_40px]">
          <p className="text-base leading-[30px] font-medium text-[#0A0A0A] mb-[24px]">
            The user account creation is simple and easy to complete.
            <br className="hidden md:inline" />
            Already a registered user? or Wish to make changes to your user account?{" "}
            <Link href="/login" className="text-[#6F2DAE] underline hover:text-[#5E17EB] transition-colors">
              Log‑In
            </Link>
          </p>
          <p className="text-[#0A0A0A] font-normal leading-[16px] text-xs md:text-sm mb-[12px]">
            A user account is required to apply to the Quad Program, complete the application, pay the assessment fee, enroll in the program, buy add-on services, view purchase history, ensure secure payments, protect privacy, and maintain robust safety protocols.
          </p>
          <p className="text-[#0A0A0AD9] font-normal leading-[16px] text-xs md:text-sm">
            We recommend registering a separate user account for each student. Please ensure each username and password is unique and different for every account.
          </p>
        </div>

        <form autoComplete="off" onSubmit={(e) => e.preventDefault()} className="space-y-[40px] lg:space-y-[50px]">
          <UsernamePasswordSection
            username={username} setUsername={setUsername}
            retypeUsername={retypeUsername} setRetypeUsername={setRetypeUsername}
            email={email} setEmail={setEmail}
            retypeEmail={retypeEmail} setRetypeEmail={setRetypeEmail}
            password={password} setPassword={setPassword}
            retypePassword={retypePassword} setRetypePassword={setRetypePassword}
            verificationCode={verificationCode} setVerificationCode={setVerificationCode}
            isVerified={isVerified}
            onSendCode={handleSendCode}
            onVerify={handleVerify}
            usernameRules={usernameRules}
            passwordRules={passwordRules}
            errors={errors}
            setErrors={setErrors}
          />

          <AboutYourselfSection
            iamA={iamA} setIamA={setIamA}
            title={title} setTitle={setTitle}
            fullName={fullName} setFullName={(v) => { setFullName(v); setErrors((p) => ({ ...p, fullName: "" })); }}
            nationality={nationality} setNationality={(v) => { setNationality(v); setErrors((p) => ({ ...p, nationality: "" })); }}
            profession={profession} setProfession={(v) => { setProfession(v); setErrors((p) => ({ ...p, profession: "" })); }}
            mobile={mobile} setMobile={handleMobileChange}
            whatsApp={whatsApp} setWhatsApp={handleWhatsAppChange}
            landline={landline} setLandline={handleLandlineChange}
            errors={errors}
          />

          <AboutStudentSection
            studentTitle={studentTitle} setStudentTitle={setStudentTitle}
            studentFullName={studentFullName} setStudentFullName={(v) => { setStudentFullName(v); setErrors((p) => ({ ...p, studentFullName: "" })); }}
            studentDob={studentDob} setStudentDob={(v) => { setStudentDob(v); setErrors((p) => ({ ...p, studentDob: "" })); }}
            studentNationality={studentNationality} setStudentNationality={(v) => { setStudentNationality(v); setErrors((p) => ({ ...p, studentNationality: "" })); }}
            studentBoardOfEducation={studentBoardOfEducation} setStudentBoardOfEducation={(v) => { setStudentBoardOfEducation(v); setErrors((p) => ({ ...p, studentBoardOfEducation: "" })); }}
            studentClassYearGrade={studentClassYearGrade} setStudentClassYearGrade={(v) => { setStudentClassYearGrade(v); setErrors((p) => ({ ...p, studentClassYearGrade: "" })); }}
            studentSchoolName={studentSchoolName} setStudentSchoolName={(v) => { setStudentSchoolName(v); setErrors((p) => ({ ...p, studentSchoolName: "" })); }}
            studentSchoolAddress={studentSchoolAddress} setStudentSchoolAddress={(v) => { setStudentSchoolAddress(v); setErrors((p) => ({ ...p, studentSchoolAddress: "" })); }}
            studentSchoolWebsite={studentSchoolWebsite} setStudentSchoolWebsite={setStudentSchoolWebsite}
            errors={errors}
          />

          <AddressSection
            title="Billing Address"
            subtitle="As per your valid credit or debit card billing address."
            fields={billingFields}
            setters={billingSetters}
            fieldErrors={billingErrors}
            fieldIds={billingFieldIds}
            onFieldChange={(key) => setErrors((p) => ({ ...p, [`billing${key.charAt(0).toUpperCase() + key.slice(1)}`]: "" }))}
            footer={
              <CheckboxItem id="sameAddress" checked={isMailingSame} onChange={handleMailingSameChange}>
                Mailing address is the same as billing address
              </CheckboxItem>
            }
          />

          <AddressSection
            title="Mailing Address"
            fields={mailingFields}
            setters={mailingSetters}
            fieldErrors={mailingErrors}
            fieldIds={mailingFieldIds}
            onFieldChange={(key) => setErrors((p) => ({ ...p, [`mailing${key.charAt(0).toUpperCase() + key.slice(1)}`]: "" }))}
          />

          <SecurityQuestionsSection
            secretAnswer1={secretAnswer1} setSecretAnswer1={(v) => { setSecretAnswer1(v); setErrors((p) => ({ ...p, secretAnswer1: "" })); }}
            secretAnswer2={secretAnswer2} setSecretAnswer2={(v) => { setSecretAnswer2(v); setErrors((p) => ({ ...p, secretAnswer2: "" })); }}
            errors={errors}
          />

          <AcknowledgeSection
            isOver18={isOver18} setIsOver18={(v) => { setIsOver18(v); setErrors((p) => ({ ...p, isOver18: "" })); }}
            isInfoComplete={isInfoComplete} setIsInfoComplete={(v) => { setIsInfoComplete(v); setErrors((p) => ({ ...p, isInfoComplete: "" })); }}
            isTruthful={isTruthful} setIsTruthful={(v) => { setIsTruthful(v); setErrors((p) => ({ ...p, isTruthful: "" })); }}
            acceptTerms={acceptTerms} setAcceptTerms={(v) => { setAcceptTerms(v); setErrors((p) => ({ ...p, acceptTerms: "" })); }}
            acceptEmails={acceptEmails} setAcceptEmails={setAcceptEmails}
            bookmarkSite={bookmarkSite} setBookmarkSite={setBookmarkSite}
            errors={errors}
            onSubmit={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
