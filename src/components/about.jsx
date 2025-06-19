import React from "react";
import ImgReal from "../../public/images/imgreal.png";

const About = () => {
  return (
    <>
      <section
        className=" py-28 px-6 sm:px-10"
        style={{
          backgroundImage:
            "radial-gradient(50% 50% at 50% 50%, rgba(22, 57, 65, 0.99) 0%, #141517 100%)",
        }}
      >
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          About <span className="text-blue-600">Us</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-16">
          We are a passionate team committed to turning complex data into
          powerful, actionable insights. With innovative solutions and a
          client-first mindset, we help businesses grow smarter and faster.
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left Image Section */}
          <div
            data-aos="fade-up-right"
            data-aos-delay="100"
            className="relative"
          >
            <img
              src={ImgReal}
              alt="Our Team"
              className="w-full h-auto  "
            />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-100 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-28 h-28 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
          </div>

          {/* Right Text Section */}
          <div data-aos="fade-up-left" data-aos-delay="200">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Empowering Decisions with Data
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-5">
              At <span className="font-semibold text-blue-600">InsightIQ</span>,
              we specialize in transforming raw data into powerful insights. Our
              mission is to empower businesses with intelligent analytics that
              drive strategic growth.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Whether you're a startup or an enterprise, we simplify complex
              data challenges, streamline your operations, and uncover new
              opportunities through automation and innovation.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full text-white font-semibold text-base
    bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
    hover:from-purple-600 hover:to-blue-600
    transition-all duration-300 ease-in-out transform hover:scale-105
    shadow-lg hover:shadow-2xl ring-2 ring-offset-2 ring-blue-500/20"
            >
              <span>Learn More About Us</span>
              <svg
                className="w-5 h-5 animate-pulse"
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
