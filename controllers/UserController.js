const { User } = require('../models')
const middleware = require('../middleware')

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
    const {firstName, lastName, email, username, password, location} = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const newUser = await User.create({firstName, lastName, email, username, passwordDigest, location})
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
    if (updatedUser) {
      return res.status(200).send(updatedUser)
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

const SignIn = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        username: user.username
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const {payload} = res.locals
  res.send(payload)
}

module.exports = {
  GetAllUser,
  RegisterUser,
  GetUserByPk,
  UpdateUser,
  DeleteUser,
  SignIn,
  CheckSession,
}
