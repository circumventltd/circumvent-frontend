import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Logotext from "./Logotext";
import Contact from "./Contact";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Bookcall from "./Bookcall";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/redux/reducers";
import { togglescreen, togglesidebar } from "../utils/redux/slices/menumodals";

const Header = () => {
  const screen = useSelector(
    (state: RootState) => state.menuslice.screentoshow
  );
  const showsidebar = useSelector(
    (state: RootState) => state.menuslice.showsidebar
  );
  const dispatch = useDispatch();

  const [widthSize, setWidthSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidthSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hidemenu = () => {
    dispatch(togglesidebar(false));
    dispatch(togglescreen("home"));
  };

  const showmenu = () => {
    dispatch(togglesidebar(true));
  };

  const hideContact = () => {
    dispatch(togglescreen("home"));
  };
  const Menu = () => {
    return (
      <div className="p-[24px] md:p-[80px] lg:py-[40px] flex flex-col h-full">
        <div className="flex flex-col md:gap-[10px]">
          <menu className="flex justify-between">
            <h2 className="font-euclid600 leading-[24px] lg:text-[24px] tracking-[4px]">
              MENU
            </h2>
            {widthSize >= 640 ? "" : <AiOutlineClose onClick={hidemenu} />}
          </menu>
          <ul className="menulink mt-5 flex flex-col gap-[24px] lg:gap-[30px] ">
            <li className=" flex gap-[24px] items-center ">Home</li>
            <li className=" flex gap-[24px] items-center ">About</li>
            <li className=" flex gap-[24px] items-center ">Services</li>
            <li className=" flex gap-[24px] items-center ">Product</li>
            <li
              className=" flex gap-[24px] items-center whitespace-nowrap "
              onClick={() => dispatch(togglescreen("contact"))}
            >
              Contact us
            </li>
          </ul>
        </div>
        <div className="mt-auto flex flex-col md:flex-row gap-[24px] md:items-center md:justify-between lg:text-[30px] leading-[24px] lg:leading-[44px]">
          <div className="flex flex-col">
            <span className="contact-text text-base">+44(730) 525 7707</span>
            <span className="contact-text text-base">+44(730) 633 8999</span>
            <span className="contact-text text-base">
              admin@circumventltd.co.uk
            </span>
          </div>
          <div className="flex flex-col">
            <span className="contact-text text-base">Address (Line 1)</span>
            <span className="contact-text text-base">Address (Line 2)</span>
            <span className="contact-text text-base">City, state</span>
          </div>
        </div>
      </div>
    );
  };

  let componentToRender;

  switch (screen) {
    case "home":
      componentToRender = <Menu />;
      break;
    case "contact":
      componentToRender = (
        <Contact onClose={hideContact} widthSize={widthSize} />
      );
      break;
    case "bookacall":
      componentToRender = <Bookcall onClose={hideContact} />;
      break;
    default:
      componentToRender = null;
      break;
  }

  return (
    <>
      <div className="bg-[url('/img1-min.jpg')] w-full h-[30%] bg-cover relative">
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
          <div className=" flex md:justify-end md:flex-1">
            <div
              onClick={hidemenu}
              className={`${
                showsidebar && widthSize >= 640
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
            {componentToRender}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
