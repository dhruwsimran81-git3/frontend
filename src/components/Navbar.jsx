import "../assets/css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="logo">Simran</h2>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? "x" : "="}
      </div>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <div className="center-links">
          <Link to="/">Home</Link>
          {/* <a href="#home">Home</a> */}
          <Link to="/about">About</Link>
          {/* <a href="#about">About</a> */}
        </div>

        <div className="right-links">
          {location.pathname === "/login" ? (
            <Link to="/signup">Signup</Link>
            // <a href="#signup">Signup</a>
          ) : (
            <Link to="/login">Login</Link>
            // <a href="#login">Login</a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

