import React, { Component } from 'react';
import './css/App.css';
import Navbar from './Navbar'
import Socials from './Socials'
import "bootstrap/dist/css/bootstrap.min.css";
import imran_jami from "./images/jami.svg";
import { motion } from "framer-motion"
import Project from './Project'



// <motion.img
//   className="imran_jami"
//   src={imran_jami}
//   animate={{y:[10, -7, 15, 0, 6, -10]}}
//   transition={{type: "spring", duration: 5, delay: 2, yoyo: Infinity}}></motion.img>
class App extends Component {

  render() {
    const bio = ['Im a Full-Stack Software Engineer from', <br />, 'San Francisco, CA'];
    return (
      <div className="main">
        <Navbar />
        <Socials />

        <div className="container">
          <div className="row">
            <motion.div className="col"
              initial={{x: "-50vw"}}
              animate={{x: 0}}
              transition={{duration: 1}}>
              <motion.img
                className="imran_jami"
                src={imran_jami}
              ></motion.img>
            </motion.div>
            <motion.div className="col"
              initial={{x: "50vw"}}
              animate={{x: 0}}
              transition={{duration: 1}}>
              <div className="imran_jami_text">
                <p>Hey,</p>
                <h2 className="title">I’m Imran<span className="site-accent">.</span></h2>
                <p>
                  {bio}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <Project />
      </div>
    );
  }
}

export default App;
