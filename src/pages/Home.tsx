import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import GridMat from "../components/GridMat";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div className="overflow-y-scroll snap-y snap-mandatory">
        <section className="flex flex-col h-[100vh]">
          <Header />
          <Hero />
        </section>
        <section className=" "></section>
        <section className="">
          <Service />
        </section>
        <section className="">
          <Products />
        </section>
        <section className="">
          <Testimonials />
        </section>
        <section className="">
          <Faq />
        </section>
        <section className="">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
