const Company = require('./company.model');

function getAllCompanies() {
  return Company.find();
}

function getCompanyById(id) {
  return Company.findById(id).populate('owner');
}

function createCompany(company) {
  return Company.create(company);
}

function updateCompany(id, company) {
  return Company.findByIdAndUpdate(id, company, { new: true });
}

function deleteCompany(id) {
  return Company.findByIdAndRemove(id);
}

module.exports = {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
};
