import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const NotSureComponents = () => {
  return (
    <div className="bg-slate-50 py-20">
      <div className="text-center w-3/4 mx-auto flex flex-col gap-5">
        <h1 className="font-bold md:text-xl">Not Sure What You Need?</h1>
        <p>Simply give us a call and book an appointment for yourself. We are here to help. Walk into our clinic and let us take a closer look to suggest the best treatment you need. </p>
        <a href="#" className="text-blue-600 flex justify-center items-center gap-2 font-semibold">
          Book an Appointment.
          <FaArrowRightLong />
        </a>
      </div>
    </div>
  );
};

export default NotSureComponents;
