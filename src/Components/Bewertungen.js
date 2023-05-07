import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Bewertungen = () => {
  const averageRating = 4.7;
  const reviews = [
    {
    id: 1,
    name: "Jan",
    rating: 5,
    text: "Unvergessliche Reise, die ich nie vergessen werde. Die Organisation war perfekt und das Team hat sich hervorragend um mich gekümmert. Ich kann es kaum erwarten, wieder mit Fortjetzt zu reisen!",
    },
    {
    id: 2,
    name: "Sophie",
    rating: 4,
    text: "Ich hatte eine wunderschöne Zeit auf meiner Reise mit Fortjetzt. Die Aktivitäten waren super organisiert und die Unterkunft war wirklich luxuriös. Der einzige Kritikpunkt war, dass ich gerne mehr Freizeit gehabt hätte, um die Gegend zu erkunden.",
    },
    {
    id: 3,
    name: "Markus",
    rating: 5,
    text: "Die Reise mit Fortjetzt war ein absoluter Traum. Alles war perfekt organisiert und die Guides waren super freundlich und kompetent. Ich habe so viele neue Freunde aus aller Welt kennengelernt und die Landschaft war einfach atemberaubend. Ich werde auf jeden Fall wieder mit Fortjetzt reisen!",
    },
    ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-primaryColor-100 mb-8">
        Was unsere Kunden auf ihrer Reise erlebt haben 🌍😍
      </h2>
      <div className="flex items-center justify-center mb-12">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={`${
                ratingValue <= averageRating ? "text-secondaryColor-100" : "text-gray-300"
              } w-6 h-6`}
            />
          );
        })}
        <span className="ml-2 text-secondaryColor-100 font-bold text-xl">
          {averageRating}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-lg p-6 rounded-lg flex flex-col justify-between"
          >
            <div className="mb-4">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`${
                      ratingValue <= review.rating ? "text-secondaryColor-100" : "text-gray-300"
                    } w-4 h-4`}
                  />
                );
              })}
            </div>
            <p className="text-textColor-100 mb-4">{review.text}</p>
            <p className="text-textColor-100 font-bold">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bewertungen;