import React from "react";

const childSafetyData = [
  {
    id: 1,
    title: "Technical Assurance",
    content: "Student identities are protected through unique student identification numbers. Only limited information—the student ID, first name, and country—is accessible to mentors and staff for operational purposes[cite: 132]. All other personally identifiable data remains protected. Access to sensitive student information is strictly restricted to a designated group of authorised personnel[cite: 133]. All official communication is conducted exclusively through the digital dashboard; communication outside the dashboard is strictly prohibited[cite: 134]. Every message is automatically time-stamped and securely archived for transparency and accountability[cite: 135]."
  },
  {
    id: 2,
    title: "Policy Commitment",
    content: "We take a zero-tolerance approach to child misconduct, abuse, and harm[cite: 136]. We uphold the Office of the Children's Welfare Standards and applicable frameworks including local child protection legislation, UNICEF safeguarding principles, and data protection standards such as GDPR[cite: 137]. Child safety is a collective responsibility embedded throughout recruitment, onboarding, training, policies, and everyday practices[cite: 138]. All mentors and employees complete a rigorous recruitment process requiring valid photo ID, a police certificate, and relevant qualifications[cite: 139]. All live mentoring sessions should take place in a noticeable, shared space with a parent or guardian present whenever possible[cite: 140]."
  },
  {
    id: 3,
    title: "Students @ Canska",
    content: "Students are at the heart of everything we do. We engage students in decisions that affect their learning, wellbeing, and support [cite: 141]; encourage them to share their views and speak up if something feels wrong [cite: 142]; offer clear and accessible ways for students to provide feedback or raise concerns [cite: 143]; and foster an inclusive environment for children from diverse cultural backgrounds[cite: 144]."
  },
  {
    id: 4,
    title: "Team Members @ Canska",
    content: "Everyone at Canska shares a collective responsibility for safeguarding and promoting the wellbeing of every child in our care[cite: 145]. All team members must follow our Child Safety Code of Conduct, comply with policies and procedures for identifying and reporting risks, and foster safe, respectful, and professional learning environments[cite: 146]."
  },
  {
    id: 5,
    title: "The Code of Conduct",
    content: "All team members must: act professionally and respectfully toward students and parents; strictly comply with the Canska Child Safety Policy [cite: 148]; maintain proper professional boundaries and avoid private contact; protect students from harm or abuse [cite: 149]; foster an ethically safe, inclusive learning environment; communicate with students only for mentorship purposes; use respectful language[cite: 150]; and report any concerns directly to the CEO. Team members must NOT: search for personal social media accounts of students [cite: 151]; engage in private conversations with students or parents; have contact with students outside mentorship activity [cite: 152]; use social media to communicate with students; make inappropriate comments; work under the influence[cite: 153]; or discriminate based on gender, race, religion, or disability. Any violation may result in immediate dismissal and notification to law enforcement[cite: 154]."
  },
  {
    id: 6,
    title: "Recruitment and Screening",
    content: "We require all mentors and staff to provide valid photo IDs, proof of current address, a recent bank statement, and a police certificate before starting work[cite: 156]. We verify all education documents, work experience letters, and references, and review relevant personal/professional social media profiles[cite: 157]. Child safety expectations are clearly communicated in job advertisements and throughout the interview and onboarding process[cite: 158]."
  },
  {
    id: 7,
    title: "Training and Support",
    content: "All new team members complete child safety training during onboarding and must agree to our Child Safety Code of Conduct[cite: 160]. We provide continuous refreshers and updates to ensure sustained awareness of policies and reporting procedures[cite: 161]. We equip our team to identify signs of abuse or grooming, monitor risk across learning environments, report concerns appropriately, and understand the impact of their behaviour on students[cite: 162]."
  },
  {
    id: 8,
    title: "Raising Concerns",
    content: "We encourage students, parents, and team members to speak up if something doesn't feel right—no concern is ever considered too small[cite: 164]. When serious concerns are raised, we respond promptly and professionally: assessing the concern impartially and confidentially, prioritising the wellbeing and safety of any student involved, maintaining accurate records, and escalating to external authorities where required[cite: 165]."
  }
];
const ChildSafetyPolicy = () => {
  return (
    <article className="flex-1">
      <div className="space-y-[16px] mb-[40px]">
        <h1 className="text-[40px] md:text-[57.6px] font-normal leading-tight md:leading-[60px] tracking-[-0.576px] text-[#0E1B2C]">
          Child Safety  <span className="text-[#E8A23A]">Policy</span>
        </h1>
        <p className="text-[16px] md:text-[18px] font-normal leading-[29px] text-[#0A0A0A] max-w-[768px] mb-[40px]">
         We describe a child as someone below the age of 18. This policy applies to the Quad program and add-on services provided by Canska. Child safety is our highest priority.
        </p>
        <div className="w-full h-[1px] bg-[linear-gradient(90deg,#D9CFBC_50%,rgba(217,207,188,0)_50%)]"></div>
      </div>

      <div className="space-y-[40px] mb-[64px]">
        {childSafetyData.map((section) => (
          <div
            key={section.id}
            className="flex flex-col md:flex-row gap-4 md:gap-0 items-start"
          >
            {/* Header Left Column */}
            <div className="w-full md:w-[293px] shrink-0 pr-4 flex gap-[10px]">
              <h3 className="text-[16.5px] font-normal leading-[27px] tracking-[-0.2px] text-[#0E1B2C]">
                {section.title}
              </h3>
            </div>

            {/* Description Right Column */}
            <div className="flex-1">
              <p className="text-[16px] font-normal leading-[28px] text-[#0E1B2C]">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-[#0E1B2C] rounded-[16px] p-6 md:p-[32px_32px_55px_32px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <span className="block text-[11px] leading-[16px] font-bold tracking-[3.08px] text-[#E8A23A] uppercase">
            Last updated - June 2026
          </span>
          <h4 className="text-[20px] md:text-[24px] font-medium leading-[32px] tracking-[-0.24px] text-[#F5F0E6]">
            Need clarity on a clause?
          </h4>
        </div>

        <a
          href="/contact"
          className="inline-flex items-center justify-between gap-3 bg-[#5E17EB] border border-[#5E17EB] text-white px-8 h-[54px] rounded-full hover:bg-[#4d10c7] transition-all duration-200 group w-full md:w-auto"
        >
          <span className="text-[15.7px] font-medium tracking-wide">
            Contact Compliance
          </span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12l4-4-4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default ChildSafetyPolicy;
