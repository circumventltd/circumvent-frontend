import React from "react";
import { BiArrowBack } from "react-icons/bi";
import "../index.css";

interface ContactProps {
  onClose: () => void;
  widthSize: number;
}

const Contact = ({ onClose, widthSize }: ContactProps) => {
  return (
    <div className="py-[12px] px-[24px] md:p-[80px] lg:py-[40px] flex flex-col overflow-y-scroll max-h-full">
      <menu className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-[#00093366] tracking-[3.84px] leading-[24px]">
            GET IN TOUCH
          </h1>
          <div className="bg-black bg-opacity-20 w-20 h-px"></div>
        </div>

        <BiArrowBack onClick={onClose} className="" />
      </menu>

      <form action="">
        <h2 className="text-[#0030FF] xl:text-7xl leading-[80px] font-euclid mb-6 mt-4 text-2xl">
          Contact us
        </h2>
        <p className="text-[#000933] text-[48px] font-euclid leading-[56px] mb-8 text-2xl">
          Tell us about the question, idea, or project you need help with
        </p>
        <div className="flex flex-col gap-2">
          <label className="text-[#000933] mt-5 text-base font-euclid500 ">
            What's your name? <span className="text-[#00093366]">Required</span>
          </label>

          <input
            type="text"
            id="name"
            name="name"
            required
            className="outline-0 w-full p-px"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base font-euclid500 text-[#000933] mt-5">
            What's your phone number?
          </label>
          <input
            type="telephone"
            id="telephone"
            name="telephone"
            className="outline-0 w-full p-px"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base font-euclid500 text-[#000933]  mt-5">
            What's your email?
          </label>
          <span className="text-[#00093366]"> Required</span>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="outline-0 w-full p-px"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base font-euclid500 text-[#000933]  mt-5">
            How can we help?
          </label>
          <span className="text-[#00093366]"> Required</span>
          <textarea className="w-full min-h-5" />
        </div>
        <button
          type="submit"
          className="px-8 py-6 md:px-10 md:py-8 bg-[#000933] text-white mt-8 leading-[24px] font-euclid500 text-[24px]"
        >
          Send a message
        </button>
      </form>
    </div>
  );
};

export default Contact;
