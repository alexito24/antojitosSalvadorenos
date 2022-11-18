import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import img10 from "../images/img10.jpg";
import img11 from "../images/img11.jpg";

export function Images() {
  return (
    <>
      <main>
        <Container>
          <Row>
            <Col className="textCenter img">
              <img
                loading="lazy"
                title="antojitos salvadoreno restaurante"
                src={img11}
                alt="restaurant entrance"
              />
            </Col>
            <Col className="textCenter img">
              <img
                loading="lazy"
                title="antojitos salvadoreno restaurante"
                src={img9}
                alt="restaurant inside"
              />
            </Col>
            <Col className="textCenter img">
              <img
                loading="lazy"
                title="antojitos salvadoreno restaurante"
                src={img10}
                alt="restaurant inside"
              />
            </Col>

            <Col className="textCenter img">
              <img
                loading="lazy"
                title="antojitos salvadoreno restaurante"
                src={img6}
                alt="restaurant food"
              />
            </Col>
            <Col className="textCenter img">
              <img
                loading="lazy"
                title="antojitos salvadoreno restaurante"
                src={img7}
                alt="restaurant food"
              />
            </Col>
            <Col className="textCenter img">
              <img
                loading="lazy"
                title="antojitos salvadoreno restaurante"
                src={img8}
                alt="restaurant food"
              />
            </Col>
            <Col className="textCenter img">
              <img
                loading="lazy"
                title="antojitos salvadoreno restaurante"
                src={img4}
                alt="restaurant food"
              />
            </Col>
            <Col className="textCenter img">
              <img
                loading="lazy"
                title="antojitos salvadoreno restaurante"
                src={img3}
                alt="restaurant food"
              />
            </Col>
            <Col className="textCenter img">
              <img
                loading="lazy"
                title="antojitos salvadoreno restaurante"
                src={img5}
                alt="restaurant food"
              />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
