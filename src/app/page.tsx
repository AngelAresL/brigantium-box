"use client";
import ContactForm from "@/components/ContactForm";
import Pricing from "@/components/Pricing/Pricing";
import Image from "next/image";
import "./globals.css";
import { useEffect, useState } from "react";

import Presentation from "@/components/Presentation";

import Activities from "@/components/Activities";
import About from "@/components/About";
import Schedule from "@/components/Schedule";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
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
  return (
    <>
      <Presentation />

      <Activities />

      <Schedule />

      <div>
        <h1>Sección 1: Título Principal</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          vehicula elit eu convallis feugiat. Nulla facilisi. Quisque at risus a
          erat ultricies fermentum. Sed condimentum consectetur sapien, in
          auctor massa vestibulum vel. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer vehicula elit eu convallis feugiat. Nulla
          facilisi. Quisque at risus a erat ultricies fermentum. Sed condimentum
          consectetur sapien, in auctor massa vestibulum vel. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Integer vehicula elit eu
          convallis feugiat. Nulla facilisi. Quisque at risus a erat ultricies
          fermentum. Sed condimentum consectetur sapien, in auctor massa
          vestibulum vel. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Integer vehicula elit eu convallis feugiat. Nulla facilisi.
          Quisque at risus a erat ultricies fermentum. Sed condimentum
          consectetur sapien, in auctor massa vestibulum vel. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Integer vehicula elit eu
          convallis feugiat. Nulla facilisi. Quisque at risus a erat ultricies
          fermentum. Sed condimentum consectetur sapien, in auctor massa
          vestibulum vel. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Integer vehicula elit eu convallis feugiat. Nulla facilisi.
          Quisque at risus a erat ultricies fermentum. Sed condimentum
          consectetur sapien, in auctor massa vestibulum vel. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Integer vehicula elit eu
          convallis feugiat. Nulla facilisi. Quisque at risus a erat ultricies
          fermentum. Sed condimentum consectetur sapien, in auctor massa
          vestibulum vel. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Integer vehicula elit eu convallis feugiat. Nulla facilisi.
          Quisque at risus a erat ultricies fermentum. Sed condimentum
          consectetur sapien, in auctor massa vestibulum vel.
        </p>
        <Image
          src="/brigantium-logo.png"
          alt="Imagen de prueba"
          width={700}
          height={700}
        />
        <div id="contact">
          <ContactForm />
        </div>
        <h2>Sección 3: Subtítulo</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          potenti. Sed volutpat est vel augue interdum, at varius enim cursus.
        </p>
        <div id="about">
          <About />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          potenti. Sed volutpat est vel augue interdum, at varius enim cursus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          vehicula elit eu convallis feugiat. Nulla facilisi. Quisque at risus a
          erat ultricies fermentum. Sed condimentum consectetur sapien, in
          auctor massa vestibulum vel. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer vehicula elit eu convallis feugiat. Nulla
          facilisi. Quisque at risus a erat ultricies fermentum. Sed condimentum
          consectetur sapien, in auctor massa vestibulum vel. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Integer vehicula elit eu
          convallis feugiat. Nulla facilisi. Quisque at risus a erat ultricies
          fermentum. Sed condimentum consectetur sapien, in auctor massa
          vestibulum vel. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Integer vehicula elit eu convallis feugiat. Nulla facilisi.
          Quisque at risus a erat ultricies fermentum. Sed condimentum
          consectetur sapien, in auctor massa vestibulum vel. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Integer vehicula elit eu
          convallis feugiat. Nulla facilisi. Quisque at risus a erat ultricies
          fermentum. Sed condimentum consectetur sapien, in auctor massa
          vestibulum vel. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Integer vehicula elit eu convallis feugiat. Nulla facilisi.
          Quisque at risus a erat ultricies fermentum. Sed condimentum
          consectetur sapien, in auctor massa vestibulum vel. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Integer vehicula elit eu
          convallis feugiat. Nulla facilisi. Quisque at risus a erat ultricies
          fermentum. Sed condimentum consectetur sapien, in auctor massa
          vestibulum vel. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Integer vehicula elit eu convallis feugiat. Nulla facilisi.
          Quisque at risus a erat ultricies fermentum. Sed condimentum
          consectetur sapien, in auctor massa vestibulum vel.
        </p>
        <Image
          src="/brigantium-logo.png"
          alt="Imagen de prueba"
          width={700}
          height={700}
        />
        <Pricing />
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
