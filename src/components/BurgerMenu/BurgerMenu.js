import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { BrowserRouter, Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = ({ isOpen, onClose }) => {
  return (
    <BrowserRouter>
    <Menu isOpen={isOpen} onClose={onClose} width={'60%'} className="menu">
      <Link to="/" onClick={onClose}>
        <h3>Home</h3>
      </Link>
      <Link to="/add-task" onClick={onClose}>
        <h3>Add Task</h3>
      </Link>
      <Link to="/task-list" onClick={onClose}>
        <h3>Task List</h3>
      </Link>
    </Menu>
    </BrowserRouter>
  );
};

export default BurgerMenu;
