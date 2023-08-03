import React from 'react';
import { Carousel } from 'react-bootstrap';
import sliderImage1 from '../assets/images.jpeg';
import sliderImage2 from '../assets/ori2.jpg';
import sliderImage3 from '../assets/ori.png';
import '../styles/Slider.module.css';

const Slider = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderImage1} alt="First Slider" />

        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={sliderImage2} alt="Second Slider" />

        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={sliderImage3} alt="Third Slider" />
                </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;

