import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import App from "../src/App";

describe("ConnectWalletButton", () => {
  it("displays the connect wallet button if the user has not connected their wallet", () => {
    render(<App />);

    const connectButton = screen.getByRole("button", {
      name: "Conectar carteira"
    });

    expect(connectButton).toBeInTheDocument();
  });

  it("does not display the connect wallet button if the user has connected their wallet", async () => {
    const mockAccounts = ["0x0BB56447B1e484C3486AC033a2A1DDE4f13efEF5"];
    window.ethereum = {
      request: jest.fn(() => Promise.resolve(mockAccounts[0])),
      isMetaMask: true
    };

    render(<App />);

    const connectButton = screen.getByRole("button", {
      name: "Conectar carteira"
    });
    fireEvent.click(connectButton);

    await waitFor(() => {
        const connectButtonPresent = screen.queryByRole("button", {
          name: "Conectar carteira"
        });
        expect(connectButtonPresent).not.toBeInTheDocument();
    });
  });
});
