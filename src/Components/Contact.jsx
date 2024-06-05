import React from "react";
import AppLayout from "./AppLayout";
import eml from "./assites/img_dashicons_email.svg";
import mb from "./assites/img_4.png";
import loc from "./assites/img_group.svg";
import bun from "./assites/img_vector.svg";
const Contact = () => {
  return (
    <div className="w-auto min-h-[368px] lg:h-[500px] bg-white  mt-2 mb-0.5">
      <AppLayout>
        <div className="font-[700] text-[20px] lg:text-[48px] text-[#326C77]  pt-[20px] lg:pt-[50px] text-center">
          Contact <span className="font-[900]">Us</span>
        </div>

        <div className="w-[90%] mx-auto mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row flex-wrap gap-y-[12px] lg:gap-x-[40px]">
          <div className="w-320px rounded-[24px] lg:rounded-[70px] bg-[#72909D] min-h-[52px] lg:min-h-[111px] lg:w-[46%]">
            <div className="min-h-[52px] lg:min-h-[111px]  flex lg:items-center">
              <img
                src={loc}
                className="w-[30px] lg:w-[75px] h-[30px] lg:h-[75px] rounded-[50%] ml-[15px] my-auto"
              />
              <div className="ml-[11px] lg:ml-[25px] mt-[2px] ">
                <p className="text-[#FFFFFF] font-[700] text-[14px] lg:text-[24px] p-0">
                  Location
                </p>
                <p className="font-[400] text-[14px] lg:text-[24px] text-white p-0 pb-2">
                  <a href="https://www.google.com/maps/place/BTM+Layout,+Bengaluru,+Karnataka/@12.9142141,77.6041209,15.93z/data=!4m15!1m8!3m7!1s0x3bae14fc91a93031:0xf0afe62576cbdc3f!2sBTM+Layout,+Bengaluru,+Karnataka!3b1!8m2!3d12.9165757!4d77.6101163!16s%2Fm%2F02rqxr3!3m5!1s0x3bae14fc91a93031:0xf0afe62576cbdc3f!8m2!3d12.9165757!4d77.6101163!16s%2Fm%2F02rqxr3?entry=ttu">
                    2nd Cross 27th Main BTM Layout Second Stage Bangalore 560068
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-320px rounded-[24px] lg:rounded-[70px] bg-[#72909D] min-h-[52px] lg:min-h-[111px] lg:w-[46%]">
            <div className="min-h-[52px] lg:min-h-[111px]  flex lg:items-center">
              <img
                src={mb}
                className="w-[30px] lg:w-[75px] h-[30px] lg:h-[75px] rounded-[50%] ml-[15px] my-auto"
              />
              <div className="ml-[11px] lg:ml-[25px] mt-[2px] ">
                <p className="text-[#FFFFFF] font-[700] text-[14px] lg:text-[24px] p-0">
                  Mobile Number
                </p>
                <p className="font-[400] text-[14px] lg:text-[24px] text-white p-0">
                  +91-8955439028
                </p>
              </div>
            </div>
          </div>

          <div className="w-320px rounded-[24px] lg:rounded-[70px] bg-[#72909D] min-h-[52px] lg:min-h-[111px] lg:w-[46%]">
            <div className="min-h-[52px] lg:min-h-[111px]  flex lg:items-center">
              <img
                src={eml}
                className="w-[30px] lg:w-[75px] h-[30px] lg:h-[75px] rounded-[50%] ml-[15px] my-auto"
              />
              <div className="ml-[11px] lg:ml-[25px] mt-[2px] ">
                <p className="text-[#FFFFFF] font-[700] text-[14px] lg:text-[24px] p-0">
                  E-mail address
                </p>
                <p className="font-[400] text-[14px] lg:text-[24px] text-white p-0">
                  {" "}
                  <a href="mailto:anyintech@anyintech.com?subject = Feedback&body = Message">
                    hardwareandfurniture@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-320px rounded-[24px] lg:rounded-[70px] bg-[#72909D] min-h-[52px] lg:min-h-[111px] lg:w-[46%] text-white">
            <div className="min-h-[52px] lg:min-h-[111px]  flex lg:items-center">
              <img
                src={bun}
                className="w-[30px] lg:w-[75px] h-[30px] lg:h-[75px] rounded-[50%] ml-[15px] my-auto"
              />
              <div className="ml-[11px] lg:ml-[25px] mt-[2px] ">
                <p className="text-[#FFFFFF] font-[700] text-[14px] lg:text-[24px] p-0">
                  Business Segment
                </p>
                <p className="font-[400] text-[14px] lg:text-[24px] text-[#ffffff] p-0">
                  <a href="https://www.anyintech.com/service.html">Furniture</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Contact;
