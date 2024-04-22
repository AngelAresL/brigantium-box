import Link from "next/link";

const NavBar:React.FC = () => {
  return(
  <nav>
    <Link href="/">Home</Link>
    <Link href="/contacto">Contacto</Link>
    <Link href="/about">About</Link>
    <Link href="/galeria">Galería de fotos</Link>
  </nav>
  )
};
export default NavBar;
