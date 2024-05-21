import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";
import team ,{Coach}from '../data/team';



const About: React.FC = () => {
  return (
    <div className="bg-[url('/brigantium_wallpaper_gradient.png')] bg-cover  py-20 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <ScrollAnimation
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestro Equipo
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              Nuestro equipo se compone de profesionales que siempre han estado
              ligados al deporte. Contamos con entrenadores con estudios en
              Inef, competidores y entrenadores de crostraining con amplia
              experiencia y atletas de halterofilia de nivel nacional
              compitiendo tanto para el club halterofilia Coruña como para
              nuestro propio club CH Brigantium. La pasión por el deporte va más
              allá del desarrollo de las capacidades físicas. Entendemos el
              deporte como un conjunto de valores que rigen nuestras vidas.
              Sabemos que las grandes metas exigen grandes sacrificios, y
              nuestro objetivo es que tú consigas los tuyos sin que falte
              asesoramiento, consejo y sobre todo diversión!
            </p>
          </div>
        </ScrollAnimation>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {team.map((person:Coach) => (
            <li key={person.name}>
              <ScrollAnimation
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-zinc-100 p-2 shadow-2xl shadow-slate-800 ">
                  <Image
                    className="aspect-[2/3] w-full  rounded-sm shadow-md shadow-black object-cover transition-transform duration-300 hover:scale-110"
                    src={person.imageUrl}
                    alt=""
                    width={90}
                    height={90}
                  />
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-400">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-300">
                  {person.role}
                </p>
                <p className="mt-4 text-base leading-7 text-gray-400">
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
