import React from "react";
import "./footer.css";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4">
            <div className="logo">
              <Link to="/home">
                <h1 className="footer__h">EzDealPal</h1>
              </Link>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur nobis ullam nulla doloribus unde veritatis assumenda
              a.
            </p>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by EzDealPal. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
