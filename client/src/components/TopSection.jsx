import React, { useContext} from "react";
import styled from "styled-components";
import { TransactionContext } from '../context/TransactionContext';

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

const MadeBy = styled.h3`
  color: #fff;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  @media only screen and ${device.lg}{
    display: none;
}
`;


const TopSection = () => {
    const { connectWallet } = useContext(TransactionContext);

  return (
    <TopSectionContainer>
      <Logo>BlockSpace // Web 3.0</Logo>
      <Slogan>Where the world builds software</Slogan>
      <Paragraph>
      Hello this is our Final Project about Web3.0 and blockchain Technologies.
      We want to get Web 2.0 Developers join the Future!
      </Paragraph>
      <ConnectButton onClick={connectWallet}>Connect Wallet</ConnectButton>
      <MadeBy>
        <u>Made By:</u> Hengameh Bolourie, Kanyshai Sharapova , Pascal Malangeri
      </MadeBy>
    </TopSectionContainer>
  );
}
export default TopSection