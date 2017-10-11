const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/login', function (req, res) {
  res.send('some login page')
})

app.get('/health', function (req, res) {
  res.send('Everything is A-OK!')
})

let port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
