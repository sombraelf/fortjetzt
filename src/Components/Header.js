import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full p-4 bg-bgColor-100 sticky top-0 z-50">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo */}
            <img
              src="path/to/logo.svg"
              alt="Fortjetzt"
              className="w-15 h-10 mr-4"
            />
          </div>
          {/* Hamburger-Menü für kleine Bildschirme */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-textColor-100">
              <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
          </div>
          {/* Desktop Navigationsleiste */}
          <ul className="hidden md:flex items-center space-x-12">
            <li>
              <Link to="/" className="text-textColor-100 font-semibold hover:underline">
                Startseite
              </Link>
            </li>
            <li>
              <Link to="/reisearten" className="text-textColor-100 font-semibold hover:underline">
                Reisearten
              </Link>
            </li>
            <li>
              <Link to="/reiseangebote" className="text-textColor-100 font-semibold hover:underline">
                Last-Minute Deals
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-textColor-100 font-semibold hover:underline">
                Über uns
              </Link>
            </li>
            <li>
              <Link to="contact" className="text-textColor-100 font-semibold hover:underline">
                Kontakt
              </Link>
            </li>
          </ul>
          {/* Login Button */}
          <div className="hidden md:block">
            <Link to="/login" className="bg-textColor-100 text-bgColor-100 px-4 py-2 rounded font-semibold hover:bg-primaryColor-200">
              Login
            </Link>
          </div>
        </nav>
        {/* Mobile Navigationsleiste */}
        {menuOpen && (
          <ul className="md:hidden mt-2 space-y-2">
            <li>
              <Link
                onClick={toggleMenu}
                to="/"
                className="text-textColor-100 font-semibold hover:underline block px-4 py-2"
              >
                Startseite
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/reisearten"
                className="text-textColor-100 font-semibold hover:underline block px-4 py-2"
              >
                Reisearten
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/reiseangebote"
                className="text-textColor-100 font-semibold hover:underline block px-4 py-2"
              >
                Reiseangebote
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/about"
                className="text-textColor-100 font-semibold hover:underline block px-4 py-2"
              >
                Über uns
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/contact"
                className="text-textColor-100 font-semibold hover:underline block px-4 py-2"
              >
                Kontakt
              </Link>
            </li>
            
            <li>
              <Link
                onClick={toggleMenu}
                to="/login"
                className="bg-textColor-100 text-bgColor-100 px-4 py-2 ml-3 rounded font-semibold hover:bg-primaryColor-200"
              >
                Login
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;