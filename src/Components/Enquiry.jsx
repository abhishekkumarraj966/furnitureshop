import React, { useState } from "react";
import AppLayout from "./AppLayout";
import img1 from "./assites/service.png";
const Enquiry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, mobile, message);
    //Make your api call here
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setMobile("");
    setMessage("");
  };
  return (
    <div className="h-[750px] mt-2  bg-[#DBEFF7]" id="enquiry">
      <AppLayout>
        <p className="text-center font-bold text-[35px] text-[#326C77] py-2  ">
          Enquiry form
        </p>

        <div
          className="bg-[#B8DBE1] text-white h-auto mb-5  pt-8 rounded-lg pt "
          id="enquiry"
        >
          <div className="mt-14">
            <form>
              <AppLayout>
                <div className="mb-4 bg-white w-[95%] mx-auto h-auto my-15 rounded-2xl sm:mx-5 sm:px-5">
                  <div className="py-2 ">
                    <label
                      htmlFor="name"
                      className="block  font-semibold text-black  mx-10  lg:text-2xl text-lg"
                    >
                      Name:
                      <span className="text-red-500 text-2xl">&nbsp;*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-[#400px]  mt-2 border-none rounded-md focus:outline-none focus:border-black-500 mx-10 text-black"
                      placeholder="Enter your Name"
                      required
                    />
                    <hr className="lg:w-[400px] w-[#200px]  mb-2 mx-10 h-[1px] lg:h-[2px] bg-[#D9D9D9]" />
                  </div>
                </div>
                <div className="mb-4 w-[95%] mx-auto bg-white h-auto my-15 rounded-2xl sm:mx-5 sm:px-5">
                  <div className="py-2 ">
                    <label
                      htmlFor="Email"
                      className="block  font-semibold text-black  mx-10  lg:text-2xl text-lg"
                    >
                      Email:
                      <span className="text-red-500 text-2xl">&nbsp;*</span>
                    </label>
                    <input
                      type="email"
                      id="name"
                      name="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-[#400px]  mt-2 border-none rounded-md focus:outline-none focus:border-black-500 mx-10 text-black"
                      placeholder="Enter your Email."
                      required
                    />
                    <hr className="lg:w-[400px] w-[#200px]  mb-2 mx-10 h-[1px] lg:h-[2px] bg-[#D9D9D9]" />
                  </div>
                </div>
                <div className="mb-4 w-[95%] mx-auto bg-white h-auto my-15 rounded-2xl sm:mx-5 sm:px-5">
                  <div className="py-2 ">
                    <label
                      htmlFor="MobilNo"
                      className="block  font-semibold text-black  mx-10  lg:text-2xl text-lg"
                    >
                      Mobile:
                      <span className="text-red-500 text-2xl">&nbsp;*</span>
                    </label>
                    <input
                      type="tel"
                      id="name"
                      name="name"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-[#400px]  mt-2 border-none rounded-md focus:outline-none focus:border-black-500 mx-10 text-black"
                      placeholder="Enter your Mobile No."
                      required
                    />
                    <hr className="lg:w-[400px] w-[#200px]  mb-2 mx-10 h-[1px] lg:h-[2px] bg-[#D9D9D9]" />
                  </div>
                </div>
                <div className="mb-4 w-[95%] mx-auto bg-white h-auto my-15 rounded-2xl sm:mx-5 sm:px-5">
                  <div className="py-2 ">
                    <label
                      htmlFor="MobilNo"
                      className="block  font-semibold text-black  mx-10  lg:text-2xl text-lg"
                    >
                      Messsage:
                      <span className="text-red-500 text-2xl">&nbsp;*</span>
                    </label>
                    <input
                      type="tel"
                      id="name"
                      name="name"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-[#400px]  mt-2 border-none rounded-md focus:outline-none focus:border-black-500 mx-10 text-black"
                      placeholder="Enter your Mobile No."
                      required
                    />
                    <hr className="lg:w-[400px] w-[#200px]  mb-2 mx-10 h-[1px] lg:h-[2px] bg-[#D9D9D9]" />
                  </div>
                </div>
              </AppLayout>
              <div className="">
                <AppLayout>
                  <div className="grid grid-cols-2 gap-2 sm:gap-1">
                    <div className=" p-4 rounded-md">
                      <div className="sm:ml-10">
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="bg-[#326C77] text-white px-4 py-2 rounded-md  focus:outline-none focus:shadow-outline-blue w-28 h-10"
                          //   onClick={handleButtonClick} // Replace with your click handler function
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className=" p-4 rounded-md justify-items-end lg:ml-72 sm:ml-10">
                      <div className=" lg:mx-20 sm:mx-5">
                        <button
                          type="button"
                          onClick={handleClear}
                          className="  font-bold  px-4 py-2 rounded-md  text-white  hover:text-white focus:outline-none focus:shadow-outline-blue"
                          //   onClick={handleButtonClick} // Replace with your click handler function
                        >
                          Clear form
                        </button>
                      </div>
                    </div>
                  </div>
                </AppLayout>
              </div>
            </form>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Enquiry;
