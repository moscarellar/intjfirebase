import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/HomePage.module.css';
// import Slider from '../components/Slider';
import { useTranslation } from 'react-i18next';
// import image from '../assets/ori.png';
import Slider from '../components/Slider';


const HomePage = () => {
  const { t } = useTranslation(); // Use the hook to get the t function

  return (
    <div className={styles.home}>
      <div className={styles['home-page']}>
      <Slider /> 
          <div id="welcome-message">
            {/* <h2>{t('unlockTrueSelf')}</h2> */}
          </div>

        {/* Main Section */}
        <h1 className={styles['display-4']}>{t('unlockTrueSelf')}</h1>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <p className={styles.lead}>{t('intro1')}</p>
            <p className={styles.lead}>{t('intro2')}</p>
          </div>
          <div className={styles.card}>
            <p className={styles.lead}>{t('bookNow')}</p>
            <ul>
              <li><Link to="/TarotReadings">{t('tarot')}</Link></li>
              <li><Link to="/AfricanCowries">{t('cowries')}</Link></li>
            </ul>
          </div>
          <div className={styles.card}>
            <p className={styles.lead}>{t('faq')}</p>
            <p className={styles.lead}>{t('journey')}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;