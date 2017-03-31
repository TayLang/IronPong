import React from 'react'
import ACTIONS from '../actions.js'
import STORE from '../store.js'
import NavBar from './components/navBar'

var QueuePage = React.createClass({

	render: function(){

		return(
			<div className = 'queue-page-wrapper'>
				<NavBar />
			</div>
		)

	}

})

export default QueuePage