import React from "react";
import Arrowicon from "./svgs/Arrowicon";

interface ITestiomial {
  testimonial: {
    name: String;
    title: String;
    comment: String;
  };
  handleArrow: (direction: string) => void;
}

const TestimonialsTemplate = ({ testimonial, handleArrow }: ITestiomial) => {
  const { name, title, comment } = testimonial;
  const handleLeftClick = () => {
    handleArrow("left");
  };
  const handleRightClick = () => {
    handleArrow("left");
  };
  return (
    <div className="flex w-screen mt-auto snap-start flex-col lg:flex-row  justify-around gap-[24px]">
      <div className="mt-[80px] lg:mt-auto">
        <div className="flex flex-row">
          <div onClick={handleLeftClick} className="-rotate-180 cursor-pointer">
            <Arrowicon color={"#0030FF"} />
          </div>
          <div onClick={handleRightClick} className="cursor-pointer">
            <Arrowicon color={"#0030FF"} />
          </div>
        </div>
      </div>
      <div className="w-full lg:max-w-[480px]">
        <div>
          <h2 className="text-[#000933] text-[24px] font-euclid500 leading-[32px]">
            {name}
          </h2>
          <h2>{title}</h2>
        </div>
        <p className="font-euclid leading-[24px] text-[#000933a3] pr-2 mt-[40px]">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsTemplate;
