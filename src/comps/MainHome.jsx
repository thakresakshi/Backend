import React from "react";
import { Carousel } from "react-bootstrap";
import OurHappyStudents from "./HomePages/studfeedback"; // Import the OurHappyStudents component
import InstituteStatus from "./HomePages/Instutetiming"; // Import the OurHappyStudents component

function HomePage() {
  return (
    <>
      <div>
        <div className="container mt-4">
          <h1 className="text-center">Welcome to Our Institute!</h1>
          <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    src="web.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    src="HtmlCss.jpeg"
                    alt="second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    src="fsd.jpg"
                    alt="third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    src="react.png"
                    alt="fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    src="eng.jpeg"
                    alt="fifth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    src="cyber.jpeg"
                    alt="sixth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div />
          </div>

          <div className="container mt-4">
            <OurHappyStudents />
          </div>

          <div className="container mt-4">
            <InstituteStatus />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
