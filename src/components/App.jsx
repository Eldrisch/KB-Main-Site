import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header_container">
          <Header></Header>
        </div>
        <div className="main_container">
          <Main></Main>
        </div>
        <div className="footer_container">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
