import React, { useEffect } from "react";
import HeroComponent from "../components/HomeComponets/HeroComponent";
import AboutComponent from "../components/HomeComponets/AboutComponent";
import OurServiceComponent from "../components/HomeComponets/OurServiceComponent";
import WhyChooseUs from "../components/HomeComponets/WhyChooseUs";
import TestimonialComponent from "../components/HomeComponets/TestimonialComponent";

const HomePages = () => {
  useEffect(() => {
    document.title = "DentalClean";
  }, []);
  return (
    <div>
      <HeroComponent />
      <AboutComponent />
      <OurServiceComponent />
      <WhyChooseUs />
      <TestimonialComponent />
    </div>
  );
};

export default HomePages;
