import React from "react";
import Logo from "./Logo";
import Logotext from "./Logotext";
import { BiMenu } from "react-icons/bi";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="bg-[url('/img1.jpg')] w-full h-[400px] bg-cover">
      <div className="px-[80px] pt-[80px]">
        <div className="bg-white flex justify-between items-center px-[40px] py-[24px]">
          <div className="flex items-center gap-[6px]">
            <Logo />
            <Logotext />
          </div>
          <BiMenu className="text-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
