const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var hostname = process.env.HOSTNAME
  res.type('text/plain');
  res.send('Hello from nodejs container with id - '+ hostname );   
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
