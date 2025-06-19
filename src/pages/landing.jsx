import React, { useEffect } from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Features from "../components/features";
import Contact from "../components/contact";

const Landing = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Features />
      <Contact />
    </>
  );
};

export default Landing;
