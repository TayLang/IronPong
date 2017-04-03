import React from 'react'
import ACTIONS from '../../actions'
import STORE from '../../store.js'
import User from '../../models/userModel'

var NavBar = React.createClass({

	componentWillMount: function(){

		STORE.on('dataUpdated', () => {

			this.setState(STORE.data)

		})

	},

	getInitialState: function(){

		return STORE.data

	},

	handleLogout: function () {

		ACTIONS.loggedInStatus()
		ACTIONS.logoutUser()

	},

	render: function() {
		console.log(this.state.userLoginStatus)
		var userId = User.getCurrentUser()
		console.log('userid', userId)
		return(

			<div className='nav-bar-wrapper'>

				<a href="/#home">Home</a>
				<a href="/#queue">Queue</a>
				<a href="/#leaderboard">Leaderboard</a>
				<a href="/#profile/:id">Profile</a>
				<a href="/#rules">Rules</a>
				<a onClick={this.handleLogout}>{this.state.userLoginStatus}</a>
				

			</div>

		)
	}
})

export default NavBar