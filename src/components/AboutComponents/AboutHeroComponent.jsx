import React from "react";
import hero from "../../assets/About Hero/AboutHero.jpg";

const AboutHeroComponent = () => {
  return (
    <div>
      <div className=" bg-right bg-cover h-[350px]  relative md:h-[400px] lg:h-[500px]">
        <div className="absolute text-white w-full h-full bg-black/70 flex flex-col items-start p-4 pt-20 gap-4 md:pt-32 lg:px-10 lg:gap-8">
          <h1 className="text-2xl font-bold md:text-3xl text-center mx-auto mt-16 lg:text-5xl lg:mt-28">About Us.</h1>

          <button className="text-xs border py-1 px-4 mx-auto font-bold bg-white text-black transition-all rounded-md hover:bg-black hover:text-white md:text-base md:px-4  md:py-2">Book an Appointment</button>
        </div>
        <img src={hero} alt="" className="object-cover h-[350px] w-full md:h-[400px] lg:h-[500px]" />
      </div>
    </div>
  );
};

export default AboutHeroComponent;
