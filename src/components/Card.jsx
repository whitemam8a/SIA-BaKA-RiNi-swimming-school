import React from "react";

const Card = ({ image, imgAlt, title, description, price }) => {
  return (
    <div className="card bg-slate-75 mx-3 shadow-xl  w-[300px] h-[360px]">
      <figure className="flex justify-center items-center h-48 w-full overflow-hidden">
        <img src={image} alt={imgAlt} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body gap-0 h-[150px]">
        <h3 className="card-title text-xl font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 my-1">{description}</p>
        <div className="card-actions">
          <strong className="text-lg text-gray-950">{`${price}€`}</strong>
        </div>
      </div>
    </div>
    // <div className="transition-transform transform hover:scale-105 hover:shadow-xl bg-white rounded-lg overflow-hidden shadow-md hover:shadow-indigo-300 p-5">
    //   <img
    //     src={image}
    //     alt="prices"
    //     className="w-full h-48 object-cover rounded-t-lg mb-4"
    //   />
    //   <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    //   <p className="text-gray-600 my-2">{description}</p>
    //   <div className="mt-4">
    //     <strong className="text-lg text-gray-950">{price}€</strong>
    //   </div>
    // </div>
  );
};

export default Card;
