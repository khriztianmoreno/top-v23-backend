/**
 * User API
 */
const Router = require('express');

const {
  createUserHandler,
  deleteUserHandler,
  getAllUserHandler,
  getSingleUserHandler,
  updateUserHandler,
} = require('./user.controller');

const router = Router();

router.get('/', getAllUserHandler);
router.post('/', createUserHandler);
router.get('/:id', getSingleUserHandler);
router.patch('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);

export default router;
