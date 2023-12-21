import React from "react";
import logo from "../assets/TsukidenLogo.png";
import userImage from "../assets/Male User.png"

const Navbar = () => {
  return (
    <div>
      <section className="Navbar">
        <section className="logoAndButton">
          <img src={logo} alt="logo" />
          <nav>
            <a href="#">Dashboard</a>
            <a href="#">Profile</a>
            <a href="#">My Course</a>
            <a href="#">Forum</a>
          </nav>
        </section>
        <button className="logoutBtn">Logout</button>
      </section>
    </div>
  );
};

export default Navbar;
