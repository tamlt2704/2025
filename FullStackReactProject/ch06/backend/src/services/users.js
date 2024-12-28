import bcrypt from 'bcrypt'
import { User } from '../db/models/users.js'
import jwt from 'jsonwebtoken'

export const createUser = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10)
  console.log('services creating user', username)
  const user = new User({ username, password: hashedPassword })
  return user.save()
}

export const loginUser = async (username, password) => {
  const user = await User.findOne({ username })
  if (!user) {
    throw new Error('User not found')
  }
  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) {
    throw new Error('Invalid password')
  }
  const payload = { sub: user._id }
  return jwt.sign(payload, process.env.JWT_SECRET)
}

export async function getUserInfoById(userId) {
  try {
    const user = await User.findById(userId)
    if (!user) {
      return { username: userId }
    }
    return { username: user.username }
  } catch (error) {
    throw new Error(error.message)
  }
}
