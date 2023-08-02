import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { auth } from '../firebase'; // Import auth from Firebase
import { signOut, onAuthStateChanged } from 'firebase/auth'; // Import signOut method

function NavigationBar() {
  const [user, setUser] = useState(null);

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
      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          <Nav.Link as={Link} to="/book">Book</Nav.Link>
          {user && (
            <Button variant="link" onClick={handleLogOut}>Log Out</Button> // Render log-out button if user is logged in
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
