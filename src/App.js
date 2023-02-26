import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layouts from "./routes";
import ConnectWalletButton from "./components/ConnectWalletButton/ConnectWalletButton";

function App() {
  const [account, setAccount] = useState(localStorage.getItem("account") || null);

  return (
    <Router>
      {account ? <Layouts account={account}/> : <ConnectWalletButton account={account} setAccount={setAccount} />}
    </Router>
  );
}

export default App;
