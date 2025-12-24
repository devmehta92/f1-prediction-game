import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the F1 Fantasy Game</h1>
      <p>Your ultimate destination for Formula 1 fantasy leagues. Compete with friends, build your dream team, and prove your F1 knowledge.</p>
      <nav>
        <a href="/auth/login">Login</a>
        <a href="/auth/register">Register</a>
      </nav>
    </div>
  );
};

export default HomePage;
