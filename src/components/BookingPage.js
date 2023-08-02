import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import styles from '../styles/BookingPage.module.css';

function BookingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, such as sending the data to your server or Firebase
    console.log('Booking details:', { name, email, date, time });
    setMessage('Your booking has been submitted. We will contact you soon.');
  };

  return (
    <Container className={styles.container}>
      <h1 className={styles.h1}>Book a Tarot Reading Session</h1>
      {message && <Alert variant="success" className={styles.alert}>{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className={styles['form-group']}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="email" className={styles['form-group']}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="date" className={styles['form-group']}>
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="time" className={styles['form-group']}>
          <Form.Label>Time</Form.Label>
          <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit" className={styles.button}>Book Now</Button>
      </Form>
    </Container>
  );
}

export default BookingPage;
