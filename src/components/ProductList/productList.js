import React from 'react';
import { Button, Card, CardBody, CardSubtitle,  CardTitle, Col, Row } from 'reactstrap';
import { products } from './data';
import './productList.css';

const ProductList = () => {
  return (
    <Row className='m-4 product-list'>
      {
        products.map((product) => <Col> 
        <Card className='m-2 product-card' outline key={product.id} style={{width: '18rem'}}>
        <div className='card-img'>
          <img
            alt="Sample"
            src={product.image_link}
            onError={(e) => (e.target.onerror = null, e.target.src = 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=')}
          />
        </div>
        <CardBody>
          <CardTitle tag="h5" className='text-light'>
            {product.name}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-light"
            tag="h6">
            Price: {product.price_sign}{product.price}
          </CardSubtitle>
        </CardBody>
      </Card></Col>)
      }
    </Row>);
}

export default ProductList;
