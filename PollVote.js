// components/PollVote.js
import React from 'react';
import { votePoll } from '../services/pollService';
import './PollVote.css'; // Import the CSS file

const PollVote = ({ poll, onVote }) => {
  const handleVote = async (optionId) => {
    await votePoll(poll._id, optionId); // Cast vote in the backend
    onVote(); // Trigger a refresh of the poll list after voting
  };

  return (
    <div className="poll-vote">
      <h3>{poll.question}</h3>
      <ul className="poll-options">
        {poll.options.map((option) => (
          <li key={option._id} className="poll-option">
            <span>{option.option} - {option.votes} votes</span>
            <button onClick={() => handleVote(option._id)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollVote;
