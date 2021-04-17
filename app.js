const express = require('express')
const app = express()
const morgan = require('morgan')
const task = require('./routes/task')

// settings

// middlewares
app.use(morgan('dev'))
app.use(express.json())

// routes
app.use('/api/tasks', task)

module.exports = app