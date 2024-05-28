import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import axios from 'axios';

function AdminLoginPage() {
  const [formData, setFormData] = useState({
    mobileNumber:'',
    username: '',
    password: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/login/AdminUserlogin', formData);
      if (response.data === 0) {
        setError("Login failed. Please check your credentials and try again.");
        setShowAlert(true);
        setTimeout(() => {
          setError(null);
          setShowAlert(false);
        }, 5000); // Hide error message after 5 seconds
        setFormData({ mobileNumber: '', username: '', password: '' }); // Clear form fields
      } else {
        setShowAlert(true);
        setTimeout(() => {
          window.location.href = "/admin"; // Redirect after successful login
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
    maxWidth: '400px', // Max width of 400px
    margin: 'auto', // Center horizontally
    marginTop: '20px' // Space from top
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Admin Login</h2>
      <Card style={cardStyle}>
        <Card.Body>
          {showAlert && (
            <Alert variant={error ? "danger" : "success"} className="mt-3">
              {error || "Login Successful! Redirecting to Adminpage ..."}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsermob" style={{ marginBottom: "10px" }}>
              <Form.Label style={textStyle}>User id <span style={{ color: 'red' }}>*</span> : </Form.Label>
              <Form.Control type="text" name="mobileNumber" placeholder='Enter User id' value={formData.mobileNumber} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formUsername" style={{ marginBottom: "10px" }}>
              <Form.Label style={textStyle}>Username <span style={{ color: 'red' }}>*</span> : </Form.Label>
              <Form.Control type="text" name="username" placeholder='Enter Username' value={formData.username} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formPassword" style={{ marginBottom: "10px" }}>
              <Form.Label style={textStyle}>Password <span style={{ color: 'red' }}>*</span> : </Form.Label>
              <Form.Control type="password" name="password" placeholder='Enter Password' value={formData.password} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AdminLoginPage;
