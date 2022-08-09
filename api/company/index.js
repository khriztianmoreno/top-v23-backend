const { Router } = require('express');

const {
  getAllCompaniesHandler,
  getCompanyByIdHandler,
  createCompanyHandler,
  updateCompanyHandler,
  deleteCompanyHandler,
} = require('./company.controller');

const router = Router();

router.get('/', getAllCompaniesHandler);
router.get('/:id', getCompanyByIdHandler);
router.post('/', createCompanyHandler);
router.patch('/:id', updateCompanyHandler);
router.delete('/:id', deleteCompanyHandler);

module.exports = router;
