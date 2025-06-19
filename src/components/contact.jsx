import React, { useState } from "react";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="relative overflow-hidden py-24 px-6">
      {/* Animated SVG blob background */}
      <svg
        className="absolute top-2 left-0 w-[600px] h-[600px] opacity-20 animate-blobMove text-blue-300 z-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M41.4,-58.8C53.6,-50.5,63.7,-39.4,67.6,-26.8C71.5,-14.1,69.2,-0,64.5,12.7C59.7,25.4,52.4,36.7,43.2,48C33.9,59.3,22.6,70.6,8.2,74.6C-6.2,78.6,-23.6,75.3,-36.5,66.4C-49.5,57.6,-58,43.2,-63.4,28.3C-68.7,13.5,-71,-2,-66.8,-14.9C-62.6,-27.8,-51.9,-38.2,-39.8,-46.4C-27.7,-54.6,-13.9,-60.7,0.9,-61.9C15.8,-63.1,31.6,-59.2,41.4,-58.8Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Form Container */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-xl mx-auto">
          Have questions or ideas? Fill out the form and we’ll be in touch!
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-left bg-white/90 p-8 rounded-2xl shadow-lg backdrop-blur"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition ${
                  errors.name
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-300"
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition ${
                  errors.email
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-300"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faCommentDots}
                className="absolute left-3 top-4 text-gray-400"
              />
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition ${
                  errors.message
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-300"
                }`}
              />
            </div>
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
         


<button
  type="submit"
  className="inline-flex justify-center items-center gap-3 px-8 py-3 rounded-full text-white font-semibold text-base w-full
    bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
    hover:from-purple-600 hover:to-blue-600
    transition-all duration-300 ease-in-out transform hover:scale-100 
    shadow-lg hover:shadow-2xl ring-2 ring-offset-2 ring-blue-500/20"
>
  <span>🚀 Send Message</span>
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
</button>









        </form>
      </div>
    </section>
  );
};

export default Contact;
