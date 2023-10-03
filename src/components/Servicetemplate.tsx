import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Arrowicon from "./svgs/Arrowicon";

type Props = {
  color: String;
  title: String;
  subtitle: String;
  img: string;
  footertext: String;
  footersubtext: String;
};

const Servicetemplate = ({
  title,
  color,
  subtitle,
  img,
  footertext,
  footersubtext,
}: Props) => {
  return (
    <div
      className={`bg-[${color}] min-w-[100vw] snap-start min-h-[400px]  relative`}
    >
      <div className="bg-white mix-blend-overlay rounded-[400px] blur-[200px] w-[400px] h-[400px] absolute top-0 right-0"></div>
      {/* content */}
      <div className="h-auto w-full px-[24px] pt-[24px] pb-2 lg:p-[80px] ">
        <div>
          <div className="flex gap-[24px] items-center">
            <h2 className="font-euclid600 leading-[24px] tracking-[4px] text-[#ffffffcc]">
              SERVICE
            </h2>
            <div className="h-[1px] w-[80px] bg-[#ffffffcc]"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mt-[40px]">
          <div className="flex flex-col gap-[24px] mb-[129px]">
            <p className="text-[#98D6FF] text-[48px] lg:text-[72px] font-euclid leading-[56px] lg:leading-[80px]">
              {title}
            </p>
            <p className="font-euclid text-[24px] lg:text-[48px] leading-[32px] lg:leading-[56px] text-white">
              {subtitle}
            </p>
          </div>
          <div className="w-[178px] lg:min-w-[250px] lg:my-auto mx-auto">
            <img src={img} alt="global" className="w-full  h-auto" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-[40px]">
          <div className="mt-auto rotate-90 lg:rotate-0">
            <Arrowicon />
          </div>
          <div className="flex flex-col gap-[40px] max-w-[480px]">
            <div className="text-white opacity-[0.64]">
              <p className="font-euclid text-[16px]">{footertext}</p>
              <p className="font-euclid text-[16px]">{footersubtext}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicetemplate;
