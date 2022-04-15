const { Task } = require('../models')

const GetAllTask = async (req, res) => {
  try {
    const tasks = await Task.findAll()
    if (tasks) {
      return res.status(200).send(tasks)
    }

    res.status(404).send({ msg: 'No task found' })
  } catch (error) {
    throw error
  }
}

const GetTaskByPk = async (req, res) => {
  try {
    const pk = req.params.pk
    const tasks = await Task.findByPk(pk)
    if (tasks) {
      return res.status(200).send(tasks)
    }
    res.status(404).send({ msg: 'No task found' })
  } catch (error) {
    throw error
  }
}

const CreateTask = async (req, res) => {
  try {
    const task = req.body
    const newTask = await Task.create(task)
    if (newTask) {
      return res.status(201).send(newTask)
    }
    res
      .status(404)
      .send({ msg: 'Task not created. Please check require info.' })
  } catch (error) {
    throw error
  }
}

const UpdateTask = async (req, res) => {
  try {
    const pk = req.params.pk
    const update = req.body
    const updateTask = await Task.update(update, {
      where: { id: pk },
      returning: true
    })
    if (updateTask) {
      returnres.status(200).send(updateTask)
    }
    res.status(204).send('No user found on update.')
  } catch (error) {
    throw error
  }
}

const DeleteTask = async (req, res) => {
  try {
    const pk = req.params.pk
    const task = await Task.findByPk(pk)
    await Task.destroy({
      where: { id: pk }
    })
    if (task) {
      return res.status(200).send(`User: ${task.name} is deleted`)
    }
    res.status(204).send({ msg: 'Did not find user to delete' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllTask,
  GetTaskByPk,
  CreateTask,
  UpdateTask,
  DeleteTask
}
