const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  nickName: {type: String},
  createdAt: { type: Date, default: Date.now },
  wins: {type: Number},
  losses: {type: Number},
  winStreak: {type: Number},
  winRatio: {type: Number},
  totalGames: {type: Number},
  avatarURL: {type: String},
  catchPhrase: {type: String},
  paddleGripStyle: {type: String},
  signatureMove: {type: String},
  homeTown: {type: String}


})

const gameSchema = new mongoose.Schema({
	playerOne: {type: String, required: true},
	playerTwo: {type: String, required: true},
	winner: {type: String, required: true},
	loser: {type: String, required: true},
	playerOneScore: {type: Number, required: true},
	playerTwoScore: {type: Number, required: true}

})

const queueSchema = new mongoose.Schema({

	members: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}]
})

module.exports = {
  User: mongoose.model('User', usersSchema),
  Game: mongoose.model('Game', gameSchema),
  Queue: mongoose.model('Queue', queueSchema),
}

