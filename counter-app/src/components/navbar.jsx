import React, { Component } from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  // ({totalCounter}) == Object destructuring
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary ml-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
