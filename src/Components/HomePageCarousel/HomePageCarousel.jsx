import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/hompagecarousel1.jpg';
import img2 from '../../assets/homepagecarousel2.png';
import img3 from '../../assets/homepagecarousel3.png';
import img4 from '../../assets/homepagecarousel.jpg';
import img5 from '../../assets/homepagecarousel5.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function HomePageCaorusel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        rewind={true}
        spaceBetween={30}
        navigation={false}
        speed={1200}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="img1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img3" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img4" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img5" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
