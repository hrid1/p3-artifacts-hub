import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import axios from "axios";

const ArtifactDetails = () => {
  const { id } = useParams(); // Get artifact ID from the route
  const navigate = useNavigate();

  // Mock authenticated user check (replace with actual auth logic)
  const isAuthenticated = true; // Replace with your authentication check
  const [artifact, setArtifact] = useState(null); // Artifact data
  const [likes, setLikes] = useState(0);

  // Simulate fetching artifact data
  useEffect(() => {
    // Mock API call to fetch artifact by ID
    const fetchArtifact = async () => {
      const { data } = await axios(`http://localhost:5000/artifact/${id}`);
      //   const mockData = {
      //     id,
      //     name: "Rosetta Stone",
      //     image: "https://via.placeholder.com/F300",
      //     type: "Document",
      //     context: "The key to decoding Egyptian hieroglyphs.",
      //     createdAt: "196 BC",
      //     discoveredAt: "1799",
      //     discoveredBy: "Pierre-François Bouchard",
      //     location: "The British Museum, London",
      //     likes: 152,
      //   };

      setArtifact(data);
      setLikes(data.likes);
    };

    fetchArtifact();
  }, [id, isAuthenticated, navigate]);

  const handleLike = () => {
    setLikes((prev) => prev + 1); // Increment like count
    // Add logic to update likes in the database
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
          <span className="text-gray-700 font-semibold">{likes} Likes</span>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
