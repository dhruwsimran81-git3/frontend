// import './assets/css/style.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className='logo'>My App</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};
export default Navbar;