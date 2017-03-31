import React from 'react'
import ACTIONS from '../../actions'

var NavBar = React.createClass({
	render: function() {
		handleLogout: function() {
			ACTIONS.logoutUser()
		},
		return(
			<div className='navBar'>
				<h1 className='pageHeader'>Iron Pong</h1>
				//below are the nav buttons, design guy should set to inline display
				<a href="/#home"><div className="navButton">Home</div></a>
				<a href="/#queue"><div className='navButton'>Game Queue</div></a>
				<a href="/#create_game"><div className='navButton'>Create new Game</div></a>
				<a href="/#leaderboard"><div className='navButton'>Leaderboard</div></a>
				<a href="/#profile"><div className='navButton'>Profile</div></a>
				<div onClick={this.handleLogout} className='navButton'>Logout</div>
			</div>
		)
	}
})

export default NavBar