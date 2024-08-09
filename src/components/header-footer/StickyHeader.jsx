import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
