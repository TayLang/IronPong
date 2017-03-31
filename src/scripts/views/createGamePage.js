import React from 'react'
import ACTIONS from '../actions.js'
import STORE from '../store.js'
import NavBar from './components/navBar'

var CreateGamePage = React.createClass({

	render: function(){

		return(
			<div className = 'create-game-page-wrapper'>
				<NavBar />
			</div>
		)

	}

})

export default CreateGamePage