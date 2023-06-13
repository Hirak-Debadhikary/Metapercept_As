import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <p>Title</p>
        </div>
        <div className="navButtons">
          <p>Home</p>
          <p>About</p>
          <p>Blog</p>
          <p>Contact</p>
          <button>Button</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
