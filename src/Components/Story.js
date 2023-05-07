import React from "react";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div className="container mx-auto px-4 my-12 flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img
          className="w-full h-auto object-cover rounded-lg shadow-lg mb-8 img-fluid"
          src="about.png"
          alt="Janine, Gründerin von Unvergessliche Reisen"
        />
      </div>
      <div className="w-full lg:w-1/2 pl-8">
        <h2 className="text-3xl font-bold text-textColor-100 mb-8">
          Unsere Geschichte
        </h2>
        <p className="text-lg text-textColor-100 leading-relaxed mb-8">
          Fortjetzt wurde 2020 von Janine gegründet, die die Welt bereist und
          zahlreiche Kulturen und Lebensweisen kennengelernt hat. Ihre
          Leidenschaft für das Entdecken neuer Orte und das Erleben
          unvergesslicher Momente führte sie schließlich dazu, Fortjetzt zu
          gründen. Unsere Mission ist es, Menschen mit atemberaubenden Reisen
          unvergessliche Momente zu bereiten und individuelle Reiseerlebnisse
          auf Basis ihrer Bedürfnisse und Interessen zu gestalten.
        </p>
        <Link
          to="/about"
          className="bg-textColor-100 text-bgColor-100 px-4 py-2 rounded font-semibold hover:bg-primaryColor-200"
        >
          Mehr erfahren
        </Link>
      </div>
    </div>
  );
};

export default Story;