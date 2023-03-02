import React from "react";
import Web3 from "web3";

// Network ID for the Polygon Mumbai testnet
const networkId = "0x13881";

async function vefifyChain(){
  // Check if the current chain ID is correct
  const chainId = window.ethereum.networkVersion;
  if (chainId !== networkId) {
    // Prompt the user to switch to the correct network
    // setIsAddingChain(true);
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
  // setIsAddingChain(false);
}

function ConnectWalletButton(props) {
  // const [isAddingChain, setIsAddingChain] = useState(false);

  async function connectWallet() {
    if (window.ethereum) {
      console.log(window.ethereum.networkVersion, 'window.ethereum.networkVersion');
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        await vefifyChain()
        // if (!isAddingChain) {
        props.updateAccount(accounts[0]);
        // }
      } catch (error) {
        console.error(error);
      } finally {
        // setIsAddingChain(false);
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

export {ConnectWalletButton, vefifyChain};
