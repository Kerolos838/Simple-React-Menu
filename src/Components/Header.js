import React from "react";
import { Row, Col } from "react-bootstrap";
import "./header.css";

export default function Header() {
  return (
    <Row>
      <Col sm="12" className="justify-content-center text-center">
        <div className="title-menu">Menu</div>
      </Col>
    </Row>
  );
}
