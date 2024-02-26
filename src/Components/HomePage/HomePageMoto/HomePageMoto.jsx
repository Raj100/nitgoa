import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Moto from '../../../assets/moto.png'
import Vision from '../../../assets/Vision.png'
import Mission from '../../../assets/mission.png'
import 'swiper/css';
import 'swiper/css/effect-creative';
import './motoStyles.css';
import { Keyboard, Autoplay, EffectCreative } from 'swiper/modules';

export default function HomePageMoto() {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        loop={true}
        keyboard= {{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: false,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[Keyboard, Autoplay, EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide id="moto">
          <div className='bg-white m-10 p-4 shadow-md rounded-xl'>
            <h1 className='text-center'>Our Moto</h1>
            <div className='mx-auto mt-0.5 w-10 border border-black'></div>
            <div className='my-10 mx-auto text-center w-40'>
            NIT Goa strives for quality faculty, good students and excellent infrastructure
            </div>
            <img src={Moto} className='mx-auto p-4'/>
          </div>
        </SwiperSlide>
        <SwiperSlide id="vision">
          <div className='bg-white m-10 p-4 shadow-md rounded-xl'>
              <h1 className='text-center'>Our Vision</h1>
              <div className='mx-auto mt-0.5 w-10 border border-black'></div>
              <div className='my-10 mx-auto text-center w-40'>
              NIT Goa strives for quality faculty, good students and excellent infrastructure
              </div>
              <img src={Vision} className='mx-auto p-8'/>
          </div>
        </SwiperSlide>
        <SwiperSlide id="mission">
          <div className='bg-white m-10 p-4 shadow-md rounded-xl'>
            <h1 className='text-center'>Our Mission</h1>
            <div className='mx-auto mt-0.5 w-10 border border-black'></div>
            <div className='my-10 mx-auto text-center w-40'>
            NIT Goa strives for quality faculty, good students and excellent infrastructure
            </div>
            <img src={Mission} className='mx-auto p-8'/>
          </div>
        </SwiperSlide>
      </Swiper>
      
    </>
  );
}
