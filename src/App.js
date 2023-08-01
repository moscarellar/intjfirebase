import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;