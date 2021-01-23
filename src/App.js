import React, { Component, useState, useEffect } from "react"

import "./css/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Navbar"
import Socials from "./Socials"
import Project from "./Project"
import { GlobalStyles } from "./GlobalStyles"
import { lightTheme, darkTheme } from "./Theme"

import { motion } from "framer-motion"
import { ThemeProvider } from "styled-components"

import imran_jami from "./images/jami.svg"
import imran_phantom from "./images/phantom.svg"
import about_me from "./images/imran_about_me.jpg"

function App() {
  const [theme, setTheme] = useState("dark")

  const images = [imran_jami, imran_phantom]
  const [imageIndex, setImageIndex] = useState(true)

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
    setImageIndex(!imageIndex)
  }

  const bio = [
    "Im a Full-Stack Software Engineer from",
    <br />,
    "San Francisco, CA"
  ]

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />

        <div className="app">
          <Navbar theme={theme} toggle={themeToggler} />
          <Socials className="socials" toggle={themeToggler} />
          {/* Splash Page with image + text */}

          <div className="app__container">
            <div className="app__splash" id="splash">
              <div className="container">
                <motion.img
                  className="imran_jami socials"
                  src={images[~~imageIndex]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                ></motion.img>

                <motion.div
                  className="imran_jami_text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <p>Hey,</p>
                  <h2 className="title">
                    I’m Imran<span className="site-accent">.</span>
                  </h2>
                  <p>{bio}</p>
                </motion.div>
              </div>
            </div>
            <Project />
            {/* About me section */}

            <div className="about_me_title" id="about_me">
              <h2 className="title centered">
                About Me<span className="site-accent">.</span>
              </h2>

              <div className="about_container">
                <div className="right-justified">
                  <p>
                    If you made it this far, congratulations! I'm a software
                    developer with a passion for developing beatiful products
                    that people love! Since graduating from UC Berkeley in 2018,
                    I have been working as a frontend engineer at Salesforce,
                    designed my own clothing line, and have been playing way too
                    much guitar...
                  </p>
                  <p>
                    I'm always open to hearing about exciting new projects, to
                    work on so feel free to reach out, or just say hello!
                  </p>
                </div>
                <img className="about_me" src={about_me}></img>
              </div>
            </div>

            <footer>
              <p className="footer"> Designed and built by Imran Jami </p>
            </footer>
          </div>
        </div>
      </>
    </ThemeProvider>
  )
}

export default App
