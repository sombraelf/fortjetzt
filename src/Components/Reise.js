import React, { useState } from 'react';
import Bewertungen from './Bewertungen';

const Reise = ({ title, location, duration, price, imageUrl, description }) => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleDateFromChange = (event) => {
    setDateFrom(event.target.value);
  }

  const handleDateToChange = (event) => {
    setDateTo(event.target.value);
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="md:w-1/2">
          <img
            src={imageUrl}
            alt={location}
            className="w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-textColor-100">
        {title}
      </h1>
          <p className="text-lg text-textColor-100 leading-7">
            <span className="font-semibold">Reiseziel:</span> {location}
          </p>
          <p className="text-lg text-textColor-100 leading-7">
            <span className="font-semibold">Aufenthaltsdauer:</span> {duration}
          </p>
          <p className="text-lg text-textColor-100 leading-7">
            <span className="font-semibold">Preis:</span> {price}
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
            <div>
              <label htmlFor="date-from" className="text-lg text-textColor-100 leading-7 font-semibold">Von:</label>
              <input id="date-from" type="date" value={dateFrom} onChange={handleDateFromChange} className="border border-textColor-100 rounded-md p-2 mt-2" />
            </div>
            <div>
              <label htmlFor="date-to" className="text-lg text-textColor-100 leading-7 font-semibold">Bis:</label>
              <input id="date-to" type="date" value={dateTo} onChange={handleDateToChange} className="border border-textColor-100 rounded-md p-2 mt-2" />
            </div>
          </div>
          <p className="text-lg text-textColor-100 leading-7 mt-4">
            <span className="font-semibold">Beschreibung:</span> {description}
          </p>
          <button className="bg-ctaColor-100 text-bgColor-100 px-4 py-2 rounded font-semibold hover:bg-primaryColor-200 mt-4">
            Buchen
          </button>
        </div>
      </div>
      <Bewertungen />
    </div>
   
  );
};

export default Reise;