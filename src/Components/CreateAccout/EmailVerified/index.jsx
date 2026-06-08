import React from "react";

const EmailVerified = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-[#FDFBF7] flex items-center justify-center p-4 lg:p-[45px] font-dm">
        {/* Container matching image_98960a.png / Frame 7 */}
        <div
          className="w-full max-w-[1096px] bg-white border border-[#6F2DAE]/20 
        shadow-[2px_2px_2px_1px_rgba(0,0,0,0.1)] rounded-[24px] flex flex-col items-center px-6 py-12 md:p-[252px_64px_64px_64px] text-center relative">
          <img
            src="/img/email-verified.svg"
            alt=""
            className="absolute w-[292px] h-[292px] top-0"
          />

          {/* Text Contents */}
          <h1 className="text-2xl md:text-3xl leading-[36px] font-bold text-[#0A0A0A] tracking-tight mb-[17px]">
            Email Verified!
          </h1>

          <p className="text-[#0A0A0A] text-sm md:text-base max-w-[540px] leading-[20px] font-normal mb-[17px]">
            Your account has been verified and is now active. You can log in now
            using the credentials provided with your student number.
          </p>

          <a
            href="#"
            className="text-sm md:text-base leading-[20px] font-medium text-[#5E17EB] hover:text-[#551A8B] transition-colors hover:underline"
          >
            Let's start applying to the Quad Program.
          </a>
        </div>
      </div>
  );
};

export default EmailVerified;
