import React from "react";
import TestimonialsTemplate from "./TestimonialsTemplate";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div className="p-[24px] lg:p-[80px]">
      <div className="flex gap-[24px] items-center mb-[40px]">
        <h2 className="font-euclid600 leading-[24px] tracking-[4px] text-[#00093366]">
          WHAT OUR CLIENTS SAY
        </h2>
        <div className="h-[1px] w-[80px] bg-[#00093366]"></div>
      </div>
      <h1 className="font-euclid text-[48px] lg:text-[72px] leading-[56px] lg:leading-[80px] text-headertext">
        Testimonials
      </h1>
      <TestimonialsTemplate />
    </div>
  );
};

export default Testimonials;
