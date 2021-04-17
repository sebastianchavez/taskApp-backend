const express = require('express')
const router = express.Router()
const taskCtrl = require('../controllers/task.controller')

// POST, PUT, GET, DELETE

// require response
router.get('/get-all', taskCtrl.getAll)
router.post('/save', taskCtrl.newTask)
router.put('/update-by-id', taskCtrl.updateTask)
router.delete('/delete-task/:id', taskCtrl.deleteTask)


module.exports = router