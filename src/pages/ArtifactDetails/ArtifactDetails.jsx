import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";

const ArtifactDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [artifact, setArtifact] = useState(null); // Artifact data
  const [likes, setLikes] = useState(0);

  // Simulate fetching artifact data
  useEffect(() => {
    // Mock API call to fetch artifact by ID
    const fetchArtifact = async () => {
      const { data } = await axios(`http://localhost:5000/artifact/${id}`);

      setArtifact(data);
    };

    fetchArtifact();
  }, [id]);

  const handleLike = async () => {
    // setLikes((prev) => prev + 1);
    const { _id, ...rest } = artifact;
    const userDetails = {
      ...rest,
      artifactId: _id,
      likedBy: user?.email,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:5000/liked-artifact",
        userDetails
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!artifact) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className="py-12 px-6 bg-amber-50">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <img
          src={artifact.image}
          alt={artifact.name}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
        <h1 className="text-2xl font-bold mb-4">{artifact.name}</h1>
        <p className="text-gray-600 mb-4">
          <strong>Type:</strong> {artifact.type}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Historical Context:</strong> {artifact.context}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Created At:</strong> {artifact.createdAt}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Discovered At:</strong> {artifact.discoveredAt}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Discovered By:</strong> {artifact.discoveredBy}
        </p>
        <p className="text-gray-600 mb-6">
          <strong>Present Location:</strong> {artifact.location}
        </p>

        <div className="flex items-center justify-between">
          <button
            onClick={handleLike}
            className="btn btn-outline bg-amber-300 flex items-center gap-2"
          >
            <FaHeart className="text-red-500" />
            Like
          </button>
          <span className="text-gray-700 font-semibold">{artifact.like} Likes</span>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
