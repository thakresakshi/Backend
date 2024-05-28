import React, { useState } from 'react';
import { Container, Form, Card, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/login/userlogin', formData);
      if (response.data === 0) {
        setError("Login failed. Please check your credentials and try again.");
        setShowAlert(true);
        setTimeout(() => {
          setError(null); // Clear error message
          setShowAlert(false); // Hide error message
        }, 5000); // Hide error message after 5 seconds
        // Clear form fields
        setFormData({ username: '', password: '' });
      } else {
        setLoginSuccess(true);
        setShowAlert(true);
        setTimeout(() => {
          window.location.href = "/home"; // Redirect after successful login
        }, 3000);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Failed to sign in. Please try again later.");
      setShowAlert(true);
    }
  };

  const textStyle = {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };

  const cardStyle = {
    width: '100%', // Full width of container
    maxWidth: '400px', // Max width of 400px
    padding: '20px', // Padding around the card
    margin: 'auto', // Center horizontally
    marginTop: '20px' // Space from top
  };

  return (
    <>
      <Container className="mt-5 d-flex justify-content-center align-items-center">
        <div style={cardStyle}>
          <Card>
            <Card.Body>
              {showAlert && (
                <Alert variant={error ? "danger" : "success"} className="mt-3">
                  {error || (loginSuccess ? "Login Successful! Redirecting to homepage..." : "Login failed! Please try again...")}
                </Alert>
              )}
              <Card.Title className="text-center"><b>LOGIN</b></Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername" style={{ marginBottom: "10px" }}>
                  <Form.Label style={textStyle}>Username <span style={{ color: 'red' }}>*</span>:</Form.Label>
                  <Form.Control type="text" name="username" placeholder="Enter Username" value={formData.username} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formPassword" style={{ marginBottom: "10px" }}>
                  <Form.Label style={textStyle}>Password <span style={{ color: 'red' }}>*</span>:</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default LoginPage;
