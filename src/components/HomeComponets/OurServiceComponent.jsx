import React from "react";
import cosmetic from "../../assets/ourServices/cosmetic.jpg";
import xRay from "../../assets/ourServices/x-ray.jpg";
import rootCanal from "../../assets/ourServices/rootCanal.jpg";
import { Link } from "react-router-dom";

const OurServiceComponent = () => {
  return (
    <div className="bg-slate-100 py-12">
      <div className="text-center">
        <h3 className="text-blue-600 font-bold">Our Services</h3>
        <h2 className="text-xl font-bold">All Your Dental Needs at One Place</h2>
      </div>
      <div className="pt-6 flex flex-wrap gap-6 lg:px-10 lg:gap-0 lg:justify-between">
        <div className="w-[300px] mx-auto bg-slate-50 rounded-xl shadow-xl md:w-[350px]">
          <img src={cosmetic} alt="" className="rounded-t-xl" />
          <div className="p-3">
            <h3 className="font-semibold text-lg">Cosmetic Dentistry</h3>
            <p className="mt-4">Need help with teeth bleaching, enamel bonding and more? You can count on us for the best cosmetic services. </p>
          </div>
        </div>
        <div className="w-[300px] mx-auto bg-slate-50 rounded-xl shadow-xl md:w-[350px]">
          <img src={xRay} alt="" className="rounded-t-xl " />
          <div className="p-3">
            <h3 className="font-semibold text-lg">Dental X-Rays​</h3>
            <p className="mt-4">X-rays help us reach the root cause of trouble and that’s where we like to dig in and help you with the right treatment.</p>
          </div>
        </div>
        <div className="w-[300px] mx-auto bg-slate-50 rounded-xl shadow-xl md:w-[350px]">
          <img src={rootCanal} alt="" className="rounded-t-xl " />
          <div className="p-3">
            <h3 className="font-semibold text-lg">Root Canals​</h3>
            <p className="mt-4">Root canals can be painful. But, we assure the most painless and tension-free root canal treatments in town. </p>
          </div>
        </div>
      </div>
      <div className="text-center pt-6">
        <Link to={"/dental-clean/services"}>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-all">View All Services</button>
        </Link>
      </div>
    </div>
  );
};

export default OurServiceComponent;
