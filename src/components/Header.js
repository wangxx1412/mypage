import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar expand="lg" className="header">
          <Container>
            <Nav href="#home" className="logo">
              myPage
            </Nav>
            <Nav className="mr-auto"></Nav>
            <Nav.Link href="https://github.com/wangxx1412">
              <FontAwesomeIcon icon={faGithub} size="2x" className="icons" />{" "}
            </Nav.Link>
            <Nav.Link
              href="mailto: xiaoxuanwang28@gmail.com"
              className="mr-sm-2"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="icons" />
            </Nav.Link>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
