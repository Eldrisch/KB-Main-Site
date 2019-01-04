import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../styles/Main.css';
import Nav from './Nav';
import Home from './pages/homePage';
import About from './pages/aboutPage';
import Skills from './pages/mySkillsPage';
import Projects from './pages/myProjectsPage';
import Contact from './pages/contactPage';

class Main extends Component {
  render() {
    window.onscroll = function() {
      const nav = document.getElementById('nav_content');
      const main = document.getElementById('main_content');
      let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      if (scrollTop + 100 >= main.offsetTop) {
        nav.style.position = "fixed";
        main.style.marginTop = "30px";
        nav.style.marginTop = "-97.5vh";
        nav.style.backgroundColor = "rgb(11, 11, 33)";
      } else {
        nav.style.position = "static";
        main.style.marginTop = "0px";
        nav.style.marginTop = "0px";
        nav.style.backgroundColor = "rgba(0,0,0,0)";
      }
    }
    return (
      <Router>
        <div className="main_container">
          <div id="nav_content"className="nav_content">
            <Nav></Nav>
          </div>
          <div id="main_content"className="main_content">
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
