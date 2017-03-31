import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import LoginView from './views/loginPage'
import STORE from './store'


const app = function() {
  var PongRouter = Backbone.Router.extend({
    routes:{
    	"": 'handleLanding'
    },

    handleLanding() {
    	ReactDOM.render(<LoginView />, document.querySelector('.container'))
      console.log(STORE)
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