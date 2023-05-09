import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faPinterest, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-bgColor-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
        <Link to ="/">
        <img
              src="/logo.png"
              alt="Fortjetzt"
              className="w-15 h-10 mr-4"
              />
              </Link>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primaryColor-100 hover:text-secondaryColor-100 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primaryColor-100 hover:text-secondaryColor-100 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faPinterest} size="lg" />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primaryColor-100 hover:text-secondaryColor-100 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faTiktok} size="lg" />
          </a>
        </div>
      </div>
      <div className="container mx-auto pt-4">
        <nav className="flex flex-wrap justify-center">
          <ul className="flex flex-wrap space-x-8">
            <li>
              <Link to="/" className="text-textColor-100 hover:underline transition-colors duration-300">
                Startseite
              </Link>
            </li>
            <li>
              <Link to="/#" className="text-textColor-100 hover:underline transition-colors duration-300">
                Datenschutzerklärung
              </Link>
            </li>
            <li>
              <Link to="/#" className="text-textColor-100 hover:underline transition-colors duration-300">
                Cookie-Einstellungen
              </Link>
            </li>
            <li>
              <Link to="/impressum" className="text-textColor-100 hover:underline transition-colors duration-300">
                Impressum
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-sm text-textColor-100 text-center mt-4">
          © 2023 Fortjetzt GmbH
        </p>
      </div>
    </footer>
  );
};

export default Footer;