const mongoose = require('mongoose');

const SalarySchema = new mongoose.Schema({
  salary: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['hourly', 'monthly', 'yearly'],
    required: true,
  },
});

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  about: {
    type: String,
    required: true,
    trim: true,
  },
  summary: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ['Full time', 'Part time', 'Contract', 'Internship'],
    required: true,
  },
  location: {
    type: String,
    trim: true,
  },
  imageLogo: {
    type: String,
    trim: true,
  },
  responsibilities: [
    {
      type: String,
      trim: true,
    },
  ],
  minimumQualifications: [
    {
      type: String,
      trim: true,
    },
  ],
  preferredQualifications: [
    {
      type: String,
      trim: true,
    },
  ],
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  experience: {
    type: String,
    enum: ['Entry level', 'Mid level', 'Senior level'],
    required: true,
  },
  salary: SalarySchema,
  candidates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
}, { timestamps: true });

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;
