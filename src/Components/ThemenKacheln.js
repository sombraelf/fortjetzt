import React from "react";
import { Link } from "react-router-dom";

const ThemenKacheln = () => {
  const categories = [
    { title: "Städtereisen 🌃", link: "/staedtereisen" },
    { title: "Regionaltouren ⛺", link: "/regionaltouren" },
    { title: "Winterreisen 🏂", link: "/winterreisen" },
    { title: "Eventreisen 🎉", link: "/eventreisen" },
  ];

  return (
    <div className="container mx-auto px-4 my-12">
      <h2 className="text-3xl font-bold text-textColor-100 mb-8">
        Wähle dein nächstes Abenteuer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <Link key={index} to={category.link}>
            <div className="bg-secondaryColor-100 w-full h-[250px] flex items-center justify-center rounded">
              <h3 className="text-2xl text-textColor-100 font-semibold">
                {category.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ThemenKacheln;