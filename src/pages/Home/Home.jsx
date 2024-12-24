import { Helmet } from "react-helmet-async";
import Banner from "../../components/others/Banner";
import ContactSupport from "./ContactSupport";
import FeaturedArtifacts from "./FeaturedActifacts";
import HistoricalFacts from "./HistorycalFacts";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Artifact-Atlas</title>
        <meta name="Home" content="Learn more about our Aritfacts & History." />
      </Helmet>

      <Banner />
      <FeaturedArtifacts />
      <HistoricalFacts />
      <ContactSupport />
    </div>
  );
};

export default Home;
