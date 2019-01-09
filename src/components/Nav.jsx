import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <nav className="navigation_bar" ref={this.myRef}>
        <Link to="/" onClick={this.scrollToMyRef}>Strona główna</Link>
        <Link to="/about/" onClick={this.scrollToMyRef}>O mnie</Link>
        <Link to="/skills/" onClick={this.scrollToMyRef}>Moje umiejętności</Link>
        <Link to="/projects/" onClick={this.scrollToMyRef}>Moje projekty</Link>
        <Link to="/contact/" onClick={this.scrollToMyRef}>Kontakt</Link>
      </nav>
    );
  }
  scrollToMyRef = () => {
    window.scrollTo({
      top: this.myRef.current.offsetTop,
      behavior: "smooth"
    })
  }
}

export default Nav;
