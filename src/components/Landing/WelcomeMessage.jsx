import React from 'react';
import './WelcomeMessage.css';

const WelcomeMessage = ({ message }) => {
  return (
    <div className="welcome-message mt-4 p-4 border rounded bg-light">
      <p>{message}</p>
    </div>
  );
};

export default WelcomeMessage; 