import React, { Component } from 'react';
import './css/Socials.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { motion } from "framer-motion"


class Socials extends Component {
  render() {
    return (
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay: 2, duration: 1}}>
      <div orientation="left" className="social-nav-links">
        <ul>
          <li>
            <a href="https://github.com/imranjami" target="_blank" aria-label="GitHub">
              <motion.i
              whileHover={{scale:1.2}} className="fa fa-github"></motion.i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/imran-jami/" target="_blank" aria-label="LinkedIn">
              <motion.i
              whileHover={{scale:1.2}} className="fa fa-linkedin"></motion.i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" aria-label="Email">
              <motion.i
              whileHover={{scale:1.2}} className="fa fa-envelope-o"></motion.i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" aria-label="Instagram">
              <motion.i
              whileHover={{scale:1.2}} className="fa fa-instagram"></motion.i>
            </a>
          </li>
        </ul>
      </div>
      <div orientation="right" className="email-nav-link">
        <div className="email">
          <motion.a whileHover={{scale:1.2}} href="mailto:imranajami@gmail.com" className="fa fa-hand-o-up top-btn"></motion.a>
        </div>
      </div>
      </motion.div>
    );
  }
}

export default Socials;
