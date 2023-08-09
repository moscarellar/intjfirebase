import React from 'react';
import { useTranslation } from 'react-i18next'; 
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/AboutMe.module.css';


const AboutMe = () => {
  const { t } = useTranslation(); // Use the useTranslation hook to access translations

  return (
    <Container fluid className={styles.aboutMeContainer}>
      <Row>
        <Col lg={7} className={styles.bioSection}>
          <h1>{t('aboutMeTitle')}</h1>
          <p>{t('aboutMeDescription')}</p>

          <h2>{t('backgroundTitle')}</h2>
          <p>{t('backgroundDescription')}</p>

          <h2>{t('workTitle')}</h2>
          <p>{t('workDescription')}</p>

          <h2>{t('offeringsTitle')}</h2>
          <p>{t('offeringsDescription')}</p>

          <h2>{t('intjTitle')}</h2>
          <p>{t('intjDescription')}</p>

          <h2>{t('roadAheadTitle')}</h2>
          <p>{t('roadAheadDescription')}</p>
        </Col>
        <Col lg={5} className={styles.cvMargin}>
          <h2>{t('educationHighlightsTitle')}</h2>
          <div className={styles.educationHighlights}>
            <h3>{t('unicampTitle')}</h3>
            <p>{t('unicampDescription')}</p>
            <h3>{t('unirTitle')}</h3>
            <p>{t('unirDescription')}</p>
            <h3>{t('codeInstituteTitle')}</h3>
            <p>{t('codeInstituteDescription')}</p>
            {/* Add more highlights as needed */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;