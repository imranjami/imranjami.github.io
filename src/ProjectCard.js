import React, { Component } from 'react';
import { motion } from "framer-motion"
import "shards-ui/dist/css/shards.min.css"
import './css/ProjectCard.css';
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

class ProjectCard extends Component {

  render() {
    const card_data = this.props.card_data;
    var crd = "card ";
    const crds = ["card-0", "card-1", "card-2", "card-3", "card-4", "card-5"];
    return (
      <motion.Card className={crd + crds[card_data.indx]}
        whileHover={card_data.hover}
        transition={{duration: 0.01}}>

        <CardImg className="round" src={card_data.image} />
        <CardBody>
          <CardTitle className={crds[card_data.indx] + "-title"}>{card_data.title}</CardTitle>
          <p>{card_data.description}</p>
        </CardBody>
      </motion.Card>
    )
  }
}

export default ProjectCard;
