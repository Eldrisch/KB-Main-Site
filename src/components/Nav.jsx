import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="navigation_bar">
        <Link to="/">Strona główna</Link>
        <Link to="/about/">O mnie</Link>
        <Link to="/skills/">Moje umiejętności</Link>
        <Link to="/projects/">Moje projekty</Link>
        <Link to="/contact/">Kontakt</Link>
      </nav>
    );
  }
}

export default Nav;
