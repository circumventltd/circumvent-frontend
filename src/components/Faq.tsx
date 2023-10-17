import React from "react";
import { testimonialData } from "../data/data";
import Faqtemplate from "./Faqtemplate";

type Props = {};

const Faq = (props: Props) => {
  return (
    <div className="p-[24px] lg:p-[80px] min-h-[100vh] flex flex-col flex-1">
      <div className="flex gap-[24px] items-center mb-[40px]">
        <h2 className="font-euclid600 leading-[24px] tracking-[4px] whitespace-nowrap text-[#00093366]">
          FAQS
        </h2>
        <div className="h-[1px] w-[80px] bg-[#00093366]"></div>
      </div>
      <h1 className="font-euclid text-[48px] lg:text-[72px] leading-[56px] lg:leading-[80px] text-headertext">
        Frequently Asked Questions
      </h1>
      <div className="flex max-w-[100vw] overflow-x-scroll snap-mandatory snap-x my-auto ">
        {testimonialData.map((faq, index) => (
          <Faqtemplate key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default Faq;