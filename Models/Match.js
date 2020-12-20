const  mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    team1: {
        type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
    team2: {
        type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
    status: {
        type: String,
        required: true,
    }
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
