import { ArrowRightIcon, MenuIcon, XIcon, HomeIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import curiculum from "../assets/cv francobogado.pdf"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0">
            <HomeIcon className="w-8 h-8" />
          </a>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
              {isMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        <nav className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex-grow ${isMenuOpen ? "block" : "hidden md:block"}`}>
          <div className="md:flex md:items-center md:w-auto">
            <div className="flex flex-col md:flex-row">
              <a href="#projects" className="mr-5 hover:text-white">
                Experiencia
              </a>
              <a href="#skills" className="mr-5 hover:text-white">
                Habilidades
              </a>
              <a href={curiculum} className="mr-5 hover:text-white">
                Curriculum
              </a>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="#contact"
                className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base"
              >
                Contacto
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;







