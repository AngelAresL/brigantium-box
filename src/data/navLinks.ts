type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { href: "/", name: "Home" },
  { href: "/#contact", name: "Contacto" },
  { href: "/#about", name: "Nosotros" },
  { href: "/#activities", name: "Servicios" },
  { href: "/#pricing", name: "Tarifas" },
  { href: "/galeria", name: "Galería de fotos" },
];
export default navLinks;
