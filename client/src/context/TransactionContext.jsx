import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;


const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

    console.log({
   provider,
    signer,
    transactionContract
 });


}



export const TransactionProvider = ({ children }) => {

    const [ currentAccount, setCurrentAccount ] = useState('')

    const checkIfWalletIsConnected = async ()=>{
        if(!ethereum) return alert("Please install metamask")

        const accounts = await ethereum.request({ method: 'eth_accounts'});

        setCurrentAccount(accounts[0])
    }

    const connectWallet = async () =>{
        try {
            if(!ethereum) return alert("Please install metamask")

        const accounts = await ethereum.request({ method: 'eth_requestAccounts'});

        setCurrentAccount(accounts[0]);

        } catch (error) {
            console.log(error)

            throw new Error('No ethereum object.')
        }
    }

    useEffect(()=>{
        checkIfWalletIsConnected();
        window.ethereum.on("accountsChanged", async (e)=>{console.log("Account changed");
        const accounts = await ethereum.request({ method: 'eth_requestAccounts'});

        setCurrentAccount(accounts[0]);
    })

    }, []);

    const checkWallet = async ()=>{
        try{
            const permissions = await ethereum.request({
                method: 'wallet_requestPermissions',
                params: [{
                eth_accounts: {},
                }]
                }); 

            setCurrentAccount(permissions[0])
        } catch (error){
            setCurrentAccount(null)
        }

    }

    return (
        <TransactionContext.Provider value={{connectWallet, currentAccount, setCurrentAccount, checkWallet}}>
            { children }
        </TransactionContext.Provider>
    );
}