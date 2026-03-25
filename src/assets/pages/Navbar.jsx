// import React from 'react'

// const Navbar = () => {

//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="logo">
//         <a href="/">
//         <img src="/public/favicon.svg" alt="" />
//         </a>
//       </div>
      
//     </nav>
//   )
// }
// export default Navbar

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/favicon.svg" alt="logo" />
        </Link>
      </div>

      {/* Menu Icon (Mobile) */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

    </nav>
  )
}

export default Navbar
