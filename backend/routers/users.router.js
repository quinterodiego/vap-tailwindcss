import express from 'express'
import AsyncHandler from 'express-async-handler'
import UserModel from '../models/User.model.js'
import generateToken from '../utils/tokenGenerate.js'
import protect from '../middlewares/Auth.js'
import { create, getProfile, login, updateProfile } from '../controllers/users.controller.js'

const UserRouter = express.Router()

// CREATE USER
UserRouter.post('/', create)

// LOGIN USER
UserRouter.post('/login', login)


// GET PROFILE USER
UserRouter.get('/profile', protect, getProfile)

// UPDATE USER PROFILE
UserRouter.put('/profile', protect, updateProfile)

export default UserRouter