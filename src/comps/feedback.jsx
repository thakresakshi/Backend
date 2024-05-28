import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    phoneNumber: '',
    city: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = name === 'phoneNumber' ? value.replace(/\D/g, '') : value;

    setFormData({ ...formData, [name]: numericValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend
    alert( JSON.stringify(formData))
    try {
      const response = await axios.post('http://localhost:8081/feedback/userContact', formData);
      if (response.status === 200) {
        alert(" feedback submitted  ");
        setShowAlert(true);
      } else {
        setTimeout(() => {
          window.location.href = "/*"; // Replace "/" with your homepage URL
        }, 3000);
        throw new Error('Failed to submit feedback please fill it once again ');
      }
    } catch (error) {
      console.error(error);
      alert("Failed to accept feedback. Please try again later.");
    }
   
    // Reset form data
    setFormData({
      name: '',
      message: '',
      phoneNumber: '',
      city: ''
    });

    // Redirect to homepage after 3 seconds
    setTimeout(() => {
      window.location.href = "/home"; // Replace "/" with your homepage URL
    }, 3000);
  };
  const textStyle = {
    fontWeight: 'bold',
    textTransform: 'uppercase'
    
  };
  
  return (
    <Container className="mt-5">
      <h2>Feedback</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Your Name <span style={{ color: 'red' }}>*</span> : </Form.Label>
          <Form.Control type="text" name="name" pattern="[A-Za-z ]{1,}" placeholder='Enter your Full Name ' value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formMessage" style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Your Message <span style={{ color: 'red' }}>*</span> : </Form.Label>
          <Form.Control as="textarea" rows={4} placeholder='Enter your Valuable Feedback for Us ' name="message" value={formData.message} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formPhoneNumber" style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Your Phone Number <span style={{ color: 'red' }}>*</span> : </Form.Label>
          <Form.Control type="tel" name="phoneNumber" pattern="[0-9]{10}" maxLength="10" placeholder="xxxxx xxxxx " value={formData.phoneNumber} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formCity" style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Your City <span style={{ color: 'red' }}>*</span> : </Form.Label>
          <Form.Control type="text" name="city" placeholder='Enter your City ' value={formData.city} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send Feedback
        </Button>
      </Form>
      {showAlert &&
        <Alert variant="success" className="mt-3">
          Thanks for your feedback! We appreciate it.
        </Alert>
      }
    </Container>
  );
}

export default FeedbackPage;
