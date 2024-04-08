import React, { useEffect } from "react";
import ContactHeroComponent from "../components/ContactComponents/ContactHeroComponent";
import ContactFormComponent from "../components/ContactComponents/ContactFormComponent";

const ContactPage = () => {
  useEffect(() => {
    document.title = "DentalClean | Contact us";
  }, []);
  return (
    <div>
      <ContactHeroComponent />
      <ContactFormComponent />
    </div>
  );
};

export default ContactPage;
