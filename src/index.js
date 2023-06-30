const express = require('express')
const path = require('path')
const app = express()
const port = 4000

//routes
const route = require('./routes')
route(app)
//

//url là localhost:4000/public/img/pepega.png
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//XMLHTTP, fetc, axios, ajax

//morgan debug
// const morgan = require('morgan')
// app.use(morgan('combined'))
//////////////////////

//express-handlebars
const handlebars = require('express-handlebars')
app.engine('hbs', handlebars.engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))
//////////////////////

app.listen(port, () => console.log(`Example app listening on port ${port}`))
