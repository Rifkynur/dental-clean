import React from "react";
import dr from "../../assets/drDre.jpg";
import { FaCircleCheck } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <div className="py-10 p-4">
      <div className="text-center">
        <h3 className="text-blue-600 font-bold">Why Choose Us</h3>
        <h2 className="text-xl font-bold">We Make Dental Treatments Fun! </h2>
      </div>
      <div className="flex flex-wrap items-center pt-8 md:items-start md:gap-4 lg:gap-4">
        <div className="mx-auto">
          <img src={dr} alt="" className="w-[300px] mx-auto rounded-xl shadow-lg md:w-[350px] lg:w-[500px]" />
        </div>
        <div className="flex flex-col gap-2 pt-3 md:w-3/6 lg:w-1/2 md:pt-0 lg:gap-4 ">
          <h2 className="text-lg font-bold md:text-xl">Meet Dr. Dre</h2>
          <p className="max-w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-1">
              <FaCircleCheck className="text-blue-600" />
              15+ Years of experience
            </li>
            <li className="flex items-center gap-1">
              <FaCircleCheck className="text-blue-600" />
              Highly Equipped Clinic
            </li>
            <li className="flex items-center gap-1">
              <FaCircleCheck className="text-blue-600" />
              Good quality care & service
            </li>
          </ul>
          <div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-all">Book an Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
