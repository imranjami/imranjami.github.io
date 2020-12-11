import React, { Component, useState, useEffect } from 'react';
import './css/App.css';
import Navbar from './Navbar'
import Socials from './Socials'
import "bootstrap/dist/css/bootstrap.min.css";
import imran_jami from "./images/jami.svg";
import imran_phantom from "./images/phantom.svg";
import { motion } from "framer-motion"
import Project from './Project'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Theme"


function App () {

  const [theme, setTheme] = useState('light');
  const [imageIndex, setImageIndex] = useState(false);
  const images = [imran_jami, imran_phantom];
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    setImageIndex(!imageIndex);
  }
  const bio = ['Im a Full-Stack Software Engineer from', <br />, 'San Francisco, CA'];

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles/>
      <div className="main">
        <Navbar />
        <Socials toggle={themeToggler}/>

        <div className="splash">
          <div className="content">
            <div className="container">
              <div className="row">
                <motion.div className="col"
                  initial={{x: "-50vw"}}
                  animate={{x: 0}}
                  transition={{duration: 1}}>
                  <img
                    className="imran_jami"
                    src={images[~~imageIndex]}
                  ></img>
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
          </div>
        </div>

        <Project />
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;
