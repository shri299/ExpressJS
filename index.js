const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(path.join(__dirname,'test.html'))
})

app.get('/about', (req, res) => {
    res.send('This is the about page!!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})