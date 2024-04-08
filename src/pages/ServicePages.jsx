import React, { useEffect } from "react";
import ServicesHeroComponent from "../components/ServicesComponents/ServicesHeroComponent";
import AllServices from "../components/ServicesComponents/AllServices";
import NotSureComponents from "../components/ServicesComponents/NotSureComponents";

const ServicePages = () => {
  useEffect(() => {
    document.title = "DentalClean | All Services";
  }, []);
  return (
    <div>
      <ServicesHeroComponent />
      <AllServices />
      <NotSureComponents />
    </div>
  );
};

export default ServicePages;
