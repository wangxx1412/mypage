import React from "react";
import { Nav, Navbar } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">myPage</Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#features">Resume</Nav.Link>
            <Nav.Link href="#pricing" className="mr-sm-2">
              Email
            </Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Header;
