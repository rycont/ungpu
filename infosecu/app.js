const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', express.static('static'))

app.use('/', require(__dirname + '/route/index'))
app.use('/board', require(__dirname + '/route/board'))
app.use('*', (req, res) => {
  res.status(404).render('404')
})

app.listen(8011)