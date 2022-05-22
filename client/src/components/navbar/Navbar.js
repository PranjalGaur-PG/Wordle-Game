import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <img src={Logo} width="200" height="30" />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;