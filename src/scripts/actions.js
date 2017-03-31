import React from 'react'
import User from './models/userModel.js'

const ACTIONS = {

	registerUser: function(formData) {
		User.register(formData)
			.done(
				function(response) {
					console.log('register success', response)
					ACTIONS.loginUser(formData.email, formData.password)
				}
				)
			.fail(
				function(error) {
					console.log('register fail', error)
				}
				)
	},

	loginUser: function(email, password) {
		User.login(email, password) 
			.done(
				function(response){
					console.log('login success', response)
					location.hash = 'home'
				}
				)
			.fail(
				function(error){
					console.log('login fail', error)
				}
				)
	},

	logoutUser: function() {
		User.logout()
			.done(
				function(response) {
					console.log('you logged out', response)
					location.hash = 'login'
				})
			.fail(
				function(error) {
					console.log('problem logging out', error)
				})
	},

	fetchUsers: function() {
		var userColl = STORE.get('userCollection')
		userColl.fetch()
			.then(function() {
				STORE.set({
					userCollection: userColl
				})
			})
	}

}

export default ACTIONS