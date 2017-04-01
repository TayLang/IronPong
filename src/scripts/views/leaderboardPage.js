import React from 'react'
import ACTIONS from '../actions.js'
import STORE from '../store.js'
import NavBar from './components/navBar'

var LeaderboardPage = React.createClass({
	componentWillMount: function() {
		ACTIONS.fetchUsers()
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},
	getInitialState: function() {
		return STORE.data
	},
	render: function(){
		return(
			<div className = 'leaderboard-page-wrapper'>
				<NavBar />
				<LeaderboardDisplay userColl={this.state.userCollection} />
			</div>
		)

	}

})

var LeaderboardDisplay = React.createClass({
	render: function() {
		return(
			<div></div>
		)
	}
})

export default LeaderboardPage