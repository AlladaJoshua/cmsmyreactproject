import React, { useState } from "react";
import "../CSS/HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="menu-list">
        <li onClick={closeMenu}><a href="#">Dashboard</a></li>
        <li onClick={closeMenu}><a href="#">Profile</a></li>
        <li onClick={closeMenu}><a href="#">My Course</a></li>
        <li onClick={closeMenu}><a href="#">Forum</a></li>
        <li onClick={closeMenu}><button className="logoutBtn_Mobile">Logout</button></li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
