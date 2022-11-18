import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Helmet } from "react-helmet-async";
import { Footer } from "../components/Footer";
import { Images } from "../components/Images";
import Navigation from "../components/Navigation";
import img2 from "../images/img2.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import DirectionsIcon from "@mui/icons-material/Directions";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Antojitos Salvadoreño Restaurante</title>
        <meta
          name="description"
          content="Antojitos Salvadoreño Restaurante. antojitos salvadoreno restaurant. salvadoran food"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navigation />
      <main>
        <Container>
          <Row>
            <Col className="textCenter">
              <h1>Antojitos Salvadoreño Restaurante</h1>
            </Col>
          </Row>
          <Row>
            <Col className="textCenter">
              <img
                loading="eager"
                title="antojitos salvadoreno restaurante"
                src={img2}
                alt="restaurant logo"
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="textEnd">
              <h3>Pupusas</h3>
            </Col>
            <Col className="">
              <h3>Sopas</h3>
            </Col>
          </Row>
          <Row>
            <Col className="textEnd">
              <h3>Platillos Tipicos</h3>
            </Col>
            <Col className="">
              <h3>Desayunos</h3>
            </Col>
          </Row>
          <Row>
            <Col className="textEnd">
              <h3>Entradas</h3>
            </Col>
            <Col className="">
              <h3>Postres</h3>
            </Col>
          </Row>
          <Row>
            <Col className="textCenter">
              <Button href="/menu">Menu Completo/ Full Menu</Button>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="textEnd">
              <a className="link2 " href="tel:(303) 997-4295">
                <PhoneIcon />
                LLAMAR
              </a>
            </Col>
            <Col>
              <a
                aria-label="Get directions to this location on Google Maps."
                target="_blank"
                without
                rel="noreferrer"
                jstcache="38"
                href="https://www.google.com/maps/dir//3896+Morrison+Rd+Denver,+CO+80219/@39.706897,-105.0383547,18z/data=!4m6!4m5!1m0!1m2!1m1!1s0x876b80994d653fbf:0x9beeaedd57ee4431!3e0"
                className="link2"
              >
                <div jstcache="39" class=" link2">
                  <DirectionsIcon />
                  COMO LLEGAR
                </div>{" "}
              </a>
            </Col>
          </Row>
        </Container>
        <hr />
        <h2 className="textCenter">Ven a Visitarnos</h2>
        <Images />
      </main>

      <Footer />
    </>
  );
}
