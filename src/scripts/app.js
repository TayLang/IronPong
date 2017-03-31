import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import LoginView from './views/loginPage'
import STORE from './store'

//Pages imports
import HomePage from './views/homepage.js'
import LoginPage from './views/loginpage.js'
import ProfilePage from './views/profilepage.js'
import CreateGamePage from './views/creategamepage.js'
import QueuePage from './views/queuepage.js'
import LeaderboardPage from './views/leaderboardpage.js'


const app = function() {
  	let PongRouter = Backbone.Router.extend({

	    routes: {

	    	'home': 'renderHomePage',
	    	'queue': 'renderQueuePage',
	    	'login/:id': 'renderLoginPage',
	    	'profile/:id': 'renderProfilePage',
	    	'leaderboard': 'renderLeaderboardPage',
	    	'create_game': 'renderCreateGamePage',
	    	'*default': 'handleRedirect',

	    },

	    handleRedirect: function(){

	    	location.hash = "home"

	    },

	    renderHomePage: function(){

	    	ReactDOM.render(<HomePage />, document.querySelector('.container'))

	    },

	    renderLoginPage: function(){

	    	ReactDOM.render(<LoginPage />, document.querySelector('.container'))

	    },

	    renderProfilePage: function(id){

    		ReactDOM.render(<ProfilePage />, document.querySelector('.container'))

    	},

    	renderCreateGamePage: function(){

    		ReactDOM.render(<CreateGamePage />, document.querySelector('.container'))
    	},

    	renderQueuePage: function(){

    		ReactDOM.render(<QueuePage />, document.querySelector('.container'))

    	},

    	renderLeaderboardPage: function(){

    		ReactDOM.render(<LeaderboardPage />, document.querySelector('.container'))

    	}

  	})

	new PongRouter
	Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..