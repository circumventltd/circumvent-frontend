import React from "react";
import GridMat from "./GridMat";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#E6F5FF] p-[24px] lg:p-[80px] flex flex-col gap-[70px]">
      <div className="flex flex-col gap-[24px]">
        <h1 className="text-[#0030FF] font-euclid text-[48px] lg:text-[72px] leading-[56px] lg:leading-[80px]">
          Ready to invest in customized IT solutions?
        </h1>
        <h2 className="font-euclid text-[#000933] text-[24px] lg:text-[48px] leading-[32px] lg:leading-[56px]">
          We&apos;re open for a conversation
        </h2>
      </div>
      <GridMat />
      {/* quick links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
        <div className="flex flex-col gap-[24px]">
          <p className="font-euclid600 text-[#0030FF] tracking-[4px] leading-[24px]">
            CIRCUMVENT
          </p>
          <p className="font-euclid text-[#000933] leading-[24px]">
            Copyright © 2023 Circumvent Ltd. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-[24px]">
          <p className="font-euclid600 text-[#0030FF] tracking-[4px]">MENU</p>
          <ul className="font-euclid text-[#000933] leading-[24px]">
            <li>About</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[24px]">
          <p className="font-euclid600 text-[#0030FF] tracking-[4px]">MORE</p>
          <ul className="font-euclid text-[#000933] leading-[24px]">
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[24px]">
          <p className="font-euclid600 text-[#0030FF] tracking-[4px]">
            CONTACT US
          </p>
          <ul className="font-euclid text-[#000933] leading-[24px]">
            <li>+44 730 525 7707</li>
            <li>+44 730 633 8999</li>
            <li>admin@circumventltd.co.uk</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[24px]">
          <p className="font-euclid600 text-[#0030FF] tracking-[4px]">
            SOCIALS
          </p>
          <ul className="font-euclid text-[#000933] leading-[24px]">
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
