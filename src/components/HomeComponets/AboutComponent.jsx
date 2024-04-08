import React from "react";
import about from "../../assets/about.jpg";
import { Link } from "react-router-dom";

const AboutComponent = () => {
  return (
    <div className="py-10 w-full p-4 flex flex-col md:flex-row justify-between items-center gap-8 lg:p-10 lg:py-20">
      <div>
        <img src={about} alt="" className="w-[250px] h-[300px] object-cover mx-auto rounded-md shadow-xl md:w-[600px] lg:w-[800px] lg:h-[400px]" />
      </div>
      <div className="mt-8 flex flex-col items-start gap-3 md:w-3/4 md:mt-0">
        <h3 className="text-blue-600 font-bold md:text-lg">About Us</h3>
        <h2 className="font-bold text-xl md:text-2xl">Certified Dentists Committed to Excellence </h2>
        <p>
          We are a team of 3 certified dentists specialised in offering the best dental treatments in town. With adequate experience of over 12 years, we have mastered the skills of offering the best solutions with the latest technologies.{" "}
        </p>
        <Link to={"/about"}>
          <button className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-800 transition-all">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutComponent;
