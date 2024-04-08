import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import user1 from "../../assets/testimonial/user1.jpg";
import user2 from "../../assets/testimonial/user2.jpg";
import user3 from "../../assets/testimonial/user3.jpg";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";

const TestimonialComponent = () => {
  return (
    <div className="py-10">
      <div className="w-full text-center ">
        <h3 className="text-blue-600 font-bold">Testimonials</h3>
        <h2 className="text-xl font-bold">What Our Clients Say</h2>
      </div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper mt-3">
        <SwiperSlide className="h-52 mb-10">
          <div className="border-2 p-4 pb-8 rounded-xl w-[90%] bg-slate-100 md:w-[70%]">
            <p className="text-left md:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="flex justify-start items-center gap-4 mt-3 md:justify-center md:mt-5">
              <div className="w-14 h-14 shadow-md rounded-full border-2 border-blue-600 md:w-20 md:h-20">
                <img src={user1} alt="" className="rounded-full object-cover" />
              </div>
              <h3 className="text-sm font-bold italic md:text-lg ">Suwarto Pahing</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-52">
          <div className="border-2 p-4 pb-8 rounded-xl w-[90%] bg-slate-100 md:w-[70%]">
            <p className="text-left md:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="flex justify-start items-center gap-4 mt-3 md:justify-center md:mt-5">
              <div className="w-14 h-14 shadow-md rounded-full border-2 border-blue-600 md:w-20 md:h-20">
                <img src={user2} alt="" className="rounded-full object-cover" />
              </div>
              <h3 className="text-sm font-bold italic md:text-lg ">Yanti Suratmi</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-52">
          <div className="border-2 p-4 pb-8 rounded-xl w-[90%] bg-slate-100 md:w-[70%]">
            <p className="text-left md:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="flex justify-start items-center gap-4 mt-3 md:justify-center md:mt-5">
              <div className="w-14 h-14 shadow-md rounded-full border-2 border-blue-600 md:w-20 md:h-20">
                <img src={user3} alt="" className="rounded-full object-cover" />
              </div>
              <h3 className="text-sm font-bold italic md:text-lg ">Parmono</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialComponent;
