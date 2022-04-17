const { Location, Task, TaskLocation } = require('../models')

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
    const location = req.body
    const newLocation = await Location.create(location)
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

const UpdateLocation = async (req, res) => {
  try {
    const pk = req.params.pk
    const update = req.body
    const updatedLocation = await Location.update(update, {
      where: { id: pk },
      returning: true
    })
    if (updatedLocation) {
      returnres.status(200).send(updatedLocation)
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

const findAllLocationWithTask = async (req, res) => {
  try {
    const location = await Location.findAll({
      include: [{ model: Task, as: 'place' }]
    })
    return res.status(200).send(location)
  } catch (error) {
    throw error
  }
}

const joinTaskLocation = async (req, res) => {
  try {
    const taskLocation = req.body
    const newTaskLocation = await TaskLocation.create(taskLocation)
    res.status(200).send(newTaskLocation)
  } catch (error) {
    error
  }
}

module.exports = {
  GetAllLocation,
  GetLocationByPk,
  CreateLocation,
  UpdateLocation,
  DeleteLocation,
  findAllLocationWithTask,
  joinTaskLocation
}
