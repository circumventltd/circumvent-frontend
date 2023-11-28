import React, { useState } from "react";
import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
};

const Policylayout = ({ children }: Props) => {
  return (
    <div className="relative">
      <section className="h-screen ">
        <Header />
        {children}
      </section>
    </div>
  );
};

export default Policylayout;
