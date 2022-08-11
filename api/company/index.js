const { Router } = require('express');

const {
  getAllCompaniesHandler,
  getCompanyByIdHandler,
  createCompanyHandler,
  updateCompanyHandler,
  deleteCompanyHandler,
} = require('./company.controller');
const { isAuthenticated, hasRole } = require('../../auth/auth.service');

const router = Router();

router.get('/', getAllCompaniesHandler);
router.get('/:id', getCompanyByIdHandler);
router.post('/', isAuthenticated, createCompanyHandler);
router.patch('/:id', isAuthenticated, updateCompanyHandler);
router.delete('/:id', isAuthenticated, hasRole(['admin']), deleteCompanyHandler);

module.exports = router;
