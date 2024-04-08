import React from "react";
import image from "../../assets/ourStory/image.jpg";

const OurStoryComponent = () => {
  return (
    <div className="pt-20 p-4">
      <div className="flex flex-wrap items-center pt-8 md:items-start md:gap-4 lg:gap-4">
        <div className="mx-auto">
          <img src={image} alt="" className="w-[300px] mx-auto rounded-xl shadow-lg md:w-[350px] lg:w-[500px]" />
        </div>
        <div className="flex flex-col gap-2 pt-3 md:w-3/6 lg:w-1/2 md:pt-0 lg:gap-4 ">
          <h2 className="text-lg font-bold text-blue-600 md:text-xl">Why Choose Us</h2>
          <h3 className="font-bold text-xl md:text-2xl">Committed to the Dental Excellence</h3>
          <p className="max-w-[500px] font-semibold">Our Story Committed to the Dental Excellence We are a team of 3 professional dentists with extensive experience with the latest trends and technologies in the dental industry.</p>
          <p className="max-w-[500px]">
            We are known for the most affordable and painless dental treatments that our clients have been loving for years. Whether it is cosmetic dental treatments, root canals, tooth extraction, or more, we assure the best help in a
            comfortable and friendly environment. We’ve built relationships with thousands of clients for simple consultations and surgeries too.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStoryComponent;
