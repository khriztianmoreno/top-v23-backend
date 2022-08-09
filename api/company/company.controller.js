const {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
} = require('./company.service');
const { verifyToken } = require('../../auth/auth.service');

async function getAllCompaniesHandler(req, res) {
  const companies = await getAllCompanies();

  return res.status(200).json(companies);
}

async function getCompanyByIdHandler(req, res) {
  const { id } = req.params;

  const company = await getCompanyById(id);

  if (!company) {
    return res.status(404).json({ message: 'Company not found' });
  }

  return res.status(200).json(company);
}

async function createCompanyHandler(req, res) {
  const { name, description } = req.body;
  const headers = req.headers;

  const token = headers?.authorization?.split(' ')[1];

  try {
    await verifyToken(token)

    const company = await createCompany({ name, description });

    return res.status(201).json(company);
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}

async function updateCompanyHandler(req, res) {
  const { id } = req.params;
  const { name, description } = req.body;

  const company = await updateCompany(id, { name, description });

  if (!company) {
    return res.status(404).json({ message: 'Company not found' });
  }

  return res.status(200).json(company);
}

async function deleteCompanyHandler(req, res) {
  const { id } = req.params;

  const company = await deleteCompany(id);

  if (!company) {
    return res.status(404).json({ message: 'Company not found' });
  }

  return res.status(200).json(company);
}

module.exports = {
  getAllCompaniesHandler,
  getCompanyByIdHandler,
  createCompanyHandler,
  updateCompanyHandler,
  deleteCompanyHandler,
};
