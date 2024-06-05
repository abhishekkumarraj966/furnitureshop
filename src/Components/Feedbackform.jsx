import React from "react";
import AppLayout from "./AppLayout";

const Feedbackform = () => {
  return (
    <div className="bg-[#DBEFF7]">
    <AppLayout>
      <div className="  pt-[15px] ">
        <h2 className="font-bold text-[30px]  text-center pb-6  text-[#326C77] ">
          Feedback form
        </h2>
        <div className="p-4 mx-auto sm:mx-20 w-[80%] bg-[#B8DBE1] rounded-xl ">
          <p className="text-black">Name</p>
          <input
            type="text"
            placeholder="Name"
            className=" w-[100%] rounded-md h-8 py-1 px-2 mt-1"
          />
          <p className="text-black mt-5">Feedback</p>
          <input
            type="text"
            placeholder="Type your message..."
            className=" w-[100%]   rounded-md h-14 lg:h-24 px-2 mt-1 "
          />
          <br />
          <button
            type="submit"
            className="bg-[#326C77] sm:w-[30%]  text-white rounded-md py-2 px-3 mt-4 font-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </AppLayout>
    </div>
  );
};

export default Feedbackform;
//
