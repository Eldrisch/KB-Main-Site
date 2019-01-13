import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/Main.css';
import '../styles/Nav.css';
import Home from './pages/homePage';
import About from './pages/aboutPage';
import Skills from './pages/mySkillsPage';
import Projects from './pages/myProjectsPage';
import Contact from './pages/contactPage';

class Main extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  scrollToMyRef = () => {
    this.myRef.current.scrollIntoView(); // {behavior:'smooth'} buguje automatyczny scroll :/
  }
  render() {
    window.onscroll = function () {
      // ogólnie to cała ta funckja jest moją zmorą ... ma działać nie smakować
      const nav = document.getElementById('nav_content');
      const main = document.getElementById('main_content');
      let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      if (scrollTop + 100 >= main.offsetTop ) {
        nav.style.position = "fixed";
        main.style.marginTop = `${window.innerHeight/100*5}px`; // rozkmina nad tym była gruba, kolejny dowód na to że najprostsze rozwiązania są najlepsze :)
        nav.style.marginTop = "-97.5vh";
        nav.style.backgroundColor = "rgb(11, 11, 33)";
      } else {
        nav.style.position = "static";
        main.style.marginTop = "0px";
        nav.style.marginTop = "0px";
        nav.style.backgroundColor = "rgba(0,0,0,0)";
      }
    }
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    return (
      <Router>
        <div className="main_container">
          <div id="nav_content" className="nav_content">
            <nav className="navigation_bar">
              <Link to="/" onClick={this.scrollToMyRef}>Strona główna</Link>
              <Link to="/about/" onClick={this.scrollToMyRef}>O mnie</Link>
              <Link to="/skills/" onClick={this.scrollToMyRef}>Moje umiejętności</Link>
              <Link to="/projects/" onClick={this.scrollToMyRef}>Moje projekty</Link>
              <Link to="/contact/" onClick={this.scrollToMyRef}>Kontakt</Link>
            </nav>
          </div>
          <div id="main_content" className="main_content" ref={this.myRef}>
            <Route exact path="/" component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/skills/" component={Skills} />
            <Route path="/projects/" component={Projects} />
            <Route path="/contact/" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
