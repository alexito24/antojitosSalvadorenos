import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Sopas() {
  return (
    <>
      <Container>
        <Row>
          <Col className="blueText">
            <h4>Sopa de Pollo... 12.95</h4>
          </Col>
        </Row>
        <Row>
          <Col className="blueText">Chicken and Vegetables Soup</Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Sopa de Res... 13.95</h4>
          </Col>
        </Row>
        <Row>
          <Col className="blueText">Beef and Vegetables Soup</Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Sopa de Pata... 13.95</h4>
          </Col>
        </Row>
        <Row>
          <Col className="blueText">Calf's Foot Soup</Col>
        </Row>
      </Container>
    </>
  );
}
