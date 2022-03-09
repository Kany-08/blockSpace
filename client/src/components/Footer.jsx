import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import logo from "../../images/krinnxb23kgp75s0jyhp.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4" style={{height: "100%"}}>
    <div className="w-fullflex sm:flex-row flex-col justify-between items-center my-4">
      {/* <div className="flex flex-[0.5] justify-center items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-24 cursor-pointer" />
        </Link>
      </div> */}
      <div className="flex flex-1 justify-evenly items-end flex-wrap sm:mt-0 mt-5 w-full">
        
          <p className="text-white pt-9 mx-2 cursor-pointer">
            <FaTwitter size={20} />
          </p>
        

        
          <p className="text-white mx-2 cursor-pointer">
            <FaTelegramPlane size={20} />
          </p>
        

        
          <p className="text-white mx-2 cursor-pointer">
            <SiDiscord size={20} />
          </p>
        
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Come join us and hear for the unexpected miracle!
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        info@blockSpace.com
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@blockSpace2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
