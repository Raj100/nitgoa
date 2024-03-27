import React, { useRef, useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import img1 from '../../assets/hompagecarousel1.jpg';
// import img2 from '../../assets/homepagecarousel2.png';
// import img3 from '../../assets/homepagecarousel3.png';
// import img4 from '../../assets/homepagecarousel.jpg';
// import img5 from '../../assets/homepagecarousel5.jpeg';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// // import required modules

// import slideshow1 from "../assets/Slideshow/slideshow1.jpeg";
// import slideshow2 from "../assets/Slideshow/slideshow2.jpeg";
// import slideshow3 from "../assets/Slideshow/slideshow3.jpg";
// import slideshow4 from "../assets/Slideshow/slideshow4.jpg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./style.css";


import slideshow1 from "../../assets/Slideshow/slideshow1.jpeg";
import slideshow2 from "../../assets/Slideshow/slideshow2.jpeg";
import slideshow3 from "../../assets/Slideshow/slideshow3.jpg";
import slideshow4 from "../../assets/Slideshow/slideshow4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

export default function HomePageCaorusel() {
  return (
    <div className={`bg-${theme}txtbg h-[211px] lg:h-[543px] mt-[22px] lg:px-[122px]`}>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
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
        <img src={slideshow1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideshow2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideshow3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideshow4} alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
  );
}
