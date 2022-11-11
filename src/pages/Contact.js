import React from "react";
import { Footer } from "../components/Footer";
import { Map } from "../components/Map";
import Navigation from "../components/Navigation";
import PhoneIcon from "@mui/icons-material/Phone";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export function Contact() {
  return (
    <>
      <Navigation />
      <div className="parent">
        <Container>
          <Row>
            <Col className="textCenter">
              <h4>
                <AccessTimeIcon /> Working Hours
              </h4>
            </Col>
          </Row>
          <Row>
            <Col className="textEnd">Lunes a Viernes</Col>
            <Col>9:00am - 8:30pm</Col>
          </Row>
          <Row>
            <Col className="textEnd">Sábado</Col>
            <Col>9:00am - 9:00pm</Col>
          </Row>
          <Row>
            <Col className="textEnd">Domingo</Col>
            <Col>9:00am - 8:00pm</Col>
          </Row>
          <Row>
            <Col className="textCenter">
              <PhoneIcon />{" "}
              <a className="link" href="tel:(303) 997-4295">
                {" "}
                (303) 997-4295
              </a>
            </Col>
          </Row>
        </Container>
        <br />
        <Map />
      </div>
      <Footer />
    </>
  );
}
