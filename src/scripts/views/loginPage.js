import React from 'react'
import ACTIONS from '../actions.js'
import STORE from '../store.js'
import NavBar from './components/navBar'

var LoginView = React.createClass({
	render: function() {
		return (
			<div className='login-page-wrapper'>
				<NavBar />
				<RegisterForm />
				<LoginForm />
			</div>
		)
	}
})

var LoginForm = React.createClass({

	_handleSubmit: function(evtObj) {
		evtObj.preventDefault()
		var formEl = evtObj.target
		var formData = {
			email: formEl.email.value.toString(),
			password: formEl.password.value.toString()
		}
		console.log(formEl)
		ACTIONS.loginUser(formEl.email.value, formEl.password.value)
		formEl.reset()
	},

	render: function() {
		return (
			<div className='form-wrapper login-form'>
				<h2>Login Form</h2>
				<form onSubmit={this._handleSubmit}>
					<input type='text' name='email' placeholder='enter your email' /><br /><br />
					<input type='password' name='password' placeholder='enter password' /><br /><br />
					<button type='submit'>Login</button>
				</form>
			</div>

		)
	}
})

var RegisterForm = React.createClass({

	_handleSubmit: function(evtObj) {
		evtObj.preventDefault()
		var formEl = evtObj.target
		var formData = {
			name: formEl.userName.value,
			email: formEl.email.value,
			password: formEl.password.value
		}
		ACTIONS.registerUser(formData)
		formEl.reset()
	},

	render: function() {
		return (
			<div className='form-wrapper register-form'>
			<h2>Register Form</h2>
			<form onSubmit={this._handleSubmit}>
				<input type='text' name='userName' placeholder='enter username' /><br /><br />
				<input type='text' name='email' placeholder='enter your email' />
				<span className='emailRejection'></span><br /><br />
				<input type='password' name='password' placeholder='create a password' /><br /><br />
				<button type='submit'>Register</button>
			</form>
			</div>
		)
	}
})

export default LoginView