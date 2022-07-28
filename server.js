const express = require('express');
const path  = require('path');
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', './src/views')
app.set('view engine', 'ejs');

app.use(routes)

app.listen(300, () => {
    console.log('acessar http://localhost:300')
})