import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

import "./productList.css";

const ProductList = ({ products }) => {
  return (
    <Row className="m-4 product-list">
      {products.map((product) => (
        <Col>
          <Card
            className="m-2 product-card"
            outline
            key={product.id}
            style={{ width: "18rem" }}
          >
            <div className="card-img">
              <img alt="Sample" src={product.api_featured_image} />
            </div>
            <CardBody>
              <CardTitle tag="h5" className="text-light">
                {product.name}
              </CardTitle>
              <CardSubtitle
                tag="h5"
                className="text-light mb-3 text-capitalize"
              >
                {product.brand}
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-light" tag="h6">
                Price: {product.price_sign}
                {product.price}
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
