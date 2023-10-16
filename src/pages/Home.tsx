import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import GridMat from "../components/GridMat"
import Footer from "../components/Footer";


type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <section className="">
          <Header />
        </section>
        <section className=" ">
          <Hero />
        </section>
        <section className="">
          <Service />
        </section>
        <section className="">
          <Products />
        </section>
        <section className="">
          <GridMat />
        </section>
        <section className="">
          <Testimonials />
        </section>
        {/* <Sidemenu /> */}
        <section className="">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
