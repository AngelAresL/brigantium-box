import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Header from "./Header";
import Image from "next/image";
import back from "../../public/backgroundPresentation.jpg";
import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <>
      <div className="bg-black h-screen bg-cover bg-no-repeat bg-top pt-24">
        <div className=" mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight text-white lg:text-7xl">
              Brigantium Box
            </h1>
            <p className="mt-6 text-lg leading-8 text-black bg-blue-300 bg-opacity-30">
              Si estás visitando nuestra página, algo en ti ya ha cambiado.
              Quizás estás aburrido del gimnasio, quieres darle un empujón a tu
              preparación física, o simplemente te apetece cambiar de aires y
              conocer gente. Pues bien, estás en el sitio indicado. ¡Esta es tu
              mejor opción en La Coruña!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Presentation;
