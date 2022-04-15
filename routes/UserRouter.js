const router = require('express').Router()

const controller = require('../controllers/UserController')

router.get('/all', controller.GetAllUser)
router.get('/pk/:pk', controller.GetUserByPk)
router.post('/register', controller.RegisterUser)
router.put('/update/:pk', controller.UpdateUser)
router.delete('/delete/:pk', controller.DeleteUser)

module.exports = router
