// src/components/NavigationBar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { auth } from '../firebase'; // Import auth from Firebase
import { signOut, onAuthStateChanged } from 'firebase/auth'; // Import signOut method
import LanguageSwitcher from './LanguageSwitcher';

function NavigationBar() {
  const [user, setUser] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Unsubscribe when the component is unmounted
    return () => unsubscribe();
  }, []);

  const handleLogOut = () => {
    signOut(auth) // Call the signOut method
      .then(() => {
        console.log("Logged out successfully");
        // Redirect or update state as needed
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">{t('home')}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {!user && (
            <>
              <Nav.Link as={Link} to="/login">{t('login')}</Nav.Link>
              <Nav.Link as={Link} to="/signup">{t('signup')}</Nav.Link>
            </>
          )}
          {/* <Nav.Link as={Link} to="/blog">{t('blog')}</Nav.Link> */}
          <Nav.Link as={Link} to="/book">{t('book')}</Nav.Link>
          <Nav.Link as={Link} to="/FAQ">{t('faq')}</Nav.Link>
          <Nav.Link as={Link} to="/AboutMe">{t('aboutMe')}</Nav.Link>
          {user && (
            <Button variant="link" onClick={handleLogOut}>{t('logOut')}</Button>
          )}
        </Nav>
        <LanguageSwitcher /> {/* Add the language switcher component */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
