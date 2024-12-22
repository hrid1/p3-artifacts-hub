import React from "react";
import { FaHeart } from "react-icons/fa";

const ArtifactCard = ({ artifact }) => {
  const { name, image, description, likes } = artifact || {};
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 text-red-500">
            <FaHeart />
            <span className="font-medium">{likes}</span>
          </div>
          <button className="btn btn-sm bg-amber-400 text-black text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
