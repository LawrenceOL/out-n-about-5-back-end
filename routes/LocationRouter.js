const router = require('express').Router()

const controller = require('../controllers/LocationController')

router.get('/all', controller.GetAllLocation)
router.get('/pk/:pk', controller.GetLocationByPk)
router.post('/create/', controller.CreateLocation)
router.put('/update/:pk', controller.UpdateLocation)
router.delete('/delete/:pk', controller.DeleteLocation)
router.get('/', (req, res) => {
  res.send('location root')
})

module.exports = router
