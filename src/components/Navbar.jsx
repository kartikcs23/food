import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useTheme();  // Get the current theme and the toggle function

  return (
    <Navbar bg={isDarkMode ? 'dark' : 'light'} variant={isDarkMode ? 'dark' : 'light'} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Food Ease</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link> {/* Cart Page Link */}
            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
            <NavDropdown title="Account" id="nav-dropdown">
              <NavDropdown.Item as={Link} to="/">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">Signup</NavDropdown.Item>
            </NavDropdown>
         

           
            <Button onClick={toggleTheme} variant="outline-secondary">
              {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
