const router = require('express').Router()

const controller = require('../controllers/ActivityController')

router.post('/create', controller.CreateActivity)
router.get('/user/:pk', controller.GetActivity)
router.get('/:pk', controller.GetActivityByPk)
router.put('/:pk', controller.UpdateActivity)

module.exports = router
