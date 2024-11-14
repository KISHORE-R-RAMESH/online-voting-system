// components/PollForm.js
import React, { useState } from 'react';
import { createPoll } from '../services/pollService';
import './PollForm.css';  // Import the CSS file

const PollForm = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPoll({ question, options });
    setQuestion('');
    setOptions([]);
  };

  const handleOptionChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };

  return (
    <form className="poll-form" onSubmit={handleSubmit}>
      <h2>Create a New Poll</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter poll question"
      />
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          value={option}
          onChange={(e) => handleOptionChange(e, index)}
          placeholder={`Option ${index + 1}`}
        />
      ))}
      <button
        type="button"
        className="add-option-button"
        onClick={() => setOptions([...options, ''])}
      >
        Add Option
      </button>
      <button type="submit">Create Poll</button>
    </form>
  );
};

export default PollForm;
