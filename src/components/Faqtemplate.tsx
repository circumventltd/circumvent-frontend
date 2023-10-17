import React from "react";
import Arrowicon from "./svgs/Arrowicon";


// I have no idea what you did here sir
interface IFaqs {
  faq: {
    question: String;
    answer: String;
  };
}

const Faqtemplate = ({faq}: IFaqs) => {
  const {question , answer} = faq
  return (
    <div className="flex min-w-full mt-auto pl-1 snap-start flex-col lg:flex-row justify-between gap-[24px]">
      <div className="mt-[80px] lg:mt-auto">
        <div className="flex">
          <div className="-rotate-180">
            <Arrowicon />
          </div>
          <div>
            <Arrowicon />
          </div>
        </div>
      </div>
      <div className="w-full lg:max-w-[480px]">
        <div>
          <h2 className="text-[#000933] text-[24px] font-euclid500 leading-[32px]">
         {question}
          </h2>
          <h2></h2>
        </div>
        <p className="font-euclid leading-[24px] text-[#000933a3] pr-2 mt-[40px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Faqtemplate;
