import React from "react";
import { useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";

export default function Wallet() {

    const { currentAccount, connectWallet, msgbutton } = useContext(TransactionContext)
    const navigate = useNavigate()
  return (
    <div className='flex flex-col' >
     {!currentAccount && 
        <button
        style= {{ top: '450px'}}
          type="button"
          onClick={connectWallet}
          className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          <p className="text-white text-base font-semibold">
            {msgbutton}
          </p>
        </button>}
        <button
          type="button"
          onClick={()=>{navigate('/story')

            } 
          } 
          className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          <p className="text-white text-base font-semibold">
            Learn more
          </p>
        </button>

    </div>
  );
}
