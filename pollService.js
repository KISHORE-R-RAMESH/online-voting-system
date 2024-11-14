// services/pollService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/polls';

export const getPolls = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createPoll = async (poll) => {
  const response = await axios.post(API_URL, poll);
  return response.data;
};

export const votePoll = async (id, optionId) => {
  const response = await axios.put(`${API_URL}/vote/${id}`, { optionId });
  return response.data;
};

export const deletePoll = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
