import React from "react";
import braceAndImplant from "../../assets/ourServices/braceAndImplant.jpg";
import cosmetic from "../../assets/ourServices/cosmetic.jpg";
import rootCanal from "../../assets/ourServices/rootCanal.jpg";
import whitening from "../../assets/ourServices/whitening.jpg";
import dentalImplant from "../../assets/ourServices/dentalImplant.jpg";
import xRay from "../../assets/ourServices/x-ray.jpg";

const AllServices = () => {
  return (
    <div className="py-20">
      <h1 className="text-lg text-center font-bold md:text-xl lg:text-2xl">All Your Dental Needs at One Place</h1>
      <div className="pt-6 flex flex-wrap gap-6 lg:px-10 lg:gap-5 lg:justify-around">
        <div className="w-[300px] mx-auto bg-slate-100 rounded-xl shadow-xl md:w-[350px] ">
          <img src={cosmetic} alt="" className="rounded-t-xl" />
          <div className="p-3 pb-5 flex flex-col justify-between items-start">
            <h3 className="font-semibold text-lg ">Cosmetic Dentistry</h3>
            <p className="mt-4">We offer affordable tooth bleaching and alignment treatments you may need. </p>
            <button className="bg-blue-600 mt-3 px-1 py-2 text-white font-bold rounded-md">Book an Appointment</button>
          </div>
        </div>
        <div className="w-[300px] mx-auto bg-slate-100 rounded-xl shadow-xl md:w-[350px] ">
          <img src={xRay} alt="" className="rounded-t-xl" />
          <div className="p-3 pb-5">
            <h3 className="font-semibold text-lg">Dental X-Rays​</h3>
            <p className="mt-4">No treatment is started without an x-ray taken from our high-end x-ray machine. </p>
            <button className="bg-blue-600 mt-3 px-1 py-2 text-white font-bold rounded-md">Book an Appointment</button>
          </div>
        </div>
        <div className="w-[300px] mx-auto bg-slate-100 rounded-xl shadow-xl md:w-[350px] ">
          <img src={rootCanal} alt="" className="rounded-t-xl" />
          <div className="p-3 pb-5">
            <h3 className="font-semibold text-lg">Root Canals​</h3>
            <p className="mt-4">With us you get the fastest and painless root canal treatments done quickly. </p>
            <button className="bg-blue-600 mt-3 px-1 py-2 text-white font-bold rounded-md">Book an Appointment</button>
          </div>
        </div>
        <div className="w-[300px] mx-auto bg-slate-100 rounded-xl shadow-xl md:w-[350px] ">
          <img src={whitening} alt="" className="rounded-t-xl" />
          <div className="p-3 pb-5">
            <h3 className="font-semibold text-lg">Teeth Whitening </h3>
            <p className="mt-4">Whether it is just cleaning or polishing, get a brighter smile while you walk out. </p>
            <button className="bg-blue-600 mt-3 px-1 py-2 text-white font-bold rounded-md">Book an Appointment</button>
          </div>
        </div>
        <div className="w-[300px] mx-auto bg-slate-100 rounded-xl shadow-xl md:w-[350px] ">
          <img src={dentalImplant} alt="" className="rounded-t-xl" />
          <div className="p-3 pb-5">
            <h3 className="font-semibold text-lg">Dental Implants</h3>
            <p className="mt-4">We help you get a new set of teeth or a single tooth that matches your smile. </p>
            <button className="bg-blue-600 mt-3 px-1 py-2 text-white font-bold rounded-md">Book an Appointment</button>
          </div>
        </div>
        <div className="w-[300px] mx-auto bg-slate-100 rounded-xl shadow-xl md:w-[350px] ">
          <img src={braceAndImplant} alt="" className="rounded-t-xl" />
          <div className="p-3 pb-5">
            <h3 className="font-semibold text-lg">Braces & Implants</h3>
            <p className="mt-4">We use and recommend Invisalign braces for better results of teeth alignment. </p>
            <button className="bg-blue-600 mt-3 px-1 py-2 text-white font-bold rounded-md ">Book an Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
