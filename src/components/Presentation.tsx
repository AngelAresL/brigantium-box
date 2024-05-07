import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Header from "./Header";
import Image from "next/image";
import back from "../../public/backgroundPresentation.jpg";
import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <>
      <div className="bg-[url('/backgroundPresentation.jpg')] h-screen bg-cover bg-no-repeat bg-top pt-24">
        <div className=" mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
              initial={{ scale: 2 }}
              transition={{ duration: 2 }}
              animate={{ scale: 1 }}
            >
              Box Crossfit
            </motion.h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Centro de entrenamiento funcional, donde podrás mejorar tu salud y
              bienestar. Si estas buscando un lugar donde puedas entrenar y
              mejorar tu condición física, este es el lugar indicado.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Presentation;
