import { useState } from "react";
import "./App.css";
import Homelayout from "./layouts/Homelayout";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Sidemenu from "./components/Sidemenu";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
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
}

export default App;
