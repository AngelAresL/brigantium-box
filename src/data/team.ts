export type Coach = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

const team: Coach[] = [
  {
    name: "Oscar Rial",
    role: "Dueño & Coach",
    bio: "Oscar Rial es el dueño de la organización y el primer coach del equipo.",
    imageUrl: "/oki.jpg",
  },
  {
    name: "Jorge Cocoy",
    role: "Second Coach",
    bio: "Nuestro segundo entrenador del equipo. Apasionado del functional fittnes, dedicado al deporte y a la formación. Entre sus certificaciones se encuentran: Nivel 1 con la Federación Española de Functional Fitness, Nivel 1 de la Federación Española de Halterofilia, entre otros. ",
    imageUrl: "/cocoy.jpg",
  },
];
export default team;
