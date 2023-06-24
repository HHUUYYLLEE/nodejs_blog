const express = require('express')
const path = require('path')
const app = express()
const port = 4000

//url là localhost:4000/public/img/pepega.png
app.use(express.static(path.join(__dirname, 'public')))

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

app.get('/', (req, res) => res.render('home'))

app.get('/news', (req, res) => {
  console.log(req.query)
  res.render('news')
})

app.get('/search', (req, res) => {
  //   query ? & trên url
  //   console.log(req.query)

  res.render('search')
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
