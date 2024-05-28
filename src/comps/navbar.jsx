import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CoursesPage from "./SeeCoursesPage";
import ContactUs from "./ContactUs";
import AdmissionPage from "./admision";
import HomePage from "./MainHome";
import AboutUs from "./aboutus";
import FeedbackPage from "./feedback";
import LoginPage from "./loginpage";
import SignUpPage from "./signup";
import ErrorPage from "./errorPage";
import Footer from "./footer";
import AdminLoginPage from "./LoginAdmin";
import AdminPage from "./adminpage";

function Navbar() {
  return (
    <>
      <Router>
        <div className="container">

        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#5375e2" }}>

            <div className="container-fluid">
            <Link className="navbar-brand text-white" to="/">
                Home Page
              </Link>              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/courses" 
                    >
                      Courses
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/Admision"
                    >
                      Admision
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/contactus"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/feedback"
                    >
                      Feedback
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" aria-current="page" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      login
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/login">User Login</Link></li>
                      <li><Link className="dropdown-item" to="/adminlogin">Admin Login</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/aboutus"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="" Component={HomePage}></Route>
            <Route path="home" Component={HomePage}></Route>
            <Route path="courses" Component={CoursesPage}></Route>
            <Route path="Admision" Component={AdmissionPage}></Route>
            <Route path="contactus" Component={ContactUs}></Route>
            <Route path="feedback" Component={FeedbackPage}></Route>
            <Route path="signup" Component={SignUpPage}></Route>
            <Route path="login" Component={LoginPage}></Route>
            <Route path="adminlogin" Component={AdminLoginPage}></Route>
            <Route path="admin" Component={AdminPage}></Route>
            <Route path="aboutus" Component={AboutUs}></Route>
            <Route path="*" Component={ErrorPage}></Route>
          </Routes>
        </div>

      <footer>
        <Footer />
      </footer>
    </Router>
    </>
  );
}

export default Navbar;
