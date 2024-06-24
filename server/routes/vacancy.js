const express = require('express');
const Vacancy = require('../models/Vacancy');

const router = express.Router();

// Create new vacancy
router.post('/', async (req, res) => {
  try {
    const vacancy = new Vacancy(req.body);
    await vacancy.save();
    res.status(201).send(vacancy);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get all vacancies
router.get('/', async (req, res) => {
  try {
    const vacancies = await Vacancy.find();
    res.send(vacancies);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete a vacancy by ID
router.delete('/:id', async (req, res) => {
  try {
    const vacancy = await Vacancy.findByIdAndDelete(req.params.id);
    if (!vacancy) {
      return res.status(404).send('Vacancy not found');
    }
    res.send(vacancy);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
