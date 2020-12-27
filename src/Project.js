import React, { Component } from "react"
import "./css/Project.css"
import ScrollableAnchor from "react-scrollable-anchor"
import ProjectCard from "./ProjectCard"
import cheatSheet from "./images/cheat-sheet.png"
import covid19 from "./images/covid-19.png"
import ether from "./images/ether.jpeg"
import jami from "./images/jami-logo.png"

class Project extends Component {
  render() {
    const card_0_data = {
      image: covid19,
      title: "Covid-19 Dashboard",
      description: "Check out live worldwide data for Covid-19.",
      indx: 0,
      hover: { x: -15, y: -15 },
      link: "https://covid-19-dashboard-a80eb.web.app/"
    }
    const card_1_data = {
      image: cheatSheet,
      title: "Cheat-Sheet.css",
      description: "Less time googling, more time creating.",
      indx: 1,
      hover: { x: -15, y: -15 },
      link: "https://cheatsheet-css.web.app/"
    }
    const card_2_data = {
      image: ether,
      title: "Blockchain File Repo",
      description: "Secure file storage system built on Ethereum.",
      indx: 2,
      hover: { x: -15, y: -15 },
      link: "https://github.com/imranjami/bcfilerepo"
    }
    const card_3_data = {
      image: jami,
      title: "Jami Apparel",
      description: "Desi culture recontextualized into modern streetwear.",
      indx: 3,
      hover: { x: -15, y: -15 },
      link: "https://jamiapparel.com/collections/frontpage"
    }

    return (
      <div className="projects" id="projects">
        <h2 className="title left-justified">
          Portfolio<span className="site-accent">.</span>
        </h2>

        <div className="card_container">
          <ProjectCard card_data={card_0_data} />

          <ProjectCard card_data={card_1_data} />

          <ProjectCard card_data={card_2_data} />

          <ProjectCard card_data={card_3_data} />
        </div>
      </div>
    )
  }
}

export default Project
