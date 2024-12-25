import { useNavigate } from "react-router-dom";

const ArtifactLikeCard = ({ artifact }) => {
  const {
    _id,
    artifactId,
    name,
    image,
    description,
    location,
    discoveredBy,
    discoveredAt,
    like,
  } = artifact || {};
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg flex flex-col md:flex-row">
    <figure className="flex-shrink-0 w-full md:w-1/2">
      <img
        src={image}
        alt={name}
        className="h-48 md:h-full w-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
      />
    </figure>
    <div className="card-body p-6 flex flex-col space-y-4 justify-between md:w-1/2">
      <div>
        <h2 className="card-title text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mt-2">
          {description || "No description available."}
        </p>
      </div>
      <div className="text-sm text-gray-500 space-y-1">
        <p>
          <strong>Discovered By:</strong> {discoveredBy || "Unknown"}
        </p>
        <p>
          <strong>Location:</strong> {location || "Not specified"}
        </p>
        <p>
          <strong>Discovered At:</strong> {discoveredAt || "Unknown"}
        </p>
      </div>
      <div className="flex items-center justify-end">
        <button
          onClick={() => {
            navigate(`/artifact/${artifactId}`);
          }}
          className="btn btn-sm bg-amber-400 text-black hover:bg-amber-500 transition-colors duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default ArtifactLikeCard;
