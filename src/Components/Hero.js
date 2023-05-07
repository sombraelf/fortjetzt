import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[500px]">
      <div
        className="absolute top-0 left-0 w-full h-full bg-white opacity-50 z-10"
      ></div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-top z-0"
        style={{ backgroundImage: `url(/hero4.png)` }}
      ></div>
      <div className="container mx-auto h-full flex items-center justify-center px-4 relative z-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-textColor-100 font-bold">
            Willkommen bei Fortjetzt
          </h1>
          <p className="mt-4 text-lg md:text-xl text-textColor-100">
            Entdecke die besten Reiseziele und erlebe unvergessliche Momente
          </p>
          <Link
            to="/reisearten"
            className="mt-8 bg-textColor-100 text-bgColor-100 px-8 py-3 rounded-md text-lg font-semibold inline-block"
          >
            Jetzt entdecken
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;