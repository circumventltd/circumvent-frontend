import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Arrowicon from "./svgs/Arrowicon";
import { useDispatch } from "react-redux";
import { togglescreen, togglesidebar } from "../utils/redux/slices/menumodals";

type Props = {};

const Hero = (props: Props) => {
  const dispatch = useDispatch();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const handleBookACall = () => {
    scrollToTop();
    dispatch(togglesidebar(true));
    dispatch(togglescreen("bookacall"));
  };
  return (
    <div className="bg-[#000933] h-[70%]  relative">
      <div className="absolute top-0 h-full w-full">
        <img src="/hand.svg" className="h-full" />
      </div>
      <div className="absolute flex justify-between flex-col p-[24px] lg:p-[80px] gap-5  h-full  top-0 w-full">
        <h2 className="font-euclid text-white text-[30px] md:text-[40px]  leading-[56px] max-w-[382px] lg:max-w-[640px]">
          Empower your business with customized IT solutions
        </h2>
        <div className="flex flex-col mt-auto lg:flex-row items-start justify-between">
          <div className="mt-auto rotate-90 lg:rotate-0 mb-[24px]">
            <Arrowicon color={"#0030FF"} />
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
            <div className="flex flex-col lg:flex-row gap-[24px] lg:text-[28px]">
              <button className=" py-[20px] px-[28px]  border border-white text-white font-euclid500">
                Learn more
              </button>
              <button
                onClick={handleBookACall}
                className="py-[20px] px-[28px] bg-white text-primary font-euclid500 "
              >
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
