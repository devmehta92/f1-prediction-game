import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '3rem',
    marginBottom: '1rem',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  };

  const linkStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#007bff',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404 - Page Not Found</h1>
      <p style={paragraphStyle}>The page you are looking for does not exist.</p>
      <Link to="/" style={linkStyle}>Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
