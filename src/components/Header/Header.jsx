import React from "react";
import Logo from "../Logo/Logo";

import Navigation from "../Navigation/Navigation";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo className="header__logo">NL Label</Logo>

      <Navigation />
    </header>
  );
};

export default Header;
