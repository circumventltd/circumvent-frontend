import React, { useState } from "react";
import Header from "../components/Header";
import Footer2 from "../components/Footer2";

type Props = {
  children: React.ReactNode;
};

const Policylayout = ({ children }: Props) => {
  return (
    <div className="relative">
      <section className="h-screen ">
        <Header />
        {children}
        <Footer2 />
      </section>
    </div>
  );
};

export default Policylayout;
