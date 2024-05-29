export type Coach = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

const team: Coach[] = [
  {
    name: "Oscar Rial",
    role: "First Coach & Dueño",
    bio: "Oscar Rial es el dueño de la organización y el primer coach del equipo. Es un apasionado de los videojuegos y ha dedicado su vida a los deportes electrónicos. Su objetivo es llevar a su equipo a lo más alto de la competición.",
    imageUrl: "/oki.jpeg",
  },
  {
    name: "Jorge Cocoy",
    role: "Second Coach",
    bio: "Jorge Cocoy es el segundo entrenador del equipo. Es un apasionado de los videojuegos y ha dedicado su vida a los deportes electrónicos. Su objetivo es llevar a su equipo a lo más alto de la competición.",
    imageUrl: "/cocoy.jpeg",
  },
];
export default team;
