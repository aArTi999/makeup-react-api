import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/header";
import ImageSlider from "./components/ImageSlider/imageSlider";
import ProductList from "./components/ProductList/productList";
import Axios from "axios";
import { Spinner } from "reactstrap";

const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [brand, setBrand] = useState("");
  const [product_type, setProduct_type] = useState("");

  const Loader = () => (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner color="primary" type="grow">
        Loading...
      </Spinner>
      <Spinner color="secondary" type="grow">
        Loading...
      </Spinner>
      <Spinner color="success" type="grow">
        Loading...
      </Spinner>
      <Spinner color="danger" type="grow">
        Loading...
      </Spinner>
      <Spinner color="warning" type="grow">
        Loading...
      </Spinner>
      <Spinner color="info" type="grow">
        Loading...
      </Spinner>
      <Spinner color="light" type="grow">
        Loading...
      </Spinner>
      <Spinner color="dark" type="grow">
        Loading...
      </Spinner>
    </div>
  );
  useEffect(() => {
    // console.log(brand);
    // console.log(product_type);
  }, [brand, product_type]);
  const fetchProducts = (type, query) => {
    setIsLoading(true);
    if (type === "brand") {
      setBrand(query);
    } else {
      setProduct_type(query);
    }
    console.log(brand);
    console.log(product_type);
    if (type === "brand") {
      // console.log("Fetching products");
      Axios.get(API_URL + `?brand=${query}`).then((response) => {
        if (response && response.status === 200) {
          console.log(response);
          setProducts(response.data);
          setIsLoading(false);
        }
      });
    } else if (type === "product") {
      Axios.get(API_URL + `?product_type=${query}`).then((response) => {
        if (response && response.status === 200) {
          console.log(response);
          setProducts(response.data);
          setIsLoading(false);
        }
      });
    }

    if (brand != "" && product_type != "") {
      Axios.get(API_URL + `?product_type=${product_type}&brand=${brand}`).then(
        (response) => {
          if (response && response.status === 200) {
            console.log(response);
            setProducts(response.data);
            setIsLoading(false);
          }
        }
      );
    }
  };
  return (
    <>
      <Header fetchProducts={fetchProducts} />
      {/* <ImageSlider /> */}
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
};

export default App;
