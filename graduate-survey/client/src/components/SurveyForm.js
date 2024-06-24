import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, FormControl, InputLabel, Select, MenuItem, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import grad from '../files/wp.jpg'

const SurveyForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        graduationYear: '',
        diplomaSpeciality: '',
        residence: '',
        phoneNumber: '',
        isEmployed: '',
        isEmployedBySpeciality: '',
        position: '',
        workplace: '',
        isContinuingEducation: '',
        educationPlace: '',
        usefulCourses: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        try {
            await axios.post('http://localhost:5000/api/surveys', formData);
            alert('Survey submitted successfully!');
        } catch (error) {
            console.error('Error submitting survey', error);
            alert('Error submitting survey: ' + error.response.data);
        }
    };

    return (
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
         
          textAlign: 'center',
   
        }}>

<img width="100%" className='img' src={grad} alt='' />
           <Typography variant="h3" component="h1" color="black" gutterBottom sx={{ mt: 5 }}>
        Пройти опрос
      </Typography>
            <Container maxWidth="md">
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="ФИО"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Год выпуска"
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label=" Специальность по диплому"
                        name="diplomaSpeciality"
                        value={formData.diplomaSpeciality}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Город"
                        name="residence"
                        value={formData.residence}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Телефон"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Трудоустроен</InputLabel>
                        <Select
                            name="isEmployed"
                            value={formData.isEmployed}
                            onChange={handleChange}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="yes">Да</MenuItem>
                            <MenuItem value="no">Нет</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Трудоустроен по специальности</InputLabel>
                        <Select
                            name="isEmployedBySpeciality"
                            value={formData.isEmployedBySpeciality}
                            onChange={handleChange}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="yes">Да</MenuItem>
                            <MenuItem value="no">Нет</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Должность"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Место работы"
                        name="workplace"
                        value={formData.workplace}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Продолжите обучение?</InputLabel>
                        <Select
                            name="isContinuingEducation"
                            value={formData.isContinuingEducation}
                            onChange={handleChange}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="yes">Да</MenuItem>
                            <MenuItem value="no">Нет</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Название учереждения"
                        name="educationPlace"
                        value={formData.educationPlace}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Полезные курсы"
                        name="usefulCourses"
                        value={formData.usefulCourses}
                        onChange={handleChange}
                    />
                   <Button
  type="submit"
  fullWidth
  variant="contained"
  sx={{ 
    mt: 3, 
    mb: 2, 
    backgroundColor: 'green', 
    height: '56px', // Увеличенная высота для "толщины"
    '&:hover': {
      backgroundColor: 'darkgreen', // Цвет при наведении
    }
  }}
 
>
  Отправить
</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default SurveyForm;
