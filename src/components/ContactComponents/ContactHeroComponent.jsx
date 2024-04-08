import React from "react";
import contact from "../../assets/contact/contact.jpg";
const ContactHeroComponent = () => {
  return (
    <div>
      <div className=" bg-right bg-cover h-[350px]  relative md:h-[400px] lg:h-[500px]">
        <div className="absolute text-white w-full h-full bg-black/70 flex flex-col items-start p-4 pt-20 gap-4 md:pt-32 lg:px-10 lg:gap-8">
          <h1 className="text-2xl font-bold md:text-3xl text-center mx-auto mt-16 lg:text-5xl lg:mt-28">Contact Us.</h1>
        </div>
        <img src={contact} alt="" className="object-cover h-[350px] w-full md:h-[400px] lg:h-[500px]" />
      </div>
    </div>
  );
};

export default ContactHeroComponent;
