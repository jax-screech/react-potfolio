import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
// This code defines a functional component called Navbar that renders a navigation bar with links to different pages of the application. The component uses the Link component from react-router-dom to create client-side navigation links. The links are styled using CSS classes defined in an external stylesheet (not shown in this snippet). The Navbar component is exported for use in other parts of the application.