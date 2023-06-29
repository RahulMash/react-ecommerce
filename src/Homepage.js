import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic from "./images/iphone.jpg";
function Homepage() {

  const imageStyle = {
    width: '200px',
    height: '100px',
    borderRadius: '5px',
  };
  
  return (
    <div className="App">
      <h1>Homepage</h1>
      <main>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block h-100 w-100"
              src={pic}
              alt="Slider Image 1" style={imageStyle}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="path_to_image2.jpg"
              alt="Slider Image 2"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="path_to_image3.jpg"
              alt="Slider Image 3"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h1>Welcome to our eCommerce Store!</h1>
        <p>Discover our wide range of products.</p>
        {/* Additional content */}
      </main>
      <div className="card" style={{ width: '18rem' }}>
      <img
        src="/path/to/product-image.jpg"
        className="card-img-top"
        alt="Product"
      />
      <div className="card-body">
        <h5 className="card-title">Product Title</h5>
        <p className="card-text">Product description goes here.</p>
        <h6 className="card-subtitle mb-2 text-muted">Price: $19.99</h6>
        <a href="#" className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
    </div>
  );
}

export default Homepage;
