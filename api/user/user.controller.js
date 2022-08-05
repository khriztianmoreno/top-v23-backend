/**
 * Controller for user
 */

import {
  createUser,
  getAllUser,
  getSingleUser,
  findUserByEmail,
  updateUser,
  deleteUser,
} from './user.service.js'

export async function getAllUserHandler(req, res) {
  try {
    const users = await getAllUser()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

export async function getSingleUserHandler(req, res) {
  const { id } = req.params
  try {
    const user = await getSingleUser(id)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

export async function createUserHandler(req, res) {
  const userData = req.body

  try {
    const user = await createUser(userData)
    return res.status(201).json(user)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

export function updateUserHandler(req, res) {}

export function deleteUserHandler(req, res) {}
