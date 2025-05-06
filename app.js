const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello this is deployed file comes from local system and hosted on aws with the help of git and jenkins. lets continue the process')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
