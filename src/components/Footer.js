import React from "react";
import Container from "react-bootstrap/esm/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import Accordion from "react-bootstrap/Accordion";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PhoneIcon from "@mui/icons-material/Phone";
import DirectionsIcon from "@mui/icons-material/Directions";

// import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function Footer() {
  return (
    <footer className="footer">
      <Container className="footer_container">
        <hr />
        <div className="footer_top">
          <div>
            <h4 className="footer_title">Antojitos Salvadoreño Restaurante</h4>
            <ul className="footer_list">
              <Container>
                <hr />
                <Row>
                  <Col className="textEnd">
                    <a className="link2 " href="tel:(303) 997-4295">
                      <PhoneIcon />
                      LLAMAR
                    </a>
                  </Col>
                  <Col>
                    {/* <a
                      className="link2"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Get directions to this location on Google Maps."
                      href="https://goo.gl/maps/Z63CsKbLi7dCarNY8"
                    >
                      <DirectionsIcon />
                      COMO LLEGAR
                    </a> */}
                    <a
                      aria-label="Get directions to this location on Google Maps."
                      target="_blank"
                      jstcache="38"
                      href="https://maps.google.com/maps/dir//3896+Morrison+Rd+Denver,+CO+80219/@39.706897,-105.0383547,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x876b80994d653fbf:0x9beeaedd57ee4431"
                      class="link2"
                    >
                      {" "}
                      <div jstcache="39" class=" link2">
                        <DirectionsIcon />
                        COMO LLEGAR
                      </div>{" "}
                    </a>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col className="textCenter">
                    <address>
                      <a
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Get directions to this location on Google Maps."
                        href="https://maps.google.com/maps/dir//3896+Morrison+Rd+Denver,+CO+80219/@39.706897,-105.0383547,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x876b80994d653fbf:0x9beeaedd57ee4431"
                      >
                        <PlaceIcon />
                        3896 Morrison Rd, Denver, CO 80219
                      </a>
                    </address>
                  </Col>
                </Row>
                <hr />
                <Accordion className="textCenter" defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h4>
                        <AccessTimeIcon /> Horarios
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <br />
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
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* <Accordion className="noStyle textCenter">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="textCenter"
                  >
                    <Row className="textCenter">
                      <Col>Horario</Col>
                    </Row>
                  </AccordionSummary>
                  <AccordionDetails>
                    <br />
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
                  </AccordionDetails>
                </Accordion> */}
                <hr />
                <Row>
                  <Col className="textCenter">
                    <a className="link " href="/menu">
                      <RestaurantMenuIcon /> Menú
                    </a>
                  </Col>
                </Row>
              </Container>
            </ul>
          </div>
        </div>

        <hr />

        <div className="footer_bottom">
          <span className="copy_right">
            {" "}
            @ 2022 Antojitos Salvadoreño. All rights reserved{" "}
          </span>
          <ul className="footer_list">
            <li className="footer_list-item">
              <a
                href="https://www.facebook.com/Antojitos-Salvadore%C3%B1o-Restaurante-104139389182567"
                className="footer_list-link"
              >
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
