// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#343a40', color: 'white', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Food Ease</h5>
            <p>Explore the best food from your local restaurants, delivered right to your doorstep.</p>
          </Col>
          <Col md={6}>
            <Row>
              <Col sm={6}>
                <h6>Sections</h6>
                <Nav defaultActiveKey="/" className="flex-column">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/menu">Menu</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <Nav.Link href="/orders">Orders</Nav.Link>
                </Nav>
              </Col>
              <Col sm={6}>
                <h6>Follow Us</h6>
                <div>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} style={{ margin: '0 10px', color: '#3b5998' }} />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} style={{ margin: '0 10px', color: '#00acee' }} />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} style={{ margin: '0 10px', color: '#c13584' }} />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} style={{ margin: '0 10px', color: '#0077b5' }} />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Food Ease. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
