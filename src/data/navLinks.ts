type NavLink = {
  id?: string;
  label: string;
  href?: string;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { id: "contact", label: "Contacto" },
  { id: "about", label: "About" },
  { href: "/galeria", label: "Galería de fotos" },
];
export default navLinks;