const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  storyDetails: {
    emotion: String,
    memory: String,
    people: [String],
    setting: String
  },
  musicalPreferences: {
    genre: [String],
    instruments: [String],
    mood: String
  },
  selectedImage: String,
  additionalNotes: String,
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});