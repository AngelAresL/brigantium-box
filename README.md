# Brigantium Box - Página Web del Gimnasio de Crossfit

## Índice
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Motivación](#motivación)
- [Tecnologías y Características](#tecnologías-y-características)
- [Instalación y Uso](#instalación-y-uso)
- [Autores](#autores)
- [Enlaces](#enlaces)

## Descripción del Proyecto
Brigantium Box es la página web oficial de un gimnasio de Cross Training. Este proyecto nació con la intención de modernizar la presencia en línea del gimnasio, que llevaba tiempo utilizando una web desactualizada. La nueva página está diseñada para ser dinámica y fácil de usar, permitiendo a los usuarios obtener información sobre las instalaciones, horarios de clases, entrenadores y eventos especiales. La web cuenta con una navegación fluida donde, al seleccionar una sección, se desplaza automáticamente hacia la información correspondiente, mejorando así la experiencia del usuario.

## Motivación
La motivación principal detrás de esta iniciativa fue proporcionar un sitio web profesional y funcional que refleje la calidad y el dinamismo del gimnasio. Este proyecto me permitió poner en práctica mis conocimientos adquiridos y aprender nuevas tecnologías. Además, se ha implementado un enfoque end-to-end, proporcionando un servicio completo y personalizado al cliente. En resumen, este proyecto ha sido una excelente oportunidad para ganar experiencia y demostrar mis habilidades en el desarrollo web profesional.

## Tecnologías y Características
- **Next.js**: Utilizado para la creación de la estructura del sitio web, ofreciendo un rendimiento óptimo y una excelente experiencia de usuario gracias a su renderizado del lado del servidor y generación de sitios estáticos.
- **TypeScript**: Implementado para asegurar un código más robusto y mantenible, proporcionando tipado estático y detección temprana de errores.
- **Tailwind CSS**: Utilizado para el diseño y estilizado de la página, permitiendo una personalización rápida y eficiente de la interfaz de usuario con clases utilitarias.
- **Framer Motion**: Integrado para añadir animaciones fluidas y atractivas, mejorando la interactividad y dinamismo del sitio web.
- **MUI (Material-UI)**: Empleado para implementar componentes de interfaz de usuario preconstruidos y estilizados, asegurando una apariencia moderna y consistente.
- **EmailJS**: Utilizado para facilitar la comunicación directa entre los usuarios y el gimnasio mediante formularios de contacto, permitiendo el envío de correos electrónicos sin necesidad de un backend.

## Instalación y Uso
Para instalar y configurar este proyecto en un entorno local, sigue estos pasos:

1. Clona el repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar todas las dependencias necesarias.
3. Renombra el archivo `env.local.example` a `env.local`.
4. Llena las variables de entorno en el archivo `env.local` con los valores apropiados:
    - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
    - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
    - `NEXT_PUBLIC_EMAILJS_USER_ID`
    - `NEXT_PUBLIC_TEL`
    - `NEXT_PUBLIC_EMAIL`
    - `NEXT_PUBLIC_ADDRESS`
5. Ejecuta `npm run dev` para iniciar el servidor de desarrollo.
6. Abre `http://localhost:3000` en tu navegador para ver el proyecto en acción.

## Autores
- **Angel Ares Lago**
- **Luis Diaz Vazquez**

## Enlaces
- [Página web oficial](https://www.brigantiumbox.com)