import React, { Component } from 'react';
import './css/Navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { motion } from "framer-motion"
import resume from "./data/imran_jami_resume.pdf";

class Navbar extends Component {

  render() {
    return (
      <motion.nav className="clearfix"
      initial={{y: -250}}
      animate={{y: 0}}
      transition={{type:"tween", duration: 0.5, delay: 1}}
      >
        <a href="#">
          <motion.h1 className="header"
            whileHover={{scale:1.05}} href="">Imran Jami<span className="site-accent">.</span>
          </motion.h1>
        </a>
        <div className="navbar">
          <ul>
            <li><motion.a whileHover={{scale:1.05}} href="#projects" className="btn btn-med word">Portfolio</motion.a></li>
            <li><motion.a whileHover={{scale:1.05}} href="#about_me" className="btn btn-med word">About Me</motion.a></li>
            <li><motion.a whileHover={{scale:1.05}} href={resume} without rel="noopener noreferrer" target="_blank" className="btn btn-outline-success btn-med">Resume</motion.a></li>
          </ul>
        </div>
      </motion.nav>
    );
  }
}

export default Navbar;
