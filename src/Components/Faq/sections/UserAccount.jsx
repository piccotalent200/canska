import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import ScrollAnimatedElement from '../../Reusable/ScrollAnimatedElement';

const faqData = [
  {
    id: "01",
    question:
      "Everything about creating, securing, and managing your Canska user account.",
    answer:
      "Yes. Creating a separate account for each student simplifies access, tracking, and security.",
  },
  {
    id: "02",
    question: "What is 'My Account'?",
    answer:
      "Canska is the world's first scholarship incubator for students aiming for top universities and scholarships, building portfolios over 12 years.",
  },
  {
    id: "03",
    question:
      "What is a 'Wish List'?",
    answer:
      "Canska is the world's first scholarship incubator for students aiming for top universities and scholarships, building portfolios over 12 years.",
  },
  {
    id: "04",
    question: "What should I do if I forget my account username?",
    answer:
      "Canska is the world's first scholarship incubator for students aiming for top universities and scholarships, building portfolios over 12 years.",
  },
  {
    id: "05",
    question: "What should I do if I forget my account password?",
    answer:
      "Canska is the world's first scholarship incubator for students aiming for top universities and scholarships, building portfolios over 12 years.",
  },
  {
    id: "06",
    question:
      "How can I change my current password?",
    answer:
      "Canska is the world's first scholarship incubator for students aiming for top universities and scholarships, building portfolios over 12 years.",
  },
  {
    id: "07",
    question:
      "How can I change my profile icon?",
    answer:
      "Canska is the world's first scholarship incubator for students aiming for top universities and scholarships, building portfolios over 12 years.",
  },
  {
    id: "08",
    question:
      "Why am I having trouble logging in to my account?",
    answer:
      "Canska is the world's first scholarship incubator for students aiming for top universities and scholarships, building portfolios over 12 years.",
  },
  {
    id: "09",
    question:
      "How long does a user account remain valid?",
    answer:
      "Canska is the world's first scholarship incubator for students aiming for top universities and scholarships, building portfolios over 12 years.",
  },
  {
    id: "10",
    question:
      "How long does a purchased service remain valid?",
    answer:
      "Canska is the world's first scholarship incubator for students aiming for top universities and scholarships, building portfolios over 12 years.",
  },
  {
    id: "11",
    question:
      "What methods of payment do you accept?",
    answer:
      "Canska is the world's first scholarship incubator for students aiming for top universities and scholarships, building portfolios over 12 years.",
  },
  {
    id: "12",
    question:
      "How do I close my user account or membership?",
    answer:
      "Canska is the world's first scholarship incubator for students aiming for top universities and scholarships, building portfolios over 12 years.",
  }
];

const UserAccount = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <ScrollAnimatedElement direction="up" delay={0.1}>
        <section className="w-full p-[20px_16px_60px_16px] sm:p-[40px_32px_80px_32px] lg:p-[64px_61px_99px] bg-[#FAFAFC] font-dm">
        <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[40px_16px] lg:p-[86px_48px]">
          <Image
            src="/img/user-account.svg"
            alt="Graduating students throwing caps against city skyline"
            fill
            priority
            className="object-cover object-center absolute w-full h-full"
          />
          <h1 className="text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-1">
           User Account
          </h1>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] " />
        </div>

        <p className="text-base leading-[24px] font-normal text-[#0A0A0A] mb-[48px]">
          Everything about creating, securing, and managing your Canska user account.
        </p>

        <div className="mx-auto w-full flex flex-col gap-[12px]">
          {faqData.map((item, index) => (
              <Accordion key={index}
                open={open === item.id}
                className="font-dm bg-white border border-solid border-[#5E17EB4D]  rounded-[16px]"
              >
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className="[&>span]:last-of-type:hidden font-dm border-none mt-0 cursor-pointer p-[21px_24px] flex gap-[16px]"
                >
                    <span className="inline-flex justify-center items-center bg-[#FFB43326] rounded-[12px] min-w-[36px] w-[36px] h-[36px] text-[11px] leading-[16px] font-extrabold text-[#E89A1F]">
                        Q <span className="text-xs">{item.id}</span>
                    </span>
                  {item.question}
                  <span
                    className={`ms-auto ${open === item.id ? "rotate-180" : "rotate-0"} `}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1018_2210)">
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="#595959"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1018_2210">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </AccordionHeader>
                <AccordionBody className="font-dm text-[15px] leading-[23px] p-[0_24px_21px] font-medium text-[#0A0A0A]">
                  {item.answer}
                </AccordionBody>
              </Accordion>
          ))}
        </div>
        </section>
      </ScrollAnimatedElement>
    </>
  );
};

export default UserAccount;
