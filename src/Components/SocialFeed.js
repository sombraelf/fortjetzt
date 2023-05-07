import React from "react";

const SocialFeed = () => {
  const images = [
    "insta-1.png",
    "insta-2.png",
    "insta-3.png",
    "insta-4.png",
  ];

  return (
    <div className="container mx-auto px-4 my-12">
      <h2 className="text-3xl font-bold text-textColor-100 mb-8">
        Entdecke uns auf Instagram 🧐
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Instagram post ${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default SocialFeed;