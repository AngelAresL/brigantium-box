import Image from "next/image";

const people = [
  {
    name: "Oscar Rial",
    role: "First Coach & Dueño",
    bio: "Oscar Rial es el dueño de la organización y el primer coach del equipo. Es un apasionado de los videojuegos y ha dedicado su vida a los deportes electrónicos. Su objetivo es llevar a su equipo a lo más alto de la competición.",
    imageUrl: "/oki.png",
  },
  {
    name: "Jorge Cocoy",
    role: "Second Coach",
    bio: "Jorge Cocoy es el segundo entrenador del equipo. Es un apasionado de los videojuegos y ha dedicado su vida a los deportes electrónicos. Su objetivo es llevar a su equipo a lo más alto de la competición.",
    imageUrl: "/cocoy.png",
  },
];

const About = () => {
  return (
    <div className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nuestro equipo se compone de profesionales que siempre han estado
            ligados al deporte. Contamos con entrenadores con estudios en Inef,
            competidores y entrenadores de crostraining con amplia experiencia y
            atletas de halterofilia de nivel nacional compitiendo tanto para el
            club halterofilia Coruña como para nuestro propio club CH
            Brigantium. La pasión por el deporte va más allá del desarrollo de
            las capacidades físicas. Entendemos el deporte como un conjunto de
            valores que rigen nuestras vidas. Sabemos que las grandes metas
            exigen grandes sacrificios, y nuestro objetivo es que tú consigas
            los tuyos sin que falte asesoramiento, consejo y sobre todo
            diversión!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                className="aspect-[2/3] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
                width={90}
                height={90}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {person.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
