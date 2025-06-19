import React, { useEffect } from "react";
import Features from "../components/features";

const FeaturesPage = () => {

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
      <Features />
    </>
  );
};

export default FeaturesPage;
