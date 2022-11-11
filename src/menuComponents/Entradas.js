import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Entradas() {
  return (
    <>
      <Container>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Tamales, Pollo o Puerco (x2)... 6.00</h4>
          </Col>
        </Row>
        <Row>
          <Col className="blueText">Banana Leaf Tamales (Chicken/Pork)</Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Pasteles de Pollo con Papa (4)...8.50</h4>
          </Col>
        </Row>
        <Row>
          <Col className="blueText">
            Savory Empanadas (Chicken and Potatoes)
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Yuca Frita con Chicharrón... 8.00</h4>
          </Col>
        </Row>
        <Row>
          <Col className="blueText">Fried Yucca with Pork</Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Super Nachos... 7.00</h4>
          </Col>
        </Row>
        <Row>
          <Col className="blueText">
            Nachos, Beans, Steak, Cheese, Jalapeño and Guacamole
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Chicken Wings (x6)... 10.00</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}
