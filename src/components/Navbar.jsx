import "../assets/css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={() => setOpen(false)}>
        Simran
      </Link>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? "x" : "="}
      </div>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <div className="center-links">
          {isHomePage ? (
            <>
              <a href="#home" onClick={() => setOpen(false)}>Home</a>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
            </>
          ) : (
            <>
              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              <a href="/#about" onClick={() => setOpen(false)}>About</a>
            </>
          )}
        </div>

        <div className="right-links">
          {location.pathname === "/login" ? (
            <Link to="/signup" onClick={() => setOpen(false)}>Sign Up</Link>
          ) : location.pathname === "/signup" ? (
            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

