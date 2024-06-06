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
      <div className="bg-[url('/backgroundPresentation.jpg')] min-h-screen bg-cover bg-no-repeat bg-center flex items-center mt-14">
        <div className="mx-auto max-w-6xl text-center">
          <div className="flex flex-col justify-center items-center">
            <motion.h1
              className="text-opacity-75 font-extrabold text-blue-300 text-outline text-title"
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
    </>
  );
};

export default Presentation;
