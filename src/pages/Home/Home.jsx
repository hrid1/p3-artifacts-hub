import { Helmet } from "react-helmet-async";
import Banner from "../../components/others/Banner";
import ContactSupport from "./ContactSupport";
import FeaturedArtifacts from "./FeaturedActifacts";
import HistoricalFacts from "./HistorycalFacts";
import AboutUs from "./AboutUs";

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
      <AboutUs/>
      <ContactSupport />
    </div>
  );
};

export default Home;
