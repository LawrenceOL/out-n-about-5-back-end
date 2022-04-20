const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.get('/all', controller.GetAllUser)
router.get('/pk/:pk', controller.GetUserByPk)
router.post('/register', controller.RegisterUser)
router.put('/update/:pk', controller.UpdateUser)
router.delete('/delete/:pk', controller.DeleteUser)

router.post('/signin', controller.SignIn)
router.put('/profile', middleware.stripToken, middleware.verifyToken)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
router.get('/activities', controller.GetUserActivities)

router.get('/task/location/:pk', controller.getUserTaskLocation)

module.exports = router
