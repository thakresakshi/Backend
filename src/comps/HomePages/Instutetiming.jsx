import React, { useState, useEffect } from 'react';

function InstituteStatus() {
  // Define opening and closing times (24-hour format)
  const openingTime = 9; // 9:00 AM
  const closingTime = 18; // 6:00 PM

  // Define state variables
  const [currentTime, setCurrentTime] = useState(new Date().getHours());
  const [isOpen, setIsOpen] = useState(false);

  // Function to check if the institute is open
  const checkStatus = () => {
    if (currentTime >= openingTime && currentTime < closingTime) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  // Update current time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getHours());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Check status on component mount and whenever currentTime changes
  useEffect(() => {
    checkStatus();
  }, [currentTime]);

  // Function to format time
  const formatTime = (hour) => {
    return hour >= 12 ? `${hour % 12} PM` : `${hour} AM`;
  };
  const statusStyles = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const titleStyles = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const infoStyles = {
    marginBottom: '10px',
  };

  return (
    <div style={statusStyles}>
      <h1 style={titleStyles}>Institute Status</h1>
      <p style={infoStyles}><strong>Opening Time:</strong> {formatTime(openingTime)}</p>
      <p style={infoStyles}><strong>Closing Time:</strong> {formatTime(closingTime)}</p>
      <p style={infoStyles}><strong>Current Time:</strong> {formatTime(currentTime)}</p>
      <p style={infoStyles}><strong>Status:</strong> {isOpen ? <span style={{ color: 'green' }}>Open</span> : <span style={{ color: 'red' }}>Closed</span>}</p>
    </div>
  );
}

export default InstituteStatus;
