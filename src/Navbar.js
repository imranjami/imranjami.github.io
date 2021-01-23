import React, { Component, useState } from "react"
import "./css/Navbar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import { motion } from "framer-motion"
import resume from "./data/Imran Resume 2021.pdf"
import { Link } from "react-scroll"

function Navbar({ theme, toggle }) {
  const [clicked, setClicked] = useState(false)

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 1,
        delay: 1.5
      }}
    >
      <div className="navbar__mobile">
        <div className="navbar__mobile__menuicon">
          <span
            className={clicked ? "fas fa-times" : "fas fa-bars"}
            onClick={() => setClicked(!clicked)}
          ></span>
          <Link
            activeClass="active"
            to="splash"
            spy={true}
            offset={-30}
            smooth={true}
            duration={500}
            onClick={() => setClicked(false)}
          >
            <motion.h1 className="navbar__mobile__title">
              Imran Jami<span className="site-accent">.</span>
            </motion.h1>
          </Link>
          <span
            className={theme === "light" ? "fas fa-moon" : "fas fa-lightbulb"}
            onClick={toggle}
          ></span>
        </div>
      </div>

      <div className={clicked ? "navbar" : "navbar slideout"}>
        <Link
          activeClass="active"
          to="splash"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
          className="navbar__header"
        >
          <motion.h1
            className="header"
            whileHover={{ scale: 1.05, cursor: "pointer" }}
          >
            Imran Jami<span className="site-accent">.</span>
          </motion.h1>
        </Link>

        <ul className="navbar__list">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            offset={-30}
            smooth={true}
            duration={500}
            onClick={() => setClicked(!clicked)}
          >
            <li>
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="btn btn-med word"
              >
                Portfolio
              </motion.a>
            </li>
          </Link>

          <Link
            activeClass="active"
            to="about_me"
            spy={true}
            offset={-30}
            smooth={true}
            duration={500}
            onClick={() => setClicked(!clicked)}
          >
            <li>
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="btn btn-med word"
              >
                About Me
              </motion.a>
            </li>
          </Link>
          <li>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={resume}
              without
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-outline-success btn-med"
              onClick={() => setClicked(!clicked)}
            >
              Resume
            </motion.a>
          </li>
          <li
            className={clicked ? "navbar__socials hidden" : "navbar__socials"}
          >
            <div>
              <a
                className="fab fa-instagram"
                href="https://www.instagram.com/artbyimran/"
                target="_blank"
                aria-label="Instagram"
              ></a>
              <a
                className="fab fa-github"
                href="https://github.com/imranjami"
                target="_blank"
                aria-label="Github"
              ></a>
              <a
                className="fab fa-linkedin"
                href="https://www.linkedin.com/in/imran-jami/"
                target="_blank"
                aria-label="Linkedin"
              ></a>
              <a
                className="far fa-envelope"
                href="mailto:imranajami@gmail.com"
                target="_blank"
                aria-label="Email"
              ></a>
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default Navbar
