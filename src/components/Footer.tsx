import Link from "next/link";
import Image from "next/image";
import navLinks from "@/data/navLinks";
import SocialLinks from "./SocialLinks";

// const navigation = {
//   main: [
//     { name: "Contacto", href: "#contact" },
//     { name: "Nosotros", href: "#about" },
//     { name: "Servicios", href: "#activities" },
//     { name: "Tarifas", href: "#pricing" },
//   ],
// };

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 relative">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 md:flex md:justify-center md:space-x-12 text-center"
          aria-label="Footer"
        >
          {navLinks.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-500 hover:text-blue-400"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          <SocialLinks color={"rgb(156 163 175)"} />
        </div>
        <div className="mt-10 lg:mt-0 flex justify-center lg:absolute lg:right-20 lg:top-1/2 lg:transform lg:-translate-y-1/2">
          <Image
            src="/pet-friendly.png"
            width={100}
            height={100}
            alt="Pet friendly"
          />
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; BrigantiumBox 2024. Todos los derechos reservados.
          <Link href="/aviso-legal" className="hover:text-blue-400 ml-2">
            Aviso Legal
          </Link>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
