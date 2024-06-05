import React from "react";
import AppLayout from "./AppLayout";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import servicesMock from "./MockData/servicesMock";

const Services = () => {
  return (
    <div className="mt-8" id="services">
        <hr className="h-1 w-full self-stretch  bg-[#EBE2D9] shadow-xs drop-shadow-2xl"/>
      <AppLayout>
        <div className="sm:my-10 my-5">
          <h2 className=" text-[40px] font-bold text-[#72909E] text-center mb-5">
           Services
          </h2>
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
              700: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="flex  px-2 mx-2 sm:mx-[20px]">
              {servicesMock.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="w-[280px] sm:w-[350px] lg:w-[300px] mx-auto shadow-xs h-[530px] lg:gap-1 bg-[#72909E] shadow-xs rounded-[40px] flex flex-col items-center p-6 mb-4" id="services">
                    <div className="">
                    <Link to="/blogepg">
                      <img
                        src={item.img}
                        alt={item.title}
                        className=" h-[180px] w-[280px] rounded-tr-[40px] rounded-tl-[40px] object-cover"
                      />
                      </Link>
                      <h2 className="  px-1 tracking-[0.96px] sm:text-[20px] text-[16px]  text-center  font-bold text-white my-4">
                       <Link to="/blogepg">
                        {item.titel}
                        </Link>
                      </h2>
                    </div>
                    <h2 className=" px-4 mb-2 text-[#000]">{item.text}</h2>                   
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </AppLayout>
      <hr className="h-1 w-full self-stretch  bg-[#EBE2D9] shadow-xs drop-shadow-2xl mt-5"/>
    </div>
  );
};



export default Services;
