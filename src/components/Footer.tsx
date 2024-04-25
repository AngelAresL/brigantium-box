import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row sm:justify-center mt-auto py-4 bg-gray-800 text-white text-center">
      <p>© 2024 All rights reserved</p>
      <div className="flex justify-center space-x-4">
        <Link href="/contacto">Contacto</Link>
        <Link href="/legal">Aviso legal</Link>
      </div>
      <SocialLinks/>
    </footer>
  );
};
export default Footer;
