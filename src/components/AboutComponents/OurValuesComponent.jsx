import React from "react";

const OurValuesComponent = () => {
  return (
    <div className="py-20">
      <div className="text-center">
        <h3 className="text-blue-600 font-bold text-lg">Our Values</h3>
        <h2 className="text-xl font-bold">Our Work Is Heavily Shaped by Our Core Values </h2>
      </div>
      <div className="flex flex-col   justify-between gap-5 md:flex-row md:flex-wrap px-4 mt-8">
        <div className="bg-slate-100 rounded-lg shadow-lg w-full mx-auto md:w-[400px] lg:w-[550px]">
          <div className="p-4 flex flex-col gap-2">
            <h3 className="text-blue-600 md:text-lg">01.</h3>
            <h2 className="text-lg font-bold md:text-xl">Compassion</h2>
            <p>We aim at understanding and caring for patients and colleague’s needs and wants, by attentive listening and putting ourselves in people’s shoes. </p>
          </div>
        </div>
        <div className="bg-slate-100 rounded-lg shadow-lg w-full mx-auto md:w-[400px] lg:w-[550px]">
          <div className="p-4 flex flex-col gap-2">
            <h3 className="text-blue-600 md:text-lg">02.</h3>
            <h2 className="text-lg font-bold md:text-xl">Progression</h2>
            <p>We want to keep adapting to different situations, with a desire to learn and striving to be better. Learning new trends and technologies in the industry. </p>
          </div>
        </div>
        <div className="bg-slate-100 rounded-lg shadow-lg w-full mx-auto md:w-[400px] lg:w-[550px]">
          <div className="p-4 flex flex-col gap-2">
            <h3 className="text-blue-600 md:text-lg">03.</h3>
            <h2 className="text-lg font-bold md:text-xl">Respect</h2>
            <p>Respect everyone we meet and treat them like we want to be treated. Whether it is a colleague or a patient, understanding and respect matter. </p>
          </div>
        </div>
        <div className="bg-slate-100 rounded-lg shadow-lg w-full mx-auto md:w-[400px] lg:w-[550px]">
          <div className="p-4 flex flex-col gap-2">
            <h3 className="text-blue-600 md:text-lg">04.</h3>
            <h2 className="text-lg font-bold md:text-xl">Courage</h2>
            <p>We are the experts in our field. Therefore, it is important to have the courage to do what is right knowing that it is for the better good of the person ahead. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValuesComponent;
