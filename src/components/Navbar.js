import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { MdComputer } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import { VscCode } from "react-icons/vsc";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container style={{ paddingTop: '10px' }}>
        <Navbar.Brand href="/" className="d-flex">
          <img
            src={logo}
            className="img-fluid logo"
            alt="brand"
            style={{ width: "150px", height: "auto" }} // Increased size
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <HashLink
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                style={{ color: 'white', textDecoration: 'none' }}
              >
                <AiOutlineHome style={{ marginBottom: "2px", margin: '10px' }} /> Home
              </HashLink>
            </Nav.Item>

            <Nav.Item>
              <HashLink
                as={Link}
                to="/#expertise"
                onClick={() => updateExpanded(false)}
                style={{ color: 'white', textDecoration: 'none' }}
              >
                <VscCode style={{ marginBottom: "2px", margin: '10px' }} /> Expertise
              </HashLink>
            </Nav.Item>

            <Nav.Item>
              <HashLink
                to="/#project"
                onClick={() => updateExpanded(false)}
                style={{ color: 'white', textDecoration: 'none' }}
              >
                <MdComputer style={{ marginBottom: "2px", margin: '10px' }} /> Projects
              </HashLink>
            </Nav.Item>

            <Nav.Item>
              <HashLink
                as={Link}
                to="/#about"
                onClick={() => updateExpanded(false)}
                style={{ color: 'white', textDecoration: 'none' }}
              >
                <AiOutlineUser style={{ marginBottom: "2px", margin: '10px' }} /> About
              </HashLink>
            </Nav.Item>

            <Nav.Item>
              <HashLink
                as={Link}
                to="/#skill"
                onClick={() => updateExpanded(false)}
                style={{ color: 'white', textDecoration: 'none' }}
              >
                <MdComputer style={{ marginBottom: "2px", margin: '10px' }} /> Skills
              </HashLink>
            </Nav.Item>

            <Nav.Item>
              <HashLink
                as={Link}
                to="/#contact"
                onClick={() => updateExpanded(false)}
                style={{ color: 'white', textDecoration: 'none' }}
              >
                <CgFileDocument style={{ marginBottom: "2px", margin: '10px' }} /> Contact
              </HashLink>
            </Nav.Item>

            {/* GitHub Button moved next to Contact */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/priyamuskan-2901"
                target="_blank"
                className="fork-btn-inner"
                style={{ marginLeft: '10px' }} // Adjusted margin for better alignment
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
