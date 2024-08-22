import AsyncHandler from "express-async-handler";
import UserModel from "../models/User.model.js";
import generateToken from "../utils/tokenGenerate.js";

export const create = AsyncHandler(async(req, res) => {
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
})

export const login = AsyncHandler(async(req, res) => {
  const { email, password } = req.body
  const user = await UserModel.findOne({ email })
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
})

export const getProfile = AsyncHandler(async(req, res) => {
  console.log(req)
  const user = await UserModel.findById(req.user._id)
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
})

export const updateProfile = AsyncHandler(async(req, res) => {
  const user = await UserModel.findById(req.user._id)
  if(user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email

    if(req.body.password) user.password = req.body.password

    const updatedUser = await user.save()
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
      createdAt: updatedUser.createdAt
    })
  } else {
    req.status(404)
    throw new Error('User not found')
  }
})