import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layouts from "./routes";
import ConnectWalletButton from "./components/ConnectWalletButton/ConnectWalletButton";
import Cookies from "js-cookie";

function App() {
  const [account, setAccount] = useState(null);

  const handleDisconnect = () => {
    // Cookies.remove("account");
    setAccount(null);
  };

  const updateAccount = async () => {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length > 0 && accounts[0] !== account) {
      setAccount(accounts[0]);
      // Cookies.set("account", accounts[0], { expires: 7 });
    }
  };

  useEffect(() => {
    updateAccount();
    window.ethereum.on("accountsChanged", updateAccount);
    window.ethereum.on("disconnect", handleDisconnect);

    return () => {
      window.ethereum.removeListener("accountsChanged", updateAccount);
      window.ethereum.removeListener("disconnect", handleDisconnect);
    };
  }, [account]);

  return (
    <Router>
      {account ? (
        <Layouts account={account} />
      ) : (
        <ConnectWalletButton account={account} updateAccount={updateAccount} />
      )}
    </Router>
  );
}

export default App;
