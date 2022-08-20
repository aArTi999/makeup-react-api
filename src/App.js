import React from 'react';
import './App.css';
import Header from './components/Header/header';
import ImageSlider from './components/ImageSlider/imageSlider';
import ProductList from './components/ProductList/productList';

const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

const App =() => {
  return (
    <>
      <Header />
      <ImageSlider />
      <ProductList />
    </>
  );
}

export default App;
