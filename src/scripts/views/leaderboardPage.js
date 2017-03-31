import React from 'react'
import ACTIONS from '../actions.js'
import STORE from '../store.js'
import NavBar from './components/navBar'

var LeaderboardPage = React.createClass({

	render: function(){

		return(
			<div className = 'leaderboard-page-wrapper'>
				<NavBar />
			</div>
		)

	}

})

export default LeaderboardPage