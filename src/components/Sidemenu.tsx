import React from "react";

type Props = {};

const Sidemenu = (props: Props) => {
  return (
    <div className="absolute top-0 right-0 bg-white h-screen w-[80%]">
      <div className=" p-[80px]">
        <div>
          <h2 className="font-euclid600">MENU</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Product</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
