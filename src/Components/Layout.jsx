import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Contact from "./Contact";
import Product from "./Product";
import Services from "./Services";
import Galleary from "./Galleary"
import Enquiry from "./Enquiry";
import Business from "./Business";
import Certificates from "./Certificates";
import Offers from "./Offers";
import Blogs from "./Blogs";
import Appoinment from "./Appoinment";
import Feedbackform from "./Feedbackform";
import Reviews from "./Reviews";
const Layout = () => {
  return (
    <div className="">
      <Header className="mb-10" />
      <Hero className="mt-14" />
      <Contact />
      <Product />
      <Services />
      <Offers />
      <Blogs />
      <Galleary />

      <Business />
      <Certificates />
     <Feedbackform/>
      <Reviews/>
    <Appoinment/>
      <Enquiry />
     
    </div>
  );
};

export default Layout;
