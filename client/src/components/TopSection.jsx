import React, { useContext} from "react";
import styled from "styled-components";
import { TransactionContext } from '../context/TransactionContext';
import Wallet from "./Wallet";

const size = {
  xs: `320px`,
  sm: `768px`,
  lg: `1050px`,
 }

 const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`
 }

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 1%;
  top: 18%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  z-index: 40;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 60px;
  @media only screen and ${device.sm}{
    display: none;
}
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 15px;
  @media only screen and ${device.sm}{
    display: none;
}
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 5em;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 25%;
  text-align: center;
  @media only screen and ${device.sm}{
    display: none;
}
`;

const ConnectButton = styled.button`
  outline: none;
  border: none;
  background-color: #27b927;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 5em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
  &:hover {
    background-color: transparent;
    border: 2px solid #27b927;
  }
  @media only screen and ${device.sm}{
    margin-top: 23em;
}
`;


const TopSection = () => {
    const { connectWallet, msgbutton} = useContext(TransactionContext);

  return (
    <TopSectionContainer>
      <Logo>BlockSpace // Web 3.0</Logo>
      <Slogan>Where the world builds software</Slogan>
      <Paragraph>
      Hello this is our Final Project about Web3.0 and blockchain Technologies.
      We want to get Web 2.0 Developers join the Future!
      </Paragraph>

      <ConnectButton onClick={connectWallet}>{msgbutton}</ConnectButton>
      {/* <Wallet onClick={connectWallet}>{msgbutton}</Wallet> */}
      <ConnectButton
        
          onClick={()=>{navigate('/story')}  
  }
          // className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        > Learn more
          {/* <p className="text-white text-base font-semibold">
            Learn more
          </p> */}
        </ConnectButton>
      <MadeBy>
        <u>Made By:</u> Hengameh Bolouri, Kanyshai Sharapova , Pascal Malangeri
      </MadeBy>

    </TopSectionContainer>
  );
}
export default TopSection