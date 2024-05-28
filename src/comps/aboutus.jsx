import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container className="about-section mt-5">
      <h1 className="text-center"><marquee> SEED Infotech Pvt.Ltd </marquee></h1>
      <h2 className="text-center">About Us</h2>
      <p>
     <h5> SEED Infotech Ltd</h5><br/>
Welcome to an institution that provides knowledge beyond books, knowledge beyond boundaries. An institution that believes information can help you see things from several perspectives and insights can help you see Beyond the obvious.

Celebrating 29+ years of excellence In IT Training
Incorporated in 1994, SEED Infotech is one of India’s leading solution providers in Information Technology training, staffing and products & tools consulting services to both retail (i.e. students, professionals and individuals) and corporate customers.

With our headquarters in Pune, one of the IT hubs of India, our activities are spread over many locations in the state of Maharashtra and other IT Metros in India

Proudly Associated with with global technology leaders such as Microsoft, Red Hat, NSDC, EC Council, Gasq, Kryterion, Prometric, SAP, Hortonworks, are undoubtedly our core strengths. We have 300+ corporate clients and are associated with 50+ Academic Institutions.

We are Proud to say SEED Infotech is registered under NSDC ( National Skill Development Corporation) and that we are NSDC Partners.
      </p>

      <h3 className="text-center">Location</h3>
      <div>
      <iframe
        title='location'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.769427218182!2d73.6730309!3d18.501161599999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065a7fe2d9b%3A0xe4f197df7b9bad6c!2sSEED%20Infotech%20Ltd!5e0!3m2!1sen!2sin!4v1615886114971!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
      <p className="text-center">Ambegaon Budruk, Mumbai, Maharashtra 411041</p>

      <Container className="faculty mt-5">
        <h2 className="text-center">Faculty Members</h2>
        <Row>
          <Col md={4}>
          <div className="card">
            <div className="card-body text-center">
              <img src="faculty3.jpeg" alt="Steve" style={{ width: '245px', height: '250px', display: 'block', margin: 'auto', borderRadius: '50%' }} />
              <h3 className="mt-3">Director Manoj Tiwari</h3>
              <p>Vaibhav is a seasoned Cybersecurity professional with extensive knowledge in network security.</p>
            </div>
          </div>
          </Col>
          <Col md={4}>
            <div className="card">
              <div className="card-body text-center">
                <img src="faculti1.jpeg" alt="Mark" style={{ width: '245px', height: '250px', display: 'block', margin: 'auto', borderRadius: '50%' }} />
                <h3 className="mt-3" >Palak Agrawal </h3>
                <p>Deepesh specializes in Data Science and has published several research papers in the field.</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
          <div className="card">
              <div className="card-body text-center">
                <img src="faculty2.jpeg" alt="Harry" style={{ width: '245px', height: '250px', display: 'block', margin: 'auto', borderRadius: '50%' }} />
                <h3 className="mt-3" > Ramesh Manhotra </h3>
                <p>Sarvesh is an expert in Web Development with over 10 years of experience.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutUs;
