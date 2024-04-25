"use client";

import navLinks from "@/data/navLinks";
import Link from "next/link";
import { useState } from "react";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav>
      <div>
        <button
          id="menu-btn"
          className={`hamburger sm:hidden ${isOpen ? "open" : ""}`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } sm:hidden absolute bg-darkViolet p-6 rounded-lg left-6 right-6 top-20 z-50 flex-col items-center justify-center w-full space-y-6 font-bold text-white`}
        >
          {navLinks.map((link, index) => (
            <button key={index} className="text-center hover:underline w-full">
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden sm:flex space-x-8 items-center font-bold">
          {navLinks.map((link, index) =>
            link.id ? (
              <button
                key={index}
                className="text-grayishViolet hover:text-veryDarkViolet"
                onClick={() => scrollToSection(link.id!)}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={index}
                href={link.href!}
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
