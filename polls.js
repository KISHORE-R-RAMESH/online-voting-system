// routes/polls.js
const express = require('express');
const Poll = require('../models/Poll');
const router = express.Router();

// Create a new poll
router.post('/', async (req, res) => {
  const { question, options } = req.body;
  const formattedOptions = options.map(option => ({ option, votes: 0 }));
  const newPoll = new Poll({ question, options: formattedOptions });
  
  try {
    const poll = await newPoll.save();
    res.json(poll);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read all polls
router.get('/', async (req, res) => {
  try {
    const polls = await Poll.find();
    res.json(polls);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Vote on an option
router.put('/vote/:id', async (req, res) => {
  const { id } = req.params;
  const { optionId } = req.body;

  try {
    const poll = await Poll.findById(id);
    const option = poll.options.id(optionId);
    option.votes += 1;
    await poll.save();
    res.json(poll);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a poll
router.delete('/:id', async (req, res) => {
  try {
    await Poll.findByIdAndDelete(req.params.id);
    res.json({ message: "Poll deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
