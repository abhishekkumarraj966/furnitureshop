import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Feedbackmock from"./MockData/Feedbackmock"
import { Navigation } from "swiper/modules";
import AppLayout from "./AppLayout";
const Reviews = () => {
  return (
    <div className="py-10">
    <AppLayout>
    <h2 className="font-bold text-[30px]  text-center pb-6  text-[#326C77] ">
    Our Clients Says 
          </h2>
    <div>
      {" "}
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
         
          
          960: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        modules={[Navigation]}
        navigation
        className="mySwiper"
      >
        {Feedbackmock.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="mt-2 my-2 h-[210px] w-[350px] sm:w-[345px] lg:w-[380px] bg-[#B8DBE1] text-[#000] rounded-xl mx-auto">
              <h1 className="pt-2 px-3 text-[15px] font-sans">
                {item.content}
              </h1>
              <div className="sm:pt-4 pt-[-8px] sm:pl-[170px] pl-[120px]">
                <h1 className="text-[16px] font-semibold sm:pl-10 pl-6 pb-2">
                  -{item.author}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </AppLayout>
    </div>
  );
};

export default Reviews;
