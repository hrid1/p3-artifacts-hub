// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgimg1 from "../../assets/images/carosol1.jpg";
import bgimg2 from "../../assets/images/carosol2.jpg";
import bgimg3 from "../../assets/images/carosol4.jpg";

const Banner = () => {
  return (
    <div className="container px-6 py-2 mx-auto rounded ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
           
            image={bgimg1}
            text="Uncover the Hidden Stories of Ancient Artifacts – Explore Our Extensive Collection."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="Safeguard Cultural Heritage – Track and Document Historical Artifacts for Future Generations."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text="Connect with History Enthusiasts – Share, Collaborate, and Learn About Artifacts Across the World."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
