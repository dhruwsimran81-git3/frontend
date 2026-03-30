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
          <Link to="/about"> About</Link>
        </div>

        <div className="right-links">
          {location.pathname === "/login" ? (
            <Link to="/signup">Signup</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

