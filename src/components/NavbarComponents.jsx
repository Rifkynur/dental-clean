import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { PiToothFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";

const NavbarComponents = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(!scroll);
      } else {
        setScroll(false);
      }
    });
  }, []);
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  return (
    <>
      <div className={`flex w-full p-4 items-center justify-between  fixed z-20 text-white ${scroll ? " shadow-xl bg-black/70" : ""}   `}>
        <div className="flex items-center gap-2">
          <PiToothFill size={20} />
          <span className="font-bold text-xl md:text-2xl">
            Dental<span className="text-blue-600">Clean</span>
          </span>
        </div>
        <div className="md:hidden" onClick={() => setNav(!nav)}>
          <GiHamburgerMenu size={20} />
        </div>
        <nav className={`fixed h-screen w-44 top-0 bg-slate-50 shadow-xl transition-all duration-300 ${!nav ? "-right-full" : "right-0"} text-black md:text-xl md:text-white md:static md:bg-transparent md:h-full md:shadow-none md:mr-28`}>
          <ul className="flex flex-col justify-center items-center pt-4 gap-5 mt-5 font-semibold md:flex-row md:gap-10 md:mt-0">
            <li className="absolute right-3 top-3 md:hidden" onClick={() => setNav(!nav)}>
              <IoCloseCircleOutline size={20} />
            </li>
            <li className="hover:text-blue-600 transition-all">
              <NavLink to={"/dental-clean/"}>Home</NavLink>
            </li>
            <li className="hover:text-blue-600 transition-all">
              <NavLink to={"/dental-clean/about"}>About</NavLink>
            </li>
            <li className="hover:text-blue-600 transition-all">
              <NavLink to={"/dental-clean/services"}>Service</NavLink>
            </li>
            <li className="hover:text-blue-600 transition-all">
              <NavLink to={"/dental-clean/contact"}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarComponents;
