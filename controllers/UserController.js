const res = require('express/lib/response')
const { User } = require('../models')

const GetAllUser = async (req, res) => {
  try {
    const users = await User.findAll()

    return res.send(users)
  } catch (error) {
    res.send("can't get anything")
    throw error
  }
}
const GetUserByPk = async (req, res) => {
  try {
    const pk = req.params.pk
    const users = await User.findByPk(pk)

    return res.send(users)
  } catch (error) {
    res.send("can't get anything")
    throw error
  }
}

const RegisterUser = async (req, res) => {
  try {
    const user = req.body
    const newUser = await User.create(user)

    res.send(newUser)
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

    res.send(updatedUser)
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

    res.send(`User: ${user.username} is deleted`)
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
