import React from "react";
import { BiArrowBack } from "react-icons/bi";
import CalendlyEmbed from "./CalendlyEmbed";
import { InlineWidget } from "react-calendly";

type Props = {
  onClose: () => void;
};

const Bookcall = ({ onClose }: Props) => {
  return (
    <div className="py-[12px] px-[24px] md:p-[80px] lg:py-[40px] z-[999] flex flex-col overflow-y-scroll max-h-full">
      <menu className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-[#00093366] tracking-[3.84px] leading-[24px]">
            LET&apos;S TALK
          </h1>
          <div className="bg-black bg-opacity-20 w-20 h-px"></div>
        </div>

        <BiArrowBack onClick={onClose} className="" />
      </menu>
      <div>
        <h2 className="text-[#0030FF] xl:text-7xl leading-[80px] font-euclid mb-6 mt-4 text-2xl">
          Book a call
        </h2>
        <p className="text-[#000933] text-[48px] font-euclid leading-[56px] mb-8 text-2xl">
          Let&apos;s have a conversation about your business.
        </p>
      </div>
      <div className="">
        <InlineWidget url="https://calendly.com/geepytechnologies/30min" />
      </div>
    </div>
  );
};

export default Bookcall;
