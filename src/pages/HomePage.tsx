import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>F1 Fantasy Game</h1>
      <p>Welcome to the F1 Fantasy Game. Build your team for the season!</p>
      <p>
        <Link to="/auth/login">Login</Link> or{' '}
        <Link to="/auth/register">Register</Link> to get started.
      </p>
    </div>
  );
};

export default HomePage;
