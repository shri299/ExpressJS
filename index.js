const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname,"public")))


app.get('/hello/:name', (req, res) => {
  //res.send('Hello World!')
  //res.sendFile(path.join(__dirname,'test.html'))
  //res.json({"age":"24"})
  res.send("hi this is "+req.params.name)
})

app.get('/about', (req, res) => {
    res.send('This is the about page!!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})