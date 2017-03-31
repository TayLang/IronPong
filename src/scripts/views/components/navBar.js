import React from 'react'
import ACTIONS from '../../actions'

var NavBar = React.createClass({
	handleLogout: function () {
		ACTIONS.logoutUser()
	},
	render: function() {
		return(
			<div className='navBar'>
				<h1 className='pageHeader'>Iron Pong</h1>
				<a href="/#home"><div className="navButton">Home</div></a>
				<a href="/#create_game"><div className='navButton'>Create new Game</div></a>
				<a href="/#leaderboard"><div className='navButton'>Leaderboard</div></a>
				<a href="/#profile"><div className='navButton'>Profile</div></a>
				<a href='/#login' onClick={this.handleLogout} className='navButton'>Logout</a>
			</div>
		)
	}
})

export default NavBar