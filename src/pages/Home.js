import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Helmet } from "react-helmet-async";
import { Footer } from "../components/Footer";
import Navigation from "../components/Navigation";
import img2 from "../images/img2.jpg";

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
              ></img>
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
        </Container>
      </main>

      <Footer />
    </>
  );
}
