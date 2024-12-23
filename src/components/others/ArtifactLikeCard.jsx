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
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure>
        <img
          src={image}
          alt={name}
          className="h-48 md:h-56 w-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{description || "No description available."}</p>
        <div className="text-sm text-gray-500">
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
        <div className="flex items-center justify-end mt-4">
          {/* <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-800">
              ❤️ {Math.max(0, like) || 0} Likes
            </span>
          </div> */}
          <button
            onClick={() => {
              navigate(`/artifact/${artifactId}`);
            }}
            className="btn btn-sm bg-amber-400 text-black hover:bg-amber-500 text-"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtifactLikeCard;
