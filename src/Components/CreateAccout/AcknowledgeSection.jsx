"use client";

import CheckboxItem from "./CheckboxItem";

const SECURITY_POLICIES = [
  {
    id: "lockout-policy",
    title: "3-Strike Lockout Policy",
    description: "After 3 failed logins your account locks for 30 minutes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6666 10.8335C16.6666 15.0002 13.7499 17.0835 10.2833 18.2919C10.1017 18.3534 9.90453 18.3505 9.72492 18.2835C6.24992 17.0835 3.33325 15.0002 3.33325 10.8335V5.00021C3.33325 4.7792 3.42105 4.56724 3.57733 4.41096C3.73361 4.25468 3.94557 4.16688 4.16659 4.16688C5.83325 4.16688 7.91658 3.16688 9.36658 1.90021C9.54313 1.74938 9.76771 1.6665 9.99992 1.6665C10.2321 1.6665 10.4567 1.74938 10.6333 1.90021C12.0916 3.17521 14.1666 4.16688 15.8333 4.16688C16.0543 4.16688 16.2662 4.25468 16.4225 4.41096C16.5788 4.56724 16.6666 4.7792 16.6666 5.00021V10.8335Z" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 10.0002L9.16667 11.6668L12.5 8.3335" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "hashed-storage",
    title: "One-Way Hashed Storage",
    description: "Credentials stored using Argon2 / bcrypt — zero plaintext.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8333 9.1665H4.16667C3.24619 9.1665 2.5 9.9127 2.5 10.8332V16.6665C2.5 17.587 3.24619 18.3332 4.16667 18.3332H15.8333C16.7538 18.3332 17.5 17.587 17.5 16.6665V10.8332C17.5 9.9127 16.7538 9.1665 15.8333 9.1665Z" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.83325 9.1665V5.83317C5.83325 4.7281 6.27224 3.66829 7.05364 2.88689C7.83504 2.10549 8.89485 1.6665 9.99992 1.6665C11.105 1.6665 12.1648 2.10549 12.9462 2.88689C13.7276 3.66829 14.1666 4.7281 14.1666 5.83317V9.1665" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "identity-verification",
    title: "Manual Identity Verification",
    description: "Recovery via government-issued ID matching.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3332 2.25014C10.7185 1.89286 11.2245 1.69434 11.7499 1.69434C12.2753 1.69434 12.7813 1.89286 13.1666 2.25014L17.7499 6.83348C18.1072 7.21872 18.3057 7.72473 18.3057 8.25014C18.3057 8.77556 18.1072 9.28157 17.7499 9.66681L14.6666 12.7501C14.2813 13.1074 13.7753 13.306 13.2499 13.306C12.7245 13.306 12.2185 13.1074 11.8332 12.7501L7.2499 8.16681C6.89262 7.78157 6.69409 7.27556 6.69409 6.75014C6.69409 6.22473 6.89262 5.71872 7.2499 5.33348L10.3332 2.25014Z" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.6667 5.8335L14.1667 8.3335" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.83341 8.8335L2.15508 14.5118C1.8425 14.8243 1.66684 15.2482 1.66675 15.6902V17.5002C1.66675 17.7212 1.75455 17.9331 1.91083 18.0894C2.06711 18.2457 2.27907 18.3335 2.50008 18.3335H5.00008C5.22109 18.3335 5.43306 18.2457 5.58934 18.0894C5.74562 17.9331 5.83341 17.7212 5.83341 17.5002V16.6668C5.83341 16.4458 5.92121 16.2339 6.07749 16.0776C6.23377 15.9213 6.44573 15.8335 6.66675 15.8335H7.50008C7.72109 15.8335 7.93306 15.7457 8.08934 15.5894C8.24562 15.4331 8.33341 15.2212 8.33341 15.0002V14.1668C8.33341 13.9458 8.42121 13.7339 8.57749 13.5776C8.73377 13.4213 8.94573 13.3335 9.16675 13.3335H9.31008C9.75207 13.3334 10.1759 13.1577 10.4884 12.8452L11.1667 12.1668" stroke="#6F2DAE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];


const AcknowledgeSection = ({
  isOver18, setIsOver18,
  isInfoComplete, setIsInfoComplete,
  isTruthful, setIsTruthful,
  acceptTerms, setAcceptTerms,
  acceptEmails, setAcceptEmails,
  bookmarkSite, setBookmarkSite,
  errors = {},
  onSubmit,
}) => {
  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl border border-solid border-[#6F2DAE1A] p-6 md:p-[34px_40px] mb-[32px]">
        <div className="border-b border-[#6F2DAE1A] border-solid pb-[24px] mb-[24px]">
          <h2 className="text-[30px] leading-[36px] font-normal text-[#0A0A0A]">Acknowledge</h2>
        </div>

        <div className="space-y-[12px]">
          <div id="field-isOver18">
            <CheckboxItem id="ackAge" checked={isOver18} onChange={setIsOver18}>
              I am over 18 years of age.
            </CheckboxItem>
            {errors.isOver18 && <p className="mt-1 text-xs leading-[16px] font-medium text-[#F5070B] pl-7">{errors.isOver18}</p>}
          </div>

          <div id="field-isInfoComplete">
            <CheckboxItem id="ackComplete" checked={isInfoComplete} onChange={setIsInfoComplete}>
              The information I have filled is complete and true to the best of my knowledge.
            </CheckboxItem>
            {errors.isInfoComplete && <p className="mt-1 text-xs leading-[16px] font-medium text-[#F5070B] pl-7">{errors.isInfoComplete}</p>}
          </div>

          <div id="field-isTruthful">
            <CheckboxItem id="ackTruthful" checked={isTruthful} onChange={setIsTruthful}>
              I haven&apos;t knowingly or unknowingly filled incorrect or false information.
            </CheckboxItem>
            {errors.isTruthful && <p className="mt-1 text-xs leading-[16px] font-medium text-[#F5070B] pl-7">{errors.isTruthful}</p>}
          </div>

          <div id="field-acceptTerms">
            <CheckboxItem id="ackTerms" checked={acceptTerms} onChange={setAcceptTerms}>
              I read and accept the{" "}
              <a href="#" className="text-[#5E17EB] hover:underline">privacy policy</a>{" "}
              and{" "}
              <a href="#" className="text-[#5E17EB] hover:underline">terms of use</a>.
            </CheckboxItem>
            {errors.acceptTerms && <p className="mt-1 text-xs leading-[16px] font-medium text-[#F5070B] pl-7">{errors.acceptTerms}</p>}
          </div>

          <CheckboxItem id="ackEmails" checked={acceptEmails} onChange={setAcceptEmails}>
            I accept to receive communication e-mails.
          </CheckboxItem>

          <CheckboxItem id="ackBookmark" checked={bookmarkSite} onChange={setBookmarkSite}>
            Bookmark Canska.com as my favourite.
          </CheckboxItem>

          <div className="mt-[72px] flex items-center justify-center">
            <button
              type="button"
              onClick={onSubmit}
              className="bg-[#5E17EB] hover:bg-[#5E17EB]/90 transition-colors text-[#FFFFFF] text-base font-semibold leading-[24px] py-3 px-[34px] rounded-full shrink-0 flex items-center justify-center font-outfit cursor-pointer"
            >
              Register
            </button>
          </div>

          <div className="mt-[37px]">
            <div className="bg-[#6F2DAE0D] rounded-3xl p-4 md:p-[24px_40px_24px_24px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-[#6F2DAE40]">
              <div className="space-y-1 text-[#0A0A0A]">
                <h3 className="text-xl md:text-[20px] font-medium leading-[28px]">
                  Once registered, we&apos;ll email you an account activation link.
                </h3>
                <p className="text-sm leading-[20px] font-normal text-[#0A0A0A]">
                  You&apos;ll be able to purchase services after your account is fully activated.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[12px] leading-[16px] font-normal text-[#0A0A0A8C]">
            Complete all required fields, verify email, and accept the acknowledgements to register.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
        {SECURITY_POLICIES.map((policy) => (
          <div
            key={policy.id}
            className="bg-white border border-solid border-[#6F2DAE1A] rounded-2xl p-6 min-h-[149.6px] flex flex-col justify-start transition-all duration-300 hover:shadow-[0px_4px_12px_rgba(111,45,174,0.05)]"
          >
            <div className="w-[20px] h-[20px] flex items-center justify-start text-[#6F2DAE] mb-3">
              {policy.icon}
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-semibold leading-6 text-[#0A0A0A]">{policy.title}</h4>
              <p className="text-sm font-normal leading-5 text-[#0A0A0A99]">{policy.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcknowledgeSection;
