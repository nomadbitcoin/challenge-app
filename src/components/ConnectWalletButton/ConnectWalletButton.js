import React, { useState } from "react";
import Web3 from "web3";

function ConnectWalletButton() {
  const [account, setAccount] = useState("");

  async function connectWallet() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div>
      {account ? (
        <p>Conectado com a carteira {account}</p>
      ) : (
        <button onClick={connectWallet}>Conectar carteira</button>
      )}
    </div>
  );
}

export default ConnectWalletButton;
