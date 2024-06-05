import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { EmblaOptionsType } from "embla-carousel";
import "./Carousel.css";

import EmblaCarousel from "./Carusel";

const benefits = [
  "Equipamiento de alta calidad",
  "Vestuario y Duchas",
  "Gran zona destinada para Open",
  "Amplio Espacio de Entrenamiento",
  "Actualizado  con las ultimas tendencias",
];

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const Facilities = () => {
  return (
    <div className="bg-gray-950 py-16 ">
      <h2 className="text-4xl font-semibold  text-white text-center pb-10">
        Nuestras Instalaciones
      </h2>
      <div className="mx-auto max-w-9xl sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-16 bg-white/10 px-6 py-8 ring-1 ring-white/25 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center  xl:gap-x-20 xl:px-20">
          {/* <img
            src="/IMG_5996.jpeg"
            alt=""
            className="w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-2xl"/>
            */}
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          <div className="w-full flex-auto">
            <p className="mt-6 text-lg leading-8 text-gray-300">
              En nuestro Box te encontraras con una instalacion completamente
              orientada en dar a nuestros atletas la mejor experiencia, toda la
              equipación necesaria para que el limite en tu entrenamiento lo
              pongas solo tu.
            </p>
            <ul
              role="list"
              className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
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

// import { CheckCircleIcon } from "@heroicons/react/20/solid";

// import Carousel from "./Carusel";

// const benefits = [
//   "Equipamiento de alta calidad",
//   "Vestuario y Duchas",
//   "Gran zona destinada para Open",
//   "Amplio Espacio de Entrenamiento",
//   "Actualizado  con las ultimas tendencias",
// ];

// const Facailities = () => {
//   return (
//     <div className="bg-gray-900 py-24 sm:py-32">
//       <div className="relative isolate">
//         <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
//             <Carousel />
//             <div className="w-full flex-auto">
//               <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                 Join our team
//               </h2>
//               <p className="mt-6 text-lg leading-8 text-gray-300">
//                 Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
//                 magnam voluptatum cupiditate veritatis în accusamus quisquam.
//               </p>
//               <ul
//                 role="list"
//                 className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
//               >
//                 {benefits.map((benefit) => (
//                   <li key={benefit} className="flex gap-x-3">
//                     <CheckCircleIcon
//                       className="h-7 w-5 flex-none"
//                       aria-hidden="true"
//                     />
//                     {benefit}
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-10 flex">
//                 <a
//                   href="#"
//                   className="text-sm font-semibold leading-6 text-indigo-400"
//                 >
//                   See our job postings <span aria-hidden="true">&rarr;</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Facailities;
