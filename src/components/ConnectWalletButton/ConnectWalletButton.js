import React, { useState, useEffect } from "react";
import Web3 from "web3";

// Network ID for the Polygon Mumbai testnet
const networkId = "0x13881";

function ConnectWalletButton(props) {
  const [isAddingChain, setIsAddingChain] = useState(false);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();

        // Check if the current chain ID is correct
        const chainId = await web3.eth.getChainId();
        if (chainId !== networkId) {
          // Prompt the user to switch to the correct network
          setIsAddingChain(true);
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: networkId,
              rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
              chainName: "Matic Mumbai Testnet",
              nativeCurrency: {
                name: "Matic",
                symbol: "MATIC",
                decimals: 18,
              },
              blockExplorerUrls: ["https://explorer-mumbai.maticvigil.com/"],
            }],
          });
        }
        setIsAddingChain(false);

        if (!isAddingChain) {
          props.updateAccount(accounts[0]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsAddingChain(false);
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
