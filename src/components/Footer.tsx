import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#E6F5FF] flex flex-col gap-[70px]">
      <div>
        <h1 className="text-[#0030FF] font-euclid text-[50px]">
          Ready to invest in customized IT solutions?
        </h1>
        <h2 className="font-euclid text-[#000933] text-[30px]">
          We&apos;re open for a conversation
        </h2>
      </div>
      {/* quick links */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <div className="gap-[24px]">
          <p className="font-euclid600 text-[#0030FF] tracking-[4px]">
            CIRCUMVENT
          </p>
          <p>Copyright © 2023 Circumvent Ltd. All rights reserved.</p>
        </div>
        <div className="gap-[24px]">
          <p className="font-euclid600 text-[#0030FF] tracking-[4px]">MENU</p>
          <ul>
            <li>About</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="gap-[24px]">
          <p className="font-euclid600 text-[#0030FF] tracking-[4px]">MORE</p>
          <ul>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="gap-[24px]">
          <p className="font-euclid600 text-[#0030FF] tracking-[4px]">
            CONTACT US
          </p>
          <ul>
            <li>+44(730) 525 7707</li>
            <li>+44(730) 633 8999</li>
            <li>admin@circumventltd.co.uk</li>
          </ul>
        </div>
        <div className="gap-[24px]">
          <p className="font-euclid600 text-[#0030FF] tracking-[4px]">
            SOCIALS
          </p>
          <ul>
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
