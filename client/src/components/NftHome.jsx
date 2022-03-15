import NftWalletBalance from './NftWalletBalance';
import { useEffect, useState } from 'react';
import {randomQuotes} from "../utils/randomquotes"
import { ethers } from 'ethers';
import FiredGuys from '../utils/nft.json';
import { YoutubeEmbed } from './Youtube';
import { Transactions } from './Transactions';


const contractAddress = '0x0811Ff6Af9d6cdBEF3388c8ed18a42d20cbaE5A9';

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, FiredGuys.abi, signer);
//console.log(contract);

function Home() {

  const [totalMinted, setTotalMinted] = useState(0);
  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    //console.log(parseInt(count));
    setTotalMinted(parseInt(count));
  };

  return (
    <>
    <div style={{width:'100%', margin:'0 auto'}} className='flex flex-col md:p-12 py-12 px-4 text-white'>
        <NftWalletBalance />
        <h1 className='text-white text-3xl text-center my-4'>Nft Collection</h1>

        <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap', justifyContent:'center'}} >        

        {Array(totalMinted + 1)
        .fill(0)
        .map((_, i) => (
            
            <NFTImage key={i} tokenId={i} getCount={getCount} />
            
        ))}
        </div>
    </div>
    <Transactions/>
     {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6rem'}}>
        <YoutubeEmbed embedId="meTpMP0J5E8" />
    </div> */}
    </>
  );
}

function NFTImage({ tokenId, getCount }) {
    const contentId = 'QmReCsNbeX8eAcFDt4cfpTuH7rPv56RkStFGo3RSPBbSrv';
    const metadataURI = `${contentId}/${tokenId}.json`;
    const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;
  
    const [isMinted, setIsMinted] = useState(false);
    useEffect(() => {
      getMintedStatus();
    }, [isMinted]);
  
    const getMintedStatus = async () => {
      const result = await contract.isContentOwned(metadataURI);
      //console.log(result)
      setIsMinted(result);
    };
  
    const mintToken = async () => {
      const connection = contract.connect(signer);
      const addr = connection.address;
      const result = await contract.payToMint(addr, metadataURI, randomQuotes[Math.floor(Math.random()*randomQuotes.length)].text, "nft",  {
        value: ethers.utils.parseEther('0.05'),
      });
  
      await result.wait();
      getMintedStatus();
      getCount();
    };
  
    async function getURI() {
      const uri = await contract.tokenURI(tokenId);
      //console.log(uri)
      alert(uri);
    }
    return (
     
      <div >

        <div className='p-5  sm:w-44 w-full flex flex-col justify-start items-center blue-glassmorphism mb-5 mr-8'>

          {/* <img className='p-10' src={isMinted ? imageURI : 'img/placeholder.png'}></img>   */}
          <img src={`public/build/images/${tokenId}.png`} />
          <h5>ID #{tokenId}</h5>
          {!isMinted ? (
            <button className='text-white w-full mt-2  py-2 px-4 bg-[#3d4f7c] rounded cursor-pointer' onClick={mintToken}>
              Mint
            </button>
          ) : (
            <button className='text-white w-full mt-2  py-2 px-4 bg-[#3d4f7c] rounded cursor-pointer'  onClick={getURI}>
              Taken! Show URI
            </button>
          )}
        </div>
        
      </div>
     
    );
  }
  
  export default Home;