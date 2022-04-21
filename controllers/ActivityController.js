const { Location, Task, Activity } = require('../models')

const CreateActivity = async (req, res) => {
  const activity = await Activity.create(req.body)

  res.send(activity)
}

const GetActivity = async (req, res) => {
  const { pk } = req.params
  const activity = await Activity.findAll({ where: { userId: pk } })

  res.send(activity)
}

const GetActivityByPk = async (req, res) => {
  const { pk } = req.params
  const activity = await Activity.findByPk(pk)

  res.send(activity)
}

const UpdateActivity = async (req, res) => {
  const { pk } = req.params

  const activity = await Activity.update(req.body, {
    where: { id: pk },
    returning: true
  })
  res.send(activity)
}

module.exports = {
  CreateActivity,
  GetActivity,
  GetActivityByPk,
  UpdateActivity
}
