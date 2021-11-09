import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col className="text-center" md={12}>
              <span>Copyright &copy; Ali Haider</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default footer;
