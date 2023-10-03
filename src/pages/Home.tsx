import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <section className="snap-start">
          <Header />
        </section>
        <section className="snap-start ">
          <Hero />
        </section>
        <section className="snap-start">
          <Service />
        </section>
        <section className="snap-start">
          <Products />
        </section>
        <section className="snap-start">
          <Testimonials />
        </section>
        {/* <Sidemenu /> */}
        <section className="snap-start">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
