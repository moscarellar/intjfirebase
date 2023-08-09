import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/FAQ.module.css';

const FAQ = () => {
  const questions = [
    { id: 'q1', question: 'What is your background?', answer: 'Your answer here.' },
    { id: 'q2', question: 'How do you approach personal growth?', answer: 'Your answer here.' },
    // Add more questions and answers as needed
  ];

  return (
    <Container className={styles.faqContainer}>
      <Row>
        <Col>
          <h1>Frequently Asked Questions</h1>
          <ul className={styles.questionIndex}>
            {questions.map((q) => (
              <li key={q.id}>
                <a href={`#${q.id}`}>{q.question}</a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      {questions.map((q) => (
        <Row key={q.id} id={q.id} className={styles.questionSection}>
          <Col>
            <h2>{q.question}</h2>
            <p>{q.answer}</p>
            <a href="#top" className={styles.backToTop}>Back to top</a>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default FAQ;
