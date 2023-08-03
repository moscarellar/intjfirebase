import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/HomePage.module.css';
import Slider from '../components/Slider';

const HomePage = () => {
    return (
      <div className="home-page">
        <Slider />
        <div className="content">
          <h1>Unlock Your True Self: Book Your Appointment Today!</h1>
          <p>Are you an INTJ seeking self-knowledge and personal growth?</p>
          <p>Discover your unique myth through our Jungian perspective and synchronicity services.</p>
          <p>Book Now for:</p>
          <ul>
            <li><a href="#">Tarot Readings</a></li>
            <li><a href="#">African Cawries Divination</a></li>
          </ul>
          <p>Got questions? Check out our FAQ page.</p>
          <p>Satisfy your INTJ curiosity and embark on a transformative journey to self-discovery today!</p>
        </div>
      </div>
    );
  };
  
  export default HomePage;