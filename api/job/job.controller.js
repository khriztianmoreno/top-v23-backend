const {
  getAllJob,
  getSingleJob,
  findJob,
  createJob,
  updateJob,
  deleteJob,
} = require('./job.service')

async function getAllJobHandler(req, res) {
  try {
    const jobs = await getAllJob()
    return res.json(jobs)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

async function getSingleJobHandler(req, res) {
  const { id } = req.params
  try {
    const job = await getSingleJob(id)

    if (!job) {
      return res.status(404).json({ message: 'Job not found' })
    }
    return res.json(job)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

async function findJobHandler(req, res) {
  const { query } = req.query
  try {
    const job = await findJob(query)
    if (!job) {
      return res.status(404).json({ message: 'Job not found' })
    }
    return res.json(job)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

async function createJobHandler(req, res) {
  const { body } = req
  try {
    const job = await createJob(body)
    return res.json(job)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

async function updateJobHandler(req, res) {
  const { id } = req.params
  const { body } = req
  try {
    const job = await updateJob(id, body)
    if (!job) {
      return res.status(404).json({ message: 'Job not found' })
    }
    return res.json(job)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

async function deleteJobHandler(req, res) {
  const { id } = req.params
  try {
    const job = await deleteJob(id)
    if (!job) {
      return res.status(404).json({ message: 'Job not found' })
    }
    return res.json(job)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAllJobHandler,
  getSingleJobHandler,
  findJobHandler,
  createJobHandler,
  updateJobHandler,
  deleteJobHandler,
}
