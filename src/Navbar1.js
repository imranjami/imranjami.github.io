;<motion.div
  initial={{
    opacity: 0
  }}
  animate={{
    opacity: 1
  }}
  transition={{
    duration: 1
  }}
>
  <div className="navbar__mobile">
    <div className="navbar__mobile__menuicon">
      <span
        className={clicked ? "fas fa-times" : "fas fa-bars"}
        onClick={() => setClicked(!clicked)}
      ></span>
    </div>

    <p className="navbar__mobile__title">Imran Jami.</p>
  </div>

  <div className={clicked ? "navbar" : "navbar slideout"}>
    <Link
      activeClass="active"
      to="splash"
      spy={true}
      offset={-30}
      smooth={true}
      duration={500}
    >
      <motion.h1
        className="header"
        whileHover={{ scale: 1.05, cursor: "pointer" }}
      >
        Imran Jami<span className="site-accent">.</span>
      </motion.h1>
    </Link>

    <ul className="navbar">
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        offset={-30}
        smooth={true}
        duration={500}
      >
        <li>
          <motion.a whileHover={{ scale: 1.05 }} className="btn btn-med word">
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
      >
        <li>
          <motion.a whileHover={{ scale: 1.05 }} className="btn btn-med word">
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
        >
          Resume
        </motion.a>
      </li>
    </ul>
  </div>
</motion.div>
