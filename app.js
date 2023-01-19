const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/front-end', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/jsonResponse', (req, res) => {
    res.json({
        status: 'success',
        message: 'This request was successfully processed'
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})