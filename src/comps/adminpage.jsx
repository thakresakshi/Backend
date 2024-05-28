import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFileExcel, FaPhone, FaEnvelope, FaUserPlus } from "react-icons/fa";
import handleDownloadAdminExcel from './downlodAdminExel';
import handleDownloadContactUsExcel from './downlodContactUsExcel';
import handleDownloadFeedbackExcel from './downlodFeedbackExel';
import handleDownloadSignupExcel from './downlodSignupExel';
import './AdminPage.css'; // Import the CSS file for custom styles

const AdminPage = () => {
  return (
    <div className="container">
      <h1 className="my-4 text-center">Admin Page</h1>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <div className="card card-gradient-admission">
            <div className="card-body text-center">
              <FaFileExcel style={{ fontSize: '2rem', color: '#fff' }} />
              <button
                type="button"
                className="btn btn-gradient-admission mt-3"
                onClick={handleDownloadAdminExcel}
                style={{ width: '100%' }}
              >
                Download Excel for admission
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <div className="card card-gradient-contactus">
            <div className="card-body text-center">
              <FaPhone style={{ fontSize: '2rem', color: '#fff' }} />
              <button
                type="button"
                className="btn btn-gradient-contactus mt-3"
                onClick={handleDownloadContactUsExcel}
                style={{ width: '100%' }}
              >
                Download Excel for contactUs
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <div className="card card-gradient-feedback">
            <div className="card-body text-center">
              <FaEnvelope style={{ fontSize: '2rem', color: '#fff' }} />
              <button
                type="button"
                className="btn btn-gradient-feedback mt-3"
                onClick={handleDownloadFeedbackExcel}
                style={{ width: '100%' }}
              >
                Download Excel for feedback
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <div className="card card-gradient-signup">
            <div className="card-body text-center">
              <FaUserPlus style={{ fontSize: '2rem', color: '#fff' }} />
              <button
                type="button"
                className="btn btn-gradient-signup mt-3"
                onClick={handleDownloadSignupExcel}
                style={{ width: '100%' }}
              >
                Download Excel for signUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
