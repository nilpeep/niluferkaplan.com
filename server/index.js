// server.js
const express = require('express')
const app = express()

require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000

// db connection

const { dbConnection } = require('./src/configs/dbConnection')

dbConnection()

app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to My Blog Website',
        documents: {
            swagger: '/documents/swagger',
            redoc: '/documents/redoc',
            json: '/documents/json',
        },
        user: req.user
    })
})

//? router:

app.use(require('./src/routes'))

app.listen(PORT, HOST, () => console.log(`server running at http://${HOST}:${PORT}`))


