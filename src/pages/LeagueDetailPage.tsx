import React from 'react';
import { useParams } from 'react-router-dom';

const LeagueDetailPage: React.FC = () => {
  const { leagueId } = useParams<{ leagueId: string }>();

  return (
    <div>
      <h1>League Detail</h1>
      <p>Details for league {leagueId}.</p>
    </div>
  );
};

export default LeagueDetailPage;
