import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import metamask from "../../images/metamask.png"
import ethereum from "../../images/ethereum.png"
import smartcontract from "../../images/smartcontract.png"
import Wallet from "./Wallet";

const ServiceCard = ({ color, title, subtitle, image }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      <img src={image} alt="" />
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Metamask Wallet
          <br />
          for ethereum network
        </h1>
        <Wallet />
        {/* <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p> */}
      </div>
        
      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          image={metamask}
          title="Register Metamask"
          subtitle="Wallet (Login) that communicates over Ethereum Blockchain network (Distributed Back-end)"
        />
        <ServiceCard
          image={ethereum}
          color="bg-[#8945F8]"
          title="Receive Faucet Tokens on Metamask"
          //icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Fake-to-Play tokens to transact over Rinkeby, Ropsten, Kovan Test Networks"
        />
        <ServiceCard
          image={smartcontract}
          color="bg-[#F84550]"
          title="Create Smart Contract"
          //icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Transaction recorded on Ethereum Test Network across all Blockchain nodes"
        />
      </div>
    </div>
  </div>
);

export default Services;
