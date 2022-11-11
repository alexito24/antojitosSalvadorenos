import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function KidsMenu() {
  return (
    <>
      <Container>
        <Row>
          <Col className="blueText">
            <h4>French Fries and Chicken Nuggets... 5.50</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Pancake with Scrambled Eggs, Sausage and Bacon... 7.00</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Cheese Sticks and French Fries... 6.00</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Papas Fritas Locas... 6.00</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h2>Drinks</h2>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Orange Juice... 2.50</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Apple Juice... 2.75</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Hot Chocolate Milk... 2.50</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Hot or Cold Milk.... 2.50</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Capri Sun Juice...1.50</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}
