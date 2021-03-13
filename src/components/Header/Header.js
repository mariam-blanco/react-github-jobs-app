import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/desktop/logo.svg';
import Switch from '../Switch/Switch';


const Header = (props) => {

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <Switch toggleTheme={props.toggleTheme} />
    </header>
  );
};

export default Header;