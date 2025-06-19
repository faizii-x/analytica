import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 30;
      const y = (e.clientY - innerHeight / 2) / 30;

      if (blob1Ref.current && blob2Ref.current) {
        blob1Ref.current.style.transform = `translate(${x}px, ${y}px)`;
        blob2Ref.current.style.transform = `translate(${-x}px, ${-y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative bg-[#f8f9fb] min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div
        ref={blob1Ref}
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 transition-transform duration-300"
      />

      <div
        ref={blob2Ref}
        className="absolute -bottom-20 -right-24 w-[28rem] h-[28rem] bg-gradient-to-br from-pink-300 via-indigo-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transition-transform duration-300"
      />

      <div className="absolute top-1/2 left-1/2 w-[14rem] h-[14rem] -translate-x-1/2 -translate-y-1/2 bg-blue-200 opacity-20 blur-2xl rounded-full" />

      {/* Content.................. */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl  font-extrabold leading-tight tracking-tight mt-24 text-[#152024] mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Elevate Your Business <br />
          <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent drop-shadow-md">
            With Smart Data Insights
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10 font-medium"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          At <strong className="text-blue-600">Analytica Data</strong>, we
          empower businesses to unlock the full potential of their data. Our
          AI-driven analytics and automation solutions help organizations gain
          meaningful insights that drive smarter decisions and long-term growth.
        </p>

        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <button
            className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full text-white text-lg font-semibold
              bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600
              hover:from-purple-700 hover:to-blue-700
              transition-all duration-300 ease-in-out transform hover:scale-105
              shadow-xl hover:shadow-2xl ring-2 ring-offset-2 ring-indigo-500/30"
          >
            🚀 Get Started
          </button>

          <button
            className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full text-indigo-700 text-lg font-semibold
              bg-white border border-indigo-600 hover:bg-indigo-50
              transition-all duration-300 ease-in-out transform hover:scale-105
              shadow-sm hover:shadow-md "
          >
            Learn More
            <svg
              className="w-5 h-5 text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
