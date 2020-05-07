import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

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
            <Nav.Link href="https://www.linkedin.com/in/xiaoxuan-wang-449a5998/">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2x"
                className="icons"
              />{" "}
            </Nav.Link>
            <Nav.Link href="https://github.com/wangxx1412">
              <FontAwesomeIcon icon={faGithub} size="2x" className="icons" />{" "}
            </Nav.Link>
            <Nav.Link
              href="https://www.canva.com/design/DADq9IMQWZk/I3YRF6He59SL2h_Og-ugdA/view?utm_content=DADq9IMQWZk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
              className="nav-resume"
            >
              <FontAwesomeIcon
                icon={faFile}
                size="2x"
                className="icons resume-icon"
              />{" "}
              <div className="resume-hidden-text">Resume</div>
            </Nav.Link>
            <Nav.Link
              href="mailto: xiaoxuanwang28@gmail.com"
              className="mr-sm-2 nav-email"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className="icons email-icon"
              />
              <div className="email-hidden-text">Email</div>
            </Nav.Link>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
