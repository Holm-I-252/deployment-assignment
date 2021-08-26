const express = require('express')
const path = require('path')

const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"))
})

const port = process.env.PORT || 4005

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../main.js'))
  })

  app.get('/jfif', (req, res) => {
    res.sendFile(path.join(__dirname, '../hackerman.jfif'))
  })

// app.get('/css', (req, res) => {
//     res.sendFile(path.join(__dirname, 'style.css'))
//     })

  app.use('/css', express.static(path.join(__dirname, '../style.css')))

app.listen(port, () => {
    console.log(`Running on ${port}`)
})