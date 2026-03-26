
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Simran</h2>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? "x" : "="}
      </div>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;

