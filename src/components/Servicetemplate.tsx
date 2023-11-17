import React from "react";
import { HiArrowDown } from "react-icons/hi";
import Arrowicon from "./svgs/Arrowicon";

type Props = {
  color: string;
  title: String;
  subtitle: String;
  subcolor?: string;
  titlecolor?: string;
  footercolor?: string;
  img: string;
  footertext: String;
  footersubtext: String;
  arrowcolor: string;
};

const Servicetemplate = ({
  title,
  titlecolor,
  color,
  subtitle,
  subcolor,
  img,
  footertext,
  footersubtext,
  arrowcolor,
  footercolor,
}: Props) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`min-w-[100vw] snap-start min-h-full py-[30px] pb-6 relative`}
    >
      <div className="bg-white mix-blend-overlay rounded-[400px] blur-[200px] w-[400px] h-[400px] absolute top-0 right-0"></div>
      {/* content */}
      <div className=" flex flex-col h-full w-full px-[24px] pt-[24px] pb-2 lg:p-[80px] ">
        <div>
          <div className="flex gap-[24px] items-center">
            <h2
              style={{ color: footercolor ? footercolor : "#ffffffcc" }}
              className="font-euclid600 leading-[24px] tracking-[4px] lg:text-[30px]"
            >
              SERVICE
            </h2>
            <div
              style={{
                backgroundColor: footercolor ? footercolor : "#ffffffcc",
              }}
              className="h-[1px] w-[80px] "
            ></div>
          </div>
        </div>
        <div className="flex flex-col  lg:flex-row w-full justify-between  mt-[40px]">
          <div className="flex flex-col gap-[24px]">
            <p
              style={{ color: titlecolor ? titlecolor : "#98D6FF" }}
              className=" text-[48px] lg:text-[72px] font-euclid leading-[56px] lg:leading-[80px]"
            >
              {title}
            </p>
            <p
              style={{ color: subcolor ? subcolor : "white" }}
              className="font-euclid text-[24px] lg:text-[48px] leading-[32px] lg:leading-[56px]"
            >
              {subtitle}
            </p>
          </div>
          <div className="flex ">
            <div className="w-[178px]  lg:min-w-[250px] lg:my-auto mx-auto">
              <img
                src={img}
                alt="global"
                className="w-full  h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start  gap-[24px] lg:items-center justify-between mt-auto">
          <div className="mt-auto lg:rotate-0 rotate-90">
            <Arrowicon color={arrowcolor} />
            {/* <HiArrowDown
              style={{ color: arrowcolor }}
              className={`text-[50px]`}
            /> */}
          </div>
          <div className="flex flex-col gap-[40px] max-w-[480px]">
            <div
              style={{ color: footercolor ? footercolor : "white" }}
              className=" opacity-[0.64]"
            >
              <p className="font-euclid text-[16px] leading-[24px]">
                {footertext}
              </p>
              <p className="font-euclid text-[16px] leading-[24px]">
                {footersubtext}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicetemplate;
