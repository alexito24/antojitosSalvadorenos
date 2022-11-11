import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export function Extras() {
  return (
    <>
      <Container>
        <Row>
          <Col className="blueText">
            <h4>Arroz/ Rice... 2.00</h4>
          </Col>
          <Col className="blueText">
            <h4>Chorizo... 3.00</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Frijol/ Fried Beans... 2.00</h4>
          </Col>
          <Col className="blueText">
            <h4>Tortillas(2)... 1.50</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Chicharrón/Pork... 3.75</h4>
          </Col>
          <Col className="blueText">
            <h4>Pan Frances... 1.50</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Crema/ Sour Cream... 2.00</h4>
          </Col>
          <Col className="blueText">
            <h4>Curtido... 2.00</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Aguacate/ Avocado... 2.00</h4>
          </Col>
          <Col className="blueText">
            <h4>Salsa... 2.00</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Queso/ Cheese... 1.50</h4>
          </Col>
          <Col className="blueText">
            <h4></h4>
          </Col>
        </Row>
        <br />
      </Container>
    </>
  );
}
