import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Arrowicon from "./svgs/Arrowicon";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[#000933] h-[100vh]  relative">
      <div className="absolute top-0 h-full w-full">
        <img src="/hand.svg" className="h-full" />
      </div>
      <div className="absolute flex justify-between flex-col p-[24px] lg:p-[80px] gap-5  h-full  top-0 w-full">
        <h2 className="font-euclid text-white text-[48px] md:text-[40px] lg:text-[96px] leading-[56px] lg:leading-[104px] max-w-[382px] lg:max-w-[640px]">
          Empower your business with customized IT solutions
        </h2>
        <div className="flex flex-col mt-auto lg:flex-row items-start justify-between">
          <div className="mt-auto rotate-90 lg:rotate-0 mb-[24px]">
            <Arrowicon />
          </div>
          <div className="flex flex-col gap-[40px] max-w-[480px]">
            <div className="text-white opacity-[0.64]">
              <p className="font-euclid text-[16px] lg:text-[30px]">
                Let us help you navigate the digital space.
              </p>
              <p className="font-euclid text-[16px] lg:text-[30px]">
                Our customized IT solutions are designed to meet your unique
                needs and drive your business forward.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-[24px] lg:text-[28px]">
              <button className=" py-[20px] px-[28px] lg:py-[32px] lg:px-[40px] border border-white text-white font-euclid500">
                Learn more
              </button>
              <button className="py-[20px] px-[28px] lg:py-[32px] lg:px-[40px] bg-white text-primary font-euclid500 ">
                Book a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
