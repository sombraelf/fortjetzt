import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted email: ${email}`);
    // Hier können Sie den Code einfügen, der die E-Mail-Adresse an den Server sendet
  };

  return (
    <div className="bg-textColor-100 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:mr-8">
          <h2 className="text-2xl font-semibold text-bgColor-100 mb-4">
            Abonniere unseren Newsletter
          </h2>
          <p className="text-lg text-bgColor-100 mb-6">
            Verpasse keine Angebote mehr und erhalte als Erster
            exklusive Reisetipps und Neuigkeiten.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 flex items-center justify-center md:justify-end"
        >
          <div className="flex flex-col md:flex-row md:items-center">
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="w-full md:w-auto bg-bgColor-100 text-textColor-100 rounded py-2 px-4 mb-4 md:mb-0 md:mr-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-secondaryColor-100 hover:bg-primaryColor-200 py-2 px-4 rounded-md text-textColor-100 font-medium transition-colors duration-300 shadow-md"
            >
              Abonnieren 😎
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;