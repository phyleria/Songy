const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

router.post('/submit-story', songController.submitStory);
router.get('/status/:id', songController.checkStatus);
router.post('/upload-song/:id', songController.uploadSong);

// Backend - server/controllers/songController.js
const Song = require('../models/Song');

exports.submitStory = async (req, res) => {
  try {
    const newSong = new Song(req.body);
    await newSong.save();
    res.status(201).json({ 
      success: true, 
      message: 'Story submitted successfully',
      songId: newSong._id 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: 'Error submitting story' 
    });
  }
};