const express = require('express')
const app = express()
const port = 2410

app.get('/', (req, res) => {
  res.send('<h1> THIS IS HOME PAGE </h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1> THIS IS HOME PAGE </h1>')
})

app.get('/contact', (req, res) => {
    res.send('<h1> THIS IS CONTACT PAGE </h1>')
})

app.get('/help', (req, res) => {
    res.send('<h1> THIS IS HELP PAGE </h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})