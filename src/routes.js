// routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";
import ConnectWalletButton from './components/ConnectWalletButton/ConnectWalletButton';
import SignInForm from './components/SignInForm/SignInForm';

function Home() {
  return <h1>Welcome to the homepage!</h1>;
}

const Layouts = () => {
  return (
    <Routes>
      <Route path="/home" element={<SignInForm/>} />
      {/* <Route path="/home" component={AddTaskForm} /> */}
      {/* <Route path="/perfil" component={TaskList} /> */}
    </Routes>
  );
};
 
export default Layouts;
