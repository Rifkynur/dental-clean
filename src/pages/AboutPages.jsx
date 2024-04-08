import React, { useEffect } from "react";
import OurStoryComponent from "../components/AboutComponents/OurStoryComponent";
import AboutHeroComponent from "../components/AboutComponents/AboutHeroComponent";
import OurValuesComponent from "../components/AboutComponents/OurValuesComponent";

const AboutPages = () => {
  useEffect(() => {
    document.title = "DentalClean | About us";
  }, []);
  return (
    <div>
      <AboutHeroComponent />
      <OurStoryComponent />
      <OurValuesComponent />
    </div>
  );
};

export default AboutPages;
