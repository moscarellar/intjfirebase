// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import styles from '../styles/LoginSignUpPage.module.css';

function LoginPage() {
    const { t } = useTranslation(); // Initialize the useTranslation hook
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLoginWithEmailPassword = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
            navigate('/');
        } catch (error) {
            setError(t('errorEmailPassword')); // Use the translated error message
        }
    };

    const handleLoginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
            navigate('/');
        } catch (error) {
            setError(t('errorGoogle')); // Use the translated error message
        }
    };

    return (
        <Container className={`text-center ${styles.formContainer}`}>
            <Form className={styles.formSignin} onSubmit={handleLoginWithEmailPassword}>
                <h1 className="h3 mb-3 font-weight-normal">{t('login')}</h1>
                {error !== null && <Alert variant="danger" className={styles.errorMessage}>{error}</Alert>}
                <Form.Group controlId="formEmail">
                    <Form.Label>{t('emailLabel')}</Form.Label>
                    <Form.Control type="email" placeholder={t('emailPlaceholder')} value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>{t('passwordLabel')}</Form.Label>
                    <Form.Control type="password" placeholder={t('passwordPlaceholder')} value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Button className="btn btn-lg btn-primary btn-block" type="submit">{t('loginWithEmailPassword')}</Button>
                <Button className="btn btn-lg btn-secondary btn-block" type="button" onClick={handleLoginWithGoogle}>{t('loginWithGoogle')}</Button>
            </Form>
        </Container>
    );
}

export default LoginPage;
