import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>Please login to your account.</p>
      <p>
        Don't have an account? <Link to="/auth/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
