// routes.js
import React from "react";
import { Route, Routes} from "react-router-dom";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import UserCheck from './components/UserCheck/UserCheck';

function Home() {
  return <h1>Welcome to the homepage!</h1>;
}

const Layouts = (props) => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <UserCheck
            userAddress={props.account}
            privateRoute={<Home />}
          />
        }
      />
      <Route
        path="/home"
        element={
          <UserCheck
            userAddress={props.account}
            privateRoute={<Home />}
          />
        }
      />
      <Route
        path="/profile"
        element={
          <UserCheck
            userAddress={props.account}
            privateRoute={<AddTaskForm />}
          />
        }
      />
    </Routes>
  );
};
 
export default Layouts;
