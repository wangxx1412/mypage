import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import octoreco from "../images/octoreco.png";
import todograph from "../images/todographql.png";
import tetris from "../images/tetris.png";
import laravel from "../images/laravel.png";

class Landing extends React.Component {
  render() {
    return (
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col className="col">
            <div style={{ paddingBottom: "10px" }}>
              <a href="https://octoreco.herokuapp.com/">
                <img src={octoreco} className="image" alt="octoreco" />
              </a>
            </div>
            <div className="description">
              Instagram like App based on MERN stack.
            </div>
          </Col>
          <Col className="col">
            <div style={{ paddingBottom: "10px" }}>
              <a href="https://todographql.herokuapp.com/">
                <img src={todograph} className="image" alt="todographql" />
              </a>
            </div>
            <div className="description">
              A Todo app with authentication based on React and GraphQL.
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col">
            <div style={{ paddingBottom: "10px" }}>
              <a href="https://reacthookstetris.herokuapp.com/">
                <img src={tetris} className="image" alt="tetris" />
              </a>
            </div>
            <div className="description">
              Tetris game by react-hooks following{" "}
              <a href="https://www.youtube.com/watch?v=ZGOaCxX8HIU">Tutorial</a>
              .
            </div>
          </Col>
          <Col className="col">
            <div style={{ paddingBottom: "10px" }}>
              <a href="#">
                <img src={laravel} className="image" alt="laravel" />
              </a>
            </div>
            <div className="description">
              Instagram clone based on Laravel following{" "}
              <a href="https://www.youtube.com/watch?v=ImtZ5yENzgE&t=5734s">
                Tutorial
              </a>
              .
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
