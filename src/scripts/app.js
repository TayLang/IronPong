import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import QueuePage from './views/queuepage.js'


const app = function() {

  	var PongRouter = Backbone.Router.extend({

	    routes: {

	    	'queue': 'renderQueuePage'

	    },

    	renderQueuePage: function(){

    		<QueuePage />

    	}

  	})

  new PongRouter
  Backbone.history.extend()

}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..