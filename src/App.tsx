import { useState } from "react";
import "./App.css";
import Homelayout from "./layouts/Homelayout";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Sidemenu from "./components/Sidemenu";

function App() {
  return (
    <>
      <Homelayout>
        <Hero />
        <Service />
        {/* <Sidemenu /> */}
      </Homelayout>
    </>
  );
}

export default App;
