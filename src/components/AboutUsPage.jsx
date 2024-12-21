// src/components/AboutUsPage.jsx
import React, { useState } from 'react';
import { Card, Button, Modal, Col, Row } from 'react-bootstrap';
import '../styles/AboutUsPage.css'
// Sample data for timeline and team
const timelineData = [
  { year: '2015', event: 'Business Started', description: 'We opened our doors to provide top-notch food.' },
  { year: '2018', event: 'Award Won', description: 'We were awarded for excellence in customer service.' },
  { year: '2021', event: 'Expansion', description: 'Opened our second location in a new city.' },
];

const teamMembers = [
  {
    name: 'Karthik',
    role: 'Head Chef',
    bio: 'Has over 20 years of experience in the food industry, leading the empire to success.',
    image: 'https://img.freepik.com/premium-photo/professional-chef-man-showing-sign-delicious-male-chef-white-uniform-with-perfect-sign_763111-6717.jpg',
  },
  {
    name: 'Sanvi',
    role: 'Marketing Director',
    bio: 'She is behind our campaigns, creating engaging strategies that speak to our customers.',
    image: 'https://th.bing.com/th/id/OIP.m4sXr9HTvjw0zUSsjyYE9wHaE7?w=277&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    name: 'Shreya',
    role: 'Sous Chef',
    bio: 'She is our team lead for interns and has been excelling since 3 years.',
    image: 'https://th.bing.com/th/id/OIP.HNG9H671zydJ_kGbHXABJwHaGX?w=202&h=173&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    name: 'Abhay',
    role: 'Manager',
    bio: 'With 5 years of experience, she manages the staff and deliveries.',
    image: 'data:image/jpeg;base64,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',
  },
  {
    name: 'Karthik',
    role: 'Assistant Manager',
    bio: 'Handles the waiters and baristas for effecient running of the empire.',
    image: 'https://img.freepik.com/premium-photo/professional-chef-man-showing-sign-delicious-male-chef-white-uniform-with-perfect-sign_763111-6637.jpg',
  }
];

const AboutUsPage = () => {
  const [show, setShow] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  // Show modal
  const handleShow = (teamMember) => {
    setSelectedTeamMember(teamMember);
    setShow(true);
  };

  // Close modal
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="about-us-page">
      <section className="business-story">
        <h1>Our Story</h1>
        <p>We are a family-owned restaurant with a passion for serving quality food. Since our founding, we've focused on making sure every dish tells a story of tradition and love.</p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>To provide delicious, healthy, and affordable meals with the utmost care and attention to our community.</p>
      </section>

      <section className="timeline">
        <h2>Our Journey</h2>
        <ul>
          {timelineData.map((event, index) => (
            <li key={index}>
              <h4>{event.year}</h4>
              <p><strong>{event.event}:</strong> {event.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} md={4}>
              <Card className="team-card">
                <Card.Img variant="top" src={member.image} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.role}</Card.Text>
                  <Button variant="primary" onClick={() => handleShow(member)}>Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Modal for team member details */}
      {selectedTeamMember && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedTeamMember.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Role: {selectedTeamMember.role}</h5>
            <p>{selectedTeamMember.bio}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default AboutUsPage;
