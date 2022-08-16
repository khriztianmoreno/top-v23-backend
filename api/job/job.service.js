const Job = require('./job.model');

function getAllJob() {
  return Job.find({}).populate({ path: 'company', select: 'name' });
}

function getSingleJob(id) {
  return Job.findById(id)
    .populate({ path: 'company', select: 'name description' })
    .populate({ path: 'candidates', select: 'firstName email' });
  // .populate('company', 'name descriptio')
}

function findJob(query) {
  return Job.findOne(query);
}

function createJob(job) {
  return Job.create(job);
}

function updateJob(id, job) {
  return Job.findByIdAndUpdate(id, job, { new: true });
}

function addCandidate(id, candidateId) {
  return Job.findByIdAndUpdate(
    id,
    { $push: { candidates: candidateId } },
    { new: true },
  );
}

function deleteJob(id) {
  return Job.findByIdAndRemove(id);
}

module.exports = {
  addCandidate,
  getAllJob,
  getSingleJob,
  findJob,
  createJob,
  updateJob,
  deleteJob,
};
