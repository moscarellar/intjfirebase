import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import BookingPage from './components/BookingPage';
import AboutMe from './components/AboutMe';
import TarotReadings from './components/TarotReadings';
import AfricanCowries from './components/AfricanCowries';
import Blog from './components/Blog';
import FAQ from './components/FAQ';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/book" element={<BookingPage />} />
                    <Route path="/about-me" element={<AboutMe />} /> 
                    <Route path="/TarotReadings" element={<TarotReadings />} />
                    <Route path="/AfricanCowries" element={<AfricanCowries />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/AboutMe" element={<AboutMe />} />
                    <Route path="/FAQ" element={<FAQ />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

