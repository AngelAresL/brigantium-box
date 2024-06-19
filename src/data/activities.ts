interface Activity {
  name: string;
  features: {
    name: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  }[];
}

const activities: Activity[] = [
  {
    name: "Cross Training",
    features: [
      {
        name: "Intensidad, versatilidad, resistencia, comunidad.",
        description:
          "Se trata de un estilo de entrenamiento basado en movimientos funcionales ejecutados a alta intensidad. No sólo conseguirás mejorar tus capacidades físicas básicas y tu aspecto, sino también preparar tu mente para afrontar miedos y grandes retos. Pronto verás que tu día a día se beneficia de estos entrenamientos. Estar más ágil y fuerte y tener un mayor control postural es calidad de vida.",
        imageSrc: "/crossTrainingAbout.jpg",
        imageAlt: "Foto de entrenamiento de cross training",
      },
    ],
  },
  {
    name: "Halterofilia",
    features: [
      {
        name: "Fuerza, técnica, competencia, precisión.",
        description:
          "En el mundo del deporte, la halterofilia es parte esencial de la preparación física del atleta. No es extraño encontrar entrenamientos con cargadas o arrancadas en corredores, lanzadores, futbolistas, jugadores de rugby, luchadores, etc. La razón es simple, y es que los movimientos en este deporte exigen una coordinación, velocidad, flexibilidad, potencia, técnica y concentración excepcionales. Practicar Halterofilia no sólo es divertido, sino que además te convierte en mejor deportista, y en nuestro box puedes hacerlo de la mano de los mejores entrenadores. Además, estas clases están incluidas en tu tarifa, así que si estás interesado/a ¡sólo tienes que reservar! ¿Te lo vas a perder?",
        imageSrc: "/halterofiliaAbout.jpg",
        imageAlt: "Foto de levantamiento de halterofilia",
      },
    ],
  },
  {
    name: "Gymnastics",
    features: [
      {
        name: "Gimnasia: Fuerza, Flexibilidad, Coordinación.",
        description:
          "En nuestro box, ofrecemos clases especializadas para mejorar los movimientos gimnasticos, esto te ayudarán a dominar técnicas que combinan fuerza, flexibilidad y coordinación. Aprenderás a realizar movimientos que requieren control corporal total, desde ejercicios que implican elevaciones y soportes dinámicos hasta técnicas de equilibrio invertido. Estos ejercicios no solo incrementan la fuerza muscular y la capacidad aeróbica, sino que también mejoran aspectos cruciales como la agilidad, la coordinación y la precisión. Cada clase está diseñada para ayudarte a perfeccionar tu técnica, aumentar tu confianza en movimientos complejos y llevar tu condición física a nuevos niveles. Únete a nosotros para transformar tu rendimiento físico con el poder de la gimnasia aplicada al Cross Training.",
        imageSrc: "/gymnasticAbout.jpg",
        imageAlt: "Foto de movimiento de gimnasia",
      },
    ],
  },
  {
    name: "Fisioterapia",
    features: [
      {
        name: "La recuperación es clave",
        description:
          "Ofrecemos servicio de fisioterapia a nuestros atletas, diseñado específicamente para complementar tu entrenamiento y maximizar tu recuperación. Siempre pensamos desde una perspectiva 360 grados, asegurándonos de que nuestros clientes puedan cubrir todas sus necesidades deportivas.",
        imageSrc: "/physiotherapyAbout.jpg",
        imageAlt: "Imagen de una sesión de fisioterapia.",
      },
    ],
  },

  {
    name: "Nutrición",
    features: [
      {
        name: "La alimentación es la base de todo",
        description:"También colaboramos con especialistas en nutrición y actuamos como nexo entre ellos y nuestros clientes para continuar con nuestro objetivo de brindar el servicio más completo. Si deseas impulsar tu estado físico, no cabe duda de que esta es una excelente opción.",
          
        imageSrc: "/nutritionAbout.jpg",
        imageAlt: "Imagen de alimentos saludables y frescos.",
      },
    ],
  },
];
export default activities;
