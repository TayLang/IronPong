

const ACTIONS = {

	registerUser: function(formData) {
		User.register(formData)
			.done(
				function(response) {
					console.log(response)
					ACTIONS.loginUser(formData.email, formData.password)
				}
				)
			.fail(
				function(error) {
					console.log(error)
				}
				)
	},

	loginUser: function() {
		User.login(email, password) 
			.done(
				function(response){
					console.log(response)
					location.hash = 'home'
				}
				)
			.fail(
				function(error){
					console.log(error)
				}
				)
	}

}

export default ACTIONS