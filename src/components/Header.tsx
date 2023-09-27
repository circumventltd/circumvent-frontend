import React, { useState } from "react";
import Logo from "./Logo";
import Logotext from "./Logotext";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

type Props = {};

const Header = (props: Props) => {
  const [showsidebar, setShowsidebar] = useState(true);
  return (
    <>
      <div className="bg-[url('/img1.jpg')] w-full h-[400px] bg-cover">
        <div className="px-[24px] lg:px-[80px] pt-[24px] lg:pt-[80px]">
          <div className="bg-white flex justify-between items-center px-[40px] py-[24px]">
            <div className="flex items-center gap-[6px]">
              <Logo />
              <Logotext />
            </div>
            <BiMenu className="text-[24px]" />
          </div>
        </div>
      </div>
      {/* sidebar */}
      {showsidebar && (
        <div className="fixed top-0 z-40 h-screen w-screen bg-[#00093366]">
          <div className="bg-white mt-[24px] translate-x-[112px] closeshadow rounded-full p-[24px]">
            <AiOutlineClose className="text-[24px]" />
          </div>
          <div className="absolute top-0 right-0  bg-white h-full w-[70%]">
            <div className=" p-[80px]">
              <div className="flex flex-col gap-[40px]">
                <h2 className="font-euclid600 leading-[24px] tracking-[4px]">
                  MENU
                </h2>
                <ul className="menulink flex flex-col gap-[24px]">
                  <li className="active flex gap-[24px] items-center">Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Product</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
