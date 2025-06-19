import React from "react";
import ImgReal from "../../public/images/imgreal.png";

const About = () => {
  return (
    <>
      <section
        className="py-28 "
        style={{
          backgroundImage:
            "radial-gradient(50% 50% at 50% 50%, rgba(22, 57, 65, 0.99) 0%, #141517 100%)",
        }}
      >
        <h2
          className="text-4xl font-bold text-white mb-4 text-center"
          data-aos="fade"
        >
          About <span className="text-blue-600">Us</span>
        </h2>

        <p
          className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-16 p-2"
          data-aos="fade"
          data-aos-delay="50"
        >
          At Analytica Data, we are a passionate team dedicated to helping
          businesses harness the power of their data. Our mission is to turn
          complex information into clear, actionable insights that support
          smarter decisions at every level.
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div data-aos="zoom-in" className="relative">
            <img src={ImgReal} alt="Our Team" className="w-full h-auto " />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-100 rounded-full blur-2xl opacity-10"></div>
            <div className="absolute bottom-0 right-0 w-28 h-28 bg-blue-500 rounded-full blur-3xl opacity-5"></div>
          </div>

          <div data-aos="fade" data-aos-delay="100">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white  leading-tight p-6">
              Empowering Decisions With Data
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed p-4">
              At{" "}
              <span className="font-semibold text-blue-600">
                Analytica Data
              </span>
              , we transform raw data into meaningful insights that fuel smarter
              decisions and strategic growth.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-6 p-4">
              We simplify complex data challenges with automation and
              innovation, helping businesses stay ahead in a fast-moving world.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-3 ml-4 rounded-full text-white font-semibold text-base
                bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
                hover:from-purple-600 hover:to-blue-600
                transition-all duration-300 ease-in-out transform hover:scale-105
                shadow-lg hover:shadow-2xl ring-2 ring-offset-2 ring-blue-500/20"
            >
              <span>Learn More About Us</span>
              <svg
                className="w-5 h-5"
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
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
