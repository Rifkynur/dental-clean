import React from "react";
import { PiToothFill } from "react-icons/pi";
import { FaInstagram, FaGoogle, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="w-full bg-blue-600 p-4 text-white flex flex-col gap-5 md:flex-row md:justify-between lg:justify-evenly">
      <div className="flex flex-col gap-5">
        <div className="flex items-center">
          <PiToothFill size={50} />
          <span className="font-bold text-xl md:text-2xl">
            Dental<span className="text-black">Clean</span>
          </span>
        </div>
        <div>
          <p className="w-[250px]">Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.</p>
        </div>
        <div>
          <ul className="flex gap-7 md:justify-around">
            <li className="cursor-pointer hover:text-black transition-all">
              <FaInstagram />
            </li>
            <li className="cursor-pointer hover:text-black transition-all">
              <FaFacebook />
            </li>
            <li className="cursor-pointer hover:text-black transition-all">
              <FaGoogle />
            </li>
            <li className="cursor-pointer hover:text-black transition-all">
              <FaXTwitter />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-lg">Links</h3>
        <ul className="flex flex-col gap-2">
          <li className="cursor-pointer hover:text-black transition-all">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer hover:text-black transition-all">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="cursor-pointer hover:text-black transition-all">
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="cursor-pointer hover:text-black transition-all">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg">Business Hour</h3>
        <ul className="flex flex-col gap-2">
          <li>Monday : 11.00-09.00</li>
          <li>Tuesday : 11.00-09.00</li>
          <li>Wednesday : 11.00-09.00</li>
          <li>Thursday : 11.00-09.00</li>
          <li>Friday : 11.00-09.00</li>
          <li>Saturday : Closed</li>
          <li>Sunday : Closed</li>
        </ul>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <IoCall /> +123 456 7890
        </div>
        <div className="flex items-center gap-3">
          <IoLocationSharp /> 123 Fifth Ave, New York, NY 12004, USA.
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FooterComponent;
