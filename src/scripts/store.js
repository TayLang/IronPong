import Backbone from 'backbone'
import {GameCollection} from './models/gameModel' 



var STORE = Object.assign({}, Backbone.Events, {
		data: {
			items: new GameCollection
			
		},

		get: function(prop){
			
			if(this.data.items === undefined) {
				throw new Error ('the store does not have a property called: ', + prop)
			}
			return this.data[prop]
		},

		set: function(){
			this.trigger('dataUpdated')
		},

})

export default STORE