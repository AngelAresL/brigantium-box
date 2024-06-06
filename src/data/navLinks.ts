type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { href: "/", name: "Home" },
  { href: "/#contact", name: "Contacto" },
  { href: "/#about", name: "Nosotros" },
  { href: "/#activities", name: "Servicios" },
  { href: "/#facilities", name: "Instalaciones" },
  { href: "/#pricing", name: "Tarifas" },
  { href: "/comunidad", name: "Comunidad" },
];
export default navLinks;
