import React from "react";
import ArtifactCard from "../../components/others/ArtifactCard.jsx";

const FeaturedArtifacts = () => {
  const artifacts = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      name: "Rosetta Stone",
      description: "A stone slab that helped decipher Egyptian hieroglyphs.",
      likes: 152,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      name: "Antikythera Mechanism",
      description: "An ancient Greek analog computer used for astronomy.",
      likes: 204,
    },
    // Add more artifacts here
  ];

  return (
    <section className="my-4 md:my-8">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Feature Actifacts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {artifacts.map((artifact) => (
          <ArtifactCard key={artifact.id} artifact={artifact}></ArtifactCard>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtifacts;
