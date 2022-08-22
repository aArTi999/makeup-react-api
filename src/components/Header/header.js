import React, { useState } from "react";
import "./header.css";
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import { brands, product_types } from "./data";

const Header = ({ fetchProducts }) => {
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  const brandToggle = () => setBrandDropdownOpen((prevState) => !prevState);
  const productToggle = () => setProductDropdownOpen((prevState) => !prevState);

  return (
    <header className=" d-flex flex-column">
      <div className="sale-container p-1">
        <p className="fs-5 sale-text text-center">Sale is live</p>
      </div>
      <Row className="w-100 p-4">
        <Col className="logo" md={4}>
          <h2>S&S</h2>
        </Col>
        <Col className="filters" md={8}>
          <Row>
            <Col md={6}>
              <Dropdown
                isOpen={brandDropdownOpen}
                toggle={brandToggle}
                direction={"down"}
              >
                <DropdownToggle caret className="dropDown-toggle">
                  Select Brand
                </DropdownToggle>
                <DropdownMenu>
                  {brands.map((brand) => (
                    <DropdownItem
                      onClick={(e) => {
                        fetchProducts("brand", e.target.innerText);
                      }}
                      className="dropdown-item"
                    >
                      {brand}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col md={6}>
              <Dropdown
                isOpen={productDropdownOpen}
                toggle={productToggle}
                direction={"down"}
              >
                <DropdownToggle caret className="dropDown-toggle">
                  Select Product
                </DropdownToggle>
                <DropdownMenu>
                  {product_types.map((type) => (
                    <DropdownItem
                      className="dropdown-item"
                      onClick={(e) => {
                        fetchProducts("product", e.target.innerText);
                      }}
                    >
                      {type}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
