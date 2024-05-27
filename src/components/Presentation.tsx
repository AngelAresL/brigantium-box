// import { Permanent_Marker } from "next/font/google";
// import "./Presentation.css"
// const permanent = Permanent_Marker({ weight: "400", subsets: ["latin"] });

// const Presentation = () => {
//   return (
//     <>
//       <div className="bg-[url('/backgroundPresentation.jpg')] h-screen bg-cover bg-no-repeat bg-top pt-24">
//         <div className=" mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
//           <div className="flex flex-col justify-center items-center">
//             <h1
//               className={`text-5xl lg:text-9xl font-bold  text-blue-300 text-opacity-75  ${permanent.className} text-outline`}
//             >
//               Brigantium Box
//             </h1>
//             <p className="mt-6 p-6 text-lg  text-black bg-slate-300 bg-opacity-20 shadow-slate-400 shadow-lg max-w-2xl">
//               Si estás visitando nuestra página, algo en ti ya ha cambiado.
//               Quizás estás aburrido del gimnasio, quieres darle un empujón a tu
//               preparación física, o simplemente te apetece cambiar de aires y
//               conocer gente. Pues bien, estás en el sitio indicado. ¡Esta es tu
//               mejor opción en La Coruña!
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6"></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Presentation;

import { motion } from "framer-motion";
import "./Presentation.css";



const text = "Brigantium Box";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const containerVariants = {
  hidden: { opacity: 0.6 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Presentation = () => {
  return (
    <>
      <div className="bg-[url('/backgroundPresentation.jpg')] h-screen bg-cover bg-no-repeat bg-top pt-24">
        <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
          <div className="flex flex-col justify-center items-center ">
            <motion.h1
              className="text-opacity-75 text-6xl lg:text-7xl font-bold text-blue-300  text-outline"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              
            >
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants} >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <p className="mt-6 p-6 text-lg text-zinc-300  bg-zinc-700 bg-opacity-80 shadow-slate-400 shadow-lg max-w-2xl">
              Si estás visitando nuestra página, algo en ti ya ha cambiado.
              Quizás estás aburrido del gimnasio, quieres darle un empujón a tu
              preparación física, o simplemente te apetece cambiar de aires y
              conocer gente. Pues bien, estás en el sitio indicado. ¡Esta es tu
              mejor opción en La Coruña!
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Presentation;