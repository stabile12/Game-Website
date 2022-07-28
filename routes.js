const express = require('express')
const route = express.Router()
const startController = require('./src/controllers/startController')
const velhaController = require('./src/controllers/velhaController')
const singleController = require('./src/controllers/singleController')
const multiController = require('./src/controllers/multiController')
const forcaController = require('./src/controllers/forcaController')


route.get('/', startController.start)

route.get('/home', velhaController.home)

route.get('/home/1player', singleController.player1, function() {
    console.log('single player selecionado')
})

route.get('/home/2players', multiController.multi)

route.get('/forca', forcaController.forca )

module.exports = route