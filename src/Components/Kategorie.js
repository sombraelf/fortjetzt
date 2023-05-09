import React from 'react';
import { Link } from 'react-router-dom';

const Kategorie = ({ kategorie, reisen }) => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-3xl font-bold mb-4 text-textColor-100">
        {kategorie}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reisen.map((reise) => (
          <div key={reise.id} className="bg-bgColor-100 rounded-lg overflow-hidden shadow-lg">
            <Link to={reise.link}>
            <img src={reise.imageUrl} alt={reise.title} className="w-full h-48 object-cover" />
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-bold text-textColor-100 mb-2">{reise.title}</h2>
              <p className="text-textColor-100 mb-2">{reise.description}</p>
              <Link to={reise.link}>
                <button className="bg-ctaColor-100 text-bgColor-100 px-4 py-2 rounded font-semibold hover:bg-primaryColor-200">
                  Mehr erfahren
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kategorie;