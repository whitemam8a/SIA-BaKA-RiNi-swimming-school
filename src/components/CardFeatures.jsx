import React from "react";

const CardFeatures = ({ logo, title, description }) => {
  return (
    <div className="max-w-sm mx-auto bg-sky-100 shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center p-4">{logo}</div>
      <div className="px-6 py-4 ">
        <h2 className="text-xl font-bold text-center mb-4">{title}</h2>
        <p className="text-gray-700 text-base text-justify">{description}</p>
      </div>
    </div>
  );
};

export default CardFeatures;
