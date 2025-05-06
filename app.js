const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello this is deployed file comes from local system and hosted on aws with the help of git and jenkins. lets continue the process')
})

app.get('/home', (req, res) => {
  res.send('This is Home Page Understand')
})

app.get('/aabout', (req, res) => {
  res.send('This is About Page for knowldge about our site')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
