import React from 'react'
import { Container} from "react-bootstrap";
import Particle from "../Particle";
import Github from "../About/Github";
import Techstack from "../About/Techstack";
import About from '../About/About'
import Toolstack from "../About/Toolstack";

const Skills = () => {
  return (
    <Container fluid className="about-section" id="skill">
    <Particle />
    <Container>
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset</strong>
      </h1>

      <Techstack />

      <h1 className="project-heading">
        <strong className="purple">Tools</strong> I use
      </h1>
      <Toolstack />

      <Github />
    </Container>
    <About/>
  </Container>
  )
}

export default Skills




