import React, { useRef } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Textarea } from '@chakra-ui/react';
import axios from 'axios';
import { getToken } from '../utils/helpers/common';

const ReviewForm = ({ isOpen, onClose, inspirationId }) => {
  const reviewTextRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reviewText = reviewTextRef.current.value;
    // Check if reviewText is empty
    if (!reviewText.trim()) {
      // Handle empty input case
      console.error('Review text is empty');
      return;
    }

    // Send POST request to backend with review text and inspiration ID
    try {
      await axios.post('/api/reviews/', { text: reviewText, inspiration: inspirationId }, {
        headers: { Authorization: `Bearer ${getToken()}` }
      });
      onClose(); // Close the modal on success
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a Review</ModalHeader>
        <ModalBody>
          <Textarea ref={reviewTextRef} name="reviewText" placeholder="Your review here" />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Submit Review
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReviewForm;