const Task = require('../models/Task')
const taskCtrl = {}

taskCtrl.getAll = async (req, res) => {
    try {
        const tasks = await Task.find({})
        if(tasks.length > 0){
            res.status(200).send({ tasks })
        } else {
            res.status(404).send({ message: 'No existe la tarea' })
        }
    } catch (e) {
        res.status(500).send({ error: e })
    }
}

taskCtrl.newTask = async (req, res) => {
    try {
        console.log(req.body)
        const { title, description } = req.body
        const newTask = new Task({
            title,
            description,
            state: 'NEW'
        })
        await newTask.save()
        res.status(201).send({ message: 'ok', task: newTask })
    } catch (e) {
        res.status(500).send({ error: e })
    }
}

taskCtrl.updateTask = async (req, res) => {
    try {
        const { _id, state } = req.body
        const task = await Task.findById(_id)
        if (task) {
            await Task.findByIdAndUpdate(_id, { state })
            res.status(201).send({ message: 'ok' })
        } else {
            res.status(404).send({ message: 'No existe la tarea' })
        }
    } catch (e) {
        res.status(500).send({ error: e })
    }
}

taskCtrl.deleteTask = async (req, res) => {
    try {
        const id = req.params.id
        const task = await Task.findById(id)
        if (task) {
            await Task.findByIdAndDelete(id)
            res.status(201).send({ message: 'ok' })
        } else {
            res.status(404).send({ message: 'No existe la tarea' })
        }
    } catch (e) {
        res.status(500).send({ error: e })
    }
}

module.exports = taskCtrl