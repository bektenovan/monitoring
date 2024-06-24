import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SurveyForm from './components/SurveyForm';
import SurveyData from './components/SurveyData';
// import StudentResume from './components/StudentResume';
// import ResumeForm from './components/ResumeForm';
// import Vacancies from './components/Vacancies';
import SubmitResume from './components/SubmitResume';
import Resumes from './components/Resumes';
import Vacancies from './components/Vacancies';
import SubmitVacancy from './components/SubmitVacancy';
import Footer from './components/Footer';
import Video from './components/Video';
import HomePage from './components/HomePage';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path='/' element={<> <Video /><  HomePage /></>}/>
          <Route path="/survey" element={<SurveyForm />} />
          <Route path="/survey-data" element={<SurveyData />} />
          <Route path="/submit-resume" element={<SubmitResume />} />
          <Route path="/resumes" element={<Resumes />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/submit-vacancy" element={<SubmitVacancy />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
