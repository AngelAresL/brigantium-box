import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Header from "./Header";
import Image from "next/image";
import back from "../../public/backgroundPresentation.jpg";
import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <div>
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src={back}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
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
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                transition={{ duration: 1.5 }}
                animate={{
                  scale: [1, 3, 1],
                }}
              >
                Reserva
              </motion.a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default Presentation;
