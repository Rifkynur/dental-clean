import React from "react";

const ContactFormComponent = () => {
  return (
    <div className="py-20">
      <div className="text-center mb-6 px-3 mx-auto md:max-w-[500px] lg:max-w-[800px]">
        <h1 className="font-bold md:text-xl">Have Any Queries?</h1>
        <p>Wish to get a free consultation or a quick checkup to identify the kind of treatment you need? Just give us a call or submit the form here.</p>
      </div>
      <form className="bg-slate-100 w-3/4 mx-auto p-3 rounded-md shadow-lg">
        <div className="flex flex-col items-center gap-4 rounded-md p-4">
          <h2 className="font-semibold md:text-xl mb-5">Contact Form</h2>
          <div className="w-10/12 mx-auto relative border-slate-800 border-b p-2">
            <input type="text" placeholder=" " id="name" className=" border-slate-600 w-full p-1 text-sm bg-transparent focus:outline-none peer" required />
            <label
              htmlFor="name"
              className="absolute text-slate-500 left-2 top-0 -translate-y-1/2 text-xs font-bold peer-focus:top-0 peer-focus:text-xs peer-focus:font-bold peer-placeholder-shown:top-1/2 peer-placeholder-shown:font-normal peer-placeholder-shown:text-base transition-all"
            >
              Your Name
            </label>
          </div>
          <div className="w-10/12 mx-auto relative border-slate-800 border-b p-2">
            <input type="email" placeholder=" " id="email" className="border-slate-600 w-full p-1 text-sm bg-transparent focus:outline-none peer" />
            <label
              htmlFor="name"
              className="absolute text-slate-500 left-2 top-0 -translate-y-1/2 text-xs font-bold peer-focus:top-0 peer-focus:text-xs peer-focus:font-bold peer-placeholder-shown:top-1/2 peer-placeholder-shown:font-normal peer-placeholder-shown:text-base transition-all"
            >
              Your Email
            </label>
          </div>
          <div className="w-10/12 mx-auto relative  p-2">
            <textarea cols="10" rows="10" placeholder=" " id="message" className="border-b-[1px] border-slate-600 w-full p-1 text-sm bg-transparent focus:outline-none peer"></textarea>
            <label
              htmlFor="message"
              className="absolute text-slate-500 left-2 top-0 -translate-y-1/2 text-xs font-bold peer-focus:top-0 peer-focus:text-xs peer-focus:font-bold peer-placeholder-shown:top-6 peer-placeholder-shown:font-normal peer-placeholder-shown:text-base transition-all"
            >
              Your Message
            </label>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-blue-600 text-white mt-4 px-2 py-1 font-semibold rounded-md hover:bg-blue-800 transition-all md:px-4 md:py-2">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormComponent;
