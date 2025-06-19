import React, { useEffect } from "react";
import About from "../components/about";

const AboutPage = () => {

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <About />
    </>
  );
};

export default AboutPage;
