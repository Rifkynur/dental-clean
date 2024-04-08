import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const ToTop = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-blue-600 border border-black w-10 h-10 flex justify-center items-center rounded-full fixed bottom-5 right-2 z-30 cursor-pointer" onClick={toTop}>
      <IoIosArrowUp size={20} />
    </div>
  );
};

export default ToTop;
