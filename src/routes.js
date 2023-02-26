// routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";
import ConnectWalletButton from './components/ConnectWalletButton/ConnectWalletButton';
import SignInForm from './components/SignInForm/SignInForm';
import UserCheck from './components/UserCheck/UserCheck';

function Home() {
  return <h1>Welcome to the homepage!</h1>;
}

const Layouts = (props) => {
  const userAddress = props.account;

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <UserCheck
            userAddress={userAddress}
            notRegisteredElement={<SignInForm />}
            registeredElement={<Home />}
          />
        }
      />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/perfil" component={TaskList} /> */}
    </Routes>
  );
};
 
export default Layouts;
