import React from "react";
import Arrowicon from "./svgs/Arrowicon";
import { motion } from "framer-motion";

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
    handleArrow("right");
  };
  return (
    <motion.div
      initial={{ opacity: 0.6, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-screen px-7 md:pl-0  mt-auto snap-start flex-col lg:flex-row justify-between "
    >
      <div className="lg:mt-auto md:pl-9 gap-3">
        <div className="flex flex-row gap-4">
          <div onClick={handleLeftClick} className="-rotate-180 cursor-pointer">
            <Arrowicon color={"#0030FF"} />
          </div>
          <div onClick={handleRightClick} className="cursor-pointer">
            <Arrowicon color={"#0030FF"} />
          </div>
        </div>
      </div>
      <div className="w-full pl-5 lg:max-w-[480px]">
        <div>
          <h2 className="text-[#000933] text-[24px] font-euclid500 leading-[32px]">
            {name}
          </h2>
          <h2 className="font-euclid text-[16px] leading-[24px] font-normal text-[#000933A3]">
            {title}
          </h2>
        </div>
        <p className="font-euclid leading-[24px] text-[#000933a3] pr-2 mt-[40px]">
          {comment}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialsTemplate;
