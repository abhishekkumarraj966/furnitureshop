import React from "react";
import bgimg from "./assites/img_rectangle_313.png";
import AppLayout from "./AppLayout";
const Business = () => {
  return (
    <div className=" mt-0.5 sm:mt-1 bg-[#FFFFFF] shadow-md pb-1">
      <AppLayout>
        <h2 className=" text-[40px] font-bold text-[#326C77] text-center mb-3">
          Business Hours
        </h2>

        <div className="w-[295px] h-[276px] lg:w-[672px] lg:min-h-[522px] mx-auto rounded-[30px] mt-[20px] bg-[#B8DBE1] shadowbox lg:mt-[40px] my-10">
              <div className="w-[241px] lg:w-[85%] text-[#326C77] ml-3 lg:ml-7 h-[100%] py-5 lg:py-9 lg:text-[32px]">
                <div className="flex flex-col py-[4px] lg:py-[12px] ">
                  <div className="flex justify-between ">
                    <div>Monday</div>
                    <div>9:30AM - 9PM </div>
                  </div>
                  <hr className="w-[100%]  bg-[#ffff] h-[1px] border-none" />
                </div>

                <div className="flex flex-col py-[4px]">
                  <div className="flex justify-between">
                    <div>TUESDAY</div>
                    <div>9:30AM - 9PM  </div>
                  </div>
                  <hr className="w-[100%]   bg-[#ffff] h-[1px] border-none" />
                </div>
                <div className="flex flex-col py-[4px]">
                  <div className="flex justify-between">
                    <div>WEDNESDAY</div>
                    <div>9:30AM - 9PM  </div>
                  </div>
                  <hr className="w-[100%]   bg-[#ffff] h-[1px] border-none" />
                </div>
                <div className="flex flex-col py-[4px]">
                  <div className="flex justify-between">
                    <div>THURSDAY</div>
                    <div>9:30AM - 9PM </div>
                  </div>
                  <hr className="w-[100%]   bg-[#ffff] h-[1px] border-none" />
                </div>
                <div className="flex flex-col py-[4px]">
                  <div className="flex justify-between">
                    <div>FRIDAY</div>
                    <div>9:30AM - 9PM </div>
                  </div>
                  <hr className="w-[100%]   bg-[#ffff] h-[1px] border-none" />
                </div>
                <div className="flex flex-col py-[4px]">
                  <div className="flex justify-between">
                    <div>SATURDAY</div>
                    <div>9:30AM - 9PM </div>
                  </div>
                  <hr className="w-[100%]   bg-[#ffff] h-[1px] border-none" />
                </div>
                <div className="flex flex-col py-[4px]">
                  <div className="flex justify-between">
                    <div>SUNDAY</div>
                    <div>9:30AM - 9PM </div>
                  </div>
                  <hr className="w-[100%]   bg-[#ffff] h-[1px] border-none" />
                </div>
              </div>
            </div>


        {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-1">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="w-[295px] h-[276px] lg:w-[672px] lg:min-h-[522px] mx-auto rounded-[30px] mt-[30px] bg-[#B89C85] shadowbox lg:mt-[80px] my-10">
              <div className="w-[241px] lg:w-[85%] text-[#9F7161] ml-3 lg:ml-7 h-[100%] py-5 lg:py-9 lg:text-[32px]">
                <div className="flex flex-col py-[4px] lg:py-[12px] ">
                  <div className="flex justify-between ">
                    <div>Monday</div>
                    <div>9AM - 9PM </div>
                  </div>
                  <hr className="w-[100%]  bg-[#E3D1C3] h-[1px] border-none" />
                </div>

                <div className="flex flex-col py-[4px]">
                  <div className="flex justify-between">
                    <div>TUESDAY</div>
                    <div>9AM - 9PM </div>
                  </div>
                  <hr className="w-[100%]   bg-[#E3D1C3] h-[1px] border-none" />
                </div>
                <div className="flex flex-col py-[4px]">
                  <div className="flex justify-between">
                    <div>WEDNESDAY</div>
                    <div>9AM - 9PM </div>
                  </div>
                  <hr className="w-[100%]   bg-[#E3D1C3] h-[1px] border-none" />
                </div>
                <div className="flex flex-col py-[4px]">
                  <div className="flex justify-between">
                    <div>THURSDAY</div>
                    <div>9AM - 9PM </div>
                  </div>
                  <hr className="w-[100%]   bg-[#E3D1C3] h-[1px] border-none" />
                </div>
                <div className="flex flex-col py-[4px]">
                  <div className="flex justify-between">
                    <div>FRIDAY</div>
                    <div>9AM - 9PM </div>
                  </div>
                  <hr className="w-[100%]   bg-[#E3D1C3] h-[1px] border-none" />
                </div>
                <div className="flex flex-col py-[4px]">
                  <div className="flex justify-between">
                    <div>SATURDAY</div>
                    <div>9AM - 9PM </div>
                  </div>
                  <hr className="w-[100%]   bg-[#E3D1C3] h-[1px] border-none" />
                </div>
                <div className="flex flex-col py-[4px]">
                  <div className="flex justify-between">
                    <div>SUNDAY</div>
                    <div>CLOSED</div>
                  </div>
                  <hr className="w-[100%]   bg-[#E3D1C3] h-[1px] border-none" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <img src={bgimg} alt="" />
          </div>
        </div> */}
      </AppLayout>
    </div>
  );
};

export default Business;
