const { Router } = require('express');

const {
  getAllCompaniesHandler,
  getCompanyByIdHandler,
  createCompanyHandler,
  updateCompanyHandler,
  deleteCompanyHandler,
} = require('./company.controller');
const { isAuthenticated } = require('../../auth/auth.service');

const router = Router();

router.get('/', getAllCompaniesHandler);
router.get('/:id', getCompanyByIdHandler);
router.post('/', isAuthenticated, createCompanyHandler);
router.patch('/:id', isAuthenticated, updateCompanyHandler);
router.delete('/:id', isAuthenticated, deleteCompanyHandler);

module.exports = router;
