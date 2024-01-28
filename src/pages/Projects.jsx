import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              href="https://ashu-30781.github.io/car-one-website/"
              imgPath={lift}
              isBlog={false}
              title="car-one-website"
              description="Car-One is a car rental website that makes renting process of a car easy
              Working on my on in this project currently and The idea behind this project to make
              changes in
              some traditional ways of renting with the help of technology and a new way of renting
              Technologies used in website HTML,CSS,JAVASCRIPT."
              ghLink=""
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Amazon-clone"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui Technologies used in website HTML,CSS,JAVASCRIPT."
              ghLink="https://github.com/ashu-30781/amazon-clone"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui Technologies used in website HTML,CSS,JAVASCRIPT"
              ghLink="https://github.com/ashu-30781?tab=repositories"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Ghost Pong"
              description=" Ghost Pong is an ping pong game that uses java script for logical funmctions
              Working on my on in this project currently
              Technologies used in website HTML,CSS,JAVASCRIPT Ghost Pong is an ping pong game that uses java script for logical funmctions
              Working on my on in this project currently
              Technologies used in website HTML,CSS,JAVASCRIPT  ."
              ghLink="https://github.com/ashu-30781/ghost-pong"
              demoLink="https://ashu-30781.github.io/ghost-pong/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Weather App with js"
              description="
              Real-time Weather Information with latest Api use
              Technologies used in website HTML,CSS,JAVASCRIPT
              Real-time Weather Information with latest Api use
              Technologies used in website HTML,CSS,JAVASCRIPT
              Real-time Weather Information with latest Api use
              Technologies used in website HTML,CSS,JAVASCRIPT"
              ghLink="https://github.com/ashu-30781/Weather-App-with-js"
              demoLink="https://ashu-30781.github.io/Weather-App-with-js/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Zoomcar clone"
              description="Real-time Weather Information with latest Api use
              Technologies used in website HTML,CSS,JAVASCRIPT
              Real-time Weather Information with latest Api use
              Technologies used in website HTML,CSS,JAVASCRIPT
              Real-time Weather Information with latest Api use
              Technologies used in website HTML,CSS,JAVASCRIPT"
              ghLink="https://github.com/ashu-30781/zoomcar-clone-main"
              demoLink="https://ashu-30781.github.io/zoomcar-clone-main/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects