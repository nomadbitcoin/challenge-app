import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import App from "../src/App";

describe("SignInForm", () => {
  xit("displays the signIn form after the user connects their wallet", async () => {
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
    
    const nameInput = screen.getByLabelText('Nome:');
    const whatsappInput = screen.getByLabelText('Whatsapp:');
    const valueInput = screen.getByLabelText('Valor:');
    const submitButton = screen.getByText('Cadastrar');
    expect(nameInput).toBeInTheDocument();
    expect(whatsappInput).toBeInTheDocument();
    expect(valueInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});