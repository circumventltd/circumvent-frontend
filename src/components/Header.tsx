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

  const showmenu = () => {
    setShowsidebar(!showsidebar);
  };

  return (
    <>
      <div className="bg-[url('/img1-min.jpg')] w-full h-[400px] lg:h-[600px] bg-cover relative">
        <div className="absolute top-[30px] lg:top-[50px] w-full  left-0  px-[24px] lg:px-[80px]">
          <div className="bg-white flex justify-between items-center px-[40px] py-[24px]">
            <div className="flex items-center gap-[6px]">
              <Logo />
              <Logotext />
            </div>
            <BiMenu onClick={showmenu} className="text-[24px]" />
          </div>
        </div>
      </div>

      {/* sidebar */}

      <div
        className={`fixed top-0 z-40 h-screen transition-all ease-in-out duration-300 ${
          showsidebar ? "w-full bg-[#00093366]" : "w-0"
        }`}
      >
        <div className="flex absolute top-0 right-0 w-full h-full  ">
          <div className=" flex justify-end flex-1">
            <div
              onClick={hidemenu}
              className={`${
                showsidebar
                  ? "bg-white mt-[30px] lg:mt-[50px] mr-[5rem] ml-[1rem] closeshadow rounded-full p-[24px] h-[72px] w-[72px] "
                  : " hidden "
              }`}
            >
              <AiOutlineClose className="text-[24px] text-[#000933]" />
            </div>
          </div>
          <div
            className={`${
              showsidebar ? " bg-white h-full flex-[4] " : "w-0 opacity-0 "
            }`}
          >
            <div className="p-[24px] md:p-[80px] lg:py-[120px] flex flex-col h-full">
              <div className="flex flex-col gap-[40px]">
                <h2 className="font-euclid600 leading-[24px] lg:text-[30px] tracking-[4px]">
                  MENU
                </h2>
                <ul className="menulink mt-8 flex flex-col gap-[24px] lg:gap-[50px] ">
                  <li className=" flex gap-[24px] items-center">Home</li>
                  <li className=" flex gap-[24px] items-center">About</li>
                  <li className=" flex gap-[24px] items-center">Services</li>
                  <li className=" flex gap-[24px] items-center">Product</li>
                  <li className=" flex gap-[24px] items-center whitespace-nowrap">
                    Contact us
                  </li>
                </ul>
              </div>
              <div className="mt-auto flex flex-col md:flex-row gap-[24px] md:items-center md:justify-between lg:text-[30px] leading-[24px] lg:leading-[44px]">
                <div className="flex flex-col">
                  <span className="contact-text">+44(730) 525 7707</span>
                  <span className="contact-text">+44(730) 633 8999</span>
                  <span className="contact-text">
                    admin@circumventltd.co.uk
                  </span>
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
      </div>
    </>
  );
};

export default Header;
