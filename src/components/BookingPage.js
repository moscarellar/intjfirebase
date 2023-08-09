import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import styles from '../styles/BookingPage.module.css';

import { useTranslation } from 'react-i18next'; // Import useTranslation hook


function BookingPage() {
  const { t } = useTranslation(); // Use the useTranslation hook
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking details:', { name, email, date, time });
    setMessage(t('bookingSubmitted'));
  };

  return (
    <Container className={styles.container}>
      <h1 className={styles.h1}>{t('bookingTitle')}</h1>
      {message && <Alert variant="success" className={styles.alert}>{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className={styles['form-group']}>
          <Form.Label>{t('nameLabel')}</Form.Label>
          <Form.Control type="text" placeholder={t('namePlaceholder')} value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="email" className={styles['form-group']}>
          <Form.Label>{t('emailLabel')}</Form.Label>
          <Form.Control type="email" placeholder={t('emailPlaceholder')} value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="date" className={styles['form-group']}>
          <Form.Label>{t('dateLabel')}</Form.Label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="time" className={styles['form-group']}>
          <Form.Label>{t('timeLabel')}</Form.Label>
          <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit" className={styles.button}>{t('bookNowButton')}</Button>
      </Form>
    </Container>
  );
}

export default BookingPage;
