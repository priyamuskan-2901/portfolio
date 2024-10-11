import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import image from "../../Assets/Projects/image.png";
import image1 from "../../Assets/Projects/image1.png";
import image3 from "../../Assets/Projects/image3.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Shiv Shakti Hatcheries"
              description="Developed the frontend of a web application for Shiv Shakti Hatcheries using React and Tailwind CSS, ensuring a modern, responsive interface tailored to enhance the company's operations and user experience."
              ghLink="https://github.com/priyamuskan-2901/shiv_shakti"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image3}
              isBlog={false}
              title="Take a Ride!"
              description="Created a responsive cab booking system allowing users to book cabs from a map, calculate the shortest route using Dijkstra's algorithm, and view trip summaries with cost estimates. Integrated real-time booking management with Firebase."
              ghLink="https://github.com/priyamuskan-2901/Cab-Booking"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image1}
              isBlog={false}
              title="Apple vision-pro"
              description="This project uses Locomotive Scroll and GSAP ScrollTrigger to create smooth scrolling animations, interactive video playback, and dynamic canvas rendering for a visually engaging, scroll-driven web experience. "
              ghLink="https://github.com/priyamuskan-2901/VISION_PRO"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
