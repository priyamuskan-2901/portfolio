import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/about1.png";
import Skills from '../Skills/Skills'
import Particle from "../Particle";
import Type from "./Type";
import Expertise from '../Expertise/Expertise'
import Contact from '../Contact/Contact'
import Projects from "../Projects/Projects";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MUSKAN PRIYA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Expertise/>
      <Projects/>
      <Skills/>
      <Contact/>
      
    </section>
  );
}

export default Home;
