import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';


function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    mobileNumber: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = name === 'mobileNumber' ? value.replace(/\D/g, '') : value;
    setFormData({ ...formData, [name]: numericValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert( JSON.stringify(formData))
    try {
      const response = await axios.post('http://localhost:8081/signUp/userSignUp', formData);
      if (response.status === 200) {
        alert(" Sucessfully Registeed ");
        setShowAlert(true);
         // Redirect to homepage after 3 seconds
        setTimeout(() => {
            window.location.href = "/home"; 
        }, 3000);
      } else {
        throw new Error('Failed to Register ');
      }
    } catch (error) {
      console.error(error);
      alert("Failed to Register. Please try again later.");
    }
  };
  const textStyle = {
    fontWeight: 'bold',
    textTransform: 'uppercase'
    
  };
  return (
    <Container className="mt-5">
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFullName" style={{ marginBottom: "10px" }} >
          <Form.Label  style={textStyle} >Full Name <span style={{ color: 'red' }}>*</span> : </Form.Label>
          <Form.Control type="text" name="fullName" placeholder=' Enter your Name ' pattern="[A-Za-z ]{1,}" value={formData.fullName} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formEmail" style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Email <span style={{ color: 'red' }}>*</span> : </Form.Label>
          <Form.Control type="email" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formUsername" style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Username <span style={{ color: 'red' }}>*</span> : </Form.Label>
          <Form.Control type="text" name="username" placeholder=' Enter Email as Username ' value={formData.username} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formPassword" style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Password <span style={{ color: 'red' }}>*</span> : </Form.Label>
          <Form.Control type="password" name="password" placeholder=' Enter Password ' value={formData.password} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formMobileNumber" style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Mobile Number <span style={{ color: 'red' }}>*</span> : </Form.Label>
          <Form.Control type="tel" name="mobileNumber"  pattern="[6-9][0-9]{9}" maxLength="10" placeholder="xxxxx xxxxx" value={formData.mobileNumber} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      {showAlert &&
        <Alert variant="success" className="mt-3">
          Successfully Registered! Redirecting to homepage...
        </Alert>
      }
    </Container>
  );
}

export default SignUpPage;
