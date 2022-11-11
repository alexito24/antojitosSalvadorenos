import React from "react";
import Navigation from "../components/Navigation";
import { PupusasMenu } from "../menuComponents/PususasMenu";
import Accordion from "react-bootstrap/Accordion";
import { PlatillosTipicos } from "../menuComponents/PlatillosTipicos";
import { Desayuno } from "../menuComponents/Desayuno";
import { Entradas } from "../menuComponents/Entradas";
import { Sopas } from "../menuComponents/Sopas";
import { KidsMenu } from "../menuComponents/KidsMenu";
import { Bebidas } from "../menuComponents/Bebidas";
import { Postres } from "../menuComponents/Postres";
import { Extras } from "../menuComponents/Extras";
import { Footer } from "../components/Footer";

export function Menu() {
  return (
    <>
      <Navigation />

      <div className="parent">
        <h1 className="blueText">MENU</h1>
        <br />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h2>PUPUSAS </h2>
            </Accordion.Header>
            <Accordion.Body>
              <br />
              <PupusasMenu />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h2>Platillos Tipicos</h2>
            </Accordion.Header>
            <Accordion.Body>
              <PlatillosTipicos />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h2>Desayuno</h2>
            </Accordion.Header>
            <Accordion.Body>
              <h6>(Breakfast)</h6>
              <Desayuno />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h2>Entradas</h2>
            </Accordion.Header>
            <Accordion.Body>
              <h6>(Appetizers)</h6>
              <Entradas />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <h2>Sopas</h2>
            </Accordion.Header>
            <Accordion.Body>
              <Sopas />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <h2>Kids Menu</h2>
            </Accordion.Header>
            <Accordion.Body>
              <KidsMenu />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <h2>Bebidas </h2>
            </Accordion.Header>
            <Accordion.Body>
              <h6>Drinks</h6>
              <Bebidas />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <h2>Postres</h2>
            </Accordion.Header>
            <Accordion.Body>
              <h6>Desserts</h6>
              <Postres />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header>
              <h2>Extras </h2>
            </Accordion.Header>
            <Accordion.Body>
              <Extras />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer />
    </>
  );
}
