import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../images/desktop/logo.svg";
import Switcher from "../Switcher/Switcher";

const Header = ({ toggleTheme }) => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <Switcher toggleTheme={toggleTheme} />
    </header>
  );
};

export default Header;
