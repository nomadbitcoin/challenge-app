import React from "react";
import Web3 from "web3";

function ConnectWalletButton(props) {

  async function connectWallet() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        props.setAccount(accounts[0]);
        localStorage.setItem("account", accounts[0]);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div>
      {props.account ? (
        <p>Conectado com a carteira {props.account}</p>
      ) : (
        <button onClick={connectWallet}>Conectar carteira</button>
      )}
    </div>
  );
}


export default ConnectWalletButton;
