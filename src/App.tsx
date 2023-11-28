import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import { Termsofuse } from "./pages/Termsofuse";
import { Privacypolicy } from "./pages/Privacypolicy";
import { Cookiepolicy } from "./pages/Cookiepolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal/terms-of-use" element={<Termsofuse />} />
        <Route path="/legal/privacy-policy" element={<Privacypolicy />} />
        <Route path="/legal/cookie-policy" element={<Cookiepolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
