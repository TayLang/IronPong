import React from 'react'
import ACTIONS from '../actions.js'
import STORE from '../store.js'
import NavBar from './components/navBar'

var ReclaimPage = React.createClass({

	render: function(){

		return(
			<div className = 'reclaim-page-wrapper'>
				<NavBar />
				<h1>NOTE: Relcaim form will go here</h1>
			</div>
		)

	}

})

export default ReclaimPage