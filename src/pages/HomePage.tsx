import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>F1 Fantasy Game</h1>
      <p>Welcome to the F1 Fantasy Game. Build your team for the season!</p>
      <nav>
        <Link to="/auth/register">Sign Up</Link>
        {' | '}
        <Link to="/auth/login">Log In</Link>
      </nav>
    </div>
  );
};

export default HomePage;
