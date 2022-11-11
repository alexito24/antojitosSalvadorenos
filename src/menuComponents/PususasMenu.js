import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function PupusasMenu() {
  return (
    <>
      <div className="parent">
        <p className="blueText">(Harina de Arroz, +$.75)</p>
      </div>
      <br />
      <Container>
        <Row>
          <Col className="blueText">
            <h4>Frijol con Queso... 3.50</h4>
          </Col>
          <Col className="blueText">
            <h4>Jalapeño con Queso... 3.75</h4>
          </Col>
        </Row>

        <Row>
          <Col>Beans and Cheese</Col>
          <Col>Jalapeño and Cheese</Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Revuelta... 3.50</h4>
          </Col>
          <Col className="blueText">
            <h4>Zanahiria con Queso... 3.75</h4>
          </Col>
        </Row>
        <Row>
          <Col>Mixed, Pork, Beans and Cheese</Col>
          <Col>Carrot and Cheese</Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Chicharrón con Queso... 3.50</h4>
          </Col>
          <Col className="blueText">
            <h4>Frijol... 3.75</h4>
          </Col>
        </Row>
        <Row>
          <Col>Pork and Cheese</Col>
          <Col>Beans</Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4> Solo Chicharrón... 4.00</h4>
          </Col>
          <Col className="blueText">
            <h4>Asada con Queso... 4.00 </h4>
          </Col>
        </Row>
        <Row>
          <Col>Pork</Col>
          <Col>Steak and Cheese</Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4> Loroco con Queso... 3.75</h4>
          </Col>
          <Col className="blueText">
            <h4> Camarón con Queso... 4.00</h4>
          </Col>
        </Row>
        <Row>
          <Col>Edible Flower and Cheese</Col>
          <Col>Shrimp and Cheese</Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Pollo con Queso... 4.00 </h4>
          </Col>
          <Col className="blueText">
            <h4>Pupusa Loca... 4.50 </h4>
          </Col>
        </Row>
        <Row>
          <Col>Chicken and Cheese</Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Ayote con Queso... 3.75 </h4>
          </Col>
          <Col className="blueText">
            <h4>Especial de Pupusas (7)... 22.75 </h4>
          </Col>
        </Row>
        <Row>
          <Col>Zucchini and Cheese</Col>
          <Col className="blueText">
            <h4>(Harinade Arroz)...24.95</h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="blueText">
            <h4>Queso... 3.75 </h4>
          </Col>
          <Col className="blueText">
            <h4>Plato de la Casa.. 22.75</h4>
          </Col>
        </Row>
        <Row>
          <Col>Cheese</Col>
          <Col className="blueText">
            <h4> (Harina de Arroz)... 23.75</h4>
          </Col>
        </Row>

        {/* <Row>
          <Col></Col>
          <Col></Col>
        </Row> */}
      </Container>
    </>
  );
}
