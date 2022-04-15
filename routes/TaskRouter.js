const router = require('express').Router()

const controller = require('../controllers/TaskController')

router.get('/all', controller.GetAllTask)
router.get('/pk/:pk', controller.GetTaskByPk)
router.post('/create/', controller.CreateTask)
router.put('/update/:pk', controller.UpdateTask)
router.delete('/delete/:pk', controller.DeleteTask)

module.exports = router
