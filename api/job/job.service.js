const Job = require('./job.model');

function getAllJob() {
  return Job.find({})
}

function getSingleJob(id) {
  return Job.findById(id)
}

function findJob(query) {
  return Job.findOne(query)
}

function createJob(job) {
  return Job.create(job)
}

function updateJob(id, job) {
  return Job.findByIdAndUpdate(id, job, { new: true })
}

function deleteJob(id) {
  return Job.findByIdAndRemove(id)
}

module.exports = {
  getAllJob,
  getSingleJob,
  findJob,
  createJob,
  updateJob,
  deleteJob,
}
