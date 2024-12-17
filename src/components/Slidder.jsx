// src/components/Slider.jsx

import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slidder.css';
import clothes8 from '../img/cloths8.jpg'
import clothes9 from "../img/cloths9.jpg";
import clothes10 from "../img/cloths10.jpg";



const Slider = () => {
  return (
    <div className="slider-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={clothes8}
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={clothes9}
            alt="Second slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={clothes10}
            alt="Third slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
