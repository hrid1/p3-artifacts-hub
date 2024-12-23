import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import ArtifactCard from "../../components/others/ArtifactCard";
import ArtifactLikeCard from "../../components/others/ArtifactLikeCard";

const LikeArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);

  console.log(artifacts);
  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/liked-artifacts/${user?.email}`
        );
        setArtifacts(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, [user]);
  console.log(artifacts);

  if (artifacts.length === 0)
    return (
      <div className="text-center text-4xl my-14 font-bold">
        There No Item that You Have Liked! <p className="text-6xl mt-8">:\</p>
      </div>
    );
  return (
    <section className="bg-amber-50 p-4">
      <h2 className="text-center text-4xl my-14 font-bold">
        My Liked Artifacts :)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 md:my-12">
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
