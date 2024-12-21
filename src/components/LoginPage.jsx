import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const LoginPage = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    // Fetching users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if credentials match any user
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      handleLogin(); // Call the handleLogin function passed from parent (App.js)
      navigate('/home'); // Redirect to HomePage after login
    } else {
      setError('Invalid email or password'); // Show error on failed login
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message */}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a> {/* Link to SignUp Page */}
      </p>
    </div>
  );
};

export default LoginPage;