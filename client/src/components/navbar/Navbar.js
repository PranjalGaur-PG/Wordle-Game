import React from "react";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src={Logo} width="200" height="30" />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;