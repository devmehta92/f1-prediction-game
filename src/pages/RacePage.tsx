import React from 'react';
import { useParams } from 'react-router-dom';

const RacePage: React.FC = () => {
  const { round } = useParams<{ round: string }>();

  return (
    <main id="main-content">
      <h1>Race Details</h1>
      <p>Viewing details for race round {round}.</p>
    </main>
  );
};

export default RacePage;
