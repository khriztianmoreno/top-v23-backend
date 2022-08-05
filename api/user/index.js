/**
 * User API
 */
import { Router } from 'express'

import {
  createUserHandler,
  deleteUserHandler,
  getAllUserHandler,
  getSingleUserHandler,
  updateUserHandler,
} from './user.controller.js'

const router = Router();

router.get('/', getAllUserHandler)
router.post('/', createUserHandler)
router.get('/:id', getSingleUserHandler)
router.patch('/:id', updateUserHandler)
router.delete('/:id', deleteUserHandler)

export default router;
