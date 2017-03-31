import React from 'react'
import ACTIONS from '../actions.js'
import STORE from '../store.js'

var ProfilePage = React.createClass({

	componentWillMount: function(){

		//fetch the user info collection
		this.setState(STORE.data)

	},

	getInitialState: function(){

		return STORE.data

	},

	render: function(){

		return(

			<div className = 'profile-page-wrapper'>

				<Stats />	

			</div>

		)

	}

})

var Stats = React.createClass({

	render: function(){

		return(

			<div className = 'stats-wrapper'>



			</div>

		)

	}

})

export default ProfilePage