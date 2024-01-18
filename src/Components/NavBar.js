import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

export default function NavBar({ filterSearch }) {
  const [search, setSearch] = useState("");

  function onSearch() {
    filterSearch(search);
    setSearch("");
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="fw-bold">
          Restaurant
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              onClick={() => onSearch()}
              variant="warning"
              className="fw-bold "
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
