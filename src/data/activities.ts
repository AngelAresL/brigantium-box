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
          "En nuestro box de CrossFit, ofrecemos clases especializadas de gimnasia que te ayudarán a dominar técnicas que combinan fuerza, flexibilidad y coordinación. Aprenderás a realizar movimientos que requieren control corporal total, desde ejercicios que implican elevaciones y soportes dinámicos hasta técnicas de equilibrio invertido. Estos ejercicios no solo incrementan la fuerza muscular y la capacidad aeróbica, sino que también mejoran aspectos cruciales como la agilidad, la coordinación y la precisión. Cada clase está diseñada para ayudarte a perfeccionar tu técnica, aumentar tu confianza en movimientos complejos y llevar tu condición física a nuevos niveles. Únete a nosotros para transformar tu rendimiento físico con el poder de la gimnasia aplicada al CrossFit.",
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
          "En nuestro box, ofrecemos un programa integral de fisioterapia diseñado específicamente para complementar tu entrenamiento y maximizar tu recuperación. Entenderás cómo las técnicas de fisioterapia pueden aliviar el dolor, mejorar la movilidad y acelerar la recuperación de lesiones. Aprenderás a implementar estrategias de rehabilitación que potencien tu fuerza y flexibilidad, integrando ejercicios y tratamientos que favorecen la reparación y la prevención de lesiones. Nuestro enfoque no solo se centra en la recuperación inmediata, sino también en la mejora de la salud a largo plazo y el rendimiento atlético. Cada plan de fisioterapia es personalizado, adaptándose a tus metas específicas y necesidades físicas. Únete a nosotros para descubrir cómo la fisioterapia adecuada puede transformar tu cuerpo y mantenerte en la mejor forma posible.",
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
        description:
          "En nuestro box de CrossFit, ofrecemos un programa integral de nutrición diseñado específicamente para complementar tu entrenamiento y maximizar tu rendimiento. Entenderás cómo la alimentación influye en la recuperación muscular, la energía y la resistencia. Aprenderás a estructurar dietas que potencien la fuerza y la eficiencia física, integrando alimentos que favorecen la reparación y el crecimiento muscular. Nuestro enfoque no solo se centra en mejorar la composición corporal, sino también en optimizar la salud general y el bienestar. Cada plan nutricional es personalizado, adaptándose a tus metas específicas y necesidades energéticas. Únete a nosotros para descubrir cómo la nutrición adecuada puede transformar tu cuerpo y elevar tu capacidad atlética a niveles óptimos.",
        imageSrc: "/nutritionAbout.jpg",
        imageAlt: "Imagen de alimentos saludables y frescos.",
      },
    ],
  },
];
export default activities;
