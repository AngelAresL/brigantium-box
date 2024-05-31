
import { motion } from "framer-motion";

const text = "Brigantium Box";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0.6 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Presentation = () => {
  return (
    <>
      <div className="bg-[url('/backgroundPresentation.jpg')] h-screen bg-cover bg-no-repeat bg-top pt-24">
        <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
          <div className="flex flex-col justify-center items-center ">
            <motion.h1
              className="mt-20 text-opacity-75 text-7xl lg:text-9xl font-extrabold text-blue-300  text-outline"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>
      </div>
      {/* <div className=" bg-zinc-950">
      <p className="px-2 text-sm text-justify text-zinc-300  max-w-2xl">
              Si estás visitando nuestra página, algo en ti ya ha cambiado.
              Quizás estás aburrido del gimnasio, quieres darle un empujón a tu
              preparación física, o simplemente te apetece cambiar de aires y
              conocer gente. Pues bien, estás en el sitio indicado. ¡Esta es tu
              mejor opción en La Coruña!
            </p>
      </div> */}
    </>
  );
};

export default Presentation;
