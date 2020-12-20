const  mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  team_name: {
    type: String,
    required: true,
  },
  wins: {
    type: Number,
    required: true,
    default: 0,
  },
  losses: {
    type: Number,
    required: true,
    default: 0,
  },
  ties: {
    type: Number,
    required: true,
    default: 0,
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
