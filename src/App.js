import React, { Component, useState, useEffect } from 'react';
import './css/App.css';
import Navbar from './Navbar';
import Socials from './Socials';
import "bootstrap/dist/css/bootstrap.min.css";
import imran_jami from "./images/jami.svg";
import imran_phantom from "./images/phantom.svg";
import { motion } from "framer-motion";
import Project from './Project';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Theme";
import about_me from "./images/imran_about_me.jpg";
import ScrollableAnchor from 'react-scrollable-anchor';


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
        {/* Splash Page with image + text */}
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
        {/* About me section */}
        <ScrollableAnchor id={"about_me"}>
          <div>
            <h2 className="title centered">About Me<span className="site-accent">.</span></h2>
            <div className="container">
              <div className="row">
                <div className="col">
                  <p className="right-justified">blah blah blah blah blah blah blah blah blah. blah blah blah blah blah blah blah blah blah.
                    blah blah blah blah blah blah blah blah blah.blah blah blah blah blah blah blah blah blah.
                    blah blah blah blah blah blah blah blah blah.blah blah blah blah blah blah blah blah blah.
                    blah blah blah blah blah blah blah blah blah.blah blah blah blah blah blah blah blah blah.
                    blah blah blah blah blah blah blah blah blah.blah blah blah blah blah blah blah blah blah.
                    blah blah blah blah blah blah blah blah blah.blah blah blah blah blah blah blah blah blah.
                    blah blah blah blah blah blah blah blah blah.
                  </p>
                </div>
                <div className="col">
                  <img
                    className="about_me"
                    src={about_me}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
        <footer>
          <p className="footer"> Designed and built by Imran Jami </p>
        </footer>
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;
