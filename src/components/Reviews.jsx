"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { reviewsData } from "@/utils/Data";

const Reviews = () => {
  return (
 <>
 
<h1 className="text-center mt-10 text-black sm:text-[35px] md:text-[40px] leading-[45px] font-semibold pt-[6px]">Client <span className="text-red-500">Reviews</span></h1>
  <div className="p-10">
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
     
      breakpoints={{
        640: {
          slidesPerView: 1, 
        },
        600: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3, 
        },
      }}
     
    >
      {reviewsData.map((review, idx) => (
        <SwiperSlide
          key={idx}
          className=" py-4 px-6 mb-7 border border-gray-700 rounded-xl  justify-between  shadow shadow-gray-400  "
        >
          <div className="flex space-x-4 mb-2">
            {review.img && (
              <img
                className="p-3.5 rounded-full bg-[#f1f5f9] w-30 h-30 object-cover"
                src={review.img}
                alt={`Review ${idx}`}
              />
            )}
            <div className="flex flex-col justify-center">
              <span className="text-[20px] font-semibold text-black pb-1.5">{review.name}</span>
              <span className="text-[17px] font-medium text-red-500">{review.title}</span>
            </div>
          </div>
          <p className="text-black text-[15px] font-normal leading-[26px]">{review.review}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  </>
);



};
export default Reviews;
