import React, { useState } from 'react';
import '../styles/FeedbackForm.css'; // Assuming the styles are in this file
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap Modal components

// Star Rating Component
const StarRating = ({ rating, onClick, onHover, onHoverOut }) => {
  const stars = [];

  // Create 5 stars for rating selection
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`star ${i <= rating ? 'filled' : 'empty'}`}
        onClick={() => onClick(i)}        // Update the rating on click
        onMouseEnter={() => onHover(i)}   // Show hover preview
        onMouseLeave={onHoverOut}         // Reset hover on mouse leave
      >
        ★
      </span>
    );
  }

  return <div>{stars}</div>;
};

const FeedbackForm = () => {
  const [rating, setRating] = useState(0); // User rating state
  const [message, setMessage] = useState(''); // User feedback message
  const [wordCount, setWordCount] = useState(0); // Word count for feedback
  const [hoverRating, setHoverRating] = useState(0); // For hover effect on stars
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  // Handle the rating click
  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  // Handle star hover (for hover effect)
  const handleHover = (rating) => {
    setHoverRating(rating);
  };

  // Reset hover effect when mouse leaves
  const handleHoverOut = () => {
    setHoverRating(0);
  };

  // Handle message input change and update word count
  const handleMessageChange = (e) => {
    const text = e.target.value;
    setMessage(text);
    setWordCount(text.split(/\s+/).filter(Boolean).length); // Count words
  };

  // Handle feedback submission and show modal
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'd handle the feedback submission (e.g., sending to a server)
    console.log('Feedback submitted:', { rating, message });

    // Show the thank-you modal
    setShowModal(true);
  };

  // Close the modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="feedback-form">
      <h2>Submit Your Feedback</h2>

      {/* Star Rating Section */}
      <div className="star-rating">
        <h3>Rate your experience:</h3>
        <StarRating
          rating={hoverRating || rating}
          onClick={handleRatingClick}
          onHover={handleHover}
          onHoverOut={handleHoverOut}
        />
      </div>

      {/* Message Section (Textarea with word count) */}
      <div className="message-input">
        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="Write your feedback here..."
          rows="4"
        />
        <div className="word-count">
          Word count: {wordCount} / 250
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={rating === 0 || wordCount === 0}
      >
        Submit Feedback
      </button>

      {/* Modal for Thank You Popup */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for your feedback! We appreciate your time and effort in helping us improve.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal><br/><br/>
    </div>
  );
};

export default FeedbackForm;
