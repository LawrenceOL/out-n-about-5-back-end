const { Location, Task, Activity } = require('../models')

const CreateActivity = async (req, res) => {
  // console.log(reqAct)
  const activity = await Activity.create(req.body)

  res.send(activity)
}

const GetActivity = async (req, res) => {
  const { pk } = req.params
  const activity = await Activity.findAll({ where: { userId: pk } })

  res.send(activity)
}

module.exports = {
  CreateActivity,
  GetActivity
}
