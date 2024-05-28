import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-white py-4 mt-5" style={{ backgroundColor: "#5c616e" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4" >
            <h3>About Us</h3>
            <p>A brief description of the college and its mission.</p>
            <p>Contact: contact@college.edu</p>
          </div>
          <div className="col-lg-4">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/home" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Home</a>
              </li>
              <li>
                <a href="/courses" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Courses</a>
              </li>
              <li>
                <a href="/Admision" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" >Admissions</a>
              </li>
              <li>
                <a href="/contactUs" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" >Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3>Follow Us</h3>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://m.facebook.com/profile.php?id=100064860571188"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/SEED_Infotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/seedinfotechltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/seed-infotech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; 2024 College. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
