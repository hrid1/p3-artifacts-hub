import React, { useEffect, useState } from "react";
import ArtifactCard from "../../components/others/ArtifactCard.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FeaturedArtifacts = () => {
  const navigate = useNavigate();
  const [artifacts, setArtifacts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/artifacts?sort=true")
      .then((res) => setArtifacts(res.data));
  }, []);

  return (
    <section className="my-4 md:my-8 lg:my-12">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Feature Artifacts
      </h2>
      <p className="text-center w-full lg:w-3/5 mx-auto">
        Feature Artifacts bring you a selection of the most remarkable pieces
        from our collection. Carefully curated to showcase uniqueness and value,
        these artifacts highlight stories
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 p-4">
        {artifacts.map((artifact) => (
          <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
        ))}
      </div>

      <button onClick={() => navigate('/all-artifacts')} className="btn px-8 bg-amber-300 hover:bg-amber-400 block mx-auto mb-6 mt-4">
        See All Artifacts
      </button>
    </section>
  );
};

export default FeaturedArtifacts;
