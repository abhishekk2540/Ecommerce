"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const data = [
  {
    img: "https://www.apexgraniteoutlet.com/cdn/shop/files/Milton_White_banner_1880.jpg?v=1716361882&width=1880",
  },
  {
    img: "https://www.apexgraniteoutlet.com/cdn/shop/files/Milton_Oak_banner_1880.jpg?v=1716361902&width=1880",
  },
  {
    img: "https://www.apexgraniteoutlet.com/cdn/shop/files/Milton_Black_banner_1880.jpg?v=1716361921&width=1880",
  },
  {
    img: "https://www.apexgraniteoutlet.com/cdn/shop/files/Gray_Shaker_banner_1880.jpg?v=1716361949&width=1880",
  },
  {
    img: "https://www.apexgraniteoutlet.com/cdn/shop/files/Alton_Stone_Gray_banner_1880.jpg?v=1716361967&width=1880",
  },
];

const One = () => {
  return (
    <div className="">
      <div className="mb-6">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 2000 }}
          loop
        >
          <SwiperSlide>
            {data.map((i) => {
              <Image
              src={i.img}
                width={800}
                height={400}
                alt=''
                className="w-full h-auto rounded shadow"
              />;
            })}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default One;
