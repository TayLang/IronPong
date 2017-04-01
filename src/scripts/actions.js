import React from 'react'
import User from './models/userModel.js'
import STORE from './store.js'

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
					ACTIONS.loggedInStatus()
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
					ACTIONS.loggedInStatus()
					location.hash = 'login'
				})
			.fail(
				function(error) {
					console.log('problem logging out', error)
				})
	},

	loggedInStatus: function(){
		console.log(User.getCurrentUser())
		if(User.getCurrentUser() != null){

			STORE.set({userLoginStatus: 'Log Out'})
			console.log(STORE.data.userLoginStatus)

			return 'Log Out'
		}

		else{

			STORE.set({userLoginStatus: 'Log In'})
			console.log(STORE.data.userLoginStatus)

			return 'Log In'
		}
	}

}

ACTIONS.loggedInStatus()

export default ACTIONS