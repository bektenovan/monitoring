const express = require('express');
const Resume = require('../models/Resume');

const router = express.Router();

// Create new resume
router.post('/', async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).send(resume);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get all resumes
router.get('/', async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.send(resumes);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete a resume by ID
router.delete('/:id', async (req, res) => {
  try {
    const resume = await Resume.findByIdAndDelete(req.params.id);
    if (!resume) {
      return res.status(404).send('Resume not found');
    }
    res.send(resume);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
