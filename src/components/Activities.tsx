import { useState } from "react";
import { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import activities from "@/data/activities";

const tabVariants = {
  initial: {
    opacity: 0,
    x: 400,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: -400,
  },
};

const classNames = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(" ");
};

const Activities = () => {
  const [activeTab, setActiveTab] = useState<string>("crossTraining");
  return (
    <div className="bg-zinc-950 degradado-superior">
      <section
        aria-labelledby="features-heading"
        className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8"
      >
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2
              id="features-heading"
              className="text-3xl font-bold tracking-tight text-zinc-500 sm:text-4xl"
            >
              Nuestros servicios
            </h2>
            <p className="mt-4 text-slate-500">
              En Brigantium box somos especialistas en Cross Training y
              Halterofilia. Te ofrecemos un sistema de entrenamiento de alta
              intensidad, que lleva años cambiando la vida de mucha gente
              alrededor del mundo. ¡No te engañes, el cambio empieza el día que
              entras en el box por primera vez! Sabemos que a algunos les
              intimida y se preguntan ¿estoy preparado? ¿seré capaz de entrenar
              así? ¿encajaré? ¿podré hacerlo aunque nunca haya hecho deporte
              antes? ¡La respuesta a todas estas preguntas es SI!
            </p>
          </div>

          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {activities.map((activity, index) => (
                    <Tab
                      key={index}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? "outline-none border-b border-blue-400 text-blue-400"
                            : "border-b border-transparent text-gray-500 hover:border-slate-300 hover:text-slate-200",
                          "whitespace-nowrap border-b py-6 text-md font-medium"
                        )
                      }
                    >
                      {activity.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {activities.map((activity, index) => (
                <Tab.Panel key={index} className="space-y-16 pt-10 lg:pt-16">
                  {activity.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          variants={tabVariants}
                          initial="initial"
                          animate="in"
                          exit="out"
                          transition={{ duration: 1 }}
                          className="mt-6 lg:col-span-5 lg:mt-0"
                        >
                          <h3 className="text-lg font-semibold text-slate-400">
                            {feature.name}
                          </h3>
                          <p className="mt-2 text-sm text-gray-500">
                            {feature.description}
                          </p>
                        </motion.div>
                        <motion.div
                          variants={tabVariants}
                          initial="out"
                          animate="in"
                          exit="initial"
                          transition={{ duration: 1 }}
                          className="lg:col-span-7"
                        >
                          <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5 ">
                            <Image
                              src={feature.imageSrc}
                              alt={feature.imageAlt}
                              width={500}
                              height={300}
                              className="object-cover object-center "
                            />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};
export default Activities;
