import React from "react";
import "./Switcher.scss";
import iconSun from "../../images/desktop/icon-sun.svg";
import iconMoon from "../../images/desktop/icon-moon.svg";

const Switcher = ({ toggleTheme }) => {
  const handleChange = (e) => {
    e.target.checked ? toggleTheme("dark") : toggleTheme("ligth");
  };

  return (
    <div className="switch-theme">
      <span>
        <img src={iconSun} alt="Ligth mode" />
      </span>
      <label className="switch">
        <input type="checkbox" onChange={handleChange} />
        <span className="slider"></span>
      </label>
      <span>
        <img src={iconMoon} alt="Dark mode" />
      </span>
    </div>
  );
};

export default Switcher;
