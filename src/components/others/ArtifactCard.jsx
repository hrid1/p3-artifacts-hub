import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const ArtifactCard = ({ artifact }) => {
  const { _id, name, image, context, like } = artifact || {};
  const navigate = useNavigate();
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
          className="h-48 md:h-56 w-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{context.slice(0, 85)}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 text-red-500">
            <FaHeart />
            <span className="font-medium mt-1.5">{like}</span>
          </div>
          <button
            onClick={() => {
              navigate(`/artifact/${_id}`);
            }}
            className="btn btn-sm pt-1 bg-amber-400 text-black text"
          >
            View Details
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
