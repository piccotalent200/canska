"use client";

import FormSelect from "../Reusable/FormSelect";
import FormField from "./FormField";

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


const AboutYourselfSection = ({
  iamA, setIamA,
  title, setTitle,
  fullName, setFullName,
  nationality, setNationality,
  profession, setProfession,
  mobile, setMobile,
  whatsApp, setWhatsApp,
  landline, setLandline,
  errors,
}) => {
  return (
    <div className="bg-white rounded-3xl border border-solid border-[#6F2DAE1A] p-6 md:p-[34px_40px]">
      <div className="border-b border-[#6F2DAE1A] border-solid pb-[24px] mb-[24px]">
        <h2 className="text-[30px] leading-[26px] font-normal text-[#0A0A0A]">
          About Yourself
        </h2>
      </div>

      <div className="space-y-[32px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[54px] gap-y-[20px]">
          <div className="space-y-[10px] relative">
            <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">I am a</label>
            <FormSelect label="I am a" options={identityOptions} value={iamA} onChange={setIamA} instanceId="iam-a" />
          </div>

          <div className="space-y-[10px] relative">
            <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">Title</label>
            <FormSelect label="Title" options={titleOptions} value={title} onChange={setTitle} instanceId="yourself-title" />
          </div>

          <FormField label="Full Name" placeholder="First and Last Name" value={fullName} onChange={setFullName} error={errors.fullName} />
          <FormField label="Nationality" placeholder="Nationality" value={nationality} onChange={setNationality} error={errors.nationality}  />
          <FormField label="Profession" placeholder="Profession" value={profession} onChange={setProfession} error={errors.profession} />
          <FormField label="Mobile" type="tel" placeholder="00 + Country Code + Mobile" value={mobile} onChange={setMobile} error={errors.mobile} />
          <FormField label="WhatsApp" type="tel" placeholder="00 + Country Code + Mobile" value={whatsApp} onChange={setWhatsApp} />
          <FormField label="Landline" type="tel" placeholder="00 + Country Code + Area + Landline" value={landline} onChange={setLandline} />
        </div>

        <div>
          <p className="text-[12px] leading-[18px] text-[#0A0A0AD9] font-normal">
            It is our service policy to request your contact information for the sole purpose of communication. The information you provide us will be treated as highly confidential and will not be disclosed or shared externally as per our{" "}
            <a href="#" className="text-[#5E17EB] hover:text-[#5E17EB] underline transition-colors">
              privacy policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutYourselfSection;
