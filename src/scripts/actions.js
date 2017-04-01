import React from 'react'
import User from './models/userModel.js'
import STORE from './store'
const ACTIONS = {

	registerUser: function(formData) {
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
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
		} else {
			document.querySelector('.registerEmailRejection').innerHTML = ' Invalid email address'
		}
	},

	loginUser: function(email, password) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
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
		} else {
			document.querySelector('.loginEmailRejection').innerHTML = ' Invalid email address'
		}
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