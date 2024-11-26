import React from "react";

const CardCoach = ({ image, name, description }) => {
  return (
    <div className="card bg-sky-100 mx-3 shadow-xl overflow-hidden">
      <figure className="bg-white w-full h-64">
        <img
          src={image}
          alt="coach"
          className="w-full h-full object-cover object-top"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardCoach;
