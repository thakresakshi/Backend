import React from 'react';
import { Card, Button } from 'react-bootstrap';

const courses = [
  {
    id: 1,
    name: 'React Fundamentals',
    duration: '4 weeks',
    fees: '$200',
    description: 'Learn the basics of React.js library.',
  },
  {
    id: 2,
    name: 'JavaScript Basics',
    duration: '6 weeks',
    fees: '$150',
    description: 'Learn the fundamentals of JavaScript programming language.',
  },
  {
    id: 3,
    name: 'HTML5 & CSS3 Essentials',
    duration: '3 weeks',
    fees: '$100',
    description: 'Master the essentials of HTML5 and CSS3 for web development.',
  },
  {
    id: 4,
    name: 'Python Programming',
    duration: '8 weeks',
    fees: '$250',
    description: 'Get started with Python programming language.',
  },
  {
    id: 5,
    name: 'Data Science Fundamentals',
    duration: '10 weeks',
    fees: '$300',
    description: 'Learn the basics of data science and analytics.',
  },
  {
    id: 6,
    name: 'Full-Stack Web Development',
    duration: '12 weeks',
    fees: '$500',
    description: 'Become a full-stack web developer with this comprehensive course.',
  },
  {
      id: 7,
      name: 'Angular Development ',
      duration: '8 weeks',
      fees: '$300',
      description: 'Become a Angular developer with this comprehensive course.',
    },
    
];

function CoursesPage() {


  const handleSubmit = (course) => {
    const courseName = encodeURIComponent(course.name); // Encode course name to handle special characters
    window.location.href = `/Admision?course=${courseName}`;
  };

  return (
    <div style={{ padding: '20px' }}>
    <h1 style={{ marginBottom: '30px', textAlign: 'center' }}>All Courses</h1>
    <div className="row">
      {courses.map(course => (
        <div key={course.id} className="col-lg-4 col-md-6 col-sm-6" style={{ marginBottom: '20px' }}>
          <Card style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
            <Card.Body>
              <Card.Title style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{course.name}</Card.Title>
              <Card.Text style={{ marginBottom: '10px' }}><strong>Duration:</strong> {course.duration}</Card.Text>
              <Card.Text style={{ marginBottom: '10px' }}><strong>Fees:</strong> {course.fees}</Card.Text>
              <Card.Text style={{ marginBottom: '10px' }}><strong>Description:</strong> {course.description}</Card.Text>
              <Button variant="primary" style={{ marginTop: '10px' }} onClick={() => handleSubmit(course)}>Get Admission</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  </div>
  );
}

export default CoursesPage;
