import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer>
      <p>© 2024 All rights reserved</p>

      <Link href="/contacto">Contacto</Link>
      <Link href="/legal">Aviso legal</Link>
      <SocialLinks/>
    </footer>
  );
};
export default Footer;
