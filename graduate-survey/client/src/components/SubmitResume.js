import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import grad from '../files/wp.jpg'
const SubmitResume = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    photoUrl: '',
    age: '',
    education: '',
    graduationYear: '',
    experience: '',
    skills: '',
    hobbies: '',
    contacts: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/resumes', formData);
      alert('Resume submitted successfully');
    } catch (error) {
      console.error('Error submitting resume', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Box  >
        <img width="100%" className='img' src={grad} alt='' />
      <Typography variant="h4" gutterBottom align="center" sx={{ color: 'black' }}>
        Оставить резюме
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, margin: '0 auto' }}>
        <TextField label="ФИО" name="fullName" value={formData.fullName} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Ссылка на фото" name="photoUrl" value={formData.photoUrl} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Возраст" name="age" type="number" value={formData.age} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Образование" name="education" value={formData.education} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Год окончания" name="graduationYear" type="number" value={formData.graduationYear} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Опыт работы" name="experience" value={formData.experience} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Навыки" name="skills" value={formData.skills} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Хобби" name="hobbies" value={formData.hobbies} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Контакты" name="contacts" value={formData.contacts} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Почта" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }} >
          Загрузить резюме
        </Button>
      </Box>
    </Box>
  );
};

export default SubmitResume;
