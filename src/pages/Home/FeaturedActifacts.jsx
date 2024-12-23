import React, { useEffect, useState } from "react";
import ArtifactCard from "../../components/others/ArtifactCard.jsx";
import axios from "axios";

const FeaturedArtifacts = () => {
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
        Feature Artifacts bring you a selection of the most remarkable pieces from our collection. Carefully curated to showcase uniqueness and value, these artifacts highlight stories
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 p-4">
        {artifacts.map((artifact) => (
          <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtifacts;
