import React from "react";
import AppLayout from "./AppLayout";
import what from "./assites/whatsapp.png";
import insta from "./assites/instagram.png";
import qr from "./assites/QR.jpeg";
const Footer = () => {
  return (
    <div className="mt-2">
      <div className="bg-[#72909E] h-full">
        <AppLayout>
          <div class="grid grid-cols-1 sm:grid-cols-2  gap-4">
            <div className="lg:mb-0 mt-10 lg:mt-10 mx-5 sm:mx-5 lg:ml-[25%]">
              <p className="mb-6 text-xl font-bold  text-white">Contaact Details :-</p>
              <ul className="flex flex-col space-y-2   ">
                <h1 className=" font-bold text-xl  text-white">Address</h1>
                <li className=" hover:text-whit text-lg  text-white">
                  BTM Layout, Bangalore, Karnataka
                </li>
                <h1 className=" font-bold text-xl  text-white">phone</h1>
                <li className="hover:text-whit text-lg  text-white">1-800-123-9999</li>
                <h1 className=" font-bold text-xl  text-white">Email.</h1>
                <li className=" hover:text-white text-lg leading-3  text-white">
                  info@anyintech.com
                </li>
              </ul>
            </div>

            <div className=" mb-2 sm:mb-8 lg:mb-0  lg:mt-10 mx-5 sm:mx-0 lg:ml-[10%]">
              <p className="mb-4 text-lg font-semibold  pt-12  text-white ">
                Like & Follow
              </p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium ">
                <span className="flex flex-row gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 mt-2">
                  <img
                    src={what}
                    alt="lodinge.."
                    className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px] cursor-pointer"
                  />
                  {/* <img
                    src={fac}
                    alt="facebook logo"
                    className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px] cursor-pointer"
                  /> */}
                  {/* <img
                    src={you}
                    alt="insta"
                    className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px] cursor-pointer"
                  /> */}
                  <img
                    src={insta}
                    alt="youtube"
                    className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px] cursor-pointer"
                  />
                </span>
                <li className="text-2xl font-bold  text-white">PAY NOW</li>
                <li>
                  <img
                    src={qr}
                    alt="QR"
                    className="m-2 h-[120px] w-[#130px] pb-5 cursor-pointer"
                  />
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-1 bg-black  text-white" />
          <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0 mb-1">
            <div className="mt-4 md:mt-0">
              <p className="text-sm font-medium  text-white">
                © 2023 DevUI. All rights anyintech.
              </p>
            </div>
          </div>
        </AppLayout>
      </div>
    </div>
  );
};

export default Footer;
