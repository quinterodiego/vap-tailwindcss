import express from 'express'
import AsyncHandler from 'express-async-handler'
import UserModel from '../models/User.model.js'
import generateToken from '../utils/tokenGenerate.js'
import protect from '../middlewares/Auth.js'

const UserRouter = express.Router()

UserRouter.post('/login', AsyncHandler(async(req, res) => {
  const { email, password } = req.body
  const user = await UserModel.findOne({ email })
  console.log(user)
  if(user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      createdAt: user.createdAt
    })
  } else {
    res.status(401)
    throw new Error('Invalid Email or Password')
  }
}))

UserRouter.post('/', AsyncHandler(async(req, res) => {
  const { name, email, password } = req.body
  const existUser = await UserModel.findOne({ email })
  if(existUser) {
    res.status(400)
    throw new Error('User already exist')
  } else {
    const user = await UserModel.create({
      name, email, password
    })

    if(user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  }
}))

UserRouter.get('/profile', protect, AsyncHandler(async(req, res) => {
  const user = await UserModel.findById({ id: req.user._id})
  if(user) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
}))

export default UserRouter