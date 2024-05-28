import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Admission.css'; // Import custom CSS file for styling
import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Admission() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    className: '',
    courseName: '',
    address: '',
    paymentMethod: ''
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const receivedCourseName = queryParams.get('course');
  useEffect(() => {
    setFormData(prevState => ({
      ...prevState,
      courseName: receivedCourseName  // Assuming you want the first course as default
    }));
  },[]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const numericValue = name === 'mobile' ? value.replace(/\D/g, '') : value;

    setFormData({ ...formData, [name]: numericValue });

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert( JSON.stringify(formData))
    try {
      const response = await axios.post('http://localhost:8081/admission/addStudent', formData);
      if (response.status === 200) {
        alert("Admission is Successfully Done");
        window.location.href = "/home";
      } else {
        setTimeout(() => {
          window.location.href = "/*"; // Replace "/" with your homepage URL
        }, 3000);
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit form. Please try again later.");
    }

  };
  const textStyle = {
  fontWeight: 'bold',
  textTransform: 'uppercase'
    
  };
  const predefinedCourses = [
    "React Fundamentals",
    "JavaScript Basics",
    "HTML5 & CSS3 Essentials",
    "Python Programming",
    "Data Science Fundamentals",
    "Full-Stack Web Development",
    "Angular Development",
  ];
  const predefinedClasses =[
    "10th std ",
    "12th std ",
    "undergraduate ",
    "post graduate ",
    "business officials",
    "corporate training"
  ]
  return (
    <Container className="form-container mt-5">
      <h2 className="form-title">Admission Form</h2>
      <Form id="admission-form" onSubmit={handleSubmit}>
        <marquee><h3> SEED Infotech Pvt.Ltd </h3></marquee>
        <Form.Group style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle}>Full Name <span style={{ color: 'red' }}>*</span>:</Form.Label>
          <Form.Control type="text" id="full-name" placeholder=' Full Name ' pattern="[A-Za-z ]{1,}" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </Form.Group>
        <Form.Group style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Email <span style={{ color: 'red' }}>*</span> :</Form.Label>
          <Form.Control type="email" id="email" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" placeholder=" e.g abc@gmail.com" value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Mobile Number <span style={{ color: 'red' }}>*</span> :</Form.Label>
           <Form.Control type="tel" id="mobile" pattern="[6-9][0-9]{9}" maxLength="10" placeholder="xxxxx xxxxx " name="mobile" value={formData.mobile} onChange={handleChange}  required /> 
        </Form.Group>
        <Form.Group style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Class <span style={{ color: 'red' }}>*</span> :</Form.Label>
          <Form.Control as="select" id="class" name="className" value={formData.className} onChange={handleChange} required >
                <option value=""> Select Class  </option>
                {predefinedClasses.map(standard => (
                  <option key={standard} value={standard}>{standard}</option>
                ))}
          </Form.Control>        
        </Form.Group>
        <Form.Group style={{ marginBottom: "10px" }}>
          <Form.Label style={textStyle}>Course <span style={{ color: 'red' }}>*</span> :</Form.Label>
          {receivedCourseName !== null ? (
            <Form.Control as="select" id="course" name="courseName" value={formData.courseName} onChange={handleChange} required>
              <option value={receivedCourseName}>{receivedCourseName}</option>
            </Form.Control>
          ) : (
            <Form.Control as="select" id="course" name="courseName" value={formData.courseName} onChange={handleChange} required>
              <option value="">Select Course</option>
              {predefinedCourses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </Form.Control>
          )}
        </Form.Group>
        <Form.Group style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Address <span style={{ color: 'red' }}>*</span> :</Form.Label>
          <Form.Control as="textarea" id="address" name="address" pattern="[A-Za-z0-9\s.,]+" placeholder='Address ' value={formData.address} onChange={handleChange} rows="4" required />
        </Form.Group>
        <Form.Group style={{ marginBottom: "20px" }} >
          <Form.Label style={textStyle} >Payment Method <span style={{ color: 'red' }}>*</span> :</Form.Label><br />
          <Form.Check type="radio" id="card" name="paymentMethod" label="Card" value= "Card" checked={formData.paymentMethod === "Card"} onChange={handleChange}  />
          <Form.Check type="radio" id="upi" name="paymentMethod" label="UPI" value= "UPI" checked={formData.paymentMethod === "UPI"} onChange={handleChange} />
          <Form.Check type="radio" id="cash" name="paymentMethod" label="Cash" value= "Cash" checked={formData.paymentMethod === "Cash"} onChange={handleChange} />
        </Form.Group>

        <div style={{ textAlign: "center" }}>
          <Button type="submit" className="submit-btn">Submit</Button>
        </div>      
      </Form>
    </Container>
  );
}

export default Admission;
