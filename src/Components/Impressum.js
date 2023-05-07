import React from "react";

const Impressum = () => {
  return (
    <div className="container mx-auto py-8 px-4 flex items-center justify-center">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primaryColor-100">
          Impressum
        </h1>
        <p className="text-lg md:text-xl text-textColor-100 leading-7">
          Fortjetzt GmbH<br />
          Musterstraße 123<br />
          12345 Halle (Saale)<br />
          <br />
          Geschäftsführerin: Janine Bley<br />
          Handelsregister: Amtsgericht Halle (Saale), HRB 12345<br />
          USt-IdNr.: DE123456789<br />
          <br />
          Kontakt:<br />
          Telefon: +49 (0) 123 / 456789<br />
          E-Mail: info@fortjetzt.de
        </p>
      </div>
    </div>
  );
};

export default Impressum;