import Backbone from 'backbone'

export const GameModel = Backbone.Model.extend({
	urlRoot: '/api/games',
	idAttribute: '_id'
})

export const GameCollection = Backbone.Collection.extend({
	comparator: function(mod){
		return new Date(mod.get('createdAt')).getTime()*-1
	},
	model: GameModel,
	url: 'api/games'
})