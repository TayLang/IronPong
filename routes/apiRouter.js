let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let Game = require('../db/schema').Game

  
  apiRouter
    .get('/users', function(req, res){
      User.find(req.query , "-password", function(err, results){
        if(err) return res.json(err) 
        res.json(results)
      })
    })

  apiRouter
    .get('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password", function(err, record){
        if(err || !record ) return res.json(err) 
        res.json(record)
      })
    })
    .put('/users/:_id', function(req, res){

      User.findByIdAndUpdate(req.params._id, req.body, function(err, record){
          if (err) {
            res.status(500).send(err)
          }
          else if (!record) {
            res.status(400).send('no record found with that id')
          }
          else {
            res.json(Object.assign({},req.body,record))
          }
      })
    })

    .delete('/users/:_id', function(req, res){
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })  
    })

//---------------------------------------------------------
//                   ROUTES FOR GAME
//---------------------------------------------------------

apiRouter.post('/games', function(req, res) {
  let newGame = new Game(req.body)
  newGame.save((err, record) => {
    if(err) return res.status(500).json(`Problem saving game to database`)
    res.json(record)
  })
})

apiRouter.get('/games', function(req, res){
  Game.find(req.query, function(err, results){
    if(err) return res.status(400).json(`Problem getting games from database`) 
    res.json(results)
  })
})
    


module.exports = apiRouter