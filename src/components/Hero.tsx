import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Arrowicon from "./svgs/Arrowicon";
import { useDispatch } from "react-redux";
import { togglescreen, togglesidebar } from "../utils/redux/slices/menumodals";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  const dispatch = useDispatch();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const [text, count] = useTypewriter({
    words: ["web", "software", "mobile", "network", "cloud", "AI"],
    loop: true,
    delaySpeed: 2000,
  });

  const handleBookACall = () => {
    scrollToTop();
    dispatch(togglesidebar(true));
    dispatch(togglescreen("bookacall"));
  };
  return (
    <div className="bg-[#000933] h-[65%]  relative">
      <div className="absolute top-0 h-full w-full">
        <img src="/hand.svg" className="h-full w-full" />
      </div>
      <div className="absolute flex justify-between flex-col p-[24px] lg:p-[80px] gap-5  h-full  top-0 w-full">
        <h2 className="font-euclid text-white text-3xl md:text-[40px]  md:leading-[56px] max-w-[382px] lg:max-w-[640px]">
          Empower your business with customized <span className="">{text}</span>{" "}
          solutions
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
            <div className="flex flex-col lg:flex-row gap-[24px] ">
              <button className=" py-[10px] px-[18px]  border border-white text-white font-euclid500">
                Learn more
              </button>
              <button
                onClick={handleBookACall}
                className="py-[10px] px-[18px] bg-white text-primary font-euclid500 "
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
