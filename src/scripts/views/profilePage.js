import React from 'react'
import ACTIONS from '../actions.js'
import STORE from '../store.js'
import NavBar from './components/navBar'

var ProfilePage = React.createClass({

	render: function(){

		return(
			<div className = 'profile-page-wrapper'>
				<NavBar />
			</div>
		)

	}

})

export default ProfilePage