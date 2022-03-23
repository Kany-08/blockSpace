import React, { useContext } from "react";
import styled from "styled-components";
import { TransactionContext } from "../context/TransactionContext";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const size = {
  xs: `425px`,
  sm: `768px`,
  md: `1024px`,
  lg: `1440px`,
  xl: `2560px`,
};

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
};

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

  @media only screen and ${device.sm} {
    display: none;
  }
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 15px;
  @media only screen and ${device.md} {
    display: none;
  }
  @media only screen and ${device.sm} {
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
  @media only screen and ${device.xs} {
    display: none;
  }
`;

const ConnectButton = styled.button`
  outline: none;
  border: none;
  background: rgb(187, 37, 208);
  background: linear-gradient(
    114deg,
    rgba(187, 37, 208, 1) 0%,
    rgba(41, 38, 212, 1) 100%
  );
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  width: 160px;
  height: 30px;
  text-align: center;
  transition: all 350ms ease-in-out;
  &:hover {
    background: blue;
    //border-color: violet;
    color: lightgrey;
  }
`;

const LearnMore = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.2em;
  outline: none;
  border: none;
  text-decoration: underline;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  width: 120px;
  height: 30px;
  text-align: center;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
  &:hover {
    color: violet;
  }
  @media only screen and ${device.xs} {
    margin-top: 1.2em;
  }
  @media only screen and ${device.xl} {
    align-items: center;
    flex-direction: row;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
  @media only screen and ${device.xs} {
    margin-top: 21em;
  }
  @media only screen and ${device.md} {
    align-items: center;
  }
`;

const TopSection = () => {

  const { connectWallet, msgbutton, currentAccount } =
    useContext(TransactionContext);
  const navigate = useNavigate();


  return (
    <TopSectionContainer>
      <Logo>BlockSpace // Web 3.0</Logo>
      <Slogan>Where the world builds software</Slogan>
      <Paragraph>
        Hello this is our Final Project about Web3.0 and blockchain
        Technologies. We want to get Web 2.0 Developers join the Future!
      </Paragraph>
      <ButtonDiv>
        {!currentAccount && (
          <ConnectButton onClick={connectWallet}>{msgbutton}</ConnectButton>
        )}

        {/* <Wallet onClick={connectWallet}>{msgbutton}</Wallet> */}
        <LearnMore
          onClick={() => {
            navigate("/story");
          }} //className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          {" "}
          <p style={{ marginRight: "0.4em" }}>Learn more</p>
          <br />
          <FaExternalLinkAlt size={16} />
          {/* <p className="text-white text-base font-semibold">
            Learn more
          </p> */}
        </LearnMore>
      </ButtonDiv>

    </TopSectionContainer>
  );
};
export default TopSection;
