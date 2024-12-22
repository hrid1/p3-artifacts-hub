import Banner from "../../components/others/Banner";
import ContactSupport from "./ContactSupport";
import FeaturedArtifacts from "./FeaturedActifacts";
import HistoricalFacts from "./HistorycalFacts";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedArtifacts />
      <HistoricalFacts />
      <ContactSupport />
    </div>
  );
};

export default Home;
