import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>Please login to your account.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default LoginPage;
