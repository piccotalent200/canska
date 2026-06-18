"use client";

import FormSelect from "../Reusable/FormSelect";
import FormField from "./FormField";
import { FormDatePicker } from "../Reusable/FormDatePicker";

const titleOptions = [
  { value: "mr", label: "Mr" },
  { value: "mrs", label: "Mrs" },
  { value: "ms", label: "Ms" },
  { value: "dr", label: "Dr" },
];

const AboutStudentSection = ({
  studentTitle, setStudentTitle,
  studentFullName, setStudentFullName,
  studentDob, setStudentDob,
  studentNationality, setStudentNationality,
  studentBoardOfEducation, setStudentBoardOfEducation,
  studentClassYearGrade, setStudentClassYearGrade,
  studentSchoolName, setStudentSchoolName,
  studentSchoolAddress, setStudentSchoolAddress,
  studentSchoolWebsite, setStudentSchoolWebsite,
  errors = {},
}) => {
  return (
    <div className="bg-white rounded-3xl border border-solid border-[#6F2DAE1A] p-6 md:p-[34px_40px]">
      <div className="border-b border-[#6F2DAE1A] border-solid pb-[24px] mb-[24px]">
        <h2 className="text-[30px] leading-[26px] font-normal text-[#0A0A0A]">About the Student</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[54px] gap-y-[20px]">
        <div className="space-y-[10px] relative">
          <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">Title</label>
          <FormSelect options={titleOptions} value={studentTitle} onChange={setStudentTitle} instanceId="student-title" />
        </div>

        <div id="field-studentFullName">
          <FormField label="Full Name" placeholder="First and Last Name" value={studentFullName} onChange={setStudentFullName} error={errors.studentFullName} />
        </div>

        <div id="field-studentDob" className="space-y-[10px] relative">
          <label className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">Date of Birth</label>
          <FormDatePicker value={studentDob} onChange={setStudentDob} placeholder="dd - mm - yyyy" error={errors.studentDob} />
          {errors.studentDob && (
            <p className="text-xs leading-[16px] font-medium text-[#F5070B]">{errors.studentDob}</p>
          )}
        </div>

        <div id="field-studentNationality">
          <FormField label="Nationality" placeholder="Nationality" value={studentNationality} onChange={setStudentNationality} error={errors.studentNationality} />
        </div>
        <div id="field-studentBoardOfEducation">
          <FormField label="Board of Education" placeholder="e.g., IB, CBSE, ICSE, Cambridge" value={studentBoardOfEducation} onChange={setStudentBoardOfEducation} error={errors.studentBoardOfEducation} />
        </div>
        <div id="field-studentClassYearGrade">
          <FormField label="Class / Year / Grade" placeholder="Grade" value={studentClassYearGrade} onChange={setStudentClassYearGrade} error={errors.studentClassYearGrade} />
        </div>
        <div id="field-studentSchoolName">
          <FormField label="School Name" placeholder="School Name" value={studentSchoolName} onChange={setStudentSchoolName} error={errors.studentSchoolName} />
        </div>
        <div id="field-studentSchoolAddress">
          <FormField label="School Address" placeholder="Street, City, Country" value={studentSchoolAddress} onChange={setStudentSchoolAddress} error={errors.studentSchoolAddress} />
        </div>
        <FormField label="School Website" placeholder="https://" value={studentSchoolWebsite} onChange={setStudentSchoolWebsite} />
      </div>
    </div>
  );
};

export default AboutStudentSection;
