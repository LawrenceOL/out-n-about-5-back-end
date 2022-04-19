const router = require('express').Router()
const controller = require('../controllers/LocationController')

router.get('/all', controller.GetAllLocation)

router.get('/pk/:pk', controller.GetLocationByPk)
router.post('/createone/', controller.CreateALocation)
router.post('/create/', controller.CreateLocation)
router.put('/update/:pk', controller.UpdateLocation)
router.delete('/delete/:pk', controller.DeleteLocation)
router.get('/location/task', controller.FindAllActivities)
router.post('/location/task', controller.CreateActivity)
router.post('/data', controller.pushToBackEnd)

module.exports = router
