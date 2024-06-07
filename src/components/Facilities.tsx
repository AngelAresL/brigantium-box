import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Carousel from "./Carusel";
import benefits from "@/data/benefits";

const Facilities = () => {
  return (
    <div
      className="bg-gradient-to-b from-gray-950 to-blue-400 py-32 "
      id="facilities"
    >
       <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-300 text-center pb-8">
        <span className="block sm:inline">Nuestras</span>{" "}
        <span className="block sm:inline">instalaciones</span>
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
            <div className="mt-10 flex justify-center lg:justify-start">
              <a
                href="#contact"
                className="w-56 rounded-md bg-slate-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-300 bg-opacity-90"
              >
                Contacta
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Facilities;
