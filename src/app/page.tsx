"use client";
import ContactForm from "@/components/ContactForm";
import Pricing from "@/components/Pricing/Pricing";
import Image from "next/image";
import "./globals.css";
import { useEffect } from "react";

import Presentation from "@/components/Presentation";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      
      <Presentation/>
      <div>
      <h2 className="text-4xl font-bold text-center mt-10">Horarios y Clases</h2>
     
      </div>
     
      <div>
        <h1 >Sección 1: Título Principal</h1>
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
        <h2 id="about">Sección 3: Subtítulo</h2>
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
    </>
  );
};
export default Home;
