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
                  initial={{ x: "-50vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                ></motion.img>

                <motion.div
                  className="imran_jami_text"
                  initial={{ x: "50vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
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
                <p className="right-justified">
                  blah blah blah blah blah blah blah blah blah. blah blah blah
                  blah blah blah blah blah blah. blah blah blah blah blah blah
                  blah blah blah.blah blah blah blah blah blah blah blah blah.
                  blah blah blah blah blah blah blah blah blah.blah blah blah
                  blah blah blah blah blah blah. blah blah blah blah blah blah
                  blah blah blah.blah blah blah blah blah blah blah blah blah.
                  blah blah blah blah blah blah blah blah blah.blah blah blah
                  blah blah blah blah blah blah. blah blah blah blah blah blah
                  blah blah blah.blah blah blah blah blah blah blah blah blah.
                  blah blah blah blah blah blah blah blah blah.
                </p>
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