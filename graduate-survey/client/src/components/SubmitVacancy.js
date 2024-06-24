import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import grad from '../files/wp.jpg'
const SubmitVacancy = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyLogoUrl: '',
    position: '',
    requirements: '',
    responsibilities: '',
    salary: '',
    contacts: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/vacancies', formData);
      alert('Vacancy submitted successfully');
      navigate('/vacancies');
    } catch (error) {
      console.error('Error submitting vacancy', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Box >

<img width="100%" className='img' src={grad} alt='' />
      <Typography variant="h4" gutterBottom align="center" sx={{ color: 'blue' }}>
        Опубликовать вакансию
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, margin: '0 auto' }}>
        <TextField label="Название компании" name="companyName" value={formData.companyName} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Ссылка на логотип компании" name="companyLogoUrl" value={formData.companyLogoUrl} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Вакансия" name="position" value={formData.position} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Требуемые условия" name="requirements" value={formData.requirements} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Задачи" name="responsibilities" value={formData.responsibilities} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Зарплата" name="salary" value={formData.salary} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Контакты" name="contacts" value={formData.contacts} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Почта" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          Опубликовать
        </Button>
      </Box>
    </Box>
  );
};

export default SubmitVacancy;
