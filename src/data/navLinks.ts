type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { href: "/", name: "Home" },
  { href: "/#contact", name: "Contacto" },
  { href: "/#about", name: "About" },
  { href: "/galeria", name: "Galería de fotos" },
];
export default navLinks;
