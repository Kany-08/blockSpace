import React from "react";
import { useContext } from "react"; 
import { TransactionContext } from "../context/TransactionContext";

export default function Wallet() {

    const { currentAccount, connectWallet } = useContext(TransactionContext)

  return (
    <div>
      {!currentAccount && (
        <button
          type="button"
          onClick={connectWallet}
          className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          <p className="text-white text-base font-semibold">
            {currentAccount ? "disconnect" : "connect wallet"}
          </p>
        </button>
      )}
    </div>
  );
}
