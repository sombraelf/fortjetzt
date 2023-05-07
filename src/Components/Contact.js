import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 my-12">
      <h2 className="text-3xl font-bold text-textColor-100 mb-8">
        Kontaktieren Sie uns
      </h2>
      <form className="max-w-2xl mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold text-textColor-100 mb-2">
            Name
          </label>
          <input type="text" id="name" name="name" className="border-2 border-primaryColor-100 rounded w-full py-2 px-4" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-textColor-100 mb-2">
            E-Mail-Adresse
          </label>
          <input type="email" id="email" name="email" className="border-2 border-primaryColor-100 rounded w-full py-2 px-4" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold text-textColor-100 mb-2">
            Nachricht
          </label>
          <textarea id="message" name="message" rows="6" className="border-2 border-primaryColor-100 rounded w-full py-2 px-4" required />
        </div>
        <button type="submit" className="bg-primaryColor-100 text-textColor-100 px-4 py-2 rounded font-semibold hover:bg-primaryColor-200">
          Senden
        </button>
      </form>
    </div>
  );
};

export default Contact;