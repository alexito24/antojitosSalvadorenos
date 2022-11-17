import React from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Antojitos Salvadoreño Restaurante</title>
        <meta
          name="description"
          content="Best customer service. Give us a call or visit us at our location."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Navigation />
      <div className="parent">
        <Container>
          <Row>
            <Col className="textCenter">
              <h1>
                Antojitos Salvadoreño <br />
                <AccessTimeIcon /> Working Hours
              </h1>
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
        <address>
          <Map />
        </address>
      </div>
      <Footer />
    </>
  );
}
