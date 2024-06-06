import { CheckCircleIcon } from "@heroicons/react/20/solid";

import "./Carousel.css";

import Carousel from "./Carusel";

const benefits = [
  "Equipamiento de alta calidad",
  "Vestuario y Duchas",
  "Gran zona destinada para Open",
  "Amplio Espacio de Entrenamiento",
  "Actualizado  con las ultimas tendencias",
];

const Facilities = () => {
  return (
    <div className="bg-gradient-to-b from-gray-950 to-blue-400 py-16 ">
      <h2 className="text-4xl font-semibold  text-white text-center pb-10">
        Nuestras Instalaciones
      </h2>
      <div className="mx-auto max-w-9xl px-6 lg:px-8">
        <div className="mx-auto flex items-center max-w-4xl flex-col gap-16 bg-zinc-700  px-6 shadow-gray-950 shadow-lg rounded-3xl p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center  xl:gap-x-20 ">
          <Carousel />
          <div className="w-full flex-auto">
            <p className=" text-lg text-justify leading-7 text-zinc-200">
              Te encontraras con un Box completamente orientada en dar a
              nuestros atletas la mejor experiencia, toda la equipación
              necesaria para que el limite en tu entrenamiento lo pongas solo
              tu.
            </p>
            <ul
              role="list"
              className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3   text-white sm:grid-cols-2"
            >
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-x-3">
                  <CheckCircleIcon
                    className="h-7 w-5 flex-none"
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-indigo-400"
              >
                Contacta <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Facilities;
