const router = require('express').Router()

const controller = require('../controllers/ActivityController')

router.post('/create', controller.CreateActivity)
router.get('/user/:pk', controller.GetActivity)

module.exports = router
