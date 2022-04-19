const { Location, Task, Activity } = require('../models')
const task = require('../models/task')

// const getmyLocation = async (req, res) => {
//   res.send('working')
// }

const GetAllLocation = async (req, res) => {
  try {
    const location = await Location.findAll()
    console.log(location)
    if (location) {
      return res.status(200).send(location)
    }
    res.status(204).send('No Location Found')
  } catch (error) {
    throw error
  }
}

const GetLocationByPk = async (req, res) => {
  try {
    const pk = req.params.pk
    const location = await Location.findByPk(pk)
    if (location) {
      return res.status(200).send(location)
    }
    res.status(204).send('No Location Found')
  } catch (error) {
    throw error
  }
}

const CreateLocation = async (req, res) => {
  try {
    const { location } = req.body
    const { userId } = req.body
    console.log(userId)
    console.log(location)

    const task = await Task.findAll()
    console.log(task[0].id)
    const newLocation = await Location.create(location)
    console.log(newLocation.id)
    const taskLBody = {
      taskId: Math.ceil(Math.random() * task.length),
      locationId: newLocation.id,
      userId: userId
    }
    const activity = await Activity.create(taskLBody)

    if (newLocation) {
      return res.status(201).send(newLocation)
    }
    res
      .status(203)
      .send({ msg: 'Location not register. Please check require info.' })
  } catch (error) {
    throw error
  }
}

const CreateALocation = async (req, res) => {
  try {
    const location = req.body
    console.log(location)
    const newLocation = await Location.create(location)
    if (newLocation) {
      return res.status(200).send(newLocation)
    }
    res.status(204).send('location not created')
  } catch (error) {
    throw error
  }
}

const UpdateLocation = async (req, res) => {
  try {
    const pk = req.params.pk
    const update = req.body
    const updatedLocation = await Location.update(update, {
      where: { id: pk },
      returning: true
    })
    if (updatedLocation) {
      return res.status(200).send(updatedLocation)
    }
    res.status(204).send('No location found on update.')
  } catch (error) {
    throw error
  }
}

const DeleteLocation = async (req, res) => {
  try {
    const pk = req.params.pk
    const location = await Location.findByPk(pk)
    await Location.destroy({
      where: { id: pk }
    })
    if (location) {
      return res.status(200).send(`Location: ${location.name} is deleted`)
    }
    res.status(204).send({ msg: 'Did not find location to delete' })
  } catch (error) {
    throw error
  }
}

const FindAllActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll()
    return res.status(200).send(activities)
  } catch (error) {
    throw error
  }
}

const CreateActivity = async (req, res) => {
  try {
    const newAct = req.body
    console.log(newAct)
    const activity = await Activity.create(newAct)
    res.status(200).send(activity)
  } catch (error) {
    throw error
  }
}

const pushToBackEnd = async (req, res) => {
  try {
    const locations = req.body
    const newLocations = await Location.bulkInsert(locations)
    res.status(200).send(newLocations)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllLocation,
  GetLocationByPk,
  CreateLocation,
  UpdateLocation,
  DeleteLocation,
  FindAllActivities,
  CreateActivity,
  pushToBackEnd,
  CreateALocation
}
