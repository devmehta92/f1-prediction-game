import React from 'react';
import { useParams } from 'react-router-dom';

const LeagueDetailPage: React.FC = () => {
  const { leagueId } = useParams<{ leagueId: string }>();

  return (
    <main id="main-content">
      <h1>League Detail</h1>
      <p>Details for league {leagueId}.</p>
    </main>
  );
};

export default LeagueDetailPage;
