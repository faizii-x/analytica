import React, { useEffect } from "react";
import Landing from "./pages/landing";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about-page";
import Features from "./pages/features-page";
import Contact from "./pages/contact-page";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollTop from "./components/scrollTop";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: true,
      disable: function() {
        return window.innerWidth < 768;  
      },
    });
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </>
  );
}
