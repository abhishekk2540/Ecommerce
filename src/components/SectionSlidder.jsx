"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Scrollbar } from "swiper/modules";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "swiper/css/scrollbar";
import { mainImages,scrollImages } from "@/utils/Data";





const SectionSlidder = () => {
  const swiperSlideClass = "flex justify-center  items-center mb-5 ";

  return (
    <div className="text-black  items-center mb-5 text-center max-w-[1200px] mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-5">
      <div>
        <Swiper
          grabCursor={true}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-[400px] h-[500px] mx-auto "
        >
          {mainImages.map((img, i) => (
            <SwiperSlide key={i} className={swiperSlideClass}>
              <img src={img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-4  rounded-xl shadow-sm shadow-rose-500/40 flex flex-col justify-start">
        <div >
          <p className="text-start text-[33px] font-semibold tracking-wide leading-10 py-7">
            Looking for the Best{" "}
            <span className="text-red-600">
              E-Commerce Management Services?
            </span>
          </p>
          <div className="border-1 border-red-500 p-2 rounded-xl ">
            <Swiper
              scrollbar={{ hide: false }}
              modules={[Scrollbar]}
              slidesPerView={5}
              spaceBetween={0}
              className="h-max"
              style={{ maxWidth: "600px" }}
            >
              {scrollImages.map((img, i) => (
                <SwiperSlide key={i} className={swiperSlideClass}>
                  <img
                    className={
          `border-1 p-2 hover:border-green-300 rounded-xl w-[60px] h-[60px] object-contain mx-auto
           ${i === 0 ? 'border-red-500' : ''}`
        }
                    src={img}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="border text-start grid lg:grid-cols-2  gap-5   border-red-500 tracking-wide rounded-3xl p-6  items-start">
          <div>  <button className="border text-[12px]  border-red-500 hover:bg-blue-900 hover:text-white py-3 px-4 text-xl rounded-3xl">
            Amazon Account Management Services
          </button>
          <h1 className="text-2xl mt-3 ">Amazon Account Management</h1>
          <p className="py-3 tracking-wider text-lg">
            Struggling with low sales and frequent account suspensions on
            Amazon?
            <br />
            We are here to manage your Amazon seller account in compliance with
            <br />
            Amazon policy to increase your sales.
          </p>
          <button className="rounded-full border border-red-500 hover:bg-red-500 p-3">
            <ArrowOutwardIcon />
          </button>
          </div>
          <div>
<img className="max-w-[250px] rounded-2xl" src="/scrollImg/amazon-1743072682.webp" alt="" />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default SectionSlidder;
