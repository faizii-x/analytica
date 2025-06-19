import React, { useEffect } from "react";
import Contact from "../components/contact";

const ContactPage = () => {

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
