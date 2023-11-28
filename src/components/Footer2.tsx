import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Footer2 = (props: Props) => {
  return (
    <div className="bg-[#E6F5FF] p-[24px] lg:p-[80px] flex flex-col gap-[70px]">
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
          <div className="font-euclid flex flex-col text-[#000933] leading-[24px]">
            <a href="">About</a>
            <a href="#products">Products</a>
            <a href="#services">Services</a>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <p className="font-euclid600 text-[#0030FF] tracking-[4px]">MORE</p>
          <ul className="font-euclid flex flex-col text-[#000933] gap-[2px] leading-[24px]">
            <Link to="/legal/terms-of-use">Terms of Service</Link>
            <Link to="/legal/cookie-policy">Cookie Policy</Link>
            <Link to="/legal/privacy-policy">Privacy Policy</Link>
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
            <Link to="">LinkedIn</Link>
            <Link to="https://x.com/CircumventLTD">X</Link>
            <Link to="">Instagram</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
