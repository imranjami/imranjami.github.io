import React, { Component } from 'react';
import './css/Project.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import ProjectCard from './ProjectCard'
import cheatSheet from "./images/cheat-sheet.png";

class Project extends Component {

  render() {
    const card_0_data = {
                      image: cheatSheet,
                      title: "Cheat-Sheet.css",
                      description: "Less time googling, more time creating",
                      indx: 0,
                      hover: {x: -15, y: -15}
                    };
    const card_1_data = {
                      image: cheatSheet,
                      title: "Cheat-Sheet.css",
                      description: "Less time googling, more time creating",
                      indx: 1,
                      hover: {x: -15, y: -15}
                    };
    const card_2_data = {
                      image: cheatSheet,
                      title: "Cheat-Sheet.css",
                      description: "Less time googling, more time creating",
                      indx: 2,
                      hover: {x: -15, y: -15}
                    };
    const card_3_data = {
                      image: cheatSheet,
                      title: "Cheat-Sheet.css",
                      description: "Less time googling, more time creating",
                      indx: 3,
                      hover: {x: -5, y: -5}
                    };
    const card_4_data = {
                      image: cheatSheet,
                      title: "Cheat-Sheet.css",
                      description: "Less time googling, more time creating",
                      indx: 4,
                      hover: {x: -5, y: -5}
                    };
    const card_5_data = {
                      image: cheatSheet,
                      title: "Cheat-Sheet.css",
                      description: "Less time googling, more time creating",
                      indx: 5,
                      hover: {x: -5, y: -5}
                    };


    return (
      <ScrollableAnchor id={"projects"}>
        <div className="projects">
          <h2 className="title left-justified">Portfolio<span className="site-accent">.</span></h2>

          <div className="card_container">

              <ProjectCard
                card_data = {card_0_data}/>
              
              <ProjectCard
                card_data = {card_1_data}/>
              
              <ProjectCard
                card_data = {card_2_data}/>
              
              <ProjectCard
                card_data = {card_3_data}/>
              
              <ProjectCard
                card_data = {card_4_data}/>
              
              <ProjectCard
                card_data = {card_5_data}/>
              
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Project;
