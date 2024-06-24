import React, { useContext }from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import SurveyForm from './components/SurveyForm';
import SurveyData from './components/SurveyData';
// import StudentResume from './components/StudentResume';
// import ResumeForm from './components/ResumeForm';
// import Vacancies from './components/Vacancies';
import SubmitResume from './components/SubmitResume';
import Resumes from './components/Resumes';
import Vacancies from './components/Vacancies';
import SubmitVacancy from './components/SubmitVacancy';

import Video from './components/Video';
import HomePage from './components/HomePage';

import { authContext } from './components/context/authContext';

const Routing = () => {
    const { isAdmin } = useContext(authContext);


  return (
 
        <Routes>
        <Route path='/' element={<> <Video /><  HomePage /></>}/>



          <Route path="/survey" element={<SurveyForm />} />
          <Route path="/survey-data" element={<SurveyData />} />
          <Route path="/submit-resume" element={<SubmitResume />} />
          <Route path="/resumes" element={<Resumes />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/submit-vacancy" element={<SubmitVacancy />} />
        </Routes>

    
  );
}

export default Routing;
