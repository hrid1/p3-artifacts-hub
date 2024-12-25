import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import ArtifactCard from "../../components/others/ArtifactCard";
import ArtifactLikeCard from "../../components/others/ArtifactLikeCard";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Spiner from "../../components/common/Spiner";

const LikeArtifacts = () => {
  const { user} = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  
  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await axiosSecure.get(
          `/liked-artifacts/${user?.email}`
        );
        setArtifacts(data);
        setLoading(false);
      } catch (error) {
        // console.log(error);
      }
    };
    loadData();
  }, [user]);
  // console.log(artifacts);

  if(loading) return <Spiner/>

  if (artifacts.length === 0)
    return (
      <div className="text-center text-4xl my-14 font-bold">
        There No Item that You Have Liked! <p className="text-6xl mt-8">:\</p>
      </div>
    );
  return (
    <section className="bg-amber-50 p-4">
      <Helmet>
        <title>Like Artifacts | Artifact Atlas</title>
      </Helmet>

      <h2 className="text-center text-4xl my-14 font-bold">
        My Liked Artifacts :)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 my-8 md:my-12">
        {artifacts.map((artifact) => (
          <ArtifactLikeCard
            key={artifact._id}
            artifact={artifact}
          ></ArtifactLikeCard>
        ))}
      </div>
    </section>
  );
};

export default LikeArtifacts;
