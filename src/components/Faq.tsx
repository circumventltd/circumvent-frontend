import React from "react";
import { faqs } from "../data/data";
import Faqtemplate from "./Faqtemplate";
import Arrowicon from "./svgs/Arrowicon";

type Props = {};

const Faq = (props: Props) => {
  return (
    <div className="p-[24px] mt-[60px] lg:p-[40px] min-h-[100vh] flex flex-col flex-1">
      <div className="flex gap-[24px] items-center mb-[20px]">
        <h2 className="font-euclid600 leading-[24px] tracking-[4px] whitespace-nowrap text-[#00093366]">
          FAQS
        </h2>
        <div className="h-[1px] w-[80px] bg-[#00093366]"></div>
      </div>
      <h1 className="font-euclid text-[48px] lg:text-[72px] leading-[56px] lg:leading-[80px] text-headertext">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col md:flex-row max-w-[100vw] mt-[80px]  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
          {faqs.map((faq, index) => (
            <Faqtemplate key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
