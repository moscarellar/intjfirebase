import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import styles from '../styles/LoginSignUpPage.module.css';
import { useTranslation } from 'react-i18next';

function SignUpPage() {
    const { t } = useTranslation(); // Initialize the useTranslation hook
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignUpWithEmailPassword = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setEmail('');
            setPassword('');
            navigate('/');
        } catch (error) {
            setError(t('errorEmailPassword')); // Use the translated error message
        }
    };

    const handleSignUpWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
            navigate('/');
        } catch (error) {
            setError(t('errorGoogle')); // Use the translated error message
        }
    };

    return (
        <Container className={`text-center ${styles.formContainer}`}>
            <Form className={styles.formSignin} onSubmit={handleSignUpWithEmailPassword}>
                <h1 className="h3 mb-3 font-weight-normal">{t('signUp')}</h1>
                {error !== null && <Alert variant="danger" className={styles.errorMessage}>{error}</Alert>}
                <Form.Group controlId="formEmail">
                    <Form.Label>{t('emailLabel')}</Form.Label>
                    <Form.Control type="email" placeholder={t('emailPlaceholder')} value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>{t('passwordLabel')}</Form.Label>
                    <Form.Control type="password" placeholder={t('passwordPlaceholder')} value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Button className="btn btn-lg btn-primary btn-block" type="submit">{t('signUpWithEmailPassword')}</Button>
                <Button className="btn btn-lg btn-secondary btn-block" type="button" onClick={handleSignUpWithGoogle}>{t('signUpWithGoogle')}</Button>
            </Form>
        </Container>
    );
}

export default SignUpPage;