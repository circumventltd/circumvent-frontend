import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[#000933] relative">
      <img src="/hand.svg" />
      <div className="absolute flex justify-between flex-col p-[40px] lg:p-[80px] gap-5  top-0 w-full h-full">
        <h2 className="font-euclid text-white text-[25px] md:text-[40px] lg:text-[60px] max-w-[640px]">
          Empower your business with customized IT solutions
        </h2>
        <div className="flex items-center justify-between">
          <div className="mt-auto">
            <AiOutlineArrowRight className="text-[#0030FF] text-[80px]" />
          </div>
          <div className="flex flex-col gap-[40px] max-w-[480px]">
            <div className="text-white opacity-[0.64]">
              <p className="font-euclid text-[16px]">
                Let us help you navigate the digital space.
              </p>
              <p className="font-euclid text-[16px]">
                Our customized IT solutions are designed to meet your unique
                needs and drive your business forward.
              </p>
            </div>
            <div className="flex gap-[24px]">
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
