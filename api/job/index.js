const { Router } = require('express');

const {
  getAllJobHandler,
  getSingleJobHandler,
  findJobHandler,
  createJobHandler,
  updateJobHandler,
  deleteJobHandler,
} = require('./job.controller');

const router = Router();

router.get('/', getAllJobHandler);
router.get('/:id', getSingleJobHandler);
router.get('/find', findJobHandler);
router.post('/', createJobHandler);
router.patch('/:id', updateJobHandler);
router.delete('/:id', deleteJobHandler);

module.exports = router;
