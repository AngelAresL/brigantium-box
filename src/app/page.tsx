"use client";
import ContactForm from "@/components/ContactForm";
import Pricing from "@/components/Pricing/Pricing";

import "./globals.css";
import { useEffect, useState } from "react";

import Presentation from "@/components/Presentation";
import Activities from "@/components/Activities";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import ReviewsCarousel from "@/components/ReviewCarousel";
import Facilities from "@/components/Facilities";

const Home: React.FC = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScroll = () => {
    setShowScrollButton(window.scrollY > 300);
  };
  const [contactMessage, setContactMessage] = useState("");
  return (
    <>
      <Presentation />
      <div id="activities">
        <Activities />
      </div>
      <div>
        <About />
      </div>
      <div id="facilities">
        <Facilities />
      </div>

      <Schedule />

      <ReviewsCarousel />

      <div>
        <div id="contact">
          <ContactForm contactMessage={contactMessage} />
        </div>

        <Pricing setContactMessage={setContactMessage} />
      </div>

      {showScrollButton && (
        <button
          className="fixed bottom-10 right-10 bg-gray-800 text-white font-medium p-2 mt-4 rounded-lg hover:bg-gray-600 transition duration-200"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.883 122.882"
            className="w-6 h-6"
            fill="currentColor"
          >
            <g>
              <path d="M0,61.441c0,16.976,6.872,32.335,17.98,43.443c11.108,11.107,26.467,17.979,43.441,17.979c16.974,0,32.335-6.872,43.443-17.98s17.98-26.467,17.98-43.441c0-16.975-6.873-32.334-17.98-43.443C93.775,6.89,78.418,0.018,61.443,0.018c-16.975,0-32.335,6.872-43.443,17.98C6.89,29.106,0.018,44.465,0.018,61.439H0V61.441z M42.48,71.7c-1.962,1.908-5.101,1.865-7.009-0.098c-1.909-1.962-1.865-5.101,0.097-7.009l22.521-21.839l3.456,3.553l-3.46-3.569c1.971-1.911,5.117-1.862,7.029,0.108c0.055,0.058,0.109,0.115,0.16,0.175L87.33,64.594c1.963,1.908,2.006,5.047,0.098,7.009c-1.908,1.963-5.047,2.006-7.01,0.098L61.53,53.227L42.48,71.7z" />
            </g>
          </svg>
        </button>
      )}
    </>
  );
};
export default Home;
