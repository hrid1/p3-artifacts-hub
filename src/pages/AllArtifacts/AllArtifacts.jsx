import { useLoaderData } from "react-router-dom";
import ArtifactCard from "../../components/others/ArtifactCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Spiner from "../../components/common/Spiner";

const AllArtifacts = () => {
  // const artifacts = useLoaderData();
  // console.log(artifacts);

  const [search, setSearch] = useState("");
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://artifact-server.vercel.app/artifacts?search=${search}`)
      .then((res) => {
        setArtifacts(res.data);
        setLoading(false);
      });
  }, [search]);

  if (loading) return <Spiner />;

  return (
    <div className="py-12 px-6 bg-amber-50">
      <Helmet>
        <title>All Aritacts | Artifact Atlas</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center mb-6">All Artifacts</h2>
      <div className="flex items-center justify-center my-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="input md:w-80  rounded-e-none outline-none"
          placeholder="Enter artifacts name"
          type="text"
        />
        <button className="btn bg-amber-300 rounded-s-none ">Search</button>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
        {artifacts.map((artifact) => (
          <ArtifactCard key={artifact._id} artifact={artifact} />
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
