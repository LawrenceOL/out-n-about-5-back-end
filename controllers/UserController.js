const res = require('express/lib/response')
const { User } = require('../models')

const GetAllUser = async (req, res) => {
  try {
    const users = await User.findAll()
    if (users) {
      return res.status(200).send(users)
    }
    res.status(204).send('No User Found')
  } catch (error) {
    throw error
  }
}
const GetUserByPk = async (req, res) => {
  try {
    const pk = req.params.pk
    const users = await User.findByPk(pk)
    if (users) {
      return res.status(200).send(users)
    }
    res.status(204).send('No User Found')
  } catch (error) {
    throw error
  }
}

const RegisterUser = async (req, res) => {
  try {
    const user = req.body
    const newUser = await User.create(user)
    if (newUser) {
      return res.status(201).send(newUser)
    }
    res
      .status(203)
      .send({ msg: 'User not register. Please check require info.' })
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    const pk = req.params.pk
    const update = req.body
    const updatedUser = await User.update(update, {
      where: { id: pk },
      returning: true
    })
    if (updatedUser) {
      returnres.status(200).send(updatedUser)
    }
    res.status(204).send('No user found on update.')
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    const pk = req.params.pk
    const user = await User.findByPk(pk)
    await User.destroy({
      where: { id: pk }
    })
    if (user) {
      return res.status(200).send(`User: ${user.username} is deleted`)
    }
    res.status(204).send({ msg: 'Did not find user to delete' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUser,
  RegisterUser,
  GetUserByPk,
  UpdateUser,
  DeleteUser
}
