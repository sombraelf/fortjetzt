import React from "react";
import { Link } from "react-router-dom";

const Reiseangebote = () => {
  const angebote = [
    {
      title: "Städtetrip nach Lissabon",
      image: "lissabon.png",
      price: 299.99,
      link: "/reise/lissabon",
    },
    {
      title: "Traumurlaub auf den Seychellen",
      image: "seychellen.png",
      price: 2499.99,
      link: "/reise/seychellen",
    },
    {
      title: "Naturwunder in Kanada",
      image: "kanada.png",
      price: 1799.99,
      link: "/reise/kanada",
    },
    {
      title: "Abenteuer in Island",
      image: "island.png",
      price: 1499.99,
      link: "/reise/island",
    },
  ];

  return (
    <div className="container mx-auto px-4 my-12">
      <h2 className="text-3xl font-bold text-textColor-100 mb-8">
        Unsere Last-Minute Angebote
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {angebote.map((angebot, index) => (
          <Link key={index} to={angebot.link}>
            <div className="relative bg-bgColor-100 rounded-lg overflow-hidden">
              <img
                className="w-full h-[300px] object-cover"
                src={angebot.image}
                alt={angebot.title}
              />
              <div className="absolute top-0 left-0 p-4 bg-secondaryColor-100 text-textColor-100 font-semibold">
                {angebot.title}
              </div>
              <div className="bg-bgColor-100 opacity-80 absolute bottom-0 left-0 right-0 p-4 bg-primaryColor-200 text-textColor-100 font-semibold flex justify-between items-center">
                <span>{angebot.price} €</span>
                <span>Mehr erfahren</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Reiseangebote;