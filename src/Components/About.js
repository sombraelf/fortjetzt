import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 my-12">
      <h2 className="text-3xl font-bold text-textColor-100 mb-8">
        Über uns
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            src="about.png"
            alt="Janine, Gründerin von Unvergessliche Reisen"
          />
        </div>
        <div>
          <p className="text-lg mb-4">
            Unvergessliche Reisen wurde von Janine gegründet, die selbst mehrere Jahre lang die Welt bereist hat. Janine wollte ihre Erfahrungen und Leidenschaft fürs Reisen mit anderen Menschen teilen und hat deshalb diese Reiseagentur ins Leben gerufen.
          </p>
          <p className="text-lg mb-4">
            Unsere Mission ist es, Ihnen unvergessliche Momente zu bereiten. Wir glauben, dass jeder Mensch das Recht auf eine unvergessliche Reise hat und wir wollen dabei helfen, diese Träume wahr werden zu lassen. Unsere Reiseangebote sind sorgfältig ausgewählt und bieten Ihnen einzigartige Erlebnisse, die Sie nie vergessen werden.
          </p>
          <p className="text-lg mb-4">
            Wir legen besonderen Wert auf Nachhaltigkeit und soziale Verantwortung. Wir möchten sicherstellen, dass die Orte, die wir besuchen, auch für zukünftige Generationen erhalten bleiben und unterstützen lokale Gemeinden und Umweltschutzprojekte.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;