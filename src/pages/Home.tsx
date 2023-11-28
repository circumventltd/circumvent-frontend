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
    <div className="relative">
      <section className="h-screen ">
        <Header />
        <Hero />
      </section>
      <section id="services">
        <Service />
      </section>
      <section id="products" className="">
        <Products />
      </section>
      <section className="">
        <Testimonials />
      </section>
      <section className="">
        <Faq />
      </section>
      <section id="">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
