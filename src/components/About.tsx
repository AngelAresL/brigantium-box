import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";
import team, { Coach } from "../data/team";
import { useTheme, useMediaQuery } from "@mui/material";

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="bg-gradient-to-b from-blue-400 to-black py-32" id="about">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <ScrollAnimation
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold  text-blue-900">Nuestro equipo</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl">Nadie mejor para guiarte en este nuevo mundo</p>
           
            <p className="mt-6  text-gray-950 text-justify">
              Somos profesionales que siempre hemos estado ligados al deporte.
              Entrenadores con estudios en Inef, competidores y entrenadores de
              crostraining con amplia experiencia y atletas de halterofilia de
              nivel nacional compitiendo tanto para el club halterofilia Coruña
              como para nuestro propio club CH Brigantium. La pasión por el
              deporte va más allá del desarrollo de las capacidades físicas.
              Entendemos el deporte como un conjunto de valores que rigen
              nuestras vidas. Sabemos que las grandes metas exigen grandes
              sacrificios, y nuestro objetivo es que tú consigas los tuyos sin
              que falte asesoramiento, consejo y sobre todo diversión!
            </p>
          </div>
        </ScrollAnimation>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {team.map((person: Coach) => (
            <li key={person.name}>
              <ScrollAnimation
                initial={
                  isMobile ? { opacity: 0, x: 0 } : { opacity: 0, x: 60 }
                }
                animate={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  className="aspect-[2/3] w-full  rounded-sm shadow-md shadow-black object-cover"
                  src={person.imageUrl}
                  alt={person.name}
                  width={600}
                  height={600}
                />
              </ScrollAnimation>
              <ScrollAnimation
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-400">
                  {person.name}
                </h3>
                <p className="  text-gray-300">
                  {person.role}
                </p>
                <p className="mt-4   text-gray-400 text-justify">
                  {person.bio}
                </p>
              </ScrollAnimation>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
