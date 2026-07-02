import React from "react";
import HeroSection from "./Sections/HeroSection";
import AsideSection from "./Sections/AsideSection";
import PrivacyPolicy from "./Sections/PrivacyPolicy";
import Terms from "./Sections/Terms";
import ChildSafetyPolicy from "./Sections/ChildSafetyPolicy";
import AccessibilityStatement from "./Sections/AccessibilityStatement";
import DataSecurity from "./Sections/DataSecurity";
import WebsiteDisclaimer from "./Sections/WebsiteDisclaimer";

const Legal = ({ slug }) => {
  console.log("slug", slug);
  return (
    <div className="font-dm bg-[#FBFAFF]">
      <HeroSection />
      <div className="w-full max-w-[1232px] mx-auto px-4 py-10 lg:py-16 flex flex-col md:flex-row gap-4 lg:gap-[47.6px]">
        <AsideSection slug={slug} />
        {slug == "privacy-policy" && <PrivacyPolicy />}
        {slug == "terms" && <Terms />}
        {slug == "child-safety" && <ChildSafetyPolicy />}
        {slug == "accessibility" && <AccessibilityStatement />}
        {slug == "data-security" && <DataSecurity />}
        {slug == "disclaimer" && <WebsiteDisclaimer />}
      </div>
    </div>
  );
};

export default Legal;
