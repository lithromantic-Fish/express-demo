const express = require('express')
const db = require('./db')
const app = express()
const port = 3000

db.query("SELECT * FROM user", [], function (results, fields) {
  console.log(results);

})


app.get('/', (req, res) => res.send('只是展示'))


app.get('/user', (req, res) => res.send('一个GET请求'))

app.post('/post', (req, res) => {
  res.send('post')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))