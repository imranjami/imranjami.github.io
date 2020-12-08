import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {

  render() {
    return (
      <nav>
        <a href="index.html">
          <h1 className="header">Imran Jami<span className="site-accent">.</span></h1>
        </a>
        <div className="navbar">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="../data/imran_jami_resume.pdf" target="_blank" className="resume">Resume</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
