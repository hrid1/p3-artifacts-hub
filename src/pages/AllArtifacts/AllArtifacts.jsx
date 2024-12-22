import { useLoaderData } from "react-router-dom";
import ArtifactCard from "../../components/others/ArtifactCard";

const AllArtifacts = () => {
  const artifacts = useLoaderData();
  console.log(artifacts);
  return (
    <div className="py-12 px-6 bg-amber-50">
      <h2 className="text-2xl font-bold text-center mb-6">All Artifacts</h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
        {artifacts.map((artifact) => (
          <ArtifactCard key={artifact.id} artifact={artifact} />
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
