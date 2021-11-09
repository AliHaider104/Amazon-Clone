import React from "react";
import Products from "../products";
import { Row, Col } from "react-bootstrap";
import ProductScreen from "./productscreen";

function homescreen() {
  return (
    <>
      <Row>
        {Products.map((product) => (
          <Col key={product._id} md={4}>
            <ProductScreen product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default homescreen;
