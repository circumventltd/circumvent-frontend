import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
};

const Homelayout = ({ children }: Props) => {
  return (
    <div className="relative">
      <Header />

      {children}
      <Footer />
    </div>
  );
};

export default Homelayout;
