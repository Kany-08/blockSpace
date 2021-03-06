import React from 'react';
//import { H1 , H2, H3, P, Img, A } from '../components/Token.style';
import { YoutubeEmbed } from '../components/Youtube';
import styled from 'styled-components';

const TokenContainer = styled.div`
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
 const H2 = styled.h2 `
       margin-top: .5rem;
       margin-bottom: 1rem;
       font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
       font-weight: 500;
       line-height: 1.2;
       font-size: 2rem;
      ` 
 const H3 = styled.h3 `
      margin-top: .5rem;
      margin-bottom: 1rem;
      font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-weight: 500;
      line-height: 1.2;
      font-size: 1.75rem;
     ` 
 const P = styled.p `
      margin-top: 0;
      margin-bottom: .9rem; 
      ` 

 const Img = styled.img `
        border-style: none;
        height: auto;
        max-width: 100%;
` 
 const A = styled.a `
        background-color: transparent;
        text-decoration: none;
        color: #CC3366;
`



const CreateTokenPage = () => {
  return (
    <TokenContainer >
    <div className='text-white'>
        <H1 id="how-to-create-a-polygon-token" >How to Create a Polygon Token</H1>
        <P><strong>Launching a token on Polygon Network, previously known as Matic Network, is so easy that it doesn’t even require any previous programming experience – as long as you use Moralis. Plus, if you’re familiar with programming on Ethereum, the process is almost exactly the same! Also, with the use of Moralis Speedy Nodes, the time it takes to launch a token on Polygon Network itself is drastically reduced. In this article, we’ll take you through the entire process from beginning to end, explaining how to create a token on Polygon Network with Moralis. Furthermore, we’ll show you the tried-and-tested standard for how to create a Polygon token with Moralis. You’ll be shocked how easy it is to create an ERC-20 Polygon token when you use Moralis!</strong></P>
        <P>By following our comprehensive guide to how to create a Polygon token on Polygon, you can cut your deployment time down from weeks to minutes by using Moralis and Moralis Speedy Nodes! If you’d rather get a video walkthrough for how to create a token on Polygon in five easy steps, you’ll find our Moralis YouTube video covering the process here:</P>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' , marginBottom: '2rem'}}>
        <YoutubeEmbed embedId="l_cUaIVtgEc"  />
        </div>
        <P>Moralis is the premier blockchain middleware solution, that allows you to focus on frontend development. Specifically, Web3 development suffers from a lack of capable tools and backend infrastructure. Moralis solves this, by providing massively powerful backend infrastructure as a service, serverless computing, and much more.</P>
        <H1 id="introduction-to-how-to-create-a-polygon-token">Introduction to How to Create a Polygon Token</H1>
        <P>Thanks to the open-source and decentralized nature of blockchain technology, anyone can create a cryptocurrency token. Moreover, it can be really simple and easy – you don’t even need to be a developer (although it will be super easy if you already have some programming skills). But, how to create a Polygon token on Polygon Network with Moralis, and why?</P>
        <P>Firstly, Polygon is a layer-2 network on Ethereum. Ethereum is the largest smart contract-enabled platform and is host to the vast majority of decentralized finance (DeFi) applications. Furthermore, as the second-largest blockchain in existence, the Ethereum Network is one of the most secure and robust in the world. Moreover, Polygon, previously known as Matic Network, as one of the main layer-2 networks on Ethereum, is designed as a scaling solution, increasing throughput and lowering transaction fees. The project has seen immense adoption from some of the top DeFi platforms. Thus, Polygon is a reputable and reliable network to launch a token with. When you work with Moralis, it couldn’t be easier as for how to create a Polygon token.</P>
        <H3 id="ethereum-virtual-machine-evm-">Ethereum Virtual Machine (EVM)</H3>
        <P>Polygon Network (previously known as Matic Network) is an Ethereum Virtual Machine (EVM)-based system. EVM-based systems are essentially using the same base code as the Ethereum Network with some minor adjustments when creating a new network.</P>
        <P>If you’re familiar with programming on Ethereum, then the exact same development tools and processes apply if you want to create a Polygon token on Polygon Network (Matic Network). The only difference is the network on which the smart contracts are deployed.</P>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' , marginBottom: '2rem' }}>
        <P><Img src="https://moralis.io/wp-content/uploads/2021/07/21_07_What_is_EVM-1024x631.png" alt="" width="640" height="360"/></P>
        </div>
        <P>As Polygon is an EVM-based system, you can create a Polygon token using Ethereum-based development tools that you would use to build on other EVM-based systems. This includes using the <A href="https://moralis.io/solidity-explained-what-is-solidity/?utm_source=blog&amp;utm_medium=post&amp;utm_campaign=How%2520to%2520Create%2520a%2520Polygon%2520Token">Solidity programming language</A> and the Remix environment for deploying the token.</P>
        <P>Also, the process for how to create a Polygon token requires using the same ERC-20 token standard as used on the Ethereum chain. This is the most widely-used token standard across the cryptocurrency industry. In short, the ERC-20 standard is like a template or recipe a developer must follow to ensure their token is compliant with Ethereum-based wallets and exchanges. Using the ERC-20 token standard is arguably the easiest way to launch your own cryptocurrency token.</P>
        <H2 id="before-you-get-started-with-how-to-create-a-polygon-token">Before You Get Started with How to Create a Polygon Token</H2>
        <P>There are a couple of things you need to set up and ensure are in place before you can create a token on Polygon. Don’t worry, they’re very easy and quick tasks to accomplish! We’ve organized the process into just three simple steps below.</P>
        <H3 id="1-get-a-polygon-node">1) Get a Polygon Node</H3>
        <P>The very first thing you need to do when learning how to create a Polygon token is make sure you’re connected to a Polygon node. You cannot deploy anything to the Polygon Network if you don’t have a Polygon Node. Polygon nodes can be thought of as a portal to the network if you want to create a token.</P>
        <P>The easiest place to do so is at <A href="https://moralis.io/?utm_source=blog&amp;utm_medium=post&amp;utm_campaign=How%2520to%2520Create%2520a%2520Polygon%2520Token">moralis.io</A>, where you can set up a Polygon Network Speedy Node for free. Simply select the “Speedy Nodes” section from the menu on the left-hand side of the landing page once you have logged in. Then, click on the graphic card to bring up the endpoints. Here you will see a breakdown of the different endpoints including the Polygon Mainnet, Mainnet Archive, Mumbai testnet, and Mumbai Archive testnet. The Mainnet Archive endpoints allow developers to query historical states on the network; this may be required with certain <A href="https://moralis.io/how-to-build-decentralized-apps-dapps-quickly-and-easily/?utm_source=blog&amp;utm_medium=post&amp;utm_campaign=How%2520to%2520Create%2520a%2520Polygon%2520Token">decentralized applications</A> (dApps). However, for the purpose of this article, we will be using the Polygon Mumbai testnet.</P>
        <H3 id="2-connect-to-metamask">2) Connect to MetaMask</H3>
        <P>Moralis offers a super-easy one-step install process for connecting the networks with <A href="https://moralis.io/metamask-explained-what-is-metamask/?utm_source=blog&amp;utm_medium=post&amp;utm_campaign=How%2520to%2520Create%2520a%2520Polygon%2520Token">MetaMask</A>. Simply click “Add to MetaMask” next to Mumbai testnet. You will need to confirm when MetaMask prompts you to do so. Then, you can easily switch to the Polygon Network. You can confirm which network you’re using through MetaMask by checking the networks dropdown menu at the top of the wallet.</P>
        <P><Img src="https://moralis.io/wp-content/uploads/2021/06/Moralis-Metamask.svg" alt=""/></P>
        <H3 id="3-get-matic-tokens">3) Get MATIC Tokens</H3>
        <P>Following this, the next step in how to create a Polygon token is that you need to get some testnet MATIC tokens. To do so, head to <A href="https://faucet.matic.network/">faucet.matic.network</A> where you will be prompted to add your wallet address on the landing page. Copy your account address from your MetaMask wallet and paste it into the account field and select “Submit”. After this has gone through you will need to confirm your details again alongside the payout amount of testnet tokens. Click “Confirm” and you will see some MATIC tokens appear in your MetaMask wallet!</P>
        <H2 id="how-long-does-it-take-to-create-a-polygon-token-">How Long Does It Take to Create a Polygon Token?</H2>
        <P>Once you are connected to a Polygon node and have some testnet MATIC tokens, you can begin to create a Polygon token! The process is so simple you don’t even need to be a developer. You only really need the technical ability of copying and pasting code before adjusting a few parameters. By following these five simple steps, you can create a Polygon token in just a few minutes!</P>
        <H3 id="1-open-remix">1. Open Remix</H3>
        <P>Firstly, head to <A href="https://remix.ethereum.org/">remix.etherum.org</A> to create your token smart contract. Remix is an Integrated Development Environment (IDE) for Ethereum. Developers can use Remix to write, compile, debug, and execute code writing in Ethereum’s programming language, Solidity.</P>
        <P>The first thing you will do is to create a new contract. To do so, right-click “Contracts” on the left-hand side of the page and select “create new contract”. You will then be prompted to name your contract. Make sure it is something relevant to your token project or name!</P>
        <P><Img src="https://moralis.io/wp-content/uploads/2021/07/Skarmavbild-2021-07-26-kl.-08.39.48-1024x303.png" alt=""/></P>
        <P>It is so easy how to create a Polygon token that it has been done thousands of times over. Therefore, to create your own token it’s pointless trying to reinvent the wheel. Rather, you can create a Polygon token on Polygon Network in just a few simple steps using a template.</P>
        <H3 id="2-go-to-openzeppelin">2. Go to OpenZeppelin</H3>
        <P>To find the right template, you will need to go to OpenZeppelin where you will find thousands of reputable smart contract templates that have been implemented with countless crypto projects. OpenZeppelin offers templates for decentralized marketplaces, non-fungible tokens (NFTs), initial coin offerings (ICOs) in addition to typical token standards. Furthermore, as OpenZeppelin is an open-source organization, anyone is free to use the provided templates.</P>
        <P><Img src="https://moralis.io/wp-content/uploads/2021/06/Blog-OpenZeppelin-Logo-1-1024x161.png" alt=""/></P>
        <P>The next step to create a token on Polygon is to select the template for an <A href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqblRXSm5zUzVxSW1vMHBONlU4V2dYdEFFVDMtd3xBQ3Jtc0trNzVYdVRVMGJJSXYzWWtXbXJvUWZYb3dvZFV2QnR1djZxRE1vZ1FFWndSZ015aUdfMXNRT3JoN0dzLXR2dEN6akNrb00xdTJsYW8wZ0hJVjhPQ29KaEh5dnBvby03QzBHSUdSdVluSGJGMVJUUlFjdw&amp;q=https%3A%2F%2Fforum.openzeppelin.com%2Ft%2Fimporting-openzeppelin-contracts-in-remix%2F1420">ERC-20 token on OpenZeppelin</A>. You will need to import the file by copying or selecting “Share” next to the link in OpenZeppelin. Then, return to Remix and paste it into your new contract.</P>
        <H3 id="3-create-a-smart-contract">3. Create a Smart Contract</H3>
        <P>Then go back to OpenZeppelin. If you scroll down on the page with the ERC-20 template, you will see the rest of the token contract. Firstly, copy across the top line of code that specifies the Solidity version. This is paramount to the success of deployment and is needed at the beginning of any Solidity-based smart contract. This will need to be pasted into your smart contract above the import file. After, copy the rest of the token template from OpenZeppelin, and paste it below the import line. Your smart contract should then look like this: (Solidity version may vary depending upon the time of reading).</P>
        <P>On the constructor line is where you will need to adjust the name and ticker of your token. Type in your desired token name within the second set of brackets. For example, if you were naming your coin “MyCoin (MYC)”, the code would read:</P>
        <P>constructor () public ERC20(“MyCoin”, “MYC”) </P>
        <P>Underneath, the line of code is specifying how many tokens you would like to mint. Adjust to the amount you desire accordingly.</P>
        <P><Img src="https://moralis.io/wp-content/uploads/2021/07/Skarmavbild-2021-07-26-kl.-08.40.02-1024x281.png" alt=""/></P>
        <P>After, the mint function confirms that all the tokens minted will be sent to the wallet address of the creator of the smart contract. “msg.sender” refers to whoever is interacting with the smart contract upon deployment. The information following this specifies the decimal places of the coin. None of this section needs adjusting. See how easy it is how to create a Polygon token of your own when using Moralis!</P>
        <H3 id="4-compile-the-contract">4. Compile the Contract</H3>
        <P>The next step involves the contract being compiled to ensure the smart contract is valid and doesn’t have any bugs. To do this, you will need to select “Compiler” (second image down on the left-hand menu) and choose the Solidity version used in your contract. The Solidity versions must be the same. Then, simply click “Compile”. When it’s finished, a green tick image will appear next to the compiler image on the left. Then, you can select “Deploy &amp; Run Transactions” using the Ethereum graphic below the compiler.</P>
        <P><Img src="https://moralis.io/wp-content/uploads/2021/07/Skarmavbild-2021-07-26-kl.-08.42.17-1024x855.png" alt=""/></P>
        <H3 id="5-deploy-create-your-polygon-network-token-">5. Deploy &amp; Create Your Polygon Network Token!</H3>
        <P>In this section you will need to ensure the environment menu at the top has “Injected Web3” selected. Underneath, the “Account” will show the wallet address to which the tokens will be sent upon deployment.</P>
        <P><img src="https://moralis.io/wp-content/uploads/2021/07/Skarmavbild-2021-07-26-kl.-08.54.03-650x1024.png" alt=""/></P>
        <P>Ensure your MetaMask wallet is connected to the Polygon Mumbai testnet network before clicking “deploy”. After, you will be prompted by MetaMask to confirm the transaction alongside being presented with the gas fee for doing so. Click “confirm”!</P>
        <H2 id="how-to-view-your-polygon-network-token">How To View Your Polygon Network Token</H2>
        <P>Congratulations! Now, you know how to create a token on Polygon Network (previously Matic network). Follow these last few steps to learn how you can view your newly-minted tokens.</P>
        <P>Your first option is to follow the link from the confirmation pop-up to the Polygon block explorer and see the transaction confirmed with the token and wallet address. Alternatively, if you missed the pop-up, you can go to the Polygon block explorer directly and enter your MetaMask wallet address. This will call up your latest confirmed transaction with this address including the address of your newly minted tokens.</P>
        <P><Img src="https://moralis.io/wp-content/uploads/2021/07/Skarmavbild-2021-07-26-kl.-08.54.15-585x1024.png" alt=""/></P>
        <P>To see your tokens in your MetaMask wallet, copy the token wallet address then click on MetaMask. Scroll down to “Add Token”, then paste your new token address into the prompted “Token Contract Address” field. It should automatically fill in the token ticker and decimal places, so then you just need to click “Next” and you can see all your newly minted tokens in your MetaMask wallet!</P>
    </div>
    </TokenContainer>
  )
}

export default CreateTokenPage