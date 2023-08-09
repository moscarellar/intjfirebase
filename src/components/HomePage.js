import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/HomePage.module.css';
import Slider from '../components/Slider';

const HomePage = () => {
    return (
      <div className={styles['home-page']}>
        <Slider />
        <div className={styles.content}>
          <h1 className={styles['display-4']}>Unlock Your True Self: Book Your Appointment Today!</h1>
          <p className={styles.lead}>Are you an INTJ seeking self-knowledge and personal growth?</p>
          <p className={styles.lead}>Discover your unique myth through our Jungian perspective and synchronicity services.</p>
          <p className={styles.lead}>Book Now for:</p>
          <ul>
            <li><Link to="/TarotReadings">Tarot Readings</Link></li>
            <li><Link to="/AfricanCowries">African Cawries Divination</Link></li>
          </ul>
          <p className={styles.lead}>Got questions? Check out our FAQ page.</p>
          <p className={styles.lead}>Satisfy your INTJ curiosity and embark on a transformative journey to self-discovery today!</p>
        </div>
      </div>
    );
};

export default HomePage;
