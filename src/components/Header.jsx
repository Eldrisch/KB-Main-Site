import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="site_title">
          <h3>Kacper Baranowski</h3>
          <h6>strona portfolio</h6>
        </div>
      </header>
    );
  }
}

export default Header;
