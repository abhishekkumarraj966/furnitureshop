import React from "react";
import heroImg2 from "./assites/img_ellipse_63.png";
import AppLayout from "./AppLayout";

import amo from "./assites/Amazon.png";
import fac from "./assites/bigbasket.png";
import you from "./assites/Ebay.png";
import inst from "./assites/facebook.png";
import flip from "./assites/flipkart.png";
import big from "./assites/indiamart.png";
import im from "./assites/Justdial.png";
import link from "./assites/linkedin.png";

import Sh from "./assites/Swiggy (1).png";
import Xi from "./assites/x.png";
import swi from "./assites/youtube.png";
import zo from "./assites/zomato.png";
import mi from "./assites/whatsapp.png";
import mx from "./assites/instagram.png";

const Hero = () => {
  return (
    <AppLayout>
      <div className="">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-2 mb-[5%]">
        <div className="col-span-1 sm:col-span-1 lg:col-span-1 mx-auto ">
          <img
            src={heroImg2}
            alt="circleimage"
            className="sm:h-[243px] sm:w-[243px] h-[180px] w-[180px] rounded-full mx-[50%] sm:mx-[80%] lg:mx-0 mt-[15%] md:mx-[30%] md:mt-[30%] "
          />
        </div>
        <div className="col-span-2 sm:col-span-2 lg:col-span-2 md:mt-[8%] lg:mt-[10%] mb-[5%] md:ml-[18%]">
          <h1 className="tracking-[1.44px] font-bold text-[#326C77]  sm:text-[40px]  text-[30px]  mt-[-15px] lg:mt-[0px] lg:text-start text-center">
            Emma Watson
          </h1>
          <h2 className=" md:ml-0 text-[#326C77]  mx-6 mt-4 font-normal text-[24px]">
            Hardware And Furniture
          </h2>
          <h2 className="mt-1 md:ml-0 text-[#326C77]  mx-6  font-normal text-[16px]">
            Hardware and furniture is a furniture plywood dealer established in
            2018. They offer a wide variety of services such as custom
            furniture, upholstery, and refinishing. They are located in India
            and have a wide variety of products to choose from.
          </h2>
        </div>
       
      </div>
      <div className=" ml-2 mt-5 md:hidden block py-4 px-4 rounded-full ">
          <div className="flex gap-2 md:gap-4 pb-2 mx-[3%]">
            <a href="">
              <img src={inst} alt="Lodinge.." className="h-[32px] w-[32px] " />
            </a>
            <a href="">
              <img
                src={mi}
                alt="Lodinge.."
                className="h-[34px] w-[34px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={mx}
                alt="Lodinge.."
                className="h-[33px] w-[33px] cursor-pointer"
              />
            </a>

            <a href="">
              <img
                src={link}
                alt="Lodinge.."
                className="h-[38px] w-[38px] mt-[-4px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={amo}
                alt="Lodinge.."
                className="h-[30px] w-[30px] mt-[4px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={Xi}
                alt="Lodinge.."
                className="h-[40px] w-[40px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={flip}
                alt="Lodinge.."
                className="h-[45px] w-[45px] cursor-pointer mt-[-2px]"
              />
            </a>
            <a href="">
              <img
                src={Sh}
                alt="Lodinge.."
                className="h-[35px] w-[35px] cursor-pointer mt-[-2px]"
              />
            </a>
          </div>
          {/* <hr className="bg-black h-[1px] mx-[3%]" /> */}
          <div className="flex gap-2 pt-2 mx-[3%]">
            <a href="">
              <img src={you} alt="Lodinge.." className="h-[40px] w-[50px]" />
            </a>

            <a href="">
              <img
                src={big}
                alt="Lodinge.."
                className="h-[35px] w-[35px] cursor-pointer"
              />
            </a>

            <a href="">
              <img
                src={im}
                alt="Lodinge.."
                className="h-[40px] w-[50px] cursor-pointer "
              />
            </a>
            <a href="">
              <img
                src={swi}
                alt="Lodinge.."
                className="h-[40px] w-[40px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={zo}
                alt="Lodinge.."
                className="h-[40px] w-[50px] cursor-pointer "
              />
            </a>
            <a href="">
              <img
                src={fac}
                alt="Lodinge.."
                className="h-[40px] w-[40px] cursor-pointer "
              />
            </a>
          </div>
        </div>
        <div className="items-center md:mt-[-5%] lg:mt-[-8%] pb-[20px]  mx-[10%] hidden md:block  pt-4 px-8 rounded-full">
          <ul className="flex gap-[10px] lg:gap-[15px] px-4">
            <a href="">
              <img
                src={amo}
                className="h-[50px] w-[50px]  cursor-pointer"
                alt="Lodinge.."
              />
            </a>
            <a href="">
              <img
                src={fac}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={you}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={inst}
                alt="Lodinge.."
                className="h-[45px] w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={flip}
                alt="Lodinge.."
                className="h-[70px] w-[70px] mt-[-10px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={big}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer "
              />
            </a>
            <a href="">
              <img
                src={im}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer "
              />
            </a>
            <a href="">
              <img
                src={link}
                alt="Lodinge.."
                className="h-[70px] w-[70px] mt-[-8px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={Sh}
                alt="Lodinge.."
                className="h-[50px] w-[50px]  cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={Xi}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={swi}
                alt="Lodinge.."
                className="h-[40px] w-[50px]  cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={zo}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={mi}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={mx}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer"
              />
            </a>
          </ul>
        </div>
      </div>
    </AppLayout>
  );
};

export default Hero;
