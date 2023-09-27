import React, { useState } from "react";
import Logo from "./Logo";
import Logotext from "./Logotext";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

type Props = {};

const Header = (props: Props) => {
  const [showsidebar, setShowsidebar] = useState(false);
  const hidemenu = () => {
    setShowsidebar(!showsidebar);
  };
  return (
    <>
      <div className="bg-[url('/img1.jpg')] w-full h-[400px] bg-cover">
        <div className="px-[24px] lg:px-[80px] pt-[24px] lg:pt-[80px]">
          <div className="bg-white flex justify-between items-center px-[40px] py-[24px]">
            <div className="flex items-center gap-[6px]">
              <Logo />
              <Logotext />
            </div>
            <BiMenu onClick={hidemenu} className="text-[24px]" />
          </div>
        </div>
      </div>
      {/* sidebar */}

      <div
        className={`fixed top-0 z-40 h-screen transition-all ease-in-out duration-150 ${
          showsidebar ? "w-full bg-[#00093366]" : "w-[70%]"
        }`}
      >
        <div
          onClick={hidemenu}
          className={`${
            showsidebar
              ? "bg-white mt-[24px] transform translate-x-[112px] closeshadow rounded-full p-[24px] h-[72px] w-[72px] transition-transform ease-in-out duration-150"
              : "transform -translate-x-full hidden transition-transform ease-in-out duration-150"
          }`}
        >
          <AiOutlineClose className="text-[24px] text-[#000933]" />
        </div>
        <div
          className={`${
            showsidebar
              ? "absolute top-0 right-0 bg-white h-full w-[70%] transform translate-x-0 transition-transform ease-in-out"
              : "w-0 opacity-0 transform -translate-x-full transition-transform ease-in-out"
          }`}
        >
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
            {/* contacts */}
            <div className="mt-[80px] flex items-center justify-between">
              <div className="flex flex-col">
                <span className="contact-text">+44(730) 525 7707</span>
                <span className="contact-text">+44(730) 633 8999</span>
                <span className="contact-text">admin@circumventltd.co.uk</span>
              </div>
              <div className="flex flex-col">
                <span className="contact-text">Address (Line 1)</span>
                <span className="contact-text">Address (Line 2)</span>
                <span className="contact-text">City, state</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
