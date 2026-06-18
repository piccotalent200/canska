"use client";

import FormField from "./FormField";

const SecurityQuestionsSection = ({
  secretAnswer1, setSecretAnswer1,
  secretAnswer2, setSecretAnswer2,
  errors = {},
}) => {
  return (
    <div className="bg-white rounded-3xl border border-solid border-[#6F2DAE1A] p-6 md:p-[34px_40px]">
      <div className="border-b border-[#6F2DAE1A] border-solid pb-[24px] mb-[24px] space-y-1">
        <h2 className="text-[30px] leading-[36px] font-normal text-[#0A0A0A]">Security Questions</h2>
        <p className="text-sm leading-[20px] font-normal text-[#0A0A0A99] max-w-[608px] w-full">
          If you forget your username and/or password, you will need these answers to recover your account. Memorise or write them down.
        </p>
      </div>

      <div className="space-y-[20px]">
        <div className="grid grid-cols-1 gap-y-[20px]">
          <div className="space-y-[10px] relative">
            <span className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">Security Question 1</span>
            <div className="w-full h-[46px] px-4 bg-[#FFFFFF] border border-[#6F2DAE1A] rounded-xl flex items-center select-none pointer-events-none">
              <span className="text-sm text-[#0A0A0A] font-normal">What are your three favourite colours?</span>
            </div>
          </div>

          <div id="field-secretAnswer1">
            <FormField
              label="Secret Answer 1"
              placeholder="e.g., Olive Green, Mustard Yellow, Muddy Gray"
              value={secretAnswer1}
              onChange={setSecretAnswer1}
              error={errors.secretAnswer1}
            />
          </div>

          <div className="space-y-[10px] relative">
            <span className="block font-medium leading-[20px] text-sm text-[#0A0A0AD9]">Security Question 2</span>
            <div className="w-full h-[46px] px-4 bg-[#FFFFFF] border border-[#6F2DAE1A] rounded-xl flex items-center select-none pointer-events-none">
              <span className="text-sm text-[#0A0A0A] font-normal">Who are three of your childhood friends?</span>
            </div>
          </div>

          <div id="field-secretAnswer2">
            <FormField
              label="Secret Answer 2"
              placeholder="e.g., Kavya, Sneha, Meera"
              value={secretAnswer2}
              onChange={setSecretAnswer2}
              error={errors.secretAnswer2}
            />
          </div>
        </div>

        <div className="p-[16px_18px] bg-[#F6F1E7] rounded-[12px]">
          <p className="text-[12px] leading-[18px] text-[#0A0A0ACC] font-normal">
            To fully protect your user account, please remember the answers to the above security questions. Do not share your answers with anyone for whatever reason. If you forget your username and/or password, you will need these answers to recover your account. So, please memorise your answers or write them down and keep them in a secure place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityQuestionsSection;
