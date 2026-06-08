"use client";
import React, { useState } from "react";
import ScrollAnimatedElement from "../../Reusable/ScrollAnimatedElement";
import { features } from "@/utilities/constants";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    studentAge: "",
    studentGrade: "",
    cityTown: "",
    country: "",
    email: "",
    mobile: "",
    whatsapp: "",
    message: "",
    captchaInput: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="min-h-screen bg-[#1E2229] text-white antialiased p-4 sm:p-6 md:p-8 lg:p-16 flex items-center justify-center relative overflow-hidden">
      <span className="bg-[radial-gradient(circle,_#FFB43344_0%,_#00000000_100%)] w-[400px] h-[300px] blur-[80px] absolute -left-[5%] -bottom-[2%]"></span>

      <ScrollAnimatedElement className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        {/* Left Column: Context & Branding Details */}
        <ScrollAnimatedElement
          delay={0.1}
          className="lg:col-span-6 space-y-8 lg:space-y-10"
        >
          <div>
            <ScrollAnimatedElement delay={0.2}>
              <div className="flex items-center space-x-2 text-[11px] leading-4 font-bold tracking-widest text-[#FFB433] hover:text-[#FFB433] uppercase transition-colors duration-300 group mb-4 lg:mb-8">
                <span className="w-4 h-0.5 bg-[#FFB433] group-hover:bg-[#FFB433] group-hover:w-6 transition-all duration-300"></span>
                <h4 className="text-[11px] leading-4 font-bold text-[#FFB433] uppercase tracking-[2.42px]">
                  Ready to Begin
                </h4>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement delay={0.3}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal tracking-tight leading-tight lg:leading-16 text-[#FFFFFF] mb-6 lg:mb-8">
                Discover how the <span className="text-[#FFB433]">“Quad”</span>{" "}
                can shape your child's pathway.
              </h1>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement delay={0.4}>
              <p className="text-sm sm:text-base text-[#FFFFFFBF] leading-6.5 font-normal max-w-xl pt-2">
                Create a new user account and apply for the Quad program — or
                book a quick 20-minute meeting with our team via MS Teams or
                Zoom.
              </p>
            </ScrollAnimatedElement>
          </div>

          {/* Action CTAs */}
          <ScrollAnimatedElement delay={0.5}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <button className="bg-[#FFB433] text-[#1F232E] font-bold text-sm p-4 sm:p-[16px_26px] h-auto sm:h-12.75 rounded-full transition-all duration-200 hover:bg-[#ffa71a] hover:scale-[1.02] active:scale-[0.98] border border-solid border-[#00000000] cursor-pointer">
                Create Account & Apply
              </button>

              <button className="bg-[#FFFFFF1A] text-[#FFFFFF] border border-solid border-[#00000000] font-bold leading-5.25 text-sm p-4 sm:p-[16px_26px] h-auto sm:h-12.75 rounded-full transition-all duration-200 hover:bg-[#3A404D] hover:text-white hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                Book a 20-Minute Meeting
              </button>
            </div>
          </ScrollAnimatedElement>

          {/* Mini Features Grid */}
          <ScrollAnimatedElement
            delay={0.6}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8 border-b border-solid border-[#FFFFFF33]"
          >
            {features.map((feat, index) => (
              <ScrollAnimatedElement
                key={feat.id}
                delay={0.7 + index * 0.1}
                className="space-y-1.25 group cursor-default pt-3 border-t border-solid border-[#FFFFFF26]"
              >
                <span className="text-[14px] leading-4 font-normal text-[#FFB433] block group-hover:text-[#FFBA35] transition-colors">
                  {feat.id}
                </span>
                <p className="text-sm leading-5.25 font-medium text-[#FFFFFF] group-hover:text-white transition-colors">
                  {feat.text}
                </p>
              </ScrollAnimatedElement>
            ))}
          </ScrollAnimatedElement>

          {/* Contact Footer */}
          <ScrollAnimatedElement delay={1.1}>
            <div>
              <span className="text-[14px] leading-4 font-semibold tracking-[2.1px] text-[#FFAD33] uppercase block mb-2">
                Have Questions?
              </span>
              <a
                href="mailto:scholar@canska.com"
                className="text-base leading-6 font-medium text-[#FFFFFFCC] hover:text-[#FFBA35] transition-colors block mb-4"
              >
                scholar@canska.com
              </a>
              <p className="text-base leading-5.5 font-semibold text-[#FFFFFFB2]">
                We usually reply within 24 hours.
              </p>
            </div>
          </ScrollAnimatedElement>
        </ScrollAnimatedElement>

        {/* Right Column: Free Evaluation Form Card */}
        <ScrollAnimatedElement
          delay={1.2}
          className="lg:col-span-6 bg-[#FAF8F3] text-[#1E2229] rounded-3xl p-4 sm:p-6 lg:p-8"
        >
          {/* Form Header Badge */}
          <ScrollAnimatedElement delay={1.3}>
            <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
              <div className="space-y-1">
                <span className="text-[14px] leading-4 font-bold tracking-widest text-[#5E17EB] uppercase block">
                  Free Service
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[26px] leading-8 font-normal text-[#1F232E] tracking-tight">
                  Get a Free Evaluation
                </h2>
              </div>
              <span className="bg-[#5E17EB] text-white text-[11px] leading-4 font-semibold tracking-widest uppercase p-[6px_12px] rounded-full">
                No Obligation
              </span>
            </div>
          </ScrollAnimatedElement>

          {/* Interactive Input Form */}
          <ScrollAnimatedElement delay={1.4}>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="parentName"
                  placeholder="Parent Name"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#E8E3D8] rounded-xl p-[6px_8px] text-sm leading-8 font-normal placeholder:text-[#1F232E99] outline-4 outline-solid outline-transparent focus:outline-[#5E17EB]/20 transition-all duration-300 focus:border-[#5E17EB] hover:border-[#5E17EB] h-auto sm:h-11.75"
                />
                <input
                  type="text"
                  name="studentName"
                  placeholder="Student Name"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#E8E3D8] rounded-xl p-[6px_8px] text-sm leading-8 font-normal placeholder:text-[#1F232E99] outline-4 outline-solid outline-transparent focus:outline-[#5E17EB]/20 transition-all duration-300 focus:border-[#5E17EB] hover:border-[#5E17EB] h-auto sm:h-11.75"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="studentAge"
                  placeholder="Student Age"
                  value={formData.studentAge}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#E8E3D8] rounded-xl p-[6px_8px] text-sm leading-8 font-normal placeholder:text-[#1F232E99] outline-4 outline-solid outline-transparent focus:outline-[#5E17EB]/20 transition-all duration-300 focus:border-[#5E17EB] hover:border-[#5E17EB] h-auto sm:h-11.75"
                />
                <input
                  type="text"
                  name="studentGrade"
                  placeholder="Student Grade"
                  value={formData.studentGrade}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#E8E3D8] rounded-xl p-[6px_8px] text-sm leading-8 font-normal placeholder:text-[#1F232E99] outline-4 outline-solid outline-transparent focus:outline-[#5E17EB]/20 transition-all duration-300 focus:border-[#5E17EB] hover:border-[#5E17EB] h-auto sm:h-11.75"
                />
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="cityTown"
                  placeholder="City / Town"
                  value={formData.cityTown}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#E8E3D8] rounded-xl p-[6px_8px] text-sm leading-8 font-normal placeholder:text-[#1F232E99] outline-4 outline-solid outline-transparent focus:outline-[#5E17EB]/20 transition-all duration-300 focus:border-[#5E17EB] hover:border-[#5E17EB] h-auto sm:h-11.75"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#E8E3D8] rounded-xl p-[6px_8px] text-sm leading-8 font-normal placeholder:text-[#1F232E99] outline-4 outline-solid outline-transparent focus:outline-[#5E17EB]/20 transition-all duration-300 focus:border-[#5E17EB] hover:border-[#5E17EB] h-auto sm:h-11.75"
                />
              </div>

              {/* Row 4 (Email Full Width) */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-white border border-[#E8E3D8] rounded-xl p-[6px_8px] text-sm leading-8 font-normal placeholder:text-[#1F232E99] outline-4 outline-solid outline-transparent focus:outline-[#5E17EB]/20 transition-all duration-300 focus:border-[#5E17EB] hover:border-[#5E17EB] h-auto sm:h-11.75"
              />

              {/* Row 5 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile (+91 9898989899)"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#E8E3D8] rounded-xl p-[6px_8px] text-sm leading-8 font-normal placeholder:text-[#1F232E99] outline-4 outline-solid outline-transparent focus:outline-[#5E17EB]/20 transition-all duration-300 focus:border-[#5E17EB] hover:border-[#5E17EB] h-auto sm:h-11.75"
                />
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="Whatsapp (optional)"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#E8E3D8] rounded-xl p-[6px_8px] text-sm leading-8 font-normal placeholder:text-[#1F232E99] outline-4 outline-solid outline-transparent focus:outline-[#5E17EB]/20 transition-all duration-300 focus:border-[#5E17EB] hover:border-[#5E17EB] h-auto sm:h-11.75"
                />
              </div>

              {/* Message Textarea */}
              <textarea
                name="message"
                rows={3}
                placeholder="A short message about your child (optional)"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-white border border-[#E8E3D8] rounded-xl p-[6px_8px] text-sm leading-8 font-normal placeholder:text-[#1F232E99] outline-4 outline-solid outline-transparent focus:outline-[#5E17EB]/20 transition-all duration-300 focus:border-[#5E17EB] hover:border-[#5E17EB] min-h-[80px]"
              />

              {/* Row 5 */}
              <div>
                <div className="flex items-center">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Student CV / Portfolio"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-[#E8E3D8] rounded-xl p-[6px_8px] text-sm leading-8 font-normal placeholder:text-[#1F232E99] outline-4 outline-solid outline-transparent focus:outline-[#5E17EB]/20 transition-all duration-300 focus:border-[#5E17EB] hover:border-[#5E17EB] h-auto sm:h-11.75 pe-[110px] pointer-events-none "
                  />
                  <label className="text-sm leading-[21px] font-bold text-[#FFFFFF] bg-[#1F232E] p-[8px_16px] rounded-[999px] absolute right-[11px] min-w-[94px] text-center cursor-pointer hover:bg-[#1F232E]/95">
                    <input type="file" className="hidden" />
                    Upload
                  </label>
                </div>

                <p className="text-sm leading-[32px] font-normal text-[#1F232E99]">
                  Note: Upload (Single PDF; max 8 MB)
                </p>
              </div>

              {/* Captcha Block */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="bg-[#1E2229] text-[#FFBA35] font-bold leading-4 text-sm tracking-[1.7px] p-[6px_12px] rounded-[999px] select-none text-center">
                  V8Z5H2K3
                </div>
                <input
                  type="text"
                  name="captchaInput"
                  placeholder="Type the code"
                  value={formData.captchaInput}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#E8E3D8] rounded-xl p-[6px_8px] text-sm leading-8 font-normal placeholder:text-[#1F232E99] outline-4 outline-solid outline-transparent focus:outline-[#5E17EB]/20 transition-all duration-300 focus:border-[#5E17EB] hover:border-[#5E17EB] h-auto sm:h-11.75"
                />
              </div>

              {/* Submit Action Button */}
              <button
                type="submit"
                className="w-full bg-[#5E17EB] hover:bg-[#4617c5] text-white font-bold leading-5.25 text-sm p-[15px] sm:p-[15px_30px] rounded-full transition-all duration-200 flex items-center justify-center gap-2.5 group/btn cursor-pointer"
              >
                <span>Submit Evaluation Request</span>
                <svg
                  className="transition-transform group-hover/btn:translate-x-1"
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-0.000218734 6.01911V4.33911H7.15378L3.65378 1.18911L4.84378 -0.000890732L9.79978 4.61911V5.72511L4.84378 10.3591L3.65378 9.16911L7.15378 6.01911H-0.000218734Z"
                    fill="white"
                  />
                </svg>
              </button>
            </form>
          </ScrollAnimatedElement>

          {/* Form Disclosure Note */}
          <ScrollAnimatedElement delay={1.5}>
            <p className="text-[14px] leading-4 font-normal text-[#1F232EB2] text-center mt-4">
              Your information will remain strictly confidential and will never
              be shared with third parties.
            </p>
          </ScrollAnimatedElement>
        </ScrollAnimatedElement>
      </ScrollAnimatedElement>
    </section>
  );
};

export default ContactComponent;
