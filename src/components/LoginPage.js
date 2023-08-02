import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import styles from '../styles/LoginSignUpPage.module.css';

function LoginPage() {
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
            setError('Error logging in with email and password');
        }
    };

    const handleLoginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
            navigate('/');
        } catch (error) {
            setError('Error logging in with Google');
        }
    };

    return (
        <Container className={`text-center ${styles.formContainer}`}>
            <Form className={styles.formSignin} onSubmit={handleLoginWithEmailPassword}>
                <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                {error !== null && <Alert variant="danger" className={styles.errorMessage}>{error}</Alert>}
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Button className="btn btn-lg btn-primary btn-block" type="submit">Login with Email and Password</Button>
                <Button className="btn btn-lg btn-secondary btn-block" type="button" onClick={handleLoginWithGoogle}>Login with Google</Button>
            </Form>
        </Container>
    );
}

export default LoginPage;
