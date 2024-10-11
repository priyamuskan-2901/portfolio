import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view"
    data-aos="fade-right"
    data-aos-offset="100"
    data-aos-delay="50"
    data-aos-duration="700"
    data-aos-easing="ease-in-out">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Know Who <strong className="purple">I'M</strong>
          </h1>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Muskan priya </span>
            from <span className="purple"> Gaya (Bihar), India.</span>
            <br />I am pursuing <span className="purple"> Civil Engineering </span> from <span className="purple"> Indian Institue of Technology BHU Varanasi</span> .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing 
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer" style={{ fontStyle: 'italic' }}>Muskan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
