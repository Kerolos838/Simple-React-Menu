import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./category.css";
import { JackInTheBox } from "react-awesome-reveal";

export default function CardsItems({ itemData }) {
  return (
    <Row
      xs={1}
      md={2}
      xl={4}
      xxl={3}
      className="d-flex  align-items-center g-4 my-3"
    >
      {itemData.map((item, key) => {
        return (
          <JackInTheBox>
            <Col key={key}>
              <Card className="card-h">
                <Card.Img
                  variant="top"
                  style={{ height: "250px" }}
                  src={item.img}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                  <h3 style={{ color: "#d50000" }}>$50</h3>
                </Card.Body>
              </Card>
            </Col>
          </JackInTheBox>
        );
      })}
    </Row>
  );
}
