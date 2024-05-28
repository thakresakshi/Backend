import React from "react";
import { Card, Container } from "react-bootstrap";

function OurHappyStudents() {
  // Dummy data for student feedback
  const studentFeedback = [
    {
      id: 1,
      img:"boy1.jpeg",
      name: "John Doe",
      feedback: "Great learning experience! Highly recommend it.",
    },
    {
      id: 2,
      img:"girl2.jpeg",
      name: "Alice Smith",
      feedback: "Excellent instructors and course materials.",
    },
    {
      id: 3,
      img:"boy4.jpeg",
      name: "Bob Johnson",
      feedback: "Fantastic support from the teaching staff.",
    },
    {
      id: 4,
      img:"girl3.jpeg",
      name: "Emily Brown",
      feedback: "Amazing opportunities for personal growth.",
    },
    {
      id: 5,
      img:"girl1.jpeg",
      name: "Michael Wilson",
      feedback: "Outstanding curriculum, very informative.",
    },
  ];

  return (
    <Container>
      <h2>Our Happy Students</h2>
      <div className="row">
        {studentFeedback.map((student) => (
          <div key={student.id} className="col-lg-4 col-md-6 col-sm-6">
            <Card style={{ width: "18rem", height: "280px", marginBottom: "20px" , boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <Card.Body>
                <Card.Img src={student.img} className="d-block img-fluid" style={{ maxWidth: '150px', maxHeight: '150px', display: 'block', margin: 'auto', borderRadius: '50%' }}/>
                <Card.Title>{student.name}</Card.Title>
                <Card.Text>{student.feedback}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default OurHappyStudents;
