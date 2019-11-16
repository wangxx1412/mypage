import React from "react";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";
import octoreco from "../images/octoreco.png";
import todograph from "../images/todo.png";
import tetris from "../images/tetris.png";
//import laravel from "../images/laravel.png";
import travelsite from "../images/travelsite.png";
import portfolio from "../images/portfolio.png";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="hero">
          <Container>
            <div className="title">
              <div className="name">Xiaoxuan Wang</div>
              <div className="subtitle">
                <p>Seeking Junior Web developer/Intern position</p>
              </div>
            </div>
          </Container>
        </Jumbotron>

        <Container style={{ marginTop: "50px" }} className="works">
          <Row>
            <Col className="col">
              <div>
                <a href="https://octoreco.herokuapp.com/">
                  <img src={octoreco} className="image" alt="octoreco" />
                </a>
              </div>
              <div className="description">
                Instagram like App based on MERN stack
              </div>
            </Col>
            <Col className="col">
              <div>
                <a href="https://wangxxportfolio.herokuapp.com/">
                  <img src={portfolio} className="image" alt="portfolio" />
                </a>
              </div>
              <div className="description">
                A finely designed personal page.
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col">
              <div>
                <a href="https://reacthookstetris.herokuapp.com/">
                  <img src={tetris} className="image" alt="tetris" />
                </a>
              </div>
              <div className="description">Tetris game by react-hooks</div>
            </Col>
            {/* <Col className="col">
              <div>
                <a href="/">
                  <img src={laravel} className="image" alt="laravel" />
                </a>
              </div>
              <div className="description">
                (Building) Instagram clone on Laravel following{" "}
                <a href="https://www.youtube.com/watch?v=ImtZ5yENzgE&t=5734s">
                  <i>Tutorial</i>
                </a>
              </div>
            </Col> */}
            <Col className="col">
              <div>
                <a href="https://wangxx1412.github.io/travel-site/">
                  <img src={travelsite} className="image" alt="travelsite" />
                </a>
              </div>
              <div className="description">
                A nice responsive travel site demo.
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col">
              <div>
                <a href="https://todographql.herokuapp.com/">
                  <img src={todograph} className="image" alt="todographql" />
                </a>
              </div>
              <div className="description">
                Todo app with Auth by React and GraphQL
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
