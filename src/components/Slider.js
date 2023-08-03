import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import sliderImage1 from '../assets/images.jpeg';
import sliderImage2 from '../assets/ori2.jpg';
import sliderImage3 from '../assets/ori.png';

const Slider = () => {
  return (
    <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
      <div>
        <img src={sliderImage1} alt="Slider Image 1" />
      </div>
      <div>
        <img src={sliderImage2} alt="Slider Image 2" />
      </div>
      <div>
        <img src={sliderImage3} alt="Slider Image 3" />
      </div>
    </Carousel>
  );
};

export default Slider;
