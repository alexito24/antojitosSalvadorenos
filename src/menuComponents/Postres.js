import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export function Postres() {
  return (
    <>
      <Container>
        <Row>
          <Col className="blueText">
            <h4>Quesadilla Salvadoreña... 7.00</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Nueganos/Yuca Nuggets con Miel y Plátano (x3)... 7.50</h4>
          </Col>
        </Row>
        <Row>
          <Col>Caramel with Cane Sugar and Platain</Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Chilate/Tradicional Corn Tea... 5.00</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Empanadas de Plátano (x3)... 7.00</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            Fried Platain Empanadas Filled with Rice Custard and Covered in
            Sugar
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Tamal de Elote/ Sweet Corn Tamal(x2)... 6.00</h4>
          </Col>
        </Row>
        <Row>
          <Col>(Con Crema y Queso/ With Sour Cream and Cheese)</Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Plátano Frito/ Fried Platains... 7.25</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            (Con Crema, Frijol y Queso/ With sour Cream, Beans and Cheese)
          </Col>
        </Row>
      </Container>
    </>
  );
}
