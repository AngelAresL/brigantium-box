"use client";
import ContactForm from "@/components/ContactForm";
import Pricing from "@/components/Pricing/Pricing";
import Image from "next/image";
import "./globals.css";
import { useEffect } from "react";

import Presentation from "@/components/Presentation";

import Activities from "@/components/Activities";
import About from "@/components/About";
import ReviewsCarousel from "@/components/ReviewCarousel";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <Presentation />

      <Activities />
   
        <ReviewsCarousel />
  

      <div className="bg-black">
        
        <div id="contact">
          <ContactForm />
        </div>
        
        <Pricing />
      </div>
    </>
  );
};
export default Home;
