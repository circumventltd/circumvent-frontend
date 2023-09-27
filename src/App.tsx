import { useState } from "react";
import "./App.css";
import Homelayout from "./layouts/Homelayout";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Sidemenu from "./components/Sidemenu";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Homelayout>
        <Hero />
        <Service />
        <Products />
        <Testimonials />
        {/* <Sidemenu /> */}
      </Homelayout>
    </>
  );
}

export default App;
