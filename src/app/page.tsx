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

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
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
      <div id="about">
        <About />
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
          Ir arriba
        </button>
      )}
    </>
  );
};
export default Home;
