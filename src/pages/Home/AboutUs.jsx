import aboutPic from "../../assets/lottie/about.json";
import Lottie from "lottie-react";

const AboutUs = () => {
  return (
    <>
      <div className="text-center pb-4 mt-10">
        <h1 className="text-center text-4xl font-bold mb-2">About Us</h1>
        <p className="text-gray-600">
          We are Dedicated to best of Our Services
        </p>
      </div>

      <section className="flex flex-col md:flex-row justify-center items-center gap-6 w-11/12 mx-auto lg:gap-8 my-6 md:my-12">
        {/* Content Section */}

        <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-4 lg:gap-8">
          {/* <Slide> */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold lg:w-2/3">
            We are Dedicated to the Best of Our Services
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Welcome to our artifact exploration platform, where history and
            culture come alive. Our mission is to connect you with the world’s
            most fascinating artifacts and their stories. Discover relics from
            ancient civilizations, marvel at the ingenuity of past craftsmen,
            and gain insights into the heritage that shapes our present.
            <br />
            <br />
            Explore detailed descriptions, curated collections, and immersive
            content tailored to satisfy your curiosity. Whether you’re a history
            enthusiast or a casual explorer, embark on a journey to uncover the
            mysteries of time. Let’s celebrate the past and inspire the
            future—one artifact at a time.
          </p>

          <button className="btn bg-amber-300  hover:bg-amber-400 transition-all">
            Learn More
          </button>
          {/* </Slide> */}
        </div>

        {/* Image Section */}

        <div className="w-full md:w-1/2 border rounded-xl overflow-hidden">
          <Lottie animationData={aboutPic} />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
