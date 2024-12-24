import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import LikeArtifacts from "../LikedArtifacts/LikeArtifacts";
import { Helmet } from "react-helmet-async";
import { AiTwotoneLike } from "react-icons/ai";

const ArtifactDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [artifact, setArtifact] = useState([]); // Artifact data
  const [likedArtifact, setLikedArtifact] = useState();
  const [likes, setLikes] = useState(false);
  // const [isLikes, setIsLikes] = useState(false);

  // Simulate fetching artifact data
  useEffect(() => {
    //  fetch artifact by ID
    const fetchArtifact = async () => {
      const { data } = await axios.get(`http://localhost:5000/artifact/${id}`);

      setArtifact(data);
    };
    // fetch user liked artifact
    const fetchlikedArtifact = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/liked-artifacts/${user?.email}`
      );
      setLikedArtifact(data);
    };

    fetchArtifact();
    fetchlikedArtifact();
  }, [id, likes, user?.email]);

  // const userLikedArtifact = likedArtifact.find()
  // console.log(id, likedArtifact);
  const result = likedArtifact?.find(({ artifactId }) => artifactId == id);
  // console.log(result);

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
      setLikes(!likes);
    } catch (error) {
      toast.error(error.response.data);
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
      <Helmet>
        <title>Artifact Details | Artifact-Atlas</title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <img
          src={artifact.image}
          alt={artifact.name}
          className="w-full h-72 lg:h-[400px] object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-extrabold text-amber-500 mb-4">
          {artifact.name}
        </h1>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg">
            <strong>Type:</strong> {artifact.type}
          </p>
          <p className="text-lg">
            <strong>Historical Context:</strong> {artifact.context}
          </p>
          <p className="text-lg">
            <strong>Created At:</strong> {artifact.createdAt}
          </p>
          <p className="text-lg">
            <strong>Discovered At:</strong> {artifact.discoveredAt}
          </p>
          <p className="text-lg">
            <strong>Discovered By:</strong> {artifact.discoveredBy}
          </p>
          <p className="text-lg mb-6">
            <strong>Present Location:</strong> {artifact.location}
          </p>
        </div>

        <div className="flex items-center justify-between">
          {result ? (
            <button
              onClick={handleLike}
              className="btn btn-outline bg-amber-300/80 hover:bg-amber-300 text-teal-800 flex items-center gap-2"
            >
              <FaHeart className="text-red-500" />
              Like
            </button>
          ) : (
            <button
              onClick={handleLike}
              className="btn btn-outline bg-amber-100 hover:bg-amber-300 text-gray-600 flex items-center gap-2"
            >
              <FaRegHeart className="text-gray-500" />
              Like
            </button>
          )}
          <span className="text-gray-700 font-semibold flex  gap-2">
          <AiTwotoneLike className="text-xl -amber-300" />

            {artifact.like} Likes
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
