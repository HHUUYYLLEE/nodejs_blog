const newsRouter = require('./news')

function route(app) {
  app.get('/', (req, res) => res.render('home'))

  //news.js router
  app.use('/news', newsRouter)

  app.get('/search', (req, res) => {
    //   query ? & trên url
    //   console.log(req.query)

    res.render('search')
  })

  app.post('/search', (req, res) => {
    //.body là dữ liệu form
    res.send(req.body)
  })
}

module.exports = route
