import React, { Component } from 'react';
import './css/Navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { motion } from "framer-motion"

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
            whileHover={{scale:1.05}}>Imran Jami<span className="site-accent">.</span>
          </motion.h1>
        </a>
        <div className="navbar">
          <ul>
            <li><motion.a whileHover={{scale:1.05}} href="#" className="btn btn-med word">Home</motion.a></li>
            <li><motion.a whileHover={{scale:1.05}} href="#projects" className="btn btn-med word">Projects</motion.a></li>
            <li><motion.a whileHover={{scale:1.05}} href="./data/imran_jami_resume.pdf" target="_blank" className="btn btn-outline-success btn-med">Resume</motion.a></li>
          </ul>
        </div>
      </motion.nav>
    );
  }
}

export default Navbar;
