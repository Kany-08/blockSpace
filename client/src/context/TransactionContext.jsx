import React, { useEffect, useState, useContext, createContext } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress, nftAddress,nftAbi } from '../utils/constants';

export const TransactionContext = createContext();

const { ethereum } = window;

//export const Crypto = createContext()

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
   
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
  
    const nftContract = new ethers.Contract(nftAddress, nftAbi, signer);

    return {transactionContract, nftContract};
    
  
}   





export const TransactionProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({addressTo: "", amount: "", keyword: "", message: ""});
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
    const [transactions, setTransactions] = useState([])

    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}));
    }

    const getAllTransactions = async () => {
        try {
            if(!ethereum) return alert("Please install Metamask");
            const {transactionContract, nftContract} = getEthereumContract();
            const availableTransactions = await transactionContract.getAllTransactions();
            // console.log(nftContract)
            const nftAvailableTransactions = await nftContract.getAllTransactions();
            console.log(nftAvailableTransactions, availableTransactions )

            const structuredTransactions = availableTransactions.map((transaction) => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                message:transaction.message,
                keyword: transaction.keyword,
               
                amount: parseInt(transaction.amount._hex) / (10 ** 18)
                
            }))

            const nftStructuredTransactions = nftAvailableTransactions.map((transaction) => ({
                addressTo: currentAccount,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                message:transaction.message,
                keyword: transaction.keyword,
               
                amount: parseInt(transaction.amount._hex) / (10 ** 18)
                
            }))

            console.log(structuredTransactions)
            console.log(nftStructuredTransactions)

            setTransactions([...structuredTransactions, ...nftStructuredTransactions])
        } catch (error) {
            console.log(error)
        }
    }
    
    const checkIfWalletIsConnected = async () => {

        try {
            if(!ethereum) return alert("Please install Metamask");

            const accounts = await ethereum.request({ method: 'eth_accounts'});
            console.log(accounts[0]);
    
            if(accounts.length) {
                setCurrentAccount(accounts[0]);
    
                getAllTransactions();
            } else {
            console.log('No accounts found');
            }
            
        } catch (error) {
          console.log(error);

          throw new Error("No ethereum object.")
        }  
    }

    const checkIfTransactionsExist = async () => {
        try {
            const {transactionContract, nftContract} = getEthereumContract();
            console.log(transactionContract, nftContract)
            const transactionCount = await transactionContract.getTransactionCount();
            const nftCount = await nftContract.count();

            window.localStorage.setItem("transactionCount", transactionCount)
            window.localStorage.setItem("nftCount", nftCount)
        } catch (error) {
            console.log(error);

          throw new Error("No ethereum object.")
            
        }
    }

    const connectWallet = async () => {
        try {
          if(!ethereum) return alert("Please install Metamask");

          const accounts = await ethereum.request({ method: 'eth_requestAccounts'});

          setCurrentAccount(accounts[0]);

        } catch (error) {
          console.log(error);

          throw new Error("No ethereum object.")
        }
    }


    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert("Please install Metamask");
            
            const { addressTo, amount, keyword, message } = formData;
            const {transactionContract} = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                from: currentAccount,
                to: addressTo,
                gas: "0x5208", //2100 GWEI
                value: parsedAmount._hex, //0.00001
                }]
            });

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`Success - ${transactionHash.hash}`);

            const transactionCount = await transactionContract.getTransactionCount();

            setTransactionCount(transactionCount.toNumber());

            window.reload()

        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.")
            
        }
    }
    useEffect(()=>{
        checkIfWalletIsConnected();
        checkIfTransactionsExist();
        window.ethereum.on("accountsChanged", async (e)=>{console.log("Account changed");
        const accounts = await ethereum.request({ method: 'eth_requestAccounts'});

        setCurrentAccount(accounts[0]);
    })

    }, [currentAccount]);

    const [currency, setCurrency] = useState("USD");
    const [symbol, setSymbol] = useState("€");

    useEffect(() => {
        if (currency === "EURO") setSymbol("€");
        else if (currency === "USD") setSymbol("$");
    }, [currency]);

    return (
        <TransactionContext.Provider value={{ 
            connectWallet, 
            currentAccount,
            setCurrentAccount, 
            formData, setFormData, 
            handleChange, sendTransaction, 
            transactions, isLoading, 
            currency, symbol, setCurrency,setSymbol }}>

            { children }
        </TransactionContext.Provider>
    );
}



export const CryptoState = () => {
   return useContext(TransactionContext)
}