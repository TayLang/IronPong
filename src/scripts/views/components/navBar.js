import React from 'react'
import ACTIONS from '../../actions'

var NavBar = React.createClass({

	handleLogout: function () {

		ACTIONS.logoutUser()

	},

	render: function() {

		return(

			<div className='nav-bar-wrapper'>

				<a href="/#home">Home</a>
				<a href="/#queue">Game Queue</a>
				<a href="/#leaderboard">Leaderboard</a>
				<a href="/#profile">Profile</a>
				<a href="/#login">Login</a>
				<a href="/#logout">Logout</a>

			</div>

		)
	}
})

export default NavBar