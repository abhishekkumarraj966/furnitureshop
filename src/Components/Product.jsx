import React from "react";
import AppLayout from "./AppLayout";
import ProductMock from "./MockData/ProductMock";
import what from "./assites/whatsapp.png";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import pimg from "./assites/img_rectangle_250.png";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Product = () => {
  return (
    <div className="" id="products">
      <div className="h-[650px] bg-white Pb-[2px] rounded-lg shadow-md">
        <AppLayout>
          <h2 className=" text-[40px] font-bold text-[#326C77] text-center mb-3">
            Products
          </h2>
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              650: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 15,
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
            <div className="flex  px-2 mx-2 sm:mx-[2px]">
              {ProductMock.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="w-[280px] sm:w-[300px]  shadow-xs h-[550px] lg:gap-1 mx-auto bg-[#CBE6F1]  rounded-[40px] flex flex-col items-center p-6 mb-4">
                    <div className="">
                      <Link to="/productpage">
                        <img
                          src={pimg}
                          alt={item.title}
                          className=" h-[80%] w-[100%] rounded-tr-[40px] rounded-tl-[40px] object-cover"
                        />
                      </Link>
                      <Link to="/productpage">
                        <h2 className="  px-1 tracking-[0.96px] sm:text-[18px] text-[16px]  text-center  text-white font-bold  my-4">
                          {item.titel}
                        </h2>
                      </Link>
                    </div>
                    <h2 className=" px-4 mb-2 text-[#326C77]">{item.text}</h2>
                    <a href={item.whatLink}>
                      <img
                        src={what}
                        alt=""
                        className="h-[30px] w-[30px] mr-[220px]"
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </AppLayout>
      </div>
    </div>
  );
};

export default Product;
