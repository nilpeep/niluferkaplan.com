// server.js
const express = require('express')
const app = express()

const cors = require('cors')


require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000



// asyncErrors to errorHandler:
require('express-async-errors')

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

// Accept JSON:
app.use(express.json())

//

app.use(cors());

//? router:

app.use(require('./src/routes'))

//? error handler:

app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT, HOST, () => console.log(`server running at http://${HOST}:${PORT}`))


