import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import styled from "styled-components";

const size = {
  sm: `425px`
 }

 const device = {
  sm: `(max-width: ${size.sm})`
 }

const MadeBy = styled.h3`
  color: #fff;
  position: relative;
  margin-top: 2.45em;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  @media only screen and ${device.sm}{
    display: none;
}
`;
const icons = styled.div`{
  display: flex;

}`;


const Footer = () => (
  <div className="w-full md:justify-center justify-between items-center flex-col p-4" style={{height: "100%"}}>
    <MadeBy>
        <u>Made By:</u> Hengameh Bolouri, Kanyshai Sharapova, Pascal Malangeri
      </MadeBy>
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
    
      
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
