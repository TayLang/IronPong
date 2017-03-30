import React from 'react'

var NavBar = React.createClass({
	
	render: function() {
		return(
			<div className='navBar'>
				<h1 className='pageHeader'>Iron Pong</h1>
				//below are the nav buttons, design guy should set to inline display
				<a href="/#route1"><div>Route 1</div></a>
				<a href="/#route2"><div>Route 2</div></a>
				<a href="/#route3"><div>Route 3</div></a>
				<a href="/#route4"><div>Route 4</div></a>
			</div>
		)
	}
})