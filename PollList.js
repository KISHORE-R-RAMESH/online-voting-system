// components/PollList.js
import React, { useState, useEffect } from 'react';
import { getPolls } from '../services/pollService';
import PollVote from './PollVote';
import './PollList.css'; // Import the CSS file

const PollList = () => {
  const [polls, setPolls] = useState([]);

  const fetchPolls = async () => {
    const result = await getPolls();
    setPolls(result);
  };

  useEffect(() => {
    fetchPolls(); // Initial load of polls
  }, []);

  return (
    <div className="poll-list">
      <h2>Available Polls</h2>
      {polls.map((poll) => (
        <div key={poll._id} className="poll-item">
          <PollVote poll={poll} onVote={fetchPolls} />
        </div>
      ))}
    </div>
  );
};

export default PollList;
