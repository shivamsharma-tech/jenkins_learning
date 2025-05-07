const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello users this page comes from pipeline')
})

app.get('/home', (req, res) => {
  res.send('This is Home Page Understand')
})

app.get('/aabout', (req, res) => {
  res.send('This is About Page for knowldge about our site')
})

app.listen(port,'0.0.0.0' ,() => {
  console.log(`Example app listening on port ${port}`)
})
