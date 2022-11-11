import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Desayuno() {
  return (
    <>
      <Container>
        <br />
        <Row>
          <Col className="blueText">
            <h4>
              Desayuno Servido con 2 Huevos, Vegetales, Frijoles, Plátano,
              Queso, Crema y Tortillas...10.95
            </h4>
          </Col>
        </Row>
        <Row>
          <Col className="blueText">
            Breakfast Served with 2 Eggs, Vegetables, Beans, Plantain, Cheese
            Cream and Tortillas
            <br />
            Chorizo Extra 1.00
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>
              Desayuno Servido con 2 Huevos Estrellados, Vegetales, Frijoles,
              Plátano, Queso, Crema y Tortillas...10.95
            </h4>
          </Col>
        </Row>
        <Row>
          <Col className="blueText">
            Breakfast Served with 2 Fried Eggs, Vegetables, Beans, Plantain,
            Cheese Cream and Tortillas
          </Col>
        </Row>
        {/* <Row>
          <Col className="blueText">
            <h4></h4>
          </Col>
          <Col className="blueText">
            <h4></h4>
          </Col>
        </Row> */}
      </Container>
    </>
  );
}
