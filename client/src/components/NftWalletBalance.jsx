import { useState } from 'react';
import { ethers } from 'ethers';

function NftWalletBalance() {

    const [balance, setBalance] = useState();
    
    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        console.log(account, provider ,balance);
        setBalance(ethers.utils.formatEther(balance));
    };
  
    return (
      <div className='ml-20'>
        
          <h5>Your Balance: {balance}</h5>
          <button className='text-white mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer' onClick={() => getBalance()}>Show My Balance</button>
      </div>
    );
  };
  
  export default NftWalletBalance;