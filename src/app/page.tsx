"use client";
import ContactForm from "@/components/ContactForm";
import Pricing from "@/components/Pricing/Pricing";
import Image from "next/image";
import "./globals.css";
import { useEffect } from "react";

import Presentation from "@/components/Presentation";

import Activities from "@/components/Activities";
import About from "@/components/About";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <Presentation />
      <div id="activities">
        <Activities />
      </div>
      <div id="about">
          <About />
        </div>
      <div>
        <h2 className="text-4xl font-bold text-center mt-10">
          Horarios y Clases
        </h2>
      </div>

      
        
        <div id="contact">
          <ContactForm />
        </div>
        
        <Pricing />
      
    </>
  );
};
export default Home;
