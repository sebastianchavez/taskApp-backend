const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: String,
    description: String,
    state: String
})

module.exports = mongoose.model('Task', taskSchema)