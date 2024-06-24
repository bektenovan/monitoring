const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB database connection established successfully'))
    .catch(err => console.log(err));

// Define Schema
const surveySchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    graduationYear: { type: String, required: true },
    diplomaSpeciality: { type: String, required: true },
    residence: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    isEmployed: { type: String, required: true },
    isEmployedBySpeciality: { type: String, required: true },
    position: { type: String, required: true },
    workplace: { type: String, required: true },
    isContinuingEducation: { type: String, required: true },
    educationPlace: { type: String, required: true },
    usefulCourses: { type: String, required: true }
});

const Survey = mongoose.model('Survey', surveySchema);

// Routes
app.post('/api/surveys', (req, res) => {
    const newSurvey = new Survey(req.body);
    newSurvey.save()
        .then(() => res.json('Survey added!'))
        .catch(err => {
            console.error(err);
            res.status(400).json('Error: ' + err);
        });
});

app.get('/api/surveys', (req, res) => {
    Survey.find()
        .then(surveys => res.json(surveys))
        .catch(err => res.status(400).json('Error: ' + err));
});

const resumeRoutes = require('./routes/resume'); // Добавлено
app.use('/api/resumes', resumeRoutes); // Добавлено

const vacancyRoutes = require('./routes/vacancy');
app.use('/api/vacancies', vacancyRoutes);


// Start server
app.listen(process.env.PORT || 4444 || port, () => {
    console.log(`Server is running on port: ${port}`);
});
