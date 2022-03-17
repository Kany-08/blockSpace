import React from 'react';
import { YoutubeEmbed } from '../components/Youtube';
import styled from 'styled-components';

const StoryContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 10px auto;
  display: flex;
  justify-items: center;
`;

const H1 = styled.h1 `
        margin-top: .5rem;
        margin-bottom: 1rem;
        font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-weight: 500;
        line-height: 1.2;
        font-size: 2.5rem;
       ` 

const Story = () => {
  return (
    <StoryContainer>
    <div className='text-white' >

        <div style={{marginTop: '5rem' , marginBottom: '5rem'}}>
            <H1>What is a Blockchain?</H1>
            <p>Blockchain is a type of shared database that differs from a typical database in the way that it stores information; blockchains store data in blocks that are then linked together via cryptography.<p/> <br />
            <p>  As new data comes in, it is entered into a fresh block. Once the block is filled with data, it is chained onto the previous block, which makes the data chained together in chronological order.</p><br />
            <p>Different types of information can be stored on a blockchain, but the most common use so far has been as a ledger for transactions.</p><br />

            Decentralized blockchains are immutable, which means that the data entered is irreversible.</p><br />
                <YoutubeEmbed embedId="SSo_EIwHSd4"  />
        </div>
        <div style={{ marginTop: '5rem' , marginBottom: '5rem'}}>
            <H1>What solutions does Blockchain solve?</H1>
         
            <p>Cryptocurrencies</p> <br />
            <p>Smart odometers: <br /> <em> Kowallick, S. (2017, December). How blockchain can help to prevent odometer fraud.</em> </p> <br />
            <p>Notary: <br /> <em> DeMuro, J. (2018, January). 7 ways blockchain will change the legal industry forever. TechRadar.</em></p> <br />
            <p>Digital voting: <br /><em>Sandre, A. (2018, January). Blockchain for voting and elections. Hackernoon.</em></p> <br />
            <p>Food industry: <br /> <em>Aitken, R. (2017, December). IBM and Walmart Launching Blockchain Food Safety Alliance In China With Fortune</em></p> <br />  
            <p>Tracking of shipments and goods: <br /> <em>Blockchain: the solution for transparency in product supply chains. (2015, November). Project Provenance Ltd.</em></p> <br />  
            <p>Smart contracts</p> <br />
            <p>Medical records</p> <br />
            <p>Distributing royalties to artists</p> <br />
            
                <YoutubeEmbed embedId="aQWflNQuP_o"  />
        </div>
        <div style={{ marginTop: '5rem' , marginBottom: '5rem'}}>
            <H1>What is a Smart Contract?</H1>
            <p>Smart contracts are self-executing contracts with the terms of the agreement between buyer and seller being directly written into lines of code.</p> <br />
            <p>Nick Szabo, an American computer scientist who invented a virtual currency called "Bit Gold" in 1998, defined smart contracts as computerized transaction protocols that execute terms of a contract.</p> <br />
            <p>Smart contracts render transactions traceable, transparent, and irreversible.</p> <br />
            
                <YoutubeEmbed embedId="ZE2HxTmxfrI"  />
        </div>
        <div style={{ marginTop: '5rem' , marginBottom: '5rem'}}>
            <H1>What is an ERC20 Token?</H1>
            <p>An ERC20 token is a standard used for creating and issuing smart contracts on the Ethereum blockchain.</p><br />
            <p>Smart contracts can then be used to create smart property or tokenized assets that people can invest in.</p> <br />
            <p>ERC stands for "Ethereum request for comment," and the ERC20 standard was implemented in 2015.</p> <br />
            <p>Plenty of well-known digital currencies use the ERC-20 standard, including Maker (MKR), Basic Attention Token (BAT), Augur (REP), and OMG Network (OMG).</p> <br />
                <YoutubeEmbed embedId="cqZhNzZoMh8"  />
        </div>
        <div style={{ marginTop: '5rem' , marginBottom: '5rem'}}>
            <H1>What is a Non-Fungible Token (NFT)?</H1>
            <p> Non-fungible tokens (NFTs) are cryptographic assets on a blockchain with unique identification codes and metadata that distinguish them from each other. Unlike cryptocurrencies, they cannot be traded or exchanged at equivalency. This differs from fungible tokens like cryptocurrencies, which are identical to each other and, therefore, can serve as a medium for commercial transactions.</p> <br />
            <p>NFTs are unique cryptographic tokens that exist on a blockchain and cannot be replicated.</p> <br />
            <p>NFTs can represent real-world items like artwork and real estate.</p> <br />
            <p>"Tokenizing" these real-world tangible assets makes buying, selling, and trading them more efficient while reducing the probability of fraud.</p> <br />
            <p>NFTs can also function to represent individuals' identities, property rights, and more.</p> <br />
                <YoutubeEmbed embedId="FkUn86bH34M"  />
        </div>
        <div style={{ marginTop: '5rem' , marginBottom: '5rem'}}>
            <H1>What is Metamask?</H1>
            <p>MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. </p> <br />
            <p>MetaMask is a browser plugin that serves as an Ethereum wallet, and is installed like any regular plugin. Once it's installed, it allows users to store Ether and other ERC-20 tokens, enabling them to make transactions to any Ethereum address.</p> <br />
            <p>By connecting to Ethereum-based Dapps (Decentralized Applications), users can spend their coins in games, stake tokens in gambling applications and trade them on decentralized exchanges. It also provides users with an entry point into the emerging world of decentralized finance, or DeFi, providing a way to access DeFi apps such as Compound and PoolTogether.</p> <br />
                <YoutubeEmbed embedId="YVgfHZMFFFQ"  />
        </div>
        <div style={{ marginTop: '5rem' , marginBottom: '5rem'}}>
            <H1>How to install and setup Metamask?</H1>
            <p>To use Metamask, you’ll need to download and install the official Metamask extension/addon for your browser; either the Google Chrome extension or the Firefox addon depending on your browser.</p> <br />
            <p>In September 2020, MetaMask launched MetaMask Mobile for Android and iPhone, its first smartphone app.</p> <br />
            <p>After installation, click on <strong>Create a Wallet  </strong> this will create a new wallet and seed phrase.</p> <br />
            <p>MetaMask will then present you with your 12-word backup phrase. You’ll need to write this down in the same order displayed on your screen. This will be needed to recover your wallet should you ever lose access to your computer, and should be kept stored somewhere safe. Anybody who has access to your 12-word back phrase will be able to recover your funds, so keep it private.</p> <br />
            <p>Confirm your backup phrase on the next screen by entering the words in the same order saved previously.</p> <br />
                <YoutubeEmbed embedId="GNPz-Dv5BjM"  />

        </div>
      
    </div>
    </StoryContainer>
  )
}

export default Story