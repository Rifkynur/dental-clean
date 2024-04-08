import React from "react";
import hero from "../../assets/hero.jpg";

const HeroComponent = () => {
  return (
    <div className=" bg-right bg-cover h-[350px]  relative md:h-[400px] lg:h-[500px]">
      <div className="absolute text-white w-full h-full bg-gradient-to-r from-black/90 to-black/10 flex flex-col items-start p-4 pt-20 gap-4 md:pt-32 lg:px-10 lg:gap-8">
        <h1 className="text-2xl font-bold md:text-3xl md:w-[400px] lg:text-4xl">Best Dentistry Services You Can Trust.</h1>
        <p className="w-[350px] md:w-[400px] md:text-lg lg:w-[500px] ">
          If you are looking for a reliable dentist in town, we are here to help. We are known for the best, affordable, and painless dental treatments with quick appointments and timely solutions.{" "}
        </p>
        <button className="border py-2 px-4 bg-white text-black transition-all rounded-md hover:bg-black hover:text-white">Book an Appointment</button>
      </div>
      <img src={hero} alt="" className="object-cover h-[350px] w-full md:h-[400px] lg:h-[500px]" />
    </div>
  );
};

export default HeroComponent;
