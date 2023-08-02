import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/HomePage.module.css';

function HomePage() {
    return (
        <div className={`container ${styles.container}`}>
            <div className={`jumbotron mt-5 ${styles.jumbotron}`}>
                <h1 className={`display-4 ${styles.display4}`}>Welcome to INTJ Tarot Sessions</h1>
                <p className={`lead ${styles.lead}`}>Dive deeper into self-understanding. Explore the personal insights offered by Tarot.</p>
                <hr className="my-4" />
                <p>Our tarot reading sessions are designed to stimulate curiosity and facilitate personal growth. Engage with the Tarot as a tool for introspection. Book a session today and embark on a journey towards a more authentic self.</p>
                <Link to="/booking" className={`btn btn-primary btn-lg ${styles.btnPrimary}`} role="button">Begin Your Journey</Link>
            </div>
        </div>
    );
}

export default HomePage;
