const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }

})

const gameSchema = new mongoose.Schema({
	playerOne: {type: String, required: true},
	playerTwo: {type: String, required: true},
	winner: {type: String, required: true},
	loser: {type: String, required: true},
	playerOneScore: {type: Number, required: true},
	playerTwoScore: {type: Number, required: true}

})

module.exports = {
  User: mongoose.model('User', usersSchema),
  Game: mongoose.model('Game', gameSchema)
}