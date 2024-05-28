import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div
          className="d-flex align-items-center"
          style={{
            backgroundColor: "#5375e2",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <img
            src="seedlogo.ico" // Update the image source accordingly
            alt="Institute Logo"
            className="img-fluid"
            style={{ width: "10%", maxWidth: "100px", marginRight: "20px" }} // Adjust the maximum width as needed
          />
          <div>
            <h2 className="text-white" style={{ fontSize: "24px" }}>
              {" "}
              {/* Adjust font size as needed */}
              <u>SEED Infotech Pvt.Ltd</u>
            </h2>
            <p className="text-white" style={{ fontSize: "18px" }}>
              {" "}
              {/* Adjust font size as needed */}
              Seed Infotech, Nalanda's No.39 CTS No 943, Hissa 2 /2, Gulawani
              Maharaj Road,
              <br />
              opp. Gandhi Lawns, near ICICI Bank, Erandwane, Pune, Maharashtra
              411004
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
