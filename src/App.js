// src/App.js
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import CartPage from './components/CartPage';
import OrdersPage from './components/OrdersPage';
import ContactPage from './components/ContactPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import AboutUsPage from './components/AboutUsPage';
import FeedbackForm from './components/FeedbackForm';
import CheckoutPage from './components/CheckoutPage';
import OrderConfirmationPage from './components/OrderConfirmationPage';
import { useTheme } from './contexts/ThemeContext'; // Import context hook for theme management
import PrivateRoute from './components/PrivateRoute'; // Custom PrivateRoute component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const { isDarkMode } = useTheme(); // Retrieve dark/light theme state from context

  // Dynamically set the theme class based on context
  const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

  return (
    <Router>
      <div className={themeClass}>
        <NavBar /> {/* Navigation Bar */}
        <Container className="mt-4">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LoginPage handleLogin={() => setIsLoggedIn(true)} />} />
            <Route path="/signup" element={<SignUpPage />} />

            {/* Private Routes */}
            <Route
              path="/home"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/menu"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <MenuPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <CartPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <OrdersPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <ContactPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/about"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <AboutUsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/feedback"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <FeedbackForm />
                </PrivateRoute>
              }
            />
            {/* Checkout and Order Confirmation Routes */}
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          </Routes>
        </Container>
        {/* Footer: Visible only when logged in */}
        {isLoggedIn && <Footer />}
      </div>
    </Router>
  );
}

export default App;