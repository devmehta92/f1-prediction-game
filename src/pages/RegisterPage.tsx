import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  return (
    <div>
      <h1>Register</h1>
      <p>Create an account to start playing.</p>
      <p>
        Already have an account? <Link to="/auth/login">Login here</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
