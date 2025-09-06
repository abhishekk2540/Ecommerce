"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';




const Slidder = () => {
  return (

    <div className="mt-10 p-20">
    <h1 className="text-center mb-8 p text-3xl font-bold text-black">Our Brand<sup className="font-extrabold">,</sup>s </h1>
      <Swiper
        modules={[ Autoplay]}
      
        slidesPerView={4}
          spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}           
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className=""
      >
        <SwiperSlide className="px-10">
          <div>
            <img className=":sm:w-[500px]"  src="/fashionzwear.webp" alt="FashionZ Wear" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-[200px]"  src="/glowify.webp" alt="Glowify" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-[200px]" src="/pure-pahadi.webp" alt="Pure Pahadi" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-[200px]" src="/lords.webp" alt="Lords" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-[200px]" src="/kahira.webp" alt="Lords" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slidder;