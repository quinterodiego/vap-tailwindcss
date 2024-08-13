import jwt from 'jsonwebtoken'
import AsyncHandler from 'express-async-handler'
import UserModel from '../models/User.model.js'

const protect = AsyncHandler(async (req, res, next) => {
  let token
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await UserModel.findById(decodedToken.id).select('-password')
      next()
    } catch (error) {
      console.log(error)
    }
  }
  if(!token) {
    res.status(401)
    throw new Error('Not authorized')
  }
})

export default protect