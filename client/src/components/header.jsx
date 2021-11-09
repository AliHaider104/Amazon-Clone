import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function header() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Online Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <i class="fas fa-cart-plus"></i>
                &nbsp; Cart
              </Nav.Link>
              <Nav.Link href="#link">
                <i class="fas fa-user"></i>
                &nbsp; Signin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default header;
