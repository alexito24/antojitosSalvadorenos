import React from "react";
import Container from "react-bootstrap/esm/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export function Footer() {
  return (
    <footer className="footer">
      <Container className="footer_container">
        <div className="footer_top">
          <div>
            <h4 className="footer_title">Antojitos Salvadoreño Restaurante</h4>
            <ul className="footer_list">
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
